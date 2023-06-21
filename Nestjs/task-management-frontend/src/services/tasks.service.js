import BaseHttpService from './base-http.service';
import queryString from 'query-string';

export default class TasksService extends BaseHttpService {
  async fetchTasks({ status, search}) {
    const queryObj = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return await this.get('tasks' + (queryStr ? `?${queryStr}` : ''));
  }

  async deleteTask(id) {
    await this.delete(`tasks/${id}`);
  }

  async updateTaskStatus(id, status) {
    return await this.patch(`tasks/${id}/status`, { status });
  }

  async createTask(title, description) {
    return await this.post(`tasks`, { title, description });
  }
}
