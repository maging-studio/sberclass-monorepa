import { Field, ObjectType, ID, Float, Int, InputType } from '@nestjs/graphql';
import graphqlTypeJson from 'graphql-type-json';

@ObjectType()
export class CmsBlock {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: false })
    type: string;

    @Field(type => graphqlTypeJson)
    data: any;
}

@ObjectType()
export class CmsDeclaration {
    @Field(type => ID)
    _id: string;

    @Field(type => Float)
    time: number;

    @Field({ nullable: false })
    version: string;

    @Field(type => [CmsBlock])
    blocks: CmsBlock[];
}


@ObjectType()
export class EducationMeta {
    @Field(type => Float)
    level: number;

    @Field({ nullable: false })
    required: boolean;
};

@ObjectType()
export class TaskGroup {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => EducationMeta)
    educationMeta: EducationMeta;

    @Field(type => CmsDeclaration)
    content: CmsDeclaration
}

@InputType()
export class TaskGroupInput {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => EducationMeta)
    educationMeta: EducationMeta;

    @Field(type => CmsDeclaration)
    content: CmsDeclaration
}


@ObjectType()
export class Topic {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => EducationMeta)
    educationMeta: EducationMeta;

    @Field(type => [TaskGroup])
    taskGroups: TaskGroup[];
}

@ObjectType()
export class EducationField {
    @Field({ nullable: false })
    name: string;
}

@ObjectType()
export class EducationModule {
    @Field(type => ID)
    _id: string;

    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => [Topic])
    topics: Topic[];

    @Field(type => EducationField)
    field: EducationField;
}

// INPUTS

@InputType()
export class CmsBlockIn {
    @Field({ nullable: false })
    type: string;

    @Field(type => graphqlTypeJson, { nullable: true })
    data: any;
}

@InputType()
export class CmsDeclarationIn {
    @Field(type => Float)
    time: number;

    @Field({ nullable: false })
    version: string;

    @Field(type => [CmsBlockIn], { nullable: true })
    blocks: CmsBlockIn[];
}


@InputType()
export class EducationMetaIn {
    @Field(type => Float)
    level: number;

    @Field({ nullable: false })
    required: boolean;
};

@InputType()
export class TaskGroupIn {
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => EducationMetaIn, { nullable: true })
    educationMeta: EducationMetaIn;

    @Field(type => CmsDeclarationIn, { nullable: true })
    content: CmsDeclarationIn
}

@InputType()
export class TopicIn {
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => EducationMetaIn, { nullable: true })
    educationMeta: EducationMetaIn;

    @Field(type => [TaskGroupIn], { nullable: true })
    taskGroups: TaskGroupIn[];
}

@InputType()
export class EducationFieldIn {
    @Field({ nullable: false })
    name: string;
}

@InputType()
export class EducationModuleIn {
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field(type => [TopicIn], { nullable: true })
    topics: Topic[];

    @Field(type => EducationFieldIn)
    field: EducationFieldIn;
}