import {
    createSchema,
    Type,
    ExtractProps,
} from 'ts-mongoose';

export const cmsBlockSchema = createSchema({
    type: Type.string({ default: null, required: true }),
    data: Type.mixed({ default: {}, required: true }),
})

export type CmsBlockSchema = ExtractProps<typeof cmsBlockSchema>;

export const cmsDeclarationSchema = createSchema({
    time: Type.number({ default: Date.now(), required: true }),
    version: Type.string({ default: '1.0', required: true }),
    blocks: Type.array({ default: [], required: true }).of(Type.schema({ default: null, required: true }).of(cmsBlockSchema)),
})

export type CmsDeclarationProps = ExtractProps<typeof cmsDeclarationSchema>;