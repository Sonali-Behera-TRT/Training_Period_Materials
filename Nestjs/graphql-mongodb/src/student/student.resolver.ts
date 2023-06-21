import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentType])
  async students(): Promise<Student[]> {
    return await this.studentService.getAllStudents();
  }

  @Query(() => StudentType)
  async student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return await this.studentService.createStudent(createStudentInput);
  }
}
