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

export type ChangeOwnPasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type ChangeOwnPasswordResponse = {
  __typename?: 'ChangeOwnPasswordResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
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

export enum Enum_Public_Registration_Role {
  Client = 'CLIENT'
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

export type GenericMorph = HistoryDataParsing | HistoryRequest | I18NLocale | StudentTariffPeriod | Tariff | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Video;

export type HistoryDataParsing = {
  __typename?: 'HistoryDataParsing';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  history_request?: Maybe<HistoryRequestEntityResponse>;
  parsingData?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
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
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type HistoryDataParsingInput = {
  history_request?: InputMaybe<Scalars['ID']['input']>;
  parsingData?: InputMaybe<Scalars['JSON']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type HistoryRequest = {
  __typename?: 'HistoryRequest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dataForParsing?: Maybe<Scalars['JSON']['output']>;
  history_data_parsing?: Maybe<HistoryDataParsingEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
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
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
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
  user?: InputMaybe<Scalars['ID']['input']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  changeOwnPassword?: Maybe<ChangeOwnPasswordResponse>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  createHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  createStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  createTariff?: Maybe<TariffEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVideo?: Maybe<VideoEntityResponse>;
  deleteHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  deleteHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  deleteStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  deleteTariff?: Maybe<TariffEntityResponse>;
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
  registerParentOrChildren?: Maybe<RegisterParentOrChildrenResponse>;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateHistoryDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  updateHistoryRequest?: Maybe<HistoryRequestEntityResponse>;
  updateStudentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  updateTariff?: Maybe<TariffEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangeOwnPasswordArgs = {
  data: ChangeOwnPasswordInput;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateHistoryDataParsingArgs = {
  data: HistoryDataParsingInput;
};


export type MutationCreateHistoryRequestArgs = {
  data: HistoryRequestInput;
};


export type MutationCreateStudentTariffPeriodArgs = {
  data: StudentTariffPeriodInput;
};


export type MutationCreateTariffArgs = {
  data: TariffInput;
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


export type MutationDeleteHistoryDataParsingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHistoryRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStudentTariffPeriodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTariffArgs = {
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


export type MutationRegisterParentOrChildrenArgs = {
  data: RegisterParentOrChildrenInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
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


export type MutationUpdateStudentTariffPeriodArgs = {
  data: StudentTariffPeriodInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTariffArgs = {
  data: TariffInput;
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

export type Query = {
  __typename?: 'Query';
  historyDataParsing?: Maybe<HistoryDataParsingEntityResponse>;
  historyDataParsings?: Maybe<HistoryDataParsingEntityResponseCollection>;
  historyRequest?: Maybe<HistoryRequestEntityResponse>;
  historyRequests?: Maybe<HistoryRequestEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  myProfile: MyProfileResponse;
  sendFeedback: SendFeedbackResponse;
  studentTariffPeriod?: Maybe<StudentTariffPeriodEntityResponse>;
  studentTariffPeriods?: Maybe<StudentTariffPeriodEntityResponseCollection>;
  tariff?: Maybe<TariffEntityResponse>;
  tariffs?: Maybe<TariffEntityResponseCollection>;
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


export type QueryHistoryDataParsingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHistoryDataParsingsArgs = {
  filters?: InputMaybe<HistoryDataParsingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
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


export type QuerySendFeedbackArgs = {
  data?: InputMaybe<SendFeedbackInput>;
};


export type QueryStudentTariffPeriodArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStudentTariffPeriodsArgs = {
  filters?: InputMaybe<StudentTariffPeriodFiltersInput>;
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

export type RegisterParentOrChildrenInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  role: Enum_Public_Registration_Role;
  username: Scalars['String']['input'];
};

export type RegisterParentOrChildrenResponse = {
  __typename?: 'RegisterParentOrChildrenResponse';
  jwt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersPermissionsUserEntity>;
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

export type StudentTariffPeriod = {
  __typename?: 'StudentTariffPeriod';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  end: Scalars['Date']['output'];
  start: Scalars['Date']['output'];
  tariff?: Maybe<TariffEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
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
  tariff?: InputMaybe<TariffFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type StudentTariffPeriodInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  tariff?: InputMaybe<Scalars['ID']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
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
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TariffInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  avatarUrl?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  history_data?: Maybe<HistoryDataParsingEntityResponse>;
  history_request_for_user?: Maybe<HistoryRequestEntityResponse>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  tariff_periods?: Maybe<StudentTariffPeriodRelationResponseCollection>;
  telegram?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
  vk?: Maybe<Scalars['String']['output']>;
};


export type UsersPermissionsUserTariff_PeriodsArgs = {
  filters?: InputMaybe<StudentTariffPeriodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  avatarUrl?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  history_data?: InputMaybe<HistoryDataParsingFiltersInput>;
  history_request_for_user?: InputMaybe<HistoryRequestFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  lastname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  patronymic?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  tariff_periods?: InputMaybe<StudentTariffPeriodFiltersInput>;
  telegram?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  vk?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  history_data?: InputMaybe<Scalars['ID']['input']>;
  history_request_for_user?: InputMaybe<Scalars['ID']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  tariff_periods?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  vk?: InputMaybe<Scalars['String']['input']>;
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


export type GetProfile_DpQuery = { __typename?: 'Query', myProfile: { __typename?: 'MyProfileResponse', id: string, firstname?: string | null, lastname?: string | null, patronymic?: string | null, avatarUrl?: string | null, email: string, role: { __typename?: 'MyProfileRole', id: string, name: string } } };

export type SendFeedbackDataQueryVariables = Exact<{
  data: SendFeedbackInput;
}>;


export type SendFeedbackDataQuery = { __typename?: 'Query', sendFeedback: { __typename?: 'sendFeedbackResponse', status?: boolean | null } };

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

export type RegisterParentOrChildrenMutationVariables = Exact<{
  data: RegisterParentOrChildrenInput;
}>;


export type RegisterParentOrChildrenMutation = { __typename?: 'Mutation', registerParentOrChildren?: { __typename?: 'RegisterParentOrChildrenResponse', jwt?: string | null, user?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } | null };

export type ChangeUserDataMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UsersPermissionsUserInput;
}>;


export type ChangeUserDataMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } };

export type ChangeOwnPasswordMutationVariables = Exact<{
  data: ChangeOwnPasswordInput;
}>;


export type ChangeOwnPasswordMutation = { __typename?: 'Mutation', changeOwnPassword?: { __typename?: 'ChangeOwnPasswordResponse', success: boolean, message: string } | null };


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
export const RegisterParentOrChildrenDocument = gql`
    mutation registerParentOrChildren($data: RegisterParentOrChildrenInput!) {
  registerParentOrChildren(data: $data) {
    jwt
    user {
      id
    }
  }
}
    `;
export type RegisterParentOrChildrenMutationFn = Apollo.MutationFunction<RegisterParentOrChildrenMutation, RegisterParentOrChildrenMutationVariables>;

/**
 * __useRegisterParentOrChildrenMutation__
 *
 * To run a mutation, you first call `useRegisterParentOrChildrenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterParentOrChildrenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerParentOrChildrenMutation, { data, loading, error }] = useRegisterParentOrChildrenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterParentOrChildrenMutation(baseOptions?: Apollo.MutationHookOptions<RegisterParentOrChildrenMutation, RegisterParentOrChildrenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterParentOrChildrenMutation, RegisterParentOrChildrenMutationVariables>(RegisterParentOrChildrenDocument, options);
      }
export type RegisterParentOrChildrenMutationHookResult = ReturnType<typeof useRegisterParentOrChildrenMutation>;
export type RegisterParentOrChildrenMutationResult = Apollo.MutationResult<RegisterParentOrChildrenMutation>;
export type RegisterParentOrChildrenMutationOptions = Apollo.BaseMutationOptions<RegisterParentOrChildrenMutation, RegisterParentOrChildrenMutationVariables>;
export const ChangeUserDataDocument = gql`
    mutation changeUserData($id: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type ChangeUserDataMutationFn = Apollo.MutationFunction<ChangeUserDataMutation, ChangeUserDataMutationVariables>;

/**
 * __useChangeUserDataMutation__
 *
 * To run a mutation, you first call `useChangeUserDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserDataMutation, { data, loading, error }] = useChangeUserDataMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeUserDataMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserDataMutation, ChangeUserDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserDataMutation, ChangeUserDataMutationVariables>(ChangeUserDataDocument, options);
      }
export type ChangeUserDataMutationHookResult = ReturnType<typeof useChangeUserDataMutation>;
export type ChangeUserDataMutationResult = Apollo.MutationResult<ChangeUserDataMutation>;
export type ChangeUserDataMutationOptions = Apollo.BaseMutationOptions<ChangeUserDataMutation, ChangeUserDataMutationVariables>;
export const ChangeOwnPasswordDocument = gql`
    mutation changeOwnPassword($data: ChangeOwnPasswordInput!) {
  changeOwnPassword(data: $data) {
    success
    message
  }
}
    `;
export type ChangeOwnPasswordMutationFn = Apollo.MutationFunction<ChangeOwnPasswordMutation, ChangeOwnPasswordMutationVariables>;

/**
 * __useChangeOwnPasswordMutation__
 *
 * To run a mutation, you first call `useChangeOwnPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeOwnPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeOwnPasswordMutation, { data, loading, error }] = useChangeOwnPasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeOwnPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeOwnPasswordMutation, ChangeOwnPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeOwnPasswordMutation, ChangeOwnPasswordMutationVariables>(ChangeOwnPasswordDocument, options);
      }
export type ChangeOwnPasswordMutationHookResult = ReturnType<typeof useChangeOwnPasswordMutation>;
export type ChangeOwnPasswordMutationResult = Apollo.MutationResult<ChangeOwnPasswordMutation>;
export type ChangeOwnPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeOwnPasswordMutation, ChangeOwnPasswordMutationVariables>;