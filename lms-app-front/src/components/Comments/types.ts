import moment from 'moment';
import { Attaches } from '../common/LmsUpload/LmsUpload';
import { RoleName } from '../../domain/types';
import { Enum_Comment_Subjectcontenttype } from '../../generated/graphql';

export type LMSComment = {
  id: string
  text: string,
  createdAt: moment.Moment,
  updatedAt?: moment.Moment,
  attaches?: Attaches,
  subjectContentTypeId: string,
  subjectContentType: Enum_Comment_Subjectcontenttype,
  author: {
    id: string,
    roleName: RoleName,
    fullName: string,
    avatarUrl?: string,
  },
};
