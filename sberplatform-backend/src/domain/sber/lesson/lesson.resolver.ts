import { Resolver, Query, ResolveField, Parent, Args, Mutation } from '@nestjs/graphql';
import { LessonService } from 'src/domain/sber/lesson/lesson.service';
import { EducationModuleProps } from './lesson.data';
import { EducationModule, EducationModuleIn, TopicIn, TaskGroupIn } from './lesson.gql';

@Resolver(of => EducationModule)
export class LessonResolver {
    constructor(
        private lessonService: LessonService,
    ) { }

    @Query(returns => [EducationModule], { name: 'educationModules' })
    async educationModules(): Promise<EducationModuleProps[]> {
        const result = await this.lessonService.findAll();
        console.log(result);

        return result
    }

    @Query(returns => EducationModule, { name: 'educationModule' })
    async educationModule(@Args('id') id: string): Promise<any> {
        return this.lessonService.findById(id);
    }

    @Mutation(returns => EducationModule)
    async create(@Args({ name: 'educationModule', type: () => EducationModuleIn }) data: EducationModuleProps) {
        return this.lessonService.create(data);
    }

    @Mutation(returns => EducationModule)
    async update(
        @Args({ name: 'moduleId' }) moduleId: string,
        @Args({ name: 'data', type: () => EducationModuleIn }) data: EducationModuleProps,

    ) {
        return this.lessonService.update(moduleId, data);
    }

    @Mutation(returns => EducationModule)
    async addTopic(@Args({ name: 'topic', type: () => TopicIn }) data: TopicIn) {
        // return this.postsService.create(EducationModuleProps);
    }

    @Mutation(returns => EducationModule)
    async addTasksGroup(@Args({ name: 'tasksGroup', type: () => TaskGroupIn }) data: TaskGroupIn) {
        // return this.postsService.create(EducationModuleProps);
    }

    @Mutation(returns => EducationModule)
    async updateTasksGroup(@Args({ name: 'tasksGroup', type: () => TaskGroupIn }) data: TaskGroupIn) {
        // return this.postsService.create(EducationModuleProps);
    }
}