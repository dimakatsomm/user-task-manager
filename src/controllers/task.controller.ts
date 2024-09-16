import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';

import * as C from '../constants';
import { TaskService } from '../services/task.service';

@Service()
export class TaskController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @Inject() private taskService: TaskService,
  ) {}

}
