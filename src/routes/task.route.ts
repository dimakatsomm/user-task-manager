import express from 'express';
import Container from 'typedi';

import { TaskController } from 'controllers/task.controller';

const router = express.Router();
const controller = Container.get(TaskController);

export default router;
