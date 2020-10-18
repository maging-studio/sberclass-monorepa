import {
    Body,
    Controller, Get, Inject, Request, Put,
} from '@nestjs/common';
import { LessonService } from './lesson.service';

const releaseMock = {
    moduleId: "5f8ae6a09d39c34503e6dd06",
    context: {

    },
    pipeline: {
        steps: [
            {
                id: 1,
                tasks: [
                    {
                        type: "Start",
                        props: {
                            isManual: true,
                        },
                        state: {
                            needAction: true,
                        },
                    },
                ],
            },
            {
                id: 7,
                tasks: [
                    {
                        type: "AutoCheck",
                        props: {},
                        state: {
                            // linksChecked: false,
                            // textChecked: false,
                            // imagesChecked: false,
                        },
                    },
                ],
            },
            {
                id: 2,
                tasks: [
                    {
                        type: "TextReview",
                        props: {},
                        state: {},
                    },
                    {
                        type: "DesignReview",
                        props: {},
                        state: {},
                    },
                ],
            },
            {
                id: 4,
                tasks: [
                    {
                        type: "MasterReview",
                        props: {},
                        state: {},
                    },
                ],
            },
            {
                id: 5,
                tasks: [
                    {
                        type: "Publish",
                        props: {},
                        state: {},
                    },
                ],
            },
        ],
    },
};

let release = releaseMock;

@Controller('/lesson')
export class LessonController {
    constructor(
        @Inject(LessonService)
        private readonly lessonService: LessonService,
    ) { }

    @Get('/mock')
    async mock() {
        return this.lessonService.mock();
    }

    @Put('/getModules')
    async getModules() {
        return this.lessonService.findAll();
    }

    @Put('/getModule')
    async getModule(@Body() body) {
        return this.lessonService.findById(body.moduleId);
    }

    @Put('/createModule')
    async createModule(@Body() body) {
        return this.lessonService.create(body.data);
    }

    @Put('/updateModule')
    async updateModule(@Body() body) {
        return this.lessonService.update(body.moduleId, body.data);
    }

    @Put('/updateModuleUnsafe')
    async updateModuleUnsafe(@Body() body) {
        return this.lessonService.updateUnsafe(body.moduleId, body.data);
    }

    @Put('/addTopic')
    async addTopic(@Body() body) {
        return this.lessonService.addTopic(body.moduleId, body.data);
    }

    @Put('/updateTopic')
    async updateTopic(@Body() body) {
        return this.lessonService.updateTopic(body.moduleId, body.topicId, body.data);
    }

    @Put('/addTaskGroup')
    async addTaskGroup(@Body() body) {
        return this.lessonService.addTaskGroup(body.moduleId, body.topicId, body.data);
    }

    @Put('/updateTaskGroup')
    async updateTaskGroup(@Body() body) {
        return this.lessonService.updateTaskGroup(body.moduleId, body.topicId, body.taskGroupId, body.data);
    }

    @Put('/updateBlock')
    async updateBlock(@Body() body) {
        return this.lessonService.updateBlock(body.moduleId, body.topicId, body.taskGroupId, body.blockId, body.data);
    }


    @Put('/getRevisions')
    async getRevisions(@Body() body) {
        return this.lessonService.getRevisions(body.moduleId);
    }

    @Put('/createRevision')
    async createRevision(@Body() body) {
        return this.lessonService.createRevision(body.data, body.message);
    }

    @Put('/createRevisionBackend')
    async createRevisionBackend(@Body() body) {
        return this.lessonService.createRevisionBackend(body.moduleId, body.message);
    }

    @Put('/extractContent')
    async extractContent(@Body() body) {
        return this.lessonService.extractContent(body.moduleId, body.revisionId);
    }

    @Put('/getRelease')
    async getRelease(@Body() body) {
        return release
    }

    @Put('/updateRelease')
    async updateRelease(@Body() body) {
        release = body.release;

        return release
    }

    @Get('/resetRelease')
    async resetRelease(@Body() body) {
        release = releaseMock;
        return release
    }
}
