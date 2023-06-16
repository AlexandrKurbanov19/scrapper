import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Administrator = {
  __typename?: 'Administrator';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};

export type AdministratorEntity = {
  __typename?: 'AdministratorEntity';
  attributes?: Maybe<Administrator>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AdministratorEntityResponse = {
  __typename?: 'AdministratorEntityResponse';
  data?: Maybe<AdministratorEntity>;
};

export type AdministratorEntityResponseCollection = {
  __typename?: 'AdministratorEntityResponseCollection';
  data: Array<AdministratorEntity>;
  meta: ResponseCollectionMeta;
};

export type AdministratorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AdministratorFiltersInput>>>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AdministratorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdministratorFiltersInput>>>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type AdministratorInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type AuditLog = {
  __typename?: 'AuditLog';
  action: Enum_Auditlog_Action;
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entityId?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  result?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userAuthor?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type AuditLogEntity = {
  __typename?: 'AuditLogEntity';
  attributes?: Maybe<AuditLog>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AuditLogEntityResponse = {
  __typename?: 'AuditLogEntityResponse';
  data?: Maybe<AuditLogEntity>;
};

export type AuditLogEntityResponseCollection = {
  __typename?: 'AuditLogEntityResponseCollection';
  data: Array<AuditLogEntity>;
  meta: ResponseCollectionMeta;
};

export type AuditLogFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AuditLogFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityId?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AuditLogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuditLogFiltersInput>>>;
  params?: InputMaybe<JsonFilterInput>;
  result?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userAuthor?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type AuditLogInput = {
  action?: InputMaybe<Enum_Auditlog_Action>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  params?: InputMaybe<Scalars['JSON']['input']>;
  result?: InputMaybe<Scalars['JSON']['input']>;
  userAuthor?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  attaches?: Maybe<Scalars['JSON']['output']>;
  authorUser?: Maybe<UsersPermissionsUserEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  subjectContentType: Enum_Comment_Subjectcontenttype;
  subjectContentTypeId: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  attaches?: InputMaybe<JsonFilterInput>;
  authorUser?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDeleted?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  subjectContentType?: InputMaybe<StringFilterInput>;
  subjectContentTypeId?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  attaches?: InputMaybe<Scalars['JSON']['input']>;
  authorUser?: InputMaybe<Scalars['ID']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  subjectContentType?: InputMaybe<Enum_Comment_Subjectcontenttype>;
  subjectContentTypeId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Course = {
  __typename?: 'Course';
  course_parts?: Maybe<CoursePartRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate: Scalars['Date']['output'];
  startDate: Scalars['Date']['output'];
  student?: Maybe<StudentEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CourseCourse_PartsArgs = {
  filters?: InputMaybe<CoursePartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes?: Maybe<Course>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data?: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  course_parts?: InputMaybe<CoursePartFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CourseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CourseFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  student?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CourseInput = {
  course_parts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  student?: InputMaybe<Scalars['ID']['input']>;
};

export type CoursePart = {
  __typename?: 'CoursePart';
  course?: Maybe<CourseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curator?: Maybe<CuratorEntityResponse>;
  endDate: Scalars['Date']['output'];
  lessons?: Maybe<LessonRelationResponseCollection>;
  payed: Scalars['Boolean']['output'];
  startDate: Scalars['Date']['output'];
  tariff?: Maybe<TariffEntityResponse>;
  tutor?: Maybe<TutorEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CoursePartLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CoursePartEntity = {
  __typename?: 'CoursePartEntity';
  attributes?: Maybe<CoursePart>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CoursePartEntityResponse = {
  __typename?: 'CoursePartEntityResponse';
  data?: Maybe<CoursePartEntity>;
};

export type CoursePartEntityResponseCollection = {
  __typename?: 'CoursePartEntityResponseCollection';
  data: Array<CoursePartEntity>;
  meta: ResponseCollectionMeta;
};

export type CoursePartFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CoursePartFiltersInput>>>;
  course?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  curator?: InputMaybe<CuratorFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessons?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<CoursePartFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CoursePartFiltersInput>>>;
  payed?: InputMaybe<BooleanFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  tariff?: InputMaybe<TariffFiltersInput>;
  tutor?: InputMaybe<TutorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CoursePartInput = {
  course?: InputMaybe<Scalars['ID']['input']>;
  curator?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  payed?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tariff?: InputMaybe<Scalars['ID']['input']>;
  tutor?: InputMaybe<Scalars['ID']['input']>;
};

export type CoursePartRelationResponseCollection = {
  __typename?: 'CoursePartRelationResponseCollection';
  data: Array<CoursePartEntity>;
};

export type CourseRelationResponseCollection = {
  __typename?: 'CourseRelationResponseCollection';
  data: Array<CourseEntity>;
};

export type Curator = {
  __typename?: 'Curator';
  assigned_course_parts?: Maybe<CoursePartRelationResponseCollection>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  students?: Maybe<StudentRelationResponseCollection>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};


export type CuratorAssigned_Course_PartsArgs = {
  filters?: InputMaybe<CoursePartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CuratorStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CuratorEntity = {
  __typename?: 'CuratorEntity';
  attributes?: Maybe<Curator>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CuratorEntityResponse = {
  __typename?: 'CuratorEntityResponse';
  data?: Maybe<CuratorEntity>;
};

export type CuratorEntityResponseCollection = {
  __typename?: 'CuratorEntityResponseCollection';
  data: Array<CuratorEntity>;
  meta: ResponseCollectionMeta;
};

export type CuratorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CuratorFiltersInput>>>;
  assigned_course_parts?: InputMaybe<CoursePartFiltersInput>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CuratorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CuratorFiltersInput>>>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  students?: InputMaybe<StudentFiltersInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type CuratorInput = {
  assigned_course_parts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type CuratorRelationResponseCollection = {
  __typename?: 'CuratorRelationResponseCollection';
  data: Array<CuratorEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Discipline = {
  __typename?: 'Discipline';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  modules?: Maybe<ModuleRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DisciplineModulesArgs = {
  filters?: InputMaybe<ModuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DisciplineEntity = {
  __typename?: 'DisciplineEntity';
  attributes?: Maybe<Discipline>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DisciplineEntityResponse = {
  __typename?: 'DisciplineEntityResponse';
  data?: Maybe<DisciplineEntity>;
};

export type DisciplineEntityResponseCollection = {
  __typename?: 'DisciplineEntityResponseCollection';
  data: Array<DisciplineEntity>;
  meta: ResponseCollectionMeta;
};

export type DisciplineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DisciplineFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  modules?: InputMaybe<ModuleFiltersInput>;
  not?: InputMaybe<DisciplineFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DisciplineFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DisciplineInput = {
  modules?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum Enum_Auditlog_Action {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum Enum_Comment_Subjectcontenttype {
  Curator = 'CURATOR',
  Parent = 'PARENT',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Tutor = 'TUTOR'
}

export enum Enum_Video_Postprocessstatus {
  InProcess = 'IN_PROCESS',
  NeedProcess = 'NEED_PROCESS',
  ProcessDone = 'PROCESS_DONE',
  ProcessError = 'PROCESS_ERROR'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Administrator | AuditLog | Comment | Course | CoursePart | Curator | Discipline | HistoryDataParsing | HistoryRequest | I18NLocale | Lesson | LessonKnowledgeConsolidationTask | LessonPracticalTask | LessonPracticalTaskAnswer | LessonProgress | LessonTest | LessonTestAnswer | Module | Parent | Student | StudentTariffPeriod | Tariff | Teacher | Theme | Tutor | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Video;

export type HistoryDataParsing = {
  __typename?: 'HistoryDataParsing';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  history_request?: Maybe<HistoryRequestEntityResponse>;
  parsingData?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HistoryDataParsingEntity = {
  __typename?: 'HistoryDataParsingEntity';
  attributes?: Maybe<HistoryDataParsing>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HistoryDataParsingEntityResponse = {
  __typename?: 'HistoryDataParsingEntityResponse';
  data?: Maybe<HistoryDataParsingEntity>;
};

export type HistoryDataParsingEntityResponseCollection = {
  __typename?: 'HistoryDataParsingEntityResponseCollection';
  data: Array<HistoryDataParsingEntity>;
  meta: ResponseCollectionMeta;
};

export type HistoryDataParsingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HistoryDataParsingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  history_request?: InputMaybe<HistoryRequestFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HistoryDataParsingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HistoryDataParsingFiltersInput>>>;
  parsingData?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HistoryDataParsingInput = {
  history_request?: InputMaybe<Scalars['ID']['input']>;
  parsingData?: InputMaybe<Scalars['JSON']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type HistoryRequest = {
  __typename?: 'HistoryRequest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataForParsing: Scalars['JSON']['output'];
  history_data_parsing?: Maybe<HistoryDataParsingEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HistoryRequestEntity = {
  __typename?: 'HistoryRequestEntity';
  attributes?: Maybe<HistoryRequest>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HistoryRequestEntityResponse = {
  __typename?: 'HistoryRequestEntityResponse';
  data?: Maybe<HistoryRequestEntity>;
};

export type HistoryRequestEntityResponseCollection = {
  __typename?: 'HistoryRequestEntityResponseCollection';
  data: Array<HistoryRequestEntity>;
  meta: ResponseCollectionMeta;
};

export type HistoryRequestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HistoryRequestFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dataForParsing?: InputMaybe<JsonFilterInput>;
  history_data_parsing?: InputMaybe<HistoryDataParsingFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HistoryRequestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HistoryRequestFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HistoryRequestInput = {
  adsAuthor?: InputMaybe<Scalars['String']['input']>;
  categoryForParsing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countAds?: InputMaybe<Scalars['Int']['input']>;
  dataForParsing?: InputMaybe<Scalars['JSON']['input']>;
  finalPrice?: InputMaybe<Scalars['Int']['input']>;
  firstPrice?: InputMaybe<Scalars['Int']['input']>;
  history_data_parsing?: InputMaybe<Scalars['ID']['input']>;
  keyWords?: InputMaybe<Scalars['String']['input']>;
  rangeDate?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  siteNameForParsing?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  coursePart?: Maybe<CoursePartEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  goalText: Scalars['String']['output'];
  intoLeftContent: Scalars['JSON']['output'];
  intoRightContent: Scalars['JSON']['output'];
  lessonKnowledgeConsolidationTask?: Maybe<LessonKnowledgeConsolidationTaskEntityResponse>;
  lessonPracticalTask?: Maybe<LessonPracticalTaskEntityResponse>;
  lessonProgress?: Maybe<LessonProgressEntityResponse>;
  lessonTest?: Maybe<LessonTestEntityResponse>;
  module?: Maybe<ModuleEntityResponse>;
  nextLessonSpoiler: Scalars['String']['output'];
  numberOfTestAttemptsForLesson: Scalars['Int']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  outroContent: Scalars['JSON']['output'];
  testSpoilerText: Scalars['String']['output'];
  theme?: Maybe<ThemeEntityResponse>;
  theoryContent: Scalars['JSON']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonEntity = {
  __typename?: 'LessonEntity';
  attributes?: Maybe<Lesson>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonEntityResponse = {
  __typename?: 'LessonEntityResponse';
  data?: Maybe<LessonEntity>;
};

export type LessonEntityResponseCollection = {
  __typename?: 'LessonEntityResponseCollection';
  data: Array<LessonEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonFiltersInput>>>;
  coursePart?: InputMaybe<CoursePartFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  goalText?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intoLeftContent?: InputMaybe<JsonFilterInput>;
  intoRightContent?: InputMaybe<JsonFilterInput>;
  lessonKnowledgeConsolidationTask?: InputMaybe<LessonKnowledgeConsolidationTaskFiltersInput>;
  lessonPracticalTask?: InputMaybe<LessonPracticalTaskFiltersInput>;
  lessonProgress?: InputMaybe<LessonProgressFiltersInput>;
  lessonTest?: InputMaybe<LessonTestFiltersInput>;
  module?: InputMaybe<ModuleFiltersInput>;
  nextLessonSpoiler?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LessonFiltersInput>;
  numberOfTestAttemptsForLesson?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<LessonFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  outroContent?: InputMaybe<JsonFilterInput>;
  testSpoilerText?: InputMaybe<StringFilterInput>;
  theme?: InputMaybe<ThemeFiltersInput>;
  theoryContent?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonInput = {
  coursePart?: InputMaybe<Scalars['ID']['input']>;
  goalText?: InputMaybe<Scalars['String']['input']>;
  intoLeftContent?: InputMaybe<Scalars['JSON']['input']>;
  intoRightContent?: InputMaybe<Scalars['JSON']['input']>;
  lessonKnowledgeConsolidationTask?: InputMaybe<Scalars['ID']['input']>;
  lessonPracticalTask?: InputMaybe<Scalars['ID']['input']>;
  lessonProgress?: InputMaybe<Scalars['ID']['input']>;
  lessonTest?: InputMaybe<Scalars['ID']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  nextLessonSpoiler?: InputMaybe<Scalars['String']['input']>;
  numberOfTestAttemptsForLesson?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  outroContent?: InputMaybe<Scalars['JSON']['input']>;
  testSpoilerText?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['ID']['input']>;
  theoryContent?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LessonKnowledgeConsolidationTask = {
  __typename?: 'LessonKnowledgeConsolidationTask';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lessons?: Maybe<LessonRelationResponseCollection>;
  questions: Scalars['JSON']['output'];
  rightAnswers: Scalars['JSON']['output'];
  testMaxPoints: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LessonKnowledgeConsolidationTaskLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonKnowledgeConsolidationTaskEntity = {
  __typename?: 'LessonKnowledgeConsolidationTaskEntity';
  attributes?: Maybe<LessonKnowledgeConsolidationTask>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonKnowledgeConsolidationTaskEntityResponse = {
  __typename?: 'LessonKnowledgeConsolidationTaskEntityResponse';
  data?: Maybe<LessonKnowledgeConsolidationTaskEntity>;
};

export type LessonKnowledgeConsolidationTaskEntityResponseCollection = {
  __typename?: 'LessonKnowledgeConsolidationTaskEntityResponseCollection';
  data: Array<LessonKnowledgeConsolidationTaskEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonKnowledgeConsolidationTaskFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonKnowledgeConsolidationTaskFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessons?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<LessonKnowledgeConsolidationTaskFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonKnowledgeConsolidationTaskFiltersInput>>>;
  questions?: InputMaybe<JsonFilterInput>;
  rightAnswers?: InputMaybe<JsonFilterInput>;
  testMaxPoints?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonKnowledgeConsolidationTaskInput = {
  lessons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  questions?: InputMaybe<Scalars['JSON']['input']>;
  rightAnswers?: InputMaybe<Scalars['JSON']['input']>;
  testMaxPoints?: InputMaybe<Scalars['Int']['input']>;
};

export type LessonPracticalTask = {
  __typename?: 'LessonPracticalTask';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deadlineDaysAfterFinishTest: Scalars['Int']['output'];
  lesson?: Maybe<LessonEntityResponse>;
  questions: Scalars['JSON']['output'];
  rightAnswers: Scalars['JSON']['output'];
  testMaxPoints: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonPracticalTaskAnswer = {
  __typename?: 'LessonPracticalTaskAnswer';
  answers: Scalars['JSON']['output'];
  attemptNumber: Scalars['Int']['output'];
  completeDateTime?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lessonProgress?: Maybe<LessonProgressEntityResponse>;
  points?: Maybe<Scalars['Int']['output']>;
  startDateTime?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whenWasRatedDateTime?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonPracticalTaskAnswerEntity = {
  __typename?: 'LessonPracticalTaskAnswerEntity';
  attributes?: Maybe<LessonPracticalTaskAnswer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonPracticalTaskAnswerEntityResponse = {
  __typename?: 'LessonPracticalTaskAnswerEntityResponse';
  data?: Maybe<LessonPracticalTaskAnswerEntity>;
};

export type LessonPracticalTaskAnswerEntityResponseCollection = {
  __typename?: 'LessonPracticalTaskAnswerEntityResponseCollection';
  data: Array<LessonPracticalTaskAnswerEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonPracticalTaskAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonPracticalTaskAnswerFiltersInput>>>;
  answers?: InputMaybe<JsonFilterInput>;
  attemptNumber?: InputMaybe<IntFilterInput>;
  completeDateTime?: InputMaybe<DateTimeFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessonProgress?: InputMaybe<LessonProgressFiltersInput>;
  not?: InputMaybe<LessonPracticalTaskAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonPracticalTaskAnswerFiltersInput>>>;
  points?: InputMaybe<IntFilterInput>;
  startDateTime?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  whenWasRatedDateTime?: InputMaybe<DateTimeFilterInput>;
};

export type LessonPracticalTaskAnswerInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptNumber?: InputMaybe<Scalars['Int']['input']>;
  completeDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  lessonProgress?: InputMaybe<Scalars['ID']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  whenWasRatedDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LessonPracticalTaskEntity = {
  __typename?: 'LessonPracticalTaskEntity';
  attributes?: Maybe<LessonPracticalTask>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonPracticalTaskEntityResponse = {
  __typename?: 'LessonPracticalTaskEntityResponse';
  data?: Maybe<LessonPracticalTaskEntity>;
};

export type LessonPracticalTaskEntityResponseCollection = {
  __typename?: 'LessonPracticalTaskEntityResponseCollection';
  data: Array<LessonPracticalTaskEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonPracticalTaskFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonPracticalTaskFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deadlineDaysAfterFinishTest?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lesson?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<LessonPracticalTaskFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonPracticalTaskFiltersInput>>>;
  questions?: InputMaybe<JsonFilterInput>;
  rightAnswers?: InputMaybe<JsonFilterInput>;
  testMaxPoints?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonPracticalTaskInput = {
  deadlineDaysAfterFinishTest?: InputMaybe<Scalars['Int']['input']>;
  lesson?: InputMaybe<Scalars['ID']['input']>;
  questions?: InputMaybe<Scalars['JSON']['input']>;
  rightAnswers?: InputMaybe<Scalars['JSON']['input']>;
  testMaxPoints?: InputMaybe<Scalars['Int']['input']>;
};

export type LessonProgress = {
  __typename?: 'LessonProgress';
  acceptedLessonTestAnswer?: Maybe<LessonTestAnswerEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  intoReadDateTime?: Maybe<Scalars['DateTime']['output']>;
  lesson?: Maybe<LessonEntityResponse>;
  lessonPracticalTaskAnswer?: Maybe<LessonPracticalTaskAnswerEntityResponse>;
  lessonTestAnswers?: Maybe<LessonTestAnswerRelationResponseCollection>;
  theoryReadDateTime?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LessonProgressLessonTestAnswersArgs = {
  filters?: InputMaybe<LessonTestAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LessonProgressEntity = {
  __typename?: 'LessonProgressEntity';
  attributes?: Maybe<LessonProgress>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonProgressEntityResponse = {
  __typename?: 'LessonProgressEntityResponse';
  data?: Maybe<LessonProgressEntity>;
};

export type LessonProgressEntityResponseCollection = {
  __typename?: 'LessonProgressEntityResponseCollection';
  data: Array<LessonProgressEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonProgressFiltersInput = {
  acceptedLessonTestAnswer?: InputMaybe<LessonTestAnswerFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<LessonProgressFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intoReadDateTime?: InputMaybe<DateTimeFilterInput>;
  lesson?: InputMaybe<LessonFiltersInput>;
  lessonPracticalTaskAnswer?: InputMaybe<LessonPracticalTaskAnswerFiltersInput>;
  lessonTestAnswers?: InputMaybe<LessonTestAnswerFiltersInput>;
  not?: InputMaybe<LessonProgressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonProgressFiltersInput>>>;
  theoryReadDateTime?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonProgressInput = {
  acceptedLessonTestAnswer?: InputMaybe<Scalars['ID']['input']>;
  intoReadDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  lesson?: InputMaybe<Scalars['ID']['input']>;
  lessonPracticalTaskAnswer?: InputMaybe<Scalars['ID']['input']>;
  lessonTestAnswers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  theoryReadDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LessonRelationResponseCollection = {
  __typename?: 'LessonRelationResponseCollection';
  data: Array<LessonEntity>;
};

export type LessonTest = {
  __typename?: 'LessonTest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lesson?: Maybe<LessonEntityResponse>;
  questions: Scalars['JSON']['output'];
  rightAnswers: Scalars['JSON']['output'];
  testMaxPoints: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonTestAnswer = {
  __typename?: 'LessonTestAnswer';
  answers: Scalars['JSON']['output'];
  attemptNumber: Scalars['Int']['output'];
  completeDateTime?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lessonProgress?: Maybe<LessonProgressEntityResponse>;
  lessonProgressWhereAccepted?: Maybe<LessonProgressEntityResponse>;
  points?: Maybe<Scalars['Int']['output']>;
  startDateTime: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonTestAnswerEntity = {
  __typename?: 'LessonTestAnswerEntity';
  attributes?: Maybe<LessonTestAnswer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonTestAnswerEntityResponse = {
  __typename?: 'LessonTestAnswerEntityResponse';
  data?: Maybe<LessonTestAnswerEntity>;
};

export type LessonTestAnswerEntityResponseCollection = {
  __typename?: 'LessonTestAnswerEntityResponseCollection';
  data: Array<LessonTestAnswerEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonTestAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonTestAnswerFiltersInput>>>;
  answers?: InputMaybe<JsonFilterInput>;
  attemptNumber?: InputMaybe<IntFilterInput>;
  completeDateTime?: InputMaybe<DateTimeFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessonProgress?: InputMaybe<LessonProgressFiltersInput>;
  lessonProgressWhereAccepted?: InputMaybe<LessonProgressFiltersInput>;
  not?: InputMaybe<LessonTestAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonTestAnswerFiltersInput>>>;
  points?: InputMaybe<IntFilterInput>;
  startDateTime?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonTestAnswerInput = {
  answers?: InputMaybe<Scalars['JSON']['input']>;
  attemptNumber?: InputMaybe<Scalars['Int']['input']>;
  completeDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  lessonProgress?: InputMaybe<Scalars['ID']['input']>;
  lessonProgressWhereAccepted?: InputMaybe<Scalars['ID']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LessonTestAnswerRelationResponseCollection = {
  __typename?: 'LessonTestAnswerRelationResponseCollection';
  data: Array<LessonTestAnswerEntity>;
};

export type LessonTestEntity = {
  __typename?: 'LessonTestEntity';
  attributes?: Maybe<LessonTest>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LessonTestEntityResponse = {
  __typename?: 'LessonTestEntityResponse';
  data?: Maybe<LessonTestEntity>;
};

export type LessonTestEntityResponseCollection = {
  __typename?: 'LessonTestEntityResponseCollection';
  data: Array<LessonTestEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonTestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LessonTestFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lesson?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<LessonTestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LessonTestFiltersInput>>>;
  questions?: InputMaybe<JsonFilterInput>;
  rightAnswers?: InputMaybe<JsonFilterInput>;
  testMaxPoints?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LessonTestInput = {
  lesson?: InputMaybe<Scalars['ID']['input']>;
  questions?: InputMaybe<Scalars['JSON']['input']>;
  rightAnswers?: InputMaybe<Scalars['JSON']['input']>;
  testMaxPoints?: InputMaybe<Scalars['Int']['input']>;
};

export type Module = {
  __typename?: 'Module';
  age: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  discipline?: Maybe<DisciplineEntityResponse>;
  lessons?: Maybe<LessonRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ModuleLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModuleEntity = {
  __typename?: 'ModuleEntity';
  attributes?: Maybe<Module>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ModuleEntityResponse = {
  __typename?: 'ModuleEntityResponse';
  data?: Maybe<ModuleEntity>;
};

export type ModuleEntityResponseCollection = {
  __typename?: 'ModuleEntityResponseCollection';
  data: Array<ModuleEntity>;
  meta: ResponseCollectionMeta;
};

export type ModuleFiltersInput = {
  age?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ModuleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  discipline?: InputMaybe<DisciplineFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  lessons?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<ModuleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ModuleFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ModuleInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  discipline?: InputMaybe<Scalars['ID']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ModuleRelationResponseCollection = {
  __typename?: 'ModuleRelationResponseCollection';
  data: Array<ModuleEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAdministrator?: Maybe<AdministratorEntityResponse>;
  createAuditLog?: Maybe<AuditLogEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createCourse?: Maybe<CourseEntityResponse>;
  createCoursePart?: Maybe<CoursePartEntityResponse>;
  createCurator?: Maybe<CuratorEntityResponse>;
  createDiscipline?: Maybe<DisciplineEntityResponse>;
  createHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  createHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  createLesson?: Maybe<LessonEntityResponse>;
  createLessonKnowledgeConsolidationTask?: Maybe<LessonKnowledgeConsolidationTaskEntityResponse>;
  createLessonPracticalTask?: Maybe<LessonPracticalTaskEntityResponse>;
  createLessonPracticalTaskAnswer?: Maybe<LessonPracticalTaskAnswerEntityResponse>;
  createLessonProgress?: Maybe<LessonProgressEntityResponse>;
  createLessonTest?: Maybe<LessonTestEntityResponse>;
  createLessonTestAnswer?: Maybe<LessonTestAnswerEntityResponse>;
  createModule?: Maybe<ModuleEntityResponse>;
  createParent?: Maybe<ParentEntityResponse>;
  createStudent?: Maybe<StudentEntityResponse>;
  createStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  createTariff?: Maybe<TariffEntityResponse>;
  createTeacher?: Maybe<TeacherEntityResponse>;
  createTheme?: Maybe<ThemeEntityResponse>;
  createTutor?: Maybe<TutorEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVideo?: Maybe<VideoEntityResponse>;
  deleteAdministrator?: Maybe<AdministratorEntityResponse>;
  deleteAuditLog?: Maybe<AuditLogEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteCourse?: Maybe<CourseEntityResponse>;
  deleteCoursePart?: Maybe<CoursePartEntityResponse>;
  deleteCurator?: Maybe<CuratorEntityResponse>;
  deleteDiscipline?: Maybe<DisciplineEntityResponse>;
  deleteHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  deleteHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  deleteLesson?: Maybe<LessonEntityResponse>;
  deleteLessonKnowledgeConsolidationTask?: Maybe<LessonKnowledgeConsolidationTaskEntityResponse>;
  deleteLessonPracticalTask?: Maybe<LessonPracticalTaskEntityResponse>;
  deleteLessonPracticalTaskAnswer?: Maybe<LessonPracticalTaskAnswerEntityResponse>;
  deleteLessonProgress?: Maybe<LessonProgressEntityResponse>;
  deleteLessonTest?: Maybe<LessonTestEntityResponse>;
  deleteLessonTestAnswer?: Maybe<LessonTestAnswerEntityResponse>;
  deleteModule?: Maybe<ModuleEntityResponse>;
  deleteParent?: Maybe<ParentEntityResponse>;
  deleteStudent?: Maybe<StudentEntityResponse>;
  deleteStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  deleteTariff?: Maybe<TariffEntityResponse>;
  deleteTeacher?: Maybe<TeacherEntityResponse>;
  deleteTheme?: Maybe<ThemeEntityResponse>;
  deleteTutor?: Maybe<TutorEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVideo?: Maybe<VideoEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  getParsingData: GetParsingDataResponse;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAdministrator?: Maybe<AdministratorEntityResponse>;
  updateAuditLog?: Maybe<AuditLogEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateCourse?: Maybe<CourseEntityResponse>;
  updateCoursePart?: Maybe<CoursePartEntityResponse>;
  updateCurator?: Maybe<CuratorEntityResponse>;
  updateDiscipline?: Maybe<DisciplineEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  updateHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  updateLesson?: Maybe<LessonEntityResponse>;
  updateLessonKnowledgeConsolidationTask?: Maybe<LessonKnowledgeConsolidationTaskEntityResponse>;
  updateLessonPracticalTask?: Maybe<LessonPracticalTaskEntityResponse>;
  updateLessonPracticalTaskAnswer?: Maybe<LessonPracticalTaskAnswerEntityResponse>;
  updateLessonProgress?: Maybe<LessonProgressEntityResponse>;
  updateLessonTest?: Maybe<LessonTestEntityResponse>;
  updateLessonTestAnswer?: Maybe<LessonTestAnswerEntityResponse>;
  updateModule?: Maybe<ModuleEntityResponse>;
  updateParent?: Maybe<ParentEntityResponse>;
  updateStudent?: Maybe<StudentEntityResponse>;
  updateStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  updateTariff?: Maybe<TariffEntityResponse>;
  updateTeacher?: Maybe<TeacherEntityResponse>;
  updateTheme?: Maybe<ThemeEntityResponse>;
  updateTutor?: Maybe<TutorEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAdministratorArgs = {
  data: AdministratorInput;
};


export type MutationCreateAuditLogArgs = {
  data: AuditLogInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateCoursePartArgs = {
  data: CoursePartInput;
};


export type MutationCreateCuratorArgs = {
  data: CuratorInput;
};


export type MutationCreateDisciplineArgs = {
  data: DisciplineInput;
};


export type MutationCreateHistoryDataParsingArgs = {
  data: HistoryDataParsingInput;
};


export type MutationCreateHistoryRequestArgs = {
  data: HistoryRequestInput;
};


export type MutationCreateLessonArgs = {
  data: LessonInput;
};


export type MutationCreateLessonKnowledgeConsolidationTaskArgs = {
  data: LessonKnowledgeConsolidationTaskInput;
};


export type MutationCreateLessonPracticalTaskArgs = {
  data: LessonPracticalTaskInput;
};


export type MutationCreateLessonPracticalTaskAnswerArgs = {
  data: LessonPracticalTaskAnswerInput;
};


export type MutationCreateLessonProgressArgs = {
  data: LessonProgressInput;
};


export type MutationCreateLessonTestArgs = {
  data: LessonTestInput;
};


export type MutationCreateLessonTestAnswerArgs = {
  data: LessonTestAnswerInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleInput;
};


export type MutationCreateParentArgs = {
  data: ParentInput;
};


export type MutationCreateStudentArgs = {
  data: StudentInput;
};


export type MutationCreateStudentTariffPeriodArgs = {
  data: StudentTariffPeriodInput;
};


export type MutationCreateTariffArgs = {
  data: TariffInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherInput;
};


export type MutationCreateThemeArgs = {
  data: ThemeInput;
};


export type MutationCreateTutorArgs = {
  data: TutorInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
};


export type MutationDeleteAdministratorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAuditLogArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCoursePartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCuratorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDisciplineArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHistoryDataParsingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHistoryRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonKnowledgeConsolidationTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonPracticalTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonPracticalTaskAnswerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonProgressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonTestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonTestAnswerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteParentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentTariffPeriodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTariffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThemeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTutorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationGetParsingDataArgs = {
  data?: InputMaybe<HistoryRequestInput>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAdministratorArgs = {
  data: AdministratorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuditLogArgs = {
  data: AuditLogInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCoursePartArgs = {
  data: CoursePartInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCuratorArgs = {
  data: CuratorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDisciplineArgs = {
  data: DisciplineInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHistoryDataParsingArgs = {
  data: HistoryDataParsingInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateHistoryRequestArgs = {
  data: HistoryRequestInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonArgs = {
  data: LessonInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonKnowledgeConsolidationTaskArgs = {
  data: LessonKnowledgeConsolidationTaskInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonPracticalTaskArgs = {
  data: LessonPracticalTaskInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonPracticalTaskAnswerArgs = {
  data: LessonPracticalTaskAnswerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonProgressArgs = {
  data: LessonProgressInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonTestArgs = {
  data: LessonTestInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateLessonTestAnswerArgs = {
  data: LessonTestAnswerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateModuleArgs = {
  data: ModuleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateParentArgs = {
  data: ParentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateStudentTariffPeriodArgs = {
  data: StudentTariffPeriodInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTariffArgs = {
  data: TariffInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTeacherArgs = {
  data: TeacherInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateThemeArgs = {
  data: ThemeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTutorArgs = {
  data: TutorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVideoArgs = {
  data: VideoInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type MyProfileResponse = {
  __typename?: 'MyProfileResponse';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  role: MyProfileRole;
  userId: Scalars['ID']['output'];
};

export type MyProfileRole = {
  __typename?: 'MyProfileRole';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Parent = {
  __typename?: 'Parent';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  children?: Maybe<StudentRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};


export type ParentChildrenArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ParentEntity = {
  __typename?: 'ParentEntity';
  attributes?: Maybe<Parent>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ParentEntityResponse = {
  __typename?: 'ParentEntityResponse';
  data?: Maybe<ParentEntity>;
};

export type ParentEntityResponseCollection = {
  __typename?: 'ParentEntityResponseCollection';
  data: Array<ParentEntity>;
  meta: ResponseCollectionMeta;
};

export type ParentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ParentFiltersInput>>>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  children?: InputMaybe<StudentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ParentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ParentFiltersInput>>>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type ParentInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type ParentRelationResponseCollection = {
  __typename?: 'ParentRelationResponseCollection';
  data: Array<ParentEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  administrator?: Maybe<AdministratorEntityResponse>;
  administrators?: Maybe<AdministratorEntityResponseCollection>;
  auditLog?: Maybe<AuditLogEntityResponse>;
  auditLogs?: Maybe<AuditLogEntityResponseCollection>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  course?: Maybe<CourseEntityResponse>;
  coursePart?: Maybe<CoursePartEntityResponse>;
  courseParts?: Maybe<CoursePartEntityResponseCollection>;
  courses?: Maybe<CourseEntityResponseCollection>;
  curator?: Maybe<CuratorEntityResponse>;
  curators?: Maybe<CuratorEntityResponseCollection>;
  discipline?: Maybe<DisciplineEntityResponse>;
  disciplines?: Maybe<DisciplineEntityResponseCollection>;
  historyDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  historyDataParsings?: Maybe<HistoryDataParsingEntityResponseCollection>;
  historyRequest?: Maybe<HistoryRequestEntityResponse>;
  historyRequests?: Maybe<HistoryRequestEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  lesson?: Maybe<LessonEntityResponse>;
  lessonKnowledgeConsolidationTask?: Maybe<LessonKnowledgeConsolidationTaskEntityResponse>;
  lessonKnowledgeConsolidationTasks?: Maybe<LessonKnowledgeConsolidationTaskEntityResponseCollection>;
  lessonPracticalTask?: Maybe<LessonPracticalTaskEntityResponse>;
  lessonPracticalTaskAnswer?: Maybe<LessonPracticalTaskAnswerEntityResponse>;
  lessonPracticalTaskAnswers?: Maybe<LessonPracticalTaskAnswerEntityResponseCollection>;
  lessonPracticalTasks?: Maybe<LessonPracticalTaskEntityResponseCollection>;
  lessonProgress?: Maybe<LessonProgressEntityResponse>;
  lessonProgresses?: Maybe<LessonProgressEntityResponseCollection>;
  lessonTest?: Maybe<LessonTestEntityResponse>;
  lessonTestAnswer?: Maybe<LessonTestAnswerEntityResponse>;
  lessonTestAnswers?: Maybe<LessonTestAnswerEntityResponseCollection>;
  lessonTests?: Maybe<LessonTestEntityResponseCollection>;
  lessons?: Maybe<LessonEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  module?: Maybe<ModuleEntityResponse>;
  modules?: Maybe<ModuleEntityResponseCollection>;
  myProfile: MyProfileResponse;
  parent?: Maybe<ParentEntityResponse>;
  parents?: Maybe<ParentEntityResponseCollection>;
  sendFeedback: SendFeedbackResponse;
  student?: Maybe<StudentEntityResponse>;
  studentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  studentTariffPeriods?: Maybe<StudentTariffPeriodEntityResponseCollection>;
  students?: Maybe<StudentEntityResponseCollection>;
  tariff?: Maybe<TariffEntityResponse>;
  tariffs?: Maybe<TariffEntityResponseCollection>;
  teacher?: Maybe<TeacherEntityResponse>;
  teachers?: Maybe<TeacherEntityResponseCollection>;
  theme?: Maybe<ThemeEntityResponse>;
  themes?: Maybe<ThemeEntityResponseCollection>;
  tutor?: Maybe<TutorEntityResponse>;
  tutors?: Maybe<TutorEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  video?: Maybe<VideoEntityResponse>;
  videos?: Maybe<VideoEntityResponseCollection>;
};


export type QueryAdministratorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAdministratorsArgs = {
  filters?: InputMaybe<AdministratorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryAuditLogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAuditLogsArgs = {
  filters?: InputMaybe<AuditLogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCourseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCoursePartArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCoursePartsArgs = {
  filters?: InputMaybe<CoursePartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCuratorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCuratorsArgs = {
  filters?: InputMaybe<CuratorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDisciplineArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDisciplinesArgs = {
  filters?: InputMaybe<DisciplineFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHistoryDataParsingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHistoryDataParsingsArgs = {
  filters?: InputMaybe<HistoryDataParsingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHistoryRequestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHistoryRequestsArgs = {
  filters?: InputMaybe<HistoryRequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonKnowledgeConsolidationTaskArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonKnowledgeConsolidationTasksArgs = {
  filters?: InputMaybe<LessonKnowledgeConsolidationTaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonPracticalTaskArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonPracticalTaskAnswerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonPracticalTaskAnswersArgs = {
  filters?: InputMaybe<LessonPracticalTaskAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonPracticalTasksArgs = {
  filters?: InputMaybe<LessonPracticalTaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonProgressArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonProgressesArgs = {
  filters?: InputMaybe<LessonProgressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonTestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonTestAnswerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonTestAnswersArgs = {
  filters?: InputMaybe<LessonTestAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonTestsArgs = {
  filters?: InputMaybe<LessonTestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModulesArgs = {
  filters?: InputMaybe<ModuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryParentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryParentsArgs = {
  filters?: InputMaybe<ParentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySendFeedbackArgs = {
  data?: InputMaybe<SendFeedbackInput>;
};


export type QueryStudentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStudentTariffPeriodArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStudentTariffPeriodsArgs = {
  filters?: InputMaybe<StudentTariffPeriodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTariffArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTariffsArgs = {
  filters?: InputMaybe<TariffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeacherArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTeachersArgs = {
  filters?: InputMaybe<TeacherFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTutorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTutorsArgs = {
  filters?: InputMaybe<TutorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVideoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Date']['output']>;
  courses?: Maybe<CourseRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curators?: Maybe<CuratorRelationResponseCollection>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  parents?: Maybe<ParentRelationResponseCollection>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  student_tariff_periods?: Maybe<StudentTariffPeriodRelationResponseCollection>;
  tariff?: Maybe<TariffEntityResponse>;
  telegram?: Maybe<Scalars['String']['output']>;
  tutors?: Maybe<TutorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};


export type StudentCoursesArgs = {
  filters?: InputMaybe<CourseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type StudentCuratorsArgs = {
  filters?: InputMaybe<CuratorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type StudentParentsArgs = {
  filters?: InputMaybe<ParentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type StudentStudent_Tariff_PeriodsArgs = {
  filters?: InputMaybe<StudentTariffPeriodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type StudentTutorsArgs = {
  filters?: InputMaybe<TutorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes?: Maybe<Student>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
  data?: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  birthday?: InputMaybe<DateFilterInput>;
  courses?: InputMaybe<CourseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  curators?: InputMaybe<CuratorFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StudentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  parents?: InputMaybe<ParentFiltersInput>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  student_tariff_periods?: InputMaybe<StudentTariffPeriodFiltersInput>;
  tariff?: InputMaybe<TariffFiltersInput>;
  telegram?: InputMaybe<StringFilterInput>;
  tutors?: InputMaybe<TutorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type StudentInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  courses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  curators?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  parents?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  student_tariff_periods?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tariff?: InputMaybe<Scalars['ID']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  tutors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type StudentRelationResponseCollection = {
  __typename?: 'StudentRelationResponseCollection';
  data: Array<StudentEntity>;
};

export type StudentTariffPeriod = {
  __typename?: 'StudentTariffPeriod';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  end: Scalars['Date']['output'];
  start: Scalars['Date']['output'];
  student?: Maybe<StudentEntityResponse>;
  tariff?: Maybe<TariffEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StudentTariffPeriodEntity = {
  __typename?: 'StudentTariffPeriodEntity';
  attributes?: Maybe<StudentTariffPeriod>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type StudentTariffPeriodEntityResponse = {
  __typename?: 'StudentTariffPeriodEntityResponse';
  data?: Maybe<StudentTariffPeriodEntity>;
};

export type StudentTariffPeriodEntityResponseCollection = {
  __typename?: 'StudentTariffPeriodEntityResponseCollection';
  data: Array<StudentTariffPeriodEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentTariffPeriodFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StudentTariffPeriodFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  end?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<StudentTariffPeriodFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StudentTariffPeriodFiltersInput>>>;
  start?: InputMaybe<DateFilterInput>;
  student?: InputMaybe<StudentFiltersInput>;
  tariff?: InputMaybe<TariffFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StudentTariffPeriodInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  student?: InputMaybe<Scalars['ID']['input']>;
  tariff?: InputMaybe<Scalars['ID']['input']>;
};

export type StudentTariffPeriodRelationResponseCollection = {
  __typename?: 'StudentTariffPeriodRelationResponseCollection';
  data: Array<StudentTariffPeriodEntity>;
};

export type Tariff = {
  __typename?: 'Tariff';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
  students?: Maybe<StudentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TariffStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TariffEntity = {
  __typename?: 'TariffEntity';
  attributes?: Maybe<Tariff>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TariffEntityResponse = {
  __typename?: 'TariffEntityResponse';
  data?: Maybe<TariffEntity>;
};

export type TariffEntityResponseCollection = {
  __typename?: 'TariffEntityResponseCollection';
  data: Array<TariffEntity>;
  meta: ResponseCollectionMeta;
};

export type TariffFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TariffFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TariffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TariffFiltersInput>>>;
  students?: InputMaybe<StudentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TariffInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Teacher = {
  __typename?: 'Teacher';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};

export type TeacherEntity = {
  __typename?: 'TeacherEntity';
  attributes?: Maybe<Teacher>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TeacherEntityResponse = {
  __typename?: 'TeacherEntityResponse';
  data?: Maybe<TeacherEntity>;
};

export type TeacherEntityResponseCollection = {
  __typename?: 'TeacherEntityResponseCollection';
  data: Array<TeacherEntity>;
  meta: ResponseCollectionMeta;
};

export type TeacherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeacherFiltersInput>>>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TeacherFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeacherFiltersInput>>>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type TeacherInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type Theme = {
  __typename?: 'Theme';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  lessons?: Maybe<LessonRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ThemeLessonsArgs = {
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  attributes?: Maybe<Theme>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse';
  data?: Maybe<ThemeEntity>;
};

export type ThemeEntityResponseCollection = {
  __typename?: 'ThemeEntityResponseCollection';
  data: Array<ThemeEntity>;
  meta: ResponseCollectionMeta;
};

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lessons?: InputMaybe<LessonFiltersInput>;
  not?: InputMaybe<ThemeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ThemeInput = {
  lessons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Tutor = {
  __typename?: 'Tutor';
  assigned_course_parts?: Maybe<CoursePartRelationResponseCollection>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  students?: Maybe<StudentRelationResponseCollection>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
  vk?: Maybe<Scalars['String']['output']>;
};


export type TutorAssigned_Course_PartsArgs = {
  filters?: InputMaybe<CoursePartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TutorStudentsArgs = {
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TutorEntity = {
  __typename?: 'TutorEntity';
  attributes?: Maybe<Tutor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TutorEntityResponse = {
  __typename?: 'TutorEntityResponse';
  data?: Maybe<TutorEntity>;
};

export type TutorEntityResponseCollection = {
  __typename?: 'TutorEntityResponseCollection';
  data: Array<TutorEntity>;
  meta: ResponseCollectionMeta;
};

export type TutorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TutorFiltersInput>>>;
  assigned_course_parts?: InputMaybe<CoursePartFiltersInput>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TutorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TutorFiltersInput>>>;
  patronymic?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  students?: InputMaybe<StudentFiltersInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type TutorInput = {
  assigned_course_parts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  students?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
};

export type TutorRelationResponseCollection = {
  __typename?: 'TutorRelationResponseCollection';
  data: Array<TutorEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  administrator?: Maybe<AdministratorEntityResponse>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curator?: Maybe<CuratorEntityResponse>;
  email: Scalars['String']['output'];
  parent?: Maybe<ParentEntityResponse>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  student?: Maybe<StudentEntityResponse>;
  teacher?: Maybe<TeacherEntityResponse>;
  tutor?: Maybe<TutorEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  administrator?: InputMaybe<AdministratorFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  curator?: InputMaybe<CuratorFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  parent?: InputMaybe<ParentFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  student?: InputMaybe<StudentFiltersInput>;
  teacher?: InputMaybe<TeacherFiltersInput>;
  tutor?: InputMaybe<TutorFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  administrator?: InputMaybe<Scalars['ID']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  curator?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  student?: InputMaybe<Scalars['ID']['input']>;
  teacher?: InputMaybe<Scalars['ID']['input']>;
  tutor?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Video = {
  __typename?: 'Video';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename: Scalars['String']['output'];
  hls: Scalars['String']['output'];
  originalVideoUri: Scalars['String']['output'];
  postProcessStatus: Enum_Video_Postprocessstatus;
  shortCode: Scalars['String']['output'];
  thumb: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VideoEntity = {
  __typename?: 'VideoEntity';
  attributes?: Maybe<Video>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VideoEntityResponse = {
  __typename?: 'VideoEntityResponse';
  data?: Maybe<VideoEntity>;
};

export type VideoEntityResponseCollection = {
  __typename?: 'VideoEntityResponseCollection';
  data: Array<VideoEntity>;
  meta: ResponseCollectionMeta;
};

export type VideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  filename?: InputMaybe<StringFilterInput>;
  hls?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  originalVideoUri?: InputMaybe<StringFilterInput>;
  postProcessStatus?: InputMaybe<StringFilterInput>;
  shortCode?: InputMaybe<StringFilterInput>;
  thumb?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VideoInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  hls?: InputMaybe<Scalars['String']['input']>;
  originalVideoUri?: InputMaybe<Scalars['String']['input']>;
  postProcessStatus?: InputMaybe<Enum_Video_Postprocessstatus>;
  shortCode?: InputMaybe<Scalars['String']['input']>;
  thumb?: InputMaybe<Scalars['String']['input']>;
};

export type GetParsingDataResponse = {
  __typename?: 'getParsingDataResponse';
  json?: Maybe<Scalars['JSON']['output']>;
};

export type SendFeedbackInput = {
  email: Scalars['String']['input'];
  text: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SendFeedbackResponse = {
  __typename?: 'sendFeedbackResponse';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AuditLogAuthorFragment = { __typename?: 'UsersPermissionsUser', administrator?: { __typename?: 'AdministratorEntityResponse', data?: { __typename?: 'AdministratorEntity', id?: string | null, attributes?: { __typename?: 'Administrator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, tutor?: { __typename?: 'TutorEntityResponse', data?: { __typename?: 'TutorEntity', id?: string | null, attributes?: { __typename?: 'Tutor', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null, attributes?: { __typename?: 'Teacher', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, parent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, curator?: { __typename?: 'CuratorEntityResponse', data?: { __typename?: 'CuratorEntity', id?: string | null, attributes?: { __typename?: 'Curator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null };

export type GetAuditLogQueryVariables = Exact<{
  filters?: InputMaybe<AuditLogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAuditLogQuery = { __typename?: 'Query', auditLogs?: { __typename?: 'AuditLogEntityResponseCollection', data: Array<{ __typename?: 'AuditLogEntity', id?: string | null, attributes?: { __typename?: 'AuditLog', action: Enum_Auditlog_Action, createdAt?: any | null, contentType: string, entityId?: number | null, params?: any | null, result?: any | null, updatedAt?: any | null, userAuthor?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', administrator?: { __typename?: 'AdministratorEntityResponse', data?: { __typename?: 'AdministratorEntity', id?: string | null, attributes?: { __typename?: 'Administrator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, tutor?: { __typename?: 'TutorEntityResponse', data?: { __typename?: 'TutorEntity', id?: string | null, attributes?: { __typename?: 'Tutor', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null, attributes?: { __typename?: 'Teacher', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, parent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, curator?: { __typename?: 'CuratorEntityResponse', data?: { __typename?: 'CuratorEntity', id?: string | null, attributes?: { __typename?: 'Curator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null } | null } | null };

export type EditCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: CommentInput;
}>;


export type EditCommentMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null } | null } | null };

export type CommentAuthorFragment = { __typename?: 'UsersPermissionsUser', administrator?: { __typename?: 'AdministratorEntityResponse', data?: { __typename?: 'AdministratorEntity', id?: string | null, attributes?: { __typename?: 'Administrator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, tutor?: { __typename?: 'TutorEntityResponse', data?: { __typename?: 'TutorEntity', id?: string | null, attributes?: { __typename?: 'Tutor', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null, attributes?: { __typename?: 'Teacher', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, parent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, curator?: { __typename?: 'CuratorEntityResponse', data?: { __typename?: 'CuratorEntity', id?: string | null, attributes?: { __typename?: 'Curator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null };

export type GetCommentsQueryVariables = Exact<{
  subjectContentType: Scalars['String']['input'];
  subjectContentTypeId: Scalars['String']['input'];
  pagination?: InputMaybe<PaginationArg>;
}>;


export type GetCommentsQuery = { __typename?: 'Query', comments?: { __typename?: 'CommentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageSize: number, page: number, pageCount: number, total: number } }, data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', text?: string | null, attaches?: any | null, createdAt?: any | null, updatedAt?: any | null, subjectContentType: Enum_Comment_Subjectcontenttype, subjectContentTypeId: string, authorUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', administrator?: { __typename?: 'AdministratorEntityResponse', data?: { __typename?: 'AdministratorEntity', id?: string | null, attributes?: { __typename?: 'Administrator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, tutor?: { __typename?: 'TutorEntityResponse', data?: { __typename?: 'TutorEntity', id?: string | null, attributes?: { __typename?: 'Tutor', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, teacher?: { __typename?: 'TeacherEntityResponse', data?: { __typename?: 'TeacherEntity', id?: string | null, attributes?: { __typename?: 'Teacher', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, parent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null, curator?: { __typename?: 'CuratorEntityResponse', data?: { __typename?: 'CuratorEntity', id?: string | null, attributes?: { __typename?: 'Curator', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, avatarUrl?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type RemoveCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveCommentMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null } | null } | null };

export type CreateHistoryDataParsingMutationVariables = Exact<{
  data: HistoryDataParsingInput;
}>;


export type CreateHistoryDataParsingMutation = { __typename?: 'Mutation', createHistoryDataParsing?: { __typename?: 'HistoryDataParsingEntityResponse', data?: { __typename?: 'HistoryDataParsingEntity', id?: string | null } | null } | null };

export type CreateHistoryRequestMutationVariables = Exact<{
  data: HistoryRequestInput;
}>;


export type CreateHistoryRequestMutation = { __typename?: 'Mutation', createHistoryRequest?: { __typename?: 'HistoryRequestEntityResponse', data?: { __typename?: 'HistoryRequestEntity', id?: string | null } | null } | null };

export type GetParsingDataMutationVariables = Exact<{
  data: HistoryRequestInput;
}>;


export type GetParsingDataMutation = { __typename?: 'Mutation', getParsingData: { __typename?: 'getParsingDataResponse', json?: any | null } };

export type GetProfile_DpQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfile_DpQuery = { __typename?: 'Query', myProfile: { __typename?: 'MyProfileResponse', id: string, userId: string, firstname?: string | null, lastname?: string | null, patronymic?: string | null, avatarUrl?: string | null, email: string, role: { __typename?: 'MyProfileRole', id: string, name: string } } };

export type SendFeedbackDataQueryVariables = Exact<{
  data: SendFeedbackInput;
}>;


export type SendFeedbackDataQuery = { __typename?: 'Query', sendFeedback: { __typename?: 'sendFeedbackResponse', status?: boolean | null } };

export type CreateDisciplineMutationVariables = Exact<{
  data: DisciplineInput;
}>;


export type CreateDisciplineMutation = { __typename?: 'Mutation', createDiscipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null };

export type GetAllDisciplinesQueryVariables = Exact<{
  filters?: InputMaybe<DisciplineFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAllDisciplinesQuery = { __typename?: 'Query', disciplines?: { __typename?: 'DisciplineEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } }, data: Array<{ __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null }> } | null };

export type UpdateDisciplineMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: DisciplineInput;
}>;


export type UpdateDisciplineMutation = { __typename?: 'Mutation', updateDiscipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null };

export type CreateLessonMutationVariables = Exact<{
  data: LessonInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson?: { __typename?: 'LessonEntityResponse', data?: { __typename?: 'LessonEntity', id?: string | null, attributes?: { __typename?: 'Lesson', title: string } | null } | null } | null };

export type CreateLessonKnowledgeConsolidationTaskMutationVariables = Exact<{
  data: LessonKnowledgeConsolidationTaskInput;
}>;


export type CreateLessonKnowledgeConsolidationTaskMutation = { __typename?: 'Mutation', createLessonKnowledgeConsolidationTask?: { __typename?: 'LessonKnowledgeConsolidationTaskEntityResponse', data?: { __typename?: 'LessonKnowledgeConsolidationTaskEntity', id?: string | null } | null } | null };

export type CreateLessonPracticalTaskMutationVariables = Exact<{
  data: LessonPracticalTaskInput;
}>;


export type CreateLessonPracticalTaskMutation = { __typename?: 'Mutation', createLessonPracticalTask?: { __typename?: 'LessonPracticalTaskEntityResponse', data?: { __typename?: 'LessonPracticalTaskEntity', id?: string | null } | null } | null };

export type CreateLessonTestMutationVariables = Exact<{
  data: LessonTestInput;
}>;


export type CreateLessonTestMutation = { __typename?: 'Mutation', createLessonTest?: { __typename?: 'LessonTestEntityResponse', data?: { __typename?: 'LessonTestEntity', id?: string | null } | null } | null };

export type GetAllLessonsQueryVariables = Exact<{
  filters?: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAllLessonsQuery = { __typename?: 'Query', lessons?: { __typename?: 'LessonEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } }, data: Array<{ __typename?: 'LessonEntity', id?: string | null, attributes?: { __typename?: 'Lesson', title: string, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', title: string } | null } | null } | null, module?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', age: number, title: string, discipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type GetLessonByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetLessonByIdQuery = { __typename?: 'Query', lesson?: { __typename?: 'LessonEntityResponse', data?: { __typename?: 'LessonEntity', id?: string | null, attributes?: { __typename?: 'Lesson', title: string, goalText: string, intoLeftContent: any, intoRightContent: any, theoryContent: any, outroContent: any, numberOfTestAttemptsForLesson: number, testSpoilerText: string, nextLessonSpoiler: string, module?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null } | null } | null, theme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null } | null } | null, lessonTest?: { __typename?: 'LessonTestEntityResponse', data?: { __typename?: 'LessonTestEntity', id?: string | null, attributes?: { __typename?: 'LessonTest', questions: any, rightAnswers: any } | null } | null } | null, lessonPracticalTask?: { __typename?: 'LessonPracticalTaskEntityResponse', data?: { __typename?: 'LessonPracticalTaskEntity', id?: string | null, attributes?: { __typename?: 'LessonPracticalTask', questions: any, rightAnswers: any, deadlineDaysAfterFinishTest: number } | null } | null } | null, lessonKnowledgeConsolidationTask?: { __typename?: 'LessonKnowledgeConsolidationTaskEntityResponse', data?: { __typename?: 'LessonKnowledgeConsolidationTaskEntity', id?: string | null, attributes?: { __typename?: 'LessonKnowledgeConsolidationTask', questions: any, rightAnswers: any } | null } | null } | null } | null } | null } | null };

export type UpdateLessonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: LessonInput;
}>;


export type UpdateLessonMutation = { __typename?: 'Mutation', updateLesson?: { __typename?: 'LessonEntityResponse', data?: { __typename?: 'LessonEntity', id?: string | null, attributes?: { __typename?: 'Lesson', title: string } | null } | null } | null };

export type UpdateLessonKnowledgeConsolidationTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: LessonKnowledgeConsolidationTaskInput;
}>;


export type UpdateLessonKnowledgeConsolidationTaskMutation = { __typename?: 'Mutation', updateLessonKnowledgeConsolidationTask?: { __typename?: 'LessonKnowledgeConsolidationTaskEntityResponse', data?: { __typename?: 'LessonKnowledgeConsolidationTaskEntity', id?: string | null } | null } | null };

export type UpdateLessonPracticalTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: LessonPracticalTaskInput;
}>;


export type UpdateLessonPracticalTaskMutation = { __typename?: 'Mutation', updateLessonPracticalTask?: { __typename?: 'LessonPracticalTaskEntityResponse', data?: { __typename?: 'LessonPracticalTaskEntity', id?: string | null } | null } | null };

export type UpdateLessonTestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: LessonTestInput;
}>;


export type UpdateLessonTestMutation = { __typename?: 'Mutation', updateLessonTest?: { __typename?: 'LessonTestEntityResponse', data?: { __typename?: 'LessonTestEntity', id?: string | null } | null } | null };

export type CreateModuleMutationVariables = Exact<{
  data: ModuleInput;
}>;


export type CreateModuleMutation = { __typename?: 'Mutation', createModule?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', age: number, title: string, discipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null } | null } | null } | null };

export type GetAllModulesQueryVariables = Exact<{
  filters?: InputMaybe<ModuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAllModulesQuery = { __typename?: 'Query', modules?: { __typename?: 'ModuleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } }, data: Array<{ __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', title: string, age: number, discipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null } | null }> } | null };

export type UpdateModuleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: ModuleInput;
}>;


export type UpdateModuleMutation = { __typename?: 'Mutation', updateModule?: { __typename?: 'ModuleEntityResponse', data?: { __typename?: 'ModuleEntity', id?: string | null, attributes?: { __typename?: 'Module', age: number, title: string, discipline?: { __typename?: 'DisciplineEntityResponse', data?: { __typename?: 'DisciplineEntity', id?: string | null, attributes?: { __typename?: 'Discipline', title: string } | null } | null } | null } | null } | null } | null };

export type CreateThemeMutationVariables = Exact<{
  data: ThemeInput;
}>;


export type CreateThemeMutation = { __typename?: 'Mutation', createTheme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', title: string } | null } | null } | null };

export type GetAllThemesQueryVariables = Exact<{
  filters?: InputMaybe<ThemeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAllThemesQuery = { __typename?: 'Query', themes?: { __typename?: 'ThemeEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } }, data: Array<{ __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', title: string } | null }> } | null };

export type UpdateThemeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: ThemeInput;
}>;


export type UpdateThemeMutation = { __typename?: 'Mutation', updateTheme?: { __typename?: 'ThemeEntityResponse', data?: { __typename?: 'ThemeEntity', id?: string | null, attributes?: { __typename?: 'Theme', title: string } | null } | null } | null };

export type CreateParentMutationVariables = Exact<{
  data: ParentInput;
}>;


export type CreateParentMutation = { __typename?: 'Mutation', createParent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null } | null } | null };

export type CreateStudentMutationVariables = Exact<{
  data: StudentInput;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null } | null } | null };

export type GetParentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetParentByIdQuery = { __typename?: 'Query', parent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null, email: string } | null } | null } | null, children?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null } | null }> } | null } | null } | null } | null };

export type GetParentsQueryVariables = Exact<{
  filters?: InputMaybe<ParentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetParentsQuery = { __typename?: 'Query', parents?: { __typename?: 'ParentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageSize: number, page: number, pageCount: number, total: number } }, data: Array<{ __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null, email: string } | null } | null } | null, children?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null } | null }> } | null } | null }> } | null };

export type GetParentsToSelectorQueryVariables = Exact<{
  filters?: InputMaybe<ParentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetParentsToSelectorQuery = { __typename?: 'Query', parents?: { __typename?: 'ParentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageSize: number, page: number, pageCount: number, total: number } }, data: Array<{ __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', firstname?: string | null, lastname?: string | null, patronymic?: string | null, avatarUrl?: string | null } | null }> } | null };

export type GetStudentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStudentByIdQuery = { __typename?: 'Query', student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null, birthday?: any | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null, email: string } | null } | null } | null, tariff?: { __typename?: 'TariffEntityResponse', data?: { __typename?: 'TariffEntity', id?: string | null } | null } | null, parents?: { __typename?: 'ParentRelationResponseCollection', data: Array<{ __typename?: 'ParentEntity', id?: string | null }> } | null } | null } | null } | null };

export type GetStudentsQueryVariables = Exact<{
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetStudentsQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageSize: number, page: number, pageCount: number, total: number } }, data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, email: string, phone?: string | null, telegram?: string | null, vk?: string | null, avatarUrl?: string | null, birthday?: any | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null, email: string } | null } | null } | null, parents?: { __typename?: 'ParentRelationResponseCollection', data: Array<{ __typename?: 'ParentEntity', id?: string | null, attributes?: { __typename?: 'Parent', avatarUrl?: string | null, firstname?: string | null, lastname?: string | null, patronymic?: string | null } | null }> } | null, tariff?: { __typename?: 'TariffEntityResponse', data?: { __typename?: 'TariffEntity', id?: string | null, attributes?: { __typename?: 'Tariff', name: string } | null } | null } | null } | null }> } | null };

export type GetStudentsToSelectorQueryVariables = Exact<{
  filters?: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetStudentsToSelectorQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageSize: number, page: number, pageCount: number, total: number } }, data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, patronymic?: string | null, avatarUrl?: string | null } | null }> } | null };

export type GetTariffsToSelectorQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTariffsToSelectorQuery = { __typename?: 'Query', tariffs?: { __typename?: 'TariffEntityResponseCollection', data: Array<{ __typename?: 'TariffEntity', id?: string | null, attributes?: { __typename?: 'Tariff', name: string } | null }> } | null };

export type UpdateParentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: ParentInput;
}>;


export type UpdateParentMutation = { __typename?: 'Mutation', updateParent?: { __typename?: 'ParentEntityResponse', data?: { __typename?: 'ParentEntity', id?: string | null } | null } | null };

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: StudentInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null } | null } | null };

export type UpdateUserBlockMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  blocked: Scalars['Boolean']['input'];
}>;


export type UpdateUserBlockMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null } | null } | null } };

export type UpdateUserPasswordMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', blocked?: boolean | null } | null } | null } };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, blocked?: boolean | null } } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'UsersPermissionsPasswordPayload', ok: boolean } | null };

export type ResetPasswordMutationVariables = Exact<{
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, blocked?: boolean | null } } | null };

export const AuditLogAuthorFragmentDoc = gql`
    fragment AuditLogAuthor on UsersPermissionsUser {
  administrator {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  tutor {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  teacher {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  student {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  parent {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  curator {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
}
    `;
export const CommentAuthorFragmentDoc = gql`
    fragment CommentAuthor on UsersPermissionsUser {
  administrator {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  tutor {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  teacher {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  student {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  parent {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
  curator {
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        email
        avatarUrl
      }
    }
  }
}
    `;
export const GetAuditLogDocument = gql`
    query getAuditLog($filters: AuditLogFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  auditLogs(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        action
        createdAt
        contentType
        entityId
        params
        result
        updatedAt
        userAuthor {
          data {
            id
            attributes {
              ...AuditLogAuthor
            }
          }
        }
      }
    }
  }
}
    ${AuditLogAuthorFragmentDoc}`;

/**
 * __useGetAuditLogQuery__
 *
 * To run a query within a React component, call `useGetAuditLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuditLogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuditLogQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAuditLogQuery(baseOptions?: Apollo.QueryHookOptions<GetAuditLogQuery, GetAuditLogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuditLogQuery, GetAuditLogQueryVariables>(GetAuditLogDocument, options);
      }
export function useGetAuditLogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuditLogQuery, GetAuditLogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuditLogQuery, GetAuditLogQueryVariables>(GetAuditLogDocument, options);
        }
export type GetAuditLogQueryHookResult = ReturnType<typeof useGetAuditLogQuery>;
export type GetAuditLogLazyQueryHookResult = ReturnType<typeof useGetAuditLogLazyQuery>;
export type GetAuditLogQueryResult = Apollo.QueryResult<GetAuditLogQuery, GetAuditLogQueryVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($data: CommentInput!) {
  createComment(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const EditCommentDocument = gql`
    mutation editComment($id: ID!, $data: CommentInput!) {
  updateComment(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
export const GetCommentsDocument = gql`
    query getComments($subjectContentType: String!, $subjectContentTypeId: String!, $pagination: PaginationArg = {}) {
  comments(
    filters: {subjectContentTypeId: {eq: $subjectContentTypeId}, subjectContentType: {eq: $subjectContentType}, isDeleted: {eq: false}}
    pagination: $pagination
    sort: ["id:DESC"]
  ) {
    meta {
      pagination {
        pageSize
        page
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        text
        attaches
        createdAt
        updatedAt
        subjectContentType
        subjectContentTypeId
        authorUser {
          data {
            id
            attributes {
              ...CommentAuthor
            }
          }
        }
      }
    }
  }
}
    ${CommentAuthorFragmentDoc}`;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      subjectContentType: // value for 'subjectContentType'
 *      subjectContentTypeId: // value for 'subjectContentTypeId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const RemoveCommentDocument = gql`
    mutation removeComment($id: ID!) {
  updateComment(id: $id, data: {isDeleted: true}) {
    data {
      id
    }
  }
}
    `;
export type RemoveCommentMutationFn = Apollo.MutationFunction<RemoveCommentMutation, RemoveCommentMutationVariables>;

/**
 * __useRemoveCommentMutation__
 *
 * To run a mutation, you first call `useRemoveCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentMutation, { data, loading, error }] = useRemoveCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCommentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCommentMutation, RemoveCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCommentMutation, RemoveCommentMutationVariables>(RemoveCommentDocument, options);
      }
export type RemoveCommentMutationHookResult = ReturnType<typeof useRemoveCommentMutation>;
export type RemoveCommentMutationResult = Apollo.MutationResult<RemoveCommentMutation>;
export type RemoveCommentMutationOptions = Apollo.BaseMutationOptions<RemoveCommentMutation, RemoveCommentMutationVariables>;
export const CreateHistoryDataParsingDocument = gql`
    mutation createHistoryDataParsing($data: HistoryDataParsingInput!) {
  createHistoryDataParsing(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateHistoryDataParsingMutationFn = Apollo.MutationFunction<CreateHistoryDataParsingMutation, CreateHistoryDataParsingMutationVariables>;

/**
 * __useCreateHistoryDataParsingMutation__
 *
 * To run a mutation, you first call `useCreateHistoryDataParsingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHistoryDataParsingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHistoryDataParsingMutation, { data, loading, error }] = useCreateHistoryDataParsingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateHistoryDataParsingMutation(baseOptions?: Apollo.MutationHookOptions<CreateHistoryDataParsingMutation, CreateHistoryDataParsingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHistoryDataParsingMutation, CreateHistoryDataParsingMutationVariables>(CreateHistoryDataParsingDocument, options);
      }
export type CreateHistoryDataParsingMutationHookResult = ReturnType<typeof useCreateHistoryDataParsingMutation>;
export type CreateHistoryDataParsingMutationResult = Apollo.MutationResult<CreateHistoryDataParsingMutation>;
export type CreateHistoryDataParsingMutationOptions = Apollo.BaseMutationOptions<CreateHistoryDataParsingMutation, CreateHistoryDataParsingMutationVariables>;
export const CreateHistoryRequestDocument = gql`
    mutation createHistoryRequest($data: HistoryRequestInput!) {
  createHistoryRequest(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateHistoryRequestMutationFn = Apollo.MutationFunction<CreateHistoryRequestMutation, CreateHistoryRequestMutationVariables>;

/**
 * __useCreateHistoryRequestMutation__
 *
 * To run a mutation, you first call `useCreateHistoryRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHistoryRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHistoryRequestMutation, { data, loading, error }] = useCreateHistoryRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateHistoryRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateHistoryRequestMutation, CreateHistoryRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHistoryRequestMutation, CreateHistoryRequestMutationVariables>(CreateHistoryRequestDocument, options);
      }
export type CreateHistoryRequestMutationHookResult = ReturnType<typeof useCreateHistoryRequestMutation>;
export type CreateHistoryRequestMutationResult = Apollo.MutationResult<CreateHistoryRequestMutation>;
export type CreateHistoryRequestMutationOptions = Apollo.BaseMutationOptions<CreateHistoryRequestMutation, CreateHistoryRequestMutationVariables>;
export const GetParsingDataDocument = gql`
    mutation getParsingData($data: HistoryRequestInput!) {
  getParsingData(data: $data) {
    json
  }
}
    `;
export type GetParsingDataMutationFn = Apollo.MutationFunction<GetParsingDataMutation, GetParsingDataMutationVariables>;

/**
 * __useGetParsingDataMutation__
 *
 * To run a mutation, you first call `useGetParsingDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetParsingDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getParsingDataMutation, { data, loading, error }] = useGetParsingDataMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetParsingDataMutation(baseOptions?: Apollo.MutationHookOptions<GetParsingDataMutation, GetParsingDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetParsingDataMutation, GetParsingDataMutationVariables>(GetParsingDataDocument, options);
      }
export type GetParsingDataMutationHookResult = ReturnType<typeof useGetParsingDataMutation>;
export type GetParsingDataMutationResult = Apollo.MutationResult<GetParsingDataMutation>;
export type GetParsingDataMutationOptions = Apollo.BaseMutationOptions<GetParsingDataMutation, GetParsingDataMutationVariables>;
export const GetProfile_DpDocument = gql`
    query getProfile_dp {
  myProfile {
    id
    userId
    firstname
    lastname
    patronymic
    avatarUrl
    email
    role {
      id
      name
    }
  }
}
    `;

/**
 * __useGetProfile_DpQuery__
 *
 * To run a query within a React component, call `useGetProfile_DpQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfile_DpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfile_DpQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfile_DpQuery(baseOptions?: Apollo.QueryHookOptions<GetProfile_DpQuery, GetProfile_DpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfile_DpQuery, GetProfile_DpQueryVariables>(GetProfile_DpDocument, options);
      }
export function useGetProfile_DpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfile_DpQuery, GetProfile_DpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfile_DpQuery, GetProfile_DpQueryVariables>(GetProfile_DpDocument, options);
        }
export type GetProfile_DpQueryHookResult = ReturnType<typeof useGetProfile_DpQuery>;
export type GetProfile_DpLazyQueryHookResult = ReturnType<typeof useGetProfile_DpLazyQuery>;
export type GetProfile_DpQueryResult = Apollo.QueryResult<GetProfile_DpQuery, GetProfile_DpQueryVariables>;
export const SendFeedbackDataDocument = gql`
    query sendFeedbackData($data: sendFeedbackInput!) {
  sendFeedback(data: $data) {
    status
  }
}
    `;

/**
 * __useSendFeedbackDataQuery__
 *
 * To run a query within a React component, call `useSendFeedbackDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSendFeedbackDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSendFeedbackDataQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendFeedbackDataQuery(baseOptions: Apollo.QueryHookOptions<SendFeedbackDataQuery, SendFeedbackDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SendFeedbackDataQuery, SendFeedbackDataQueryVariables>(SendFeedbackDataDocument, options);
      }
export function useSendFeedbackDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SendFeedbackDataQuery, SendFeedbackDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SendFeedbackDataQuery, SendFeedbackDataQueryVariables>(SendFeedbackDataDocument, options);
        }
export type SendFeedbackDataQueryHookResult = ReturnType<typeof useSendFeedbackDataQuery>;
export type SendFeedbackDataLazyQueryHookResult = ReturnType<typeof useSendFeedbackDataLazyQuery>;
export type SendFeedbackDataQueryResult = Apollo.QueryResult<SendFeedbackDataQuery, SendFeedbackDataQueryVariables>;
export const CreateDisciplineDocument = gql`
    mutation createDiscipline($data: DisciplineInput!) {
  createDiscipline(data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type CreateDisciplineMutationFn = Apollo.MutationFunction<CreateDisciplineMutation, CreateDisciplineMutationVariables>;

/**
 * __useCreateDisciplineMutation__
 *
 * To run a mutation, you first call `useCreateDisciplineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDisciplineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDisciplineMutation, { data, loading, error }] = useCreateDisciplineMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDisciplineMutation(baseOptions?: Apollo.MutationHookOptions<CreateDisciplineMutation, CreateDisciplineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDisciplineMutation, CreateDisciplineMutationVariables>(CreateDisciplineDocument, options);
      }
export type CreateDisciplineMutationHookResult = ReturnType<typeof useCreateDisciplineMutation>;
export type CreateDisciplineMutationResult = Apollo.MutationResult<CreateDisciplineMutation>;
export type CreateDisciplineMutationOptions = Apollo.BaseMutationOptions<CreateDisciplineMutation, CreateDisciplineMutationVariables>;
export const GetAllDisciplinesDocument = gql`
    query getAllDisciplines($filters: DisciplineFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  disciplines(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        page
        pageCount
        pageSize
        total
      }
    }
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;

/**
 * __useGetAllDisciplinesQuery__
 *
 * To run a query within a React component, call `useGetAllDisciplinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDisciplinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDisciplinesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllDisciplinesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDisciplinesQuery, GetAllDisciplinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDisciplinesQuery, GetAllDisciplinesQueryVariables>(GetAllDisciplinesDocument, options);
      }
export function useGetAllDisciplinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDisciplinesQuery, GetAllDisciplinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDisciplinesQuery, GetAllDisciplinesQueryVariables>(GetAllDisciplinesDocument, options);
        }
export type GetAllDisciplinesQueryHookResult = ReturnType<typeof useGetAllDisciplinesQuery>;
export type GetAllDisciplinesLazyQueryHookResult = ReturnType<typeof useGetAllDisciplinesLazyQuery>;
export type GetAllDisciplinesQueryResult = Apollo.QueryResult<GetAllDisciplinesQuery, GetAllDisciplinesQueryVariables>;
export const UpdateDisciplineDocument = gql`
    mutation updateDiscipline($id: ID!, $data: DisciplineInput!) {
  updateDiscipline(id: $id, data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type UpdateDisciplineMutationFn = Apollo.MutationFunction<UpdateDisciplineMutation, UpdateDisciplineMutationVariables>;

/**
 * __useUpdateDisciplineMutation__
 *
 * To run a mutation, you first call `useUpdateDisciplineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDisciplineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDisciplineMutation, { data, loading, error }] = useUpdateDisciplineMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateDisciplineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDisciplineMutation, UpdateDisciplineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDisciplineMutation, UpdateDisciplineMutationVariables>(UpdateDisciplineDocument, options);
      }
export type UpdateDisciplineMutationHookResult = ReturnType<typeof useUpdateDisciplineMutation>;
export type UpdateDisciplineMutationResult = Apollo.MutationResult<UpdateDisciplineMutation>;
export type UpdateDisciplineMutationOptions = Apollo.BaseMutationOptions<UpdateDisciplineMutation, UpdateDisciplineMutationVariables>;
export const CreateLessonDocument = gql`
    mutation createLesson($data: LessonInput!) {
  createLesson(data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, options);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;
export const CreateLessonKnowledgeConsolidationTaskDocument = gql`
    mutation createLessonKnowledgeConsolidationTask($data: LessonKnowledgeConsolidationTaskInput!) {
  createLessonKnowledgeConsolidationTask(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateLessonKnowledgeConsolidationTaskMutationFn = Apollo.MutationFunction<CreateLessonKnowledgeConsolidationTaskMutation, CreateLessonKnowledgeConsolidationTaskMutationVariables>;

/**
 * __useCreateLessonKnowledgeConsolidationTaskMutation__
 *
 * To run a mutation, you first call `useCreateLessonKnowledgeConsolidationTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonKnowledgeConsolidationTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonKnowledgeConsolidationTaskMutation, { data, loading, error }] = useCreateLessonKnowledgeConsolidationTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLessonKnowledgeConsolidationTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonKnowledgeConsolidationTaskMutation, CreateLessonKnowledgeConsolidationTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonKnowledgeConsolidationTaskMutation, CreateLessonKnowledgeConsolidationTaskMutationVariables>(CreateLessonKnowledgeConsolidationTaskDocument, options);
      }
export type CreateLessonKnowledgeConsolidationTaskMutationHookResult = ReturnType<typeof useCreateLessonKnowledgeConsolidationTaskMutation>;
export type CreateLessonKnowledgeConsolidationTaskMutationResult = Apollo.MutationResult<CreateLessonKnowledgeConsolidationTaskMutation>;
export type CreateLessonKnowledgeConsolidationTaskMutationOptions = Apollo.BaseMutationOptions<CreateLessonKnowledgeConsolidationTaskMutation, CreateLessonKnowledgeConsolidationTaskMutationVariables>;
export const CreateLessonPracticalTaskDocument = gql`
    mutation createLessonPracticalTask($data: LessonPracticalTaskInput!) {
  createLessonPracticalTask(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateLessonPracticalTaskMutationFn = Apollo.MutationFunction<CreateLessonPracticalTaskMutation, CreateLessonPracticalTaskMutationVariables>;

/**
 * __useCreateLessonPracticalTaskMutation__
 *
 * To run a mutation, you first call `useCreateLessonPracticalTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonPracticalTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonPracticalTaskMutation, { data, loading, error }] = useCreateLessonPracticalTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLessonPracticalTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonPracticalTaskMutation, CreateLessonPracticalTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonPracticalTaskMutation, CreateLessonPracticalTaskMutationVariables>(CreateLessonPracticalTaskDocument, options);
      }
export type CreateLessonPracticalTaskMutationHookResult = ReturnType<typeof useCreateLessonPracticalTaskMutation>;
export type CreateLessonPracticalTaskMutationResult = Apollo.MutationResult<CreateLessonPracticalTaskMutation>;
export type CreateLessonPracticalTaskMutationOptions = Apollo.BaseMutationOptions<CreateLessonPracticalTaskMutation, CreateLessonPracticalTaskMutationVariables>;
export const CreateLessonTestDocument = gql`
    mutation createLessonTest($data: LessonTestInput!) {
  createLessonTest(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateLessonTestMutationFn = Apollo.MutationFunction<CreateLessonTestMutation, CreateLessonTestMutationVariables>;

/**
 * __useCreateLessonTestMutation__
 *
 * To run a mutation, you first call `useCreateLessonTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonTestMutation, { data, loading, error }] = useCreateLessonTestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLessonTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonTestMutation, CreateLessonTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonTestMutation, CreateLessonTestMutationVariables>(CreateLessonTestDocument, options);
      }
export type CreateLessonTestMutationHookResult = ReturnType<typeof useCreateLessonTestMutation>;
export type CreateLessonTestMutationResult = Apollo.MutationResult<CreateLessonTestMutation>;
export type CreateLessonTestMutationOptions = Apollo.BaseMutationOptions<CreateLessonTestMutation, CreateLessonTestMutationVariables>;
export const GetAllLessonsDocument = gql`
    query getAllLessons($filters: LessonFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  lessons(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        page
        pageCount
        pageSize
        total
      }
    }
    data {
      id
      attributes {
        title
        theme {
          data {
            id
            attributes {
              title
            }
          }
        }
        module {
          data {
            id
            attributes {
              age
              title
              discipline {
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllLessonsQuery__
 *
 * To run a query within a React component, call `useGetAllLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLessonsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllLessonsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLessonsQuery, GetAllLessonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLessonsQuery, GetAllLessonsQueryVariables>(GetAllLessonsDocument, options);
      }
export function useGetAllLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLessonsQuery, GetAllLessonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLessonsQuery, GetAllLessonsQueryVariables>(GetAllLessonsDocument, options);
        }
export type GetAllLessonsQueryHookResult = ReturnType<typeof useGetAllLessonsQuery>;
export type GetAllLessonsLazyQueryHookResult = ReturnType<typeof useGetAllLessonsLazyQuery>;
export type GetAllLessonsQueryResult = Apollo.QueryResult<GetAllLessonsQuery, GetAllLessonsQueryVariables>;
export const GetLessonByIdDocument = gql`
    query getLessonById($id: ID!) {
  lesson(id: $id) {
    data {
      id
      attributes {
        title
        module {
          data {
            id
          }
        }
        theme {
          data {
            id
          }
        }
        goalText
        intoLeftContent
        intoRightContent
        theoryContent
        outroContent
        numberOfTestAttemptsForLesson
        testSpoilerText
        nextLessonSpoiler
        lessonTest {
          data {
            id
            attributes {
              questions
              rightAnswers
            }
          }
        }
        lessonPracticalTask {
          data {
            id
            attributes {
              questions
              rightAnswers
              deadlineDaysAfterFinishTest
            }
          }
        }
        lessonKnowledgeConsolidationTask {
          data {
            id
            attributes {
              questions
              rightAnswers
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetLessonByIdQuery__
 *
 * To run a query within a React component, call `useGetLessonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLessonByIdQuery(baseOptions: Apollo.QueryHookOptions<GetLessonByIdQuery, GetLessonByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonByIdQuery, GetLessonByIdQueryVariables>(GetLessonByIdDocument, options);
      }
export function useGetLessonByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonByIdQuery, GetLessonByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonByIdQuery, GetLessonByIdQueryVariables>(GetLessonByIdDocument, options);
        }
export type GetLessonByIdQueryHookResult = ReturnType<typeof useGetLessonByIdQuery>;
export type GetLessonByIdLazyQueryHookResult = ReturnType<typeof useGetLessonByIdLazyQuery>;
export type GetLessonByIdQueryResult = Apollo.QueryResult<GetLessonByIdQuery, GetLessonByIdQueryVariables>;
export const UpdateLessonDocument = gql`
    mutation updateLesson($id: ID!, $data: LessonInput!) {
  updateLesson(id: $id, data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type UpdateLessonMutationFn = Apollo.MutationFunction<UpdateLessonMutation, UpdateLessonMutationVariables>;

/**
 * __useUpdateLessonMutation__
 *
 * To run a mutation, you first call `useUpdateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonMutation, { data, loading, error }] = useUpdateLessonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLessonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonMutation, UpdateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonMutation, UpdateLessonMutationVariables>(UpdateLessonDocument, options);
      }
export type UpdateLessonMutationHookResult = ReturnType<typeof useUpdateLessonMutation>;
export type UpdateLessonMutationResult = Apollo.MutationResult<UpdateLessonMutation>;
export type UpdateLessonMutationOptions = Apollo.BaseMutationOptions<UpdateLessonMutation, UpdateLessonMutationVariables>;
export const UpdateLessonKnowledgeConsolidationTaskDocument = gql`
    mutation updateLessonKnowledgeConsolidationTask($id: ID!, $data: LessonKnowledgeConsolidationTaskInput!) {
  updateLessonKnowledgeConsolidationTask(data: $data, id: $id) {
    data {
      id
    }
  }
}
    `;
export type UpdateLessonKnowledgeConsolidationTaskMutationFn = Apollo.MutationFunction<UpdateLessonKnowledgeConsolidationTaskMutation, UpdateLessonKnowledgeConsolidationTaskMutationVariables>;

/**
 * __useUpdateLessonKnowledgeConsolidationTaskMutation__
 *
 * To run a mutation, you first call `useUpdateLessonKnowledgeConsolidationTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonKnowledgeConsolidationTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonKnowledgeConsolidationTaskMutation, { data, loading, error }] = useUpdateLessonKnowledgeConsolidationTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLessonKnowledgeConsolidationTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonKnowledgeConsolidationTaskMutation, UpdateLessonKnowledgeConsolidationTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonKnowledgeConsolidationTaskMutation, UpdateLessonKnowledgeConsolidationTaskMutationVariables>(UpdateLessonKnowledgeConsolidationTaskDocument, options);
      }
export type UpdateLessonKnowledgeConsolidationTaskMutationHookResult = ReturnType<typeof useUpdateLessonKnowledgeConsolidationTaskMutation>;
export type UpdateLessonKnowledgeConsolidationTaskMutationResult = Apollo.MutationResult<UpdateLessonKnowledgeConsolidationTaskMutation>;
export type UpdateLessonKnowledgeConsolidationTaskMutationOptions = Apollo.BaseMutationOptions<UpdateLessonKnowledgeConsolidationTaskMutation, UpdateLessonKnowledgeConsolidationTaskMutationVariables>;
export const UpdateLessonPracticalTaskDocument = gql`
    mutation updateLessonPracticalTask($id: ID!, $data: LessonPracticalTaskInput!) {
  updateLessonPracticalTask(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateLessonPracticalTaskMutationFn = Apollo.MutationFunction<UpdateLessonPracticalTaskMutation, UpdateLessonPracticalTaskMutationVariables>;

/**
 * __useUpdateLessonPracticalTaskMutation__
 *
 * To run a mutation, you first call `useUpdateLessonPracticalTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonPracticalTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonPracticalTaskMutation, { data, loading, error }] = useUpdateLessonPracticalTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLessonPracticalTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonPracticalTaskMutation, UpdateLessonPracticalTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonPracticalTaskMutation, UpdateLessonPracticalTaskMutationVariables>(UpdateLessonPracticalTaskDocument, options);
      }
export type UpdateLessonPracticalTaskMutationHookResult = ReturnType<typeof useUpdateLessonPracticalTaskMutation>;
export type UpdateLessonPracticalTaskMutationResult = Apollo.MutationResult<UpdateLessonPracticalTaskMutation>;
export type UpdateLessonPracticalTaskMutationOptions = Apollo.BaseMutationOptions<UpdateLessonPracticalTaskMutation, UpdateLessonPracticalTaskMutationVariables>;
export const UpdateLessonTestDocument = gql`
    mutation updateLessonTest($id: ID!, $data: LessonTestInput!) {
  updateLessonTest(data: $data, id: $id) {
    data {
      id
    }
  }
}
    `;
export type UpdateLessonTestMutationFn = Apollo.MutationFunction<UpdateLessonTestMutation, UpdateLessonTestMutationVariables>;

/**
 * __useUpdateLessonTestMutation__
 *
 * To run a mutation, you first call `useUpdateLessonTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonTestMutation, { data, loading, error }] = useUpdateLessonTestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateLessonTestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonTestMutation, UpdateLessonTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonTestMutation, UpdateLessonTestMutationVariables>(UpdateLessonTestDocument, options);
      }
export type UpdateLessonTestMutationHookResult = ReturnType<typeof useUpdateLessonTestMutation>;
export type UpdateLessonTestMutationResult = Apollo.MutationResult<UpdateLessonTestMutation>;
export type UpdateLessonTestMutationOptions = Apollo.BaseMutationOptions<UpdateLessonTestMutation, UpdateLessonTestMutationVariables>;
export const CreateModuleDocument = gql`
    mutation createModule($data: ModuleInput!) {
  createModule(data: $data) {
    data {
      id
      attributes {
        age
        title
        discipline {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export type CreateModuleMutationFn = Apollo.MutationFunction<CreateModuleMutation, CreateModuleMutationVariables>;

/**
 * __useCreateModuleMutation__
 *
 * To run a mutation, you first call `useCreateModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createModuleMutation, { data, loading, error }] = useCreateModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateModuleMutation(baseOptions?: Apollo.MutationHookOptions<CreateModuleMutation, CreateModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateModuleMutation, CreateModuleMutationVariables>(CreateModuleDocument, options);
      }
export type CreateModuleMutationHookResult = ReturnType<typeof useCreateModuleMutation>;
export type CreateModuleMutationResult = Apollo.MutationResult<CreateModuleMutation>;
export type CreateModuleMutationOptions = Apollo.BaseMutationOptions<CreateModuleMutation, CreateModuleMutationVariables>;
export const GetAllModulesDocument = gql`
    query getAllModules($filters: ModuleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  modules(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        page
        pageCount
        pageSize
        total
      }
    }
    data {
      id
      attributes {
        title
        age
        discipline {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllModulesQuery__
 *
 * To run a query within a React component, call `useGetAllModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllModulesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllModulesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllModulesQuery, GetAllModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllModulesQuery, GetAllModulesQueryVariables>(GetAllModulesDocument, options);
      }
export function useGetAllModulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllModulesQuery, GetAllModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllModulesQuery, GetAllModulesQueryVariables>(GetAllModulesDocument, options);
        }
export type GetAllModulesQueryHookResult = ReturnType<typeof useGetAllModulesQuery>;
export type GetAllModulesLazyQueryHookResult = ReturnType<typeof useGetAllModulesLazyQuery>;
export type GetAllModulesQueryResult = Apollo.QueryResult<GetAllModulesQuery, GetAllModulesQueryVariables>;
export const UpdateModuleDocument = gql`
    mutation updateModule($id: ID!, $data: ModuleInput!) {
  updateModule(id: $id, data: $data) {
    data {
      id
      attributes {
        age
        title
        discipline {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export type UpdateModuleMutationFn = Apollo.MutationFunction<UpdateModuleMutation, UpdateModuleMutationVariables>;

/**
 * __useUpdateModuleMutation__
 *
 * To run a mutation, you first call `useUpdateModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateModuleMutation, { data, loading, error }] = useUpdateModuleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateModuleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateModuleMutation, UpdateModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateModuleMutation, UpdateModuleMutationVariables>(UpdateModuleDocument, options);
      }
export type UpdateModuleMutationHookResult = ReturnType<typeof useUpdateModuleMutation>;
export type UpdateModuleMutationResult = Apollo.MutationResult<UpdateModuleMutation>;
export type UpdateModuleMutationOptions = Apollo.BaseMutationOptions<UpdateModuleMutation, UpdateModuleMutationVariables>;
export const CreateThemeDocument = gql`
    mutation createTheme($data: ThemeInput!) {
  createTheme(data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type CreateThemeMutationFn = Apollo.MutationFunction<CreateThemeMutation, CreateThemeMutationVariables>;

/**
 * __useCreateThemeMutation__
 *
 * To run a mutation, you first call `useCreateThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThemeMutation, { data, loading, error }] = useCreateThemeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateThemeMutation(baseOptions?: Apollo.MutationHookOptions<CreateThemeMutation, CreateThemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThemeMutation, CreateThemeMutationVariables>(CreateThemeDocument, options);
      }
export type CreateThemeMutationHookResult = ReturnType<typeof useCreateThemeMutation>;
export type CreateThemeMutationResult = Apollo.MutationResult<CreateThemeMutation>;
export type CreateThemeMutationOptions = Apollo.BaseMutationOptions<CreateThemeMutation, CreateThemeMutationVariables>;
export const GetAllThemesDocument = gql`
    query getAllThemes($filters: ThemeFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  themes(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        page
        pageCount
        pageSize
        total
      }
    }
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;

/**
 * __useGetAllThemesQuery__
 *
 * To run a query within a React component, call `useGetAllThemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllThemesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllThemesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllThemesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllThemesQuery, GetAllThemesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllThemesQuery, GetAllThemesQueryVariables>(GetAllThemesDocument, options);
      }
export function useGetAllThemesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllThemesQuery, GetAllThemesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllThemesQuery, GetAllThemesQueryVariables>(GetAllThemesDocument, options);
        }
export type GetAllThemesQueryHookResult = ReturnType<typeof useGetAllThemesQuery>;
export type GetAllThemesLazyQueryHookResult = ReturnType<typeof useGetAllThemesLazyQuery>;
export type GetAllThemesQueryResult = Apollo.QueryResult<GetAllThemesQuery, GetAllThemesQueryVariables>;
export const UpdateThemeDocument = gql`
    mutation updateTheme($id: ID!, $data: ThemeInput!) {
  updateTheme(id: $id, data: $data) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export type UpdateThemeMutationFn = Apollo.MutationFunction<UpdateThemeMutation, UpdateThemeMutationVariables>;

/**
 * __useUpdateThemeMutation__
 *
 * To run a mutation, you first call `useUpdateThemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThemeMutation, { data, loading, error }] = useUpdateThemeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateThemeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThemeMutation, UpdateThemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThemeMutation, UpdateThemeMutationVariables>(UpdateThemeDocument, options);
      }
export type UpdateThemeMutationHookResult = ReturnType<typeof useUpdateThemeMutation>;
export type UpdateThemeMutationResult = Apollo.MutationResult<UpdateThemeMutation>;
export type UpdateThemeMutationOptions = Apollo.BaseMutationOptions<UpdateThemeMutation, UpdateThemeMutationVariables>;
export const CreateParentDocument = gql`
    mutation createParent($data: ParentInput!) {
  createParent(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateParentMutationFn = Apollo.MutationFunction<CreateParentMutation, CreateParentMutationVariables>;

/**
 * __useCreateParentMutation__
 *
 * To run a mutation, you first call `useCreateParentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateParentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createParentMutation, { data, loading, error }] = useCreateParentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateParentMutation(baseOptions?: Apollo.MutationHookOptions<CreateParentMutation, CreateParentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateParentMutation, CreateParentMutationVariables>(CreateParentDocument, options);
      }
export type CreateParentMutationHookResult = ReturnType<typeof useCreateParentMutation>;
export type CreateParentMutationResult = Apollo.MutationResult<CreateParentMutation>;
export type CreateParentMutationOptions = Apollo.BaseMutationOptions<CreateParentMutation, CreateParentMutationVariables>;
export const CreateStudentDocument = gql`
    mutation createStudent($data: StudentInput!) {
  createStudent(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const GetParentByIdDocument = gql`
    query getParentById($id: ID!) {
  parent(id: $id) {
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              blocked
              email
            }
          }
        }
        firstname
        lastname
        patronymic
        email
        phone
        telegram
        vk
        avatarUrl
        children {
          data {
            id
            attributes {
              firstname
              lastname
              patronymic
              email
              phone
              telegram
              vk
              avatarUrl
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetParentByIdQuery__
 *
 * To run a query within a React component, call `useGetParentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetParentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetParentByIdQuery, GetParentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParentByIdQuery, GetParentByIdQueryVariables>(GetParentByIdDocument, options);
      }
export function useGetParentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParentByIdQuery, GetParentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParentByIdQuery, GetParentByIdQueryVariables>(GetParentByIdDocument, options);
        }
export type GetParentByIdQueryHookResult = ReturnType<typeof useGetParentByIdQuery>;
export type GetParentByIdLazyQueryHookResult = ReturnType<typeof useGetParentByIdLazyQuery>;
export type GetParentByIdQueryResult = Apollo.QueryResult<GetParentByIdQuery, GetParentByIdQueryVariables>;
export const GetParentsDocument = gql`
    query getParents($filters: ParentFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  parents(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        pageSize
        page
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              blocked
              email
            }
          }
        }
        firstname
        lastname
        patronymic
        email
        phone
        telegram
        vk
        avatarUrl
        children {
          data {
            id
            attributes {
              firstname
              lastname
              patronymic
              email
              phone
              telegram
              vk
              avatarUrl
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetParentsQuery__
 *
 * To run a query within a React component, call `useGetParentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParentsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetParentsQuery(baseOptions?: Apollo.QueryHookOptions<GetParentsQuery, GetParentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParentsQuery, GetParentsQueryVariables>(GetParentsDocument, options);
      }
export function useGetParentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParentsQuery, GetParentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParentsQuery, GetParentsQueryVariables>(GetParentsDocument, options);
        }
export type GetParentsQueryHookResult = ReturnType<typeof useGetParentsQuery>;
export type GetParentsLazyQueryHookResult = ReturnType<typeof useGetParentsLazyQuery>;
export type GetParentsQueryResult = Apollo.QueryResult<GetParentsQuery, GetParentsQueryVariables>;
export const GetParentsToSelectorDocument = gql`
    query getParentsToSelector($filters: ParentFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  parents(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        pageSize
        page
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        avatarUrl
      }
    }
  }
}
    `;

/**
 * __useGetParentsToSelectorQuery__
 *
 * To run a query within a React component, call `useGetParentsToSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParentsToSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParentsToSelectorQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetParentsToSelectorQuery(baseOptions?: Apollo.QueryHookOptions<GetParentsToSelectorQuery, GetParentsToSelectorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParentsToSelectorQuery, GetParentsToSelectorQueryVariables>(GetParentsToSelectorDocument, options);
      }
export function useGetParentsToSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParentsToSelectorQuery, GetParentsToSelectorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParentsToSelectorQuery, GetParentsToSelectorQueryVariables>(GetParentsToSelectorDocument, options);
        }
export type GetParentsToSelectorQueryHookResult = ReturnType<typeof useGetParentsToSelectorQuery>;
export type GetParentsToSelectorLazyQueryHookResult = ReturnType<typeof useGetParentsToSelectorLazyQuery>;
export type GetParentsToSelectorQueryResult = Apollo.QueryResult<GetParentsToSelectorQuery, GetParentsToSelectorQueryVariables>;
export const GetStudentByIdDocument = gql`
    query getStudentById($id: ID!) {
  student(id: $id) {
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              blocked
              email
            }
          }
        }
        firstname
        lastname
        patronymic
        email
        phone
        telegram
        vk
        avatarUrl
        birthday
        tariff {
          data {
            id
          }
        }
        parents {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetStudentByIdQuery__
 *
 * To run a query within a React component, call `useGetStudentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStudentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
      }
export function useGetStudentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
        }
export type GetStudentByIdQueryHookResult = ReturnType<typeof useGetStudentByIdQuery>;
export type GetStudentByIdLazyQueryHookResult = ReturnType<typeof useGetStudentByIdLazyQuery>;
export type GetStudentByIdQueryResult = Apollo.QueryResult<GetStudentByIdQuery, GetStudentByIdQueryVariables>;
export const GetStudentsDocument = gql`
    query getStudents($filters: StudentFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  students(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        pageSize
        page
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              blocked
              email
            }
          }
        }
        firstname
        lastname
        patronymic
        email
        phone
        telegram
        vk
        avatarUrl
        birthday
        parents {
          data {
            id
            attributes {
              avatarUrl
              firstname
              lastname
              patronymic
            }
          }
        }
        tariff {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetStudentsToSelectorDocument = gql`
    query getStudentsToSelector($filters: StudentFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  students(filters: $filters, pagination: $pagination, sort: $sort) {
    meta {
      pagination {
        pageSize
        page
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        firstname
        lastname
        patronymic
        avatarUrl
      }
    }
  }
}
    `;

/**
 * __useGetStudentsToSelectorQuery__
 *
 * To run a query within a React component, call `useGetStudentsToSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsToSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsToSelectorQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetStudentsToSelectorQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsToSelectorQuery, GetStudentsToSelectorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsToSelectorQuery, GetStudentsToSelectorQueryVariables>(GetStudentsToSelectorDocument, options);
      }
export function useGetStudentsToSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsToSelectorQuery, GetStudentsToSelectorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsToSelectorQuery, GetStudentsToSelectorQueryVariables>(GetStudentsToSelectorDocument, options);
        }
export type GetStudentsToSelectorQueryHookResult = ReturnType<typeof useGetStudentsToSelectorQuery>;
export type GetStudentsToSelectorLazyQueryHookResult = ReturnType<typeof useGetStudentsToSelectorLazyQuery>;
export type GetStudentsToSelectorQueryResult = Apollo.QueryResult<GetStudentsToSelectorQuery, GetStudentsToSelectorQueryVariables>;
export const GetTariffsToSelectorDocument = gql`
    query getTariffsToSelector {
  tariffs(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;

/**
 * __useGetTariffsToSelectorQuery__
 *
 * To run a query within a React component, call `useGetTariffsToSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTariffsToSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTariffsToSelectorQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTariffsToSelectorQuery(baseOptions?: Apollo.QueryHookOptions<GetTariffsToSelectorQuery, GetTariffsToSelectorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTariffsToSelectorQuery, GetTariffsToSelectorQueryVariables>(GetTariffsToSelectorDocument, options);
      }
export function useGetTariffsToSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTariffsToSelectorQuery, GetTariffsToSelectorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTariffsToSelectorQuery, GetTariffsToSelectorQueryVariables>(GetTariffsToSelectorDocument, options);
        }
export type GetTariffsToSelectorQueryHookResult = ReturnType<typeof useGetTariffsToSelectorQuery>;
export type GetTariffsToSelectorLazyQueryHookResult = ReturnType<typeof useGetTariffsToSelectorLazyQuery>;
export type GetTariffsToSelectorQueryResult = Apollo.QueryResult<GetTariffsToSelectorQuery, GetTariffsToSelectorQueryVariables>;
export const UpdateParentDocument = gql`
    mutation updateParent($id: ID!, $data: ParentInput!) {
  updateParent(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateParentMutationFn = Apollo.MutationFunction<UpdateParentMutation, UpdateParentMutationVariables>;

/**
 * __useUpdateParentMutation__
 *
 * To run a mutation, you first call `useUpdateParentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParentMutation, { data, loading, error }] = useUpdateParentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateParentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateParentMutation, UpdateParentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateParentMutation, UpdateParentMutationVariables>(UpdateParentDocument, options);
      }
export type UpdateParentMutationHookResult = ReturnType<typeof useUpdateParentMutation>;
export type UpdateParentMutationResult = Apollo.MutationResult<UpdateParentMutation>;
export type UpdateParentMutationOptions = Apollo.BaseMutationOptions<UpdateParentMutation, UpdateParentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation updateStudent($id: ID!, $data: StudentInput!) {
  updateStudent(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const UpdateUserBlockDocument = gql`
    mutation updateUserBlock($id: ID!, $blocked: Boolean!) {
  updateUsersPermissionsUser(id: $id, data: {blocked: $blocked}) {
    data {
      id
      attributes {
        blocked
      }
    }
  }
}
    `;
export type UpdateUserBlockMutationFn = Apollo.MutationFunction<UpdateUserBlockMutation, UpdateUserBlockMutationVariables>;

/**
 * __useUpdateUserBlockMutation__
 *
 * To run a mutation, you first call `useUpdateUserBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBlockMutation, { data, loading, error }] = useUpdateUserBlockMutation({
 *   variables: {
 *      id: // value for 'id'
 *      blocked: // value for 'blocked'
 *   },
 * });
 */
export function useUpdateUserBlockMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBlockMutation, UpdateUserBlockMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBlockMutation, UpdateUserBlockMutationVariables>(UpdateUserBlockDocument, options);
      }
export type UpdateUserBlockMutationHookResult = ReturnType<typeof useUpdateUserBlockMutation>;
export type UpdateUserBlockMutationResult = Apollo.MutationResult<UpdateUserBlockMutation>;
export type UpdateUserBlockMutationOptions = Apollo.BaseMutationOptions<UpdateUserBlockMutation, UpdateUserBlockMutationVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation updateUserPassword($id: ID!, $password: String!) {
  updateUsersPermissionsUser(id: $id, data: {password: $password}) {
    data {
      id
      attributes {
        blocked
      }
    }
  }
}
    `;
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, options);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = Apollo.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      blocked
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($code: String!, $password: String!, $passwordConfirmation: String!) {
  resetPassword(
    code: $code
    password: $password
    passwordConfirmation: $passwordConfirmation
  ) {
    jwt
    user {
      id
      blocked
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      code: // value for 'code'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;