import { Dayjs } from 'dayjs';

export type ActivityType = 'webinar' | 'lesson' | 'meeting';
export type ActivityInstance = {
  id: string
  name: string
  date: Dayjs
  descriptionName: string
  type: ActivityType
  progress: number
};
