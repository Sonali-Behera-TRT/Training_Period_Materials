import { Args, Mutation, Query, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { StudentType } from 'src/student/student.type';
import { StudentService } from 'src/student/student.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService, private studentService: StudentService) {}

  @Query(() => LessonType)
  async lesson(@Args('id') id: string): Promise<Lesson> {
    return await this.lessonService.getLessonById(id);
  }

  @Query(() => [LessonType])
  async lessons(): Promise<Lesson[]> {
    return await this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return await this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    return await this.lessonService.assignStudentsToLesson(assignStudentsToLessonInput);
  }

  @ResolveField(() => [StudentType])
  async students (@Parent() lesson: Lesson) {
    return await this.studentService.getManyStudents(lesson.students);
  }
}
