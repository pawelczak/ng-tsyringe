import { Component } from '@angular/core';
import { container } from 'tsyringe';
import { TaskFacade } from '../di/task.facade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-tsyringe';

  private readonly taskFacade: TaskFacade = container.resolve(TaskFacade);

  constructor() {

    console.log('w', this.taskFacade.getTasks());
  }

}
