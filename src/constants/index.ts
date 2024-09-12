import 'dotenv/config';
import { env } from 'process';

export const PORT: number = Number(env.PORT || '3000');
export const MONGOURI: string = env.MONGOURI || '';
export const REDIS_PASSWORD: string = env.REDIS_PASSWORD || '';
export const REDIS_HOST: string = env.REDIS_HOST || '127.0.0.1';
export const REDIS_PORT: number = Number(env.REDIS_PORT || '6380');
