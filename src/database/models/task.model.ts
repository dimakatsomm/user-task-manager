import { randomUUID } from 'crypto';
import { ITask } from '../types/task.type';
import { Model, Schema, model } from 'mongoose';
import { TaskStatusEnum } from 'user-task-manager-client';

const taskSchema = new Schema(
  {
    _id: {
      type: Schema.Types.UUID,
      required: true,
      default: randomUUID,
    },
    _userId: {
      type: Schema.Types.UUID,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: TaskStatusEnum,
      default: TaskStatusEnum.PENDING,
    },
  },
  {
    timestamps: true,
    toJSON: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transform: function (doc, ret) {
        ret.id = doc._id;
        ret.userId = doc._userId;
        delete ret._id;
        delete ret._userId;
        delete ret.__v;
      },
    },
  },
);

export const Location = model<ITask, Model<ITask>>('Task', taskSchema, 'tasks');
