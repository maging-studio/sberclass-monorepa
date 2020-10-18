import { Module } from '@nestjs/common';
import { DbModule } from 'src/infrastructure/db/db.module';
import { createModelProvider } from 'src/infrastructure/db/db.utils';
import { models } from './lesson.data';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { LessonResolver } from './lesson.resolver';

const providers = [
    ...Object.values(models).map(createModelProvider),
    LessonService,
    LessonResolver,
];

@Module({
    imports: [
        DbModule,
    ],
    providers,
    controllers: [LessonController],
    exports: providers,
})
export class LessonModule { }
