import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return await this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async getStudentById(id: string): Promise<Student> {
    return await this.studentRepository.findOneBy({ id });
  }

  async getManyStudents(ids: string[]) {
    return ids.map(async id => await this.studentRepository.findOneBy({ id }));
  }
}
