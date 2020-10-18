import {
    createSchema,
    Type,
    ExtractProps,
    typedModel,
} from 'ts-mongoose';
import { cmsDeclarationSchema } from './cms/cms.data';

export const educationMetaSchema = createSchema({
    level: Type.number({ default: 1.0, required: false }),
    required: Type.boolean({ default: false, required: true }),
})

export type EducationMetaProps = ExtractProps<typeof educationMetaSchema>;

export const taskGroupSchema = createSchema({
    name: Type.string({ default: null, required: true }),
    description: Type.string({ default: null, required: false }),
    educationMeta: Type.schema({ default: {}, required: true }).of(educationMetaSchema),
    content: Type.schema({ default: {}, required: true }).of(cmsDeclarationSchema),
});

export type TaskGroupProps = ExtractProps<typeof taskGroupSchema>;

export const topicSchema = createSchema({
    name: Type.string({ default: null, required: true }),
    description: Type.string({ default: null, required: false }),
    educationMeta: Type.schema({ default: {}, required: true }).of(educationMetaSchema),
    taskGroups: Type.array({ default: [], required: true }).of(Type.schema({ default: null, required: true }).of(taskGroupSchema)),
})

export const fieldSchema = createSchema({
    name: Type.string({ default: null, required: true }),
})

export type TopicProps = ExtractProps<typeof topicSchema>;

export const educationModuleSchema = createSchema({
    name: Type.string({ default: null, required: true }),
    description: Type.string({ default: null, required: false }),
    topics: Type.array({ default: [], required: true }).of(Type.schema({ default: null, required: true }).of(topicSchema)),
    field: Type.schema({ default: {}, required: true }).of(fieldSchema),
    revision: Type.string({ default: null, required: false }),
    revisionId: Type.string({ default: null, required: false }),
    revisionVersion: Type.number({ default: null, required: false }),
});

export type EducationModuleProps = ExtractProps<typeof educationModuleSchema>;

export const EducationModuleModel = typedModel('EducationModule', educationModuleSchema, undefined, true);
export const RevisionModel = typedModel('RevisionModel', educationModuleSchema, undefined, true);

export const models = {
    educationModule: EducationModuleModel,
    revisionModel: RevisionModel,
};