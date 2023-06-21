import { Repository, DataSource, Brackets } from 'typeorm';
import { Task } from './task.entity';
import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { CreateTask } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTaskFilterDto } from './dto/get-task.filter.dto';
import { User } from '../auth/users.entity';

@Injectable()
export class TasksRepository extends Repository<Task>{
  private logger = new Logger('TasksRepository', {timestamp: true});
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async createTask(createTask: CreateTask, user: User): Promise<Task> {
    const {title, description} = createTask;

    const task = this.create({
      title,
      description, 
      status: TaskStatus.OPEN,
      user
    });

    await this.save(task);
    return task;
  }

  async getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]> {
    const query = this.createQueryBuilder('task');
    const {status, search} = filterDto;
    
    query.where({user});

    if(status) {
      query.andWhere('task.status = :status', {status});
    }

    // if(search) {
    //   query.andWhere(
    //     '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))', 
    //     {
    //       search: `%${search}%`
    //     }
    //   );
    // }

    // if(search) {
    //   query.andWhere(
    //     new Brackets((qb) => {
    //       qb.where('task.title ILIKE :search OR task.description ILIKE :search', 
    //       {
    //         search: `%${search}%`
    //       })
    //     })
    //   )
    // }

    if(search) {
      query.andWhere(
        new Brackets((qb) => {
          qb.where('task.title ILIKE :search ', {
            search: `%${search}%`
          })
          .orWhere('task.description ILIKE :search', 
          {
            search: `%${search}%`
          });
        })
      )
    }
    
    try{
    const tasks = query.getMany();
    return tasks;
    } catch(error) {
      this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, error.stack);
      throw new InternalServerErrorException();
    }
  }
  
}