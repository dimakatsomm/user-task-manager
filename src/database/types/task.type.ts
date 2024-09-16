import { TaskStatusEnum } from "user-task-manager-client";

export interface ITask {
  id: string;
  userId?: string;
  name: number;
  description: number;
  status: TaskStatusEnum
}
