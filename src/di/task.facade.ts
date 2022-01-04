import { injectable } from 'tsyringe';
import { TaskRepository } from './task.repository';

@injectable()
export class TaskFacade {

  constructor(private readonly taskRepository: TaskRepository) {
    console.log(taskRepository.getTasks());
  }

  getTasks() {
    return this.taskRepository.getTasks();
  }

}
