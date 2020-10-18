import { Injectable, Inject } from '@nestjs/common';
import { EducationModuleModel, EducationModuleProps, RevisionModel } from './lesson.data';
import * as  _ from 'lodash';
import { static as Immutable } from 'seamless-immutable';
import { mock } from './lesson.mock';
import * as nanoid from 'nanoid';

@Injectable()
export class LessonService {
    constructor(
        @Inject(EducationModuleModel.modelName)
        private readonly educationModule: typeof EducationModuleModel,
        @Inject(RevisionModel.modelName)
        private readonly revisionModel: typeof RevisionModel,
    ) { }

    async mock() {
        return await Promise.all(mock.educationModule
            .map(data => this.educationModule.create(data)))
    }

    async findAll() {
        console.log('LessonService.findAll');
        return this.educationModule.find();
    }

    async findById(id: string) {
        return this.educationModule.findById(id);
    }

    async create(data: EducationModuleProps) {
        const patch = {
            name: data.name,
            description: data.description,
            field: data.field,
        };

        return this.educationModule.create(patch);
    }

    async updateUnsafe(moduleId: string, data: EducationModuleProps) {
        await this.educationModule.findByIdAndUpdate(moduleId, data);

        return this.educationModule.findById(moduleId);
    }

    async update(moduleId: string, data: EducationModuleProps) {
        await this.educationModule.findByIdAndUpdate(moduleId, data);

        return this.educationModule.findById(moduleId);
    }

    async addTopic(moduleId: string, data: any) {
        const patch = {
            name: data.name,
            description: data.description,
            educationMeta: data.educationMeta,
        };

        await this.educationModule.findByIdAndUpdate(moduleId, {
            topics: { $push: patch }
        });

        return this.educationModule.findById(moduleId);
    }

    async updateTopic(moduleId: string, topicId: string, data: any) {
        const patch = {
            name: data.name,
            description: data.description,
            educationMeta: data.educationMeta,
        };

        await this.educationModule.update({ 'topics._id': topicId }, {
            "$set": { "topics.$[]": patch }
        });

        return this.educationModule.findById(moduleId);
    }

    async addTaskGroup(moduleId: string, topicId: string, data: any) {
        const patch = {
            name: data.name,
            description: data.description,
            educationMeta: data.educationMeta,
        };

        await this.educationModule.update({ _id: moduleId, 'topics._id': topicId }, {
            $push: { "topics.$.taskGroups": patch }
        });

        return this.educationModule.findById(moduleId);
    }

    formatBlock(block) {
        if (block.type === 'richContent' && block.data) {
            block.data.blocks.forEach(subBlock => {
                if (!subBlock._id) {
                    subBlock._id = nanoid();
                }
            })
        }
    }

    async updateTaskGroup(moduleId: string, topicId: string, taskGroupId: string, data: any) {
        const _module = await this.educationModule.findById(moduleId);

        const topic = _module.topics.find(t => t._id.toString() == topicId);

        console.log(_module.topics);

        const taskGroup = topic.taskGroups.find(t => t._id.toString() == taskGroupId);

        console.log(taskGroup, data)

        const content = data.content || {};

        const patch = {
            name: data.name || taskGroup.name,
            description: data.description || taskGroup.description,
            educationMeta: {
                ...(taskGroup.educationMeta || {}),
                ...(data.educationMeta || {}),
            },
            content: {
                ...(taskGroup.content || {}),
                ...(data.content || {}),
                blocks: (content.blocks || taskGroup.content.blocks).map(this.formatBlock),
            }
        };

        Object.assign(taskGroup, patch);

        taskGroup.content.blocks = content.blocks || taskGroup.content.blocks;

        await _module.save();

        return this.educationModule.findById(moduleId);
    }

    async createRevision(eduModule: EducationModuleProps, message: string) {
        console.log('revisionModule', { ...eduModule });

        const revisionVersion = Date.now();

        const { _id, ...data } = eduModule;

        return this.revisionModel.create({ ...data, revision: message, revisionVersion, revisionId: eduModule._id });
    }

    async getRevisions(moduleId: string) {

        return this.revisionModel.find({ revisionId: moduleId });
    }

    async getRevision(revision: string) {

        return this.revisionModel.findOne({ revision });
    }

    async createRevisionBackend(moduleId: string, message: string) {
        const _module = await this.educationModule.findById(moduleId);

        return this.createRevision(_module.toObject(), message);
    }

