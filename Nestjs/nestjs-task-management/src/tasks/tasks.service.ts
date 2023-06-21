import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTask } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task.filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from '../auth/users.entity';

@Injectable()
export class TasksService {
  // private tasks: Task[] = [];

  constructor(@InjectRepository(TasksRepository) private taskRepository: TasksRepository) {}

  getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto, user);
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const {status, search} = filterDto;
  //   let tasks: Task[] = this.tasks;

  //   if(status) {
  //     tasks = tasks.filter((task: Task) => task.status === status);
  //   }

  //   if(search) {
  //     tasks = tasks.filter((task: Task) => 
  //       task.title.includes(search) || 
  //       task.description.includes(search)
  //     );
  //   }

  //   return tasks;
  // }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.taskRepository.findOneBy({user, id});

    // using findOne() method
    // const found = await this.taskRepository.findOne({
    //   where: {
    //     id
    //   }
    // })
    if(found)
      return found;
    throw new NotFoundException(`Task having id:${id} not found`);
  }

  // getTaskById(id: string): Task {
  //   const found =  this.tasks.find((task: Task) => task.id === id);

  //   if(found)
  //     return found;
  //   throw new NotFoundException(`Task having id:${id} not found`);
  // }


  createTask(createTask: CreateTask, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTask, user);
  }

  // createTask(createTask: CreateTask) {
  //   const {title, description} = createTask;
  //   const task: Task = {
  //     id: uuid(),
  //     title, 
  //     description, 
  //     status: TaskStatus.OPEN,
  //   }

  //   this.tasks.push(task);
  //   return task;
  // }

  async deleteTask(id: string, user: User): Promise<void> {
    const result = await this.taskRepository.delete({user, id});
    if(result.affected === 0)
      throw new NotFoundException(`Not found item with ID "${id}"`);
  }

  // deleteTask(id: string): void{
  //   const found = this.getTaskById(id);
  //   const idx: number = this.tasks.findIndex((task: Task) => task.id === found.id);
  //   this.tasks.splice(idx, 1);
  // }

  async updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task{
  //   const task = this.getTaskById(id);
  //   task.status = status;

  //   return task;
  // }
}
