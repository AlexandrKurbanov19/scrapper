import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react';
import { Upload } from 'antd';
import { observer } from 'mobx-react-lite';
import { HttpRequestHeader } from 'antd/es/upload/interface';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

import useStore from 'domain/modelLayer/store/useStore';
import { getApiBase } from '../../../env';

interface IProps {
  onUploadProgress?: (file: UploadFile<Attach | null>) => void;
  onUploadDone: (file: UploadFile<Attach | null>) => void;
  onUploadError?: (file: UploadFile<Attach | null>) => void;
}

// так отвечает сервер загрузки картинок
export type Attach = {
  file: {
    url?: string
  }
};

const UploadImage: FC<PropsWithChildren<IProps>> = (
  {
    children,
    onUploadProgress,
    onUploadDone,
    onUploadError,
  },
) => {
  const { authStore: { auth: { token } } } = useStore();

  const actionUrl = `${getApiBase()}/api/editorjs/uploadImage`;

  const headers: HttpRequestHeader | undefined = useMemo(() => {
    if (!token) {
      return undefined;
    }

    return {
      Authorization: `Bearer ${token}`,
    };
  }, [token]);

  const onChange = useCallback(({ file }: UploadChangeParam<UploadFile<Attach | null>>) => {
    if (file.status === 'uploading' && onUploadProgress) {
      onUploadProgress(file);
    }

    if (file.status === 'done') {
      onUploadDone(file);
    }

    if (file.status === 'error' && onUploadError) {
      onUploadError(file);
    }
  }, [onUploadProgress, onUploadDone, onUploadError]);

  return (
    <Upload
      multiple={false}
      name="image"
      action={actionUrl}
      accept="image/*"
      maxCount={1}
      showUploadList={false}
      headers={headers}
      onChange={onChange}
    >
      {children}
    </Upload>
  );
};

export default observer(UploadImage);