    async updateBlock(moduleId: string, topicId: string, taskGroupId: string, blockId: string, data) {
        const _module = await this.educationModule.findById(moduleId);

        const topic = _module.topics.find(t => t._id.toString() == topicId);

        console.log(_module.topics);

        const taskGroup = topic.taskGroups.find(t => t._id.toString() == taskGroupId);

        let block;

        taskGroup.content.blocks.forEach(blo => {
            if (blo._id === blockId) {
                block = blo;
                return;
            }

            if (blo.type === 'richContent') {
                blo.data.blocks.forEach(blo2 => {
                    if (blo2._id === blockId) {
                        block = blo2;
                        return;
                    }
                })
            }
        });

        console.log(block, data)

        if (block) {
            block.data = data;
        }

        console.log(JSON.stringify(_module));

        const patch = {
            content: {
                ...(taskGroup.content || {}),
                blocks: taskGroup.content.blocks,
            }
        };

        Object.assign(taskGroup, patch);

        taskGroup.content.blocks = taskGroup.content.blocks.map(blo => {
            if (blo._id === blockId) {
                blo.data = data
                console.log('upd', blo);
                return JSON.parse(JSON.stringify(blo))
            }

            if (blo.type === 'richContent') {
                blo.data.blocks.forEach(blo2 => {
                    if (blo2._id === blockId) {
                        blo2.data = data
                        console.log('upd', blo2);
                        return JSON.parse(JSON.stringify(blo2))
                    }
                })
            }

            return JSON.parse(JSON.stringify(blo))
        });

        await _module.save();

        return this.educationModule.findById(moduleId);
    }


    async extractContent(moduleId: string, revisionId: string) {
        let data;

        if (moduleId) {
            data = await this.educationModule.findById(moduleId);
        }

        if (revisionId) {
            data = await this.revisionModel.findById(revisionId);
        }

        console.log('ExtractContent', data);


        let topicId;
        let taskGroupId;

        let allBlocks = [];

        let textBlocks = [];
        let rawText = [];

        let urlBlocks = [];
        let rawUrls = [];

        let imageBlocks = [];
        let rawImages = [];

        let linkBlocks = [];
        let rawLinks = [];

        const processBlock = (block) => {
            const { text, options, answer, url } = block.data.data || block.data;

            // const urlMatches = (text).matches(/https?:\/\/([a-z]+.?[a-z]+)/);
            const urlMatches = false;

            if (block.type === 'link') {
                linkBlocks.push({ url, _id: block._id, topicId, taskGroupId });
                rawLinks.push(url);
            }

            if (block.type === 'image') {
                imageBlocks.push({ url, _id: block._id, topicId, taskGroupId });
                rawImages.push(url);
            }

            if (url) {
                urlBlocks.push({ url, _id: block._id, topicId, taskGroupId });
                rawUrls.push(url);
            }

            if (urlMatches) {
                urlBlocks.push({ url: urlMatches[0], _id: block._id, topicId, taskGroupId });
                rawUrls.push(urlMatches[0]);
            }

            if (text) {
                textBlocks.push({ text, _id: block._id, topicId, taskGroupId });
                rawText.push(text);
            }

            if (answer) {
                textBlocks.push({ text: answer, _id: block._id, topicId, taskGroupId });
                rawText.push(answer);
            }

            if (options) {
                options.forEach(op => {
                    textBlocks.push({ text: op, _id: block._id, topicId, taskGroupId });
                    rawText.push(op);
                })
            }
        }

        data.topics.forEach((topic => {
            topicId = topic._id;

            topic.taskGroups.forEach(task => {
                taskGroupId = task._id;

                task.content.blocks.forEach(block => {
                    allBlocks.push(block);
                    processBlock(block);

                    if (block.type === 'richContent' && block.data.blocks) {
                        block.data.blocks.forEach(blockRich => {
                            allBlocks.push(blockRich);
                            processBlock(blockRich);
                        })
                    }
                })
            })
        }))

        const grouped = _.groupBy(allBlocks, 'type');

        return {
            blocks: allBlocks,
            grouped,
            textBlocks,
            rawText,
            linkBlocks,
            rawLinks,
            imageBlocks,
            rawImages,
            urlBlocks,
            rawUrls,
        };
    }
}
