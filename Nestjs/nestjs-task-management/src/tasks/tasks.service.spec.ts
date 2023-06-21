import { TaskStatus } from './task-status.enum';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
  findOneBy: jest.fn(),
});

const mockUser = {
  id: 'someID',
  username: 'someName',
  password: 'somePassword',
  tasks: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls tasksRepository.getTasks() and returns the result', async () => {
      tasksRepository.getTasks.mockResolvedValue('something');
      const result = await tasksService.getTasks(null, mockUser);
      expect(result).toEqual('something');
    });
  });

  describe('getTaskById', () => {
    it('calls tasksRepository.findOneBy() and returns the result', async () => {
      const mockTask = {
        id: 'Test ID',
        title: 'Test title',
        description: 'Test description',
        status: TaskStatus.OPEN,
        user: mockUser,
      };

      tasksRepository.findOneBy.mockResolvedValue(mockTask);
      const result = await tasksService.getTaskById(mockUser.id, mockUser);
      expect(result).toEqual(mockTask);
    });

    it('calls tasksRepository.findOneBy() and handles an error', async() => {
      tasksRepository.findOneBy.mockResolvedValue(null);
      expect(tasksService.getTaskById('someId', mockUser)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
