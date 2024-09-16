import express from 'express';
import Container from 'typedi';

import { UserController } from '../controllers/user.controller';

const router = express.Router();
const controller = Container.get(UserController);

export default router;
