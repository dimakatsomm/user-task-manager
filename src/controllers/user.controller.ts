import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';

import * as C from '../constants';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';

@Service()
export class UserController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @Inject() private userService: UserService,
    @Inject() private taskService: TaskService,
  ) {}

}
