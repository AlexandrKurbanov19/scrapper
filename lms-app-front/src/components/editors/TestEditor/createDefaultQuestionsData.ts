import { v4 as uuidv4 } from 'uuid';
import { QuestionsData } from './types';

const createDefaultQuestionsData = (): QuestionsData => ({ questions: [{ id: uuidv4(), type: 'text' }] });

export default createDefaultQuestionsData;
