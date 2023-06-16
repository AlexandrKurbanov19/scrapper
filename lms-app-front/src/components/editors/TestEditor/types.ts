import { OutputData } from '@editorjs/editorjs';

export type ListItem = {
  id: string,
  name: string,
};

export type QuestionType =
  | 'text'
  | 'bigText'
  | 'single'
  | 'multiple'
  | 'select'
  | 'scale'
  | 'matrixSingle'
  | 'matrixMultiple'
  | 'date'
  | 'time'
  | 'file';

export type Question = {
  id: string,
  content?: OutputData,
  isMandatory?: boolean,
  type: QuestionType,
  // single, multiple, select
  options?: ListItem[],
  // scale
  scaleStartTitle?: string,
  scaleStart?: number,
  scaleEndTitle?: string,
  scaleEnd?: number,
  // matrixSingle, matrixMultiple
  columns?: ListItem[],
  rows?: ListItem[],
  points?: number,
};

export interface QuestionsData {
  questions: Question[],
}

export type List = ListItem[];

export enum OptionsType {
  OPTIONS = 'options',
  ROWS = 'rows',
  COLUMNS = 'columns',
}

export type RowToColumn = { [key: string]: string | string[] };
export type RowToColumnSingle = { [key: string]: string };
export type RowToColumnMultiple = { [key: string]: string[] };

export interface MatrixProps {
  columns: ListItem[] | undefined,
  rows: ListItem[] | undefined,
  rowToColumnSelected: RowToColumn,
  disabled?: boolean,
  isChecking?: boolean,
}

export type Answer = any;
export type Answers = {
  [key: string]: Answer,
};

export type Results = {
  [key: string]: boolean | undefined,
} | undefined;
