import 'core-js/features/reflect';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { container } from 'tsyringe';
import { TaskFacade } from './di/task.facade';
import { TaskRepository } from './di/task.repository';


// container.register(TaskFacade, { useClass: TaskFacade });
// container.register(TaskRepository, { useClass: TaskRepository });



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
