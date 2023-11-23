import { observer } from 'mobx-react-lite';
import React, {
  FC, useState, PropsWithChildren, useMemo, useEffect, useCallback,
} from 'react';
import {
  Button, message, Tooltip, Upload, UploadFile,
} from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import { UploadProps } from 'antd/lib/upload/Upload';
import { absurd } from 'fp-ts/function';
import type { HttpRequestHeader, UploadChangeParam } from 'antd/es/upload/interface';

import { getAllowedAttachmentMimeTypes, getApiBase } from '../../../env';
import useStore from '../../../domain/modelLayer/store/useStore';
import PresetAttach from './PresetAttach';

export type Attach = {
  name: string,
  size: number,
  url: string,
  title: string,
};

export type Attaches = Attach[];

type UploadType = 'video' | 'any' | 'image';

interface IProps extends PropsWithChildren<Omit<UploadProps, 'fileList' | 'action' | 'itemRender' | 'headers' | 'accept'>> {
  uploadType: UploadType,
  onAttachesChange: (attaches: Attaches) => void,
  attaches?: Attaches | null,
  key: string, // Чтобы очистить список файлов, передайте другой ключ
}

const LmsUpload: FC<IProps> = (
  {
    children,
    uploadType,
    onAttachesChange,
    attaches,
    onChange,
    ...rest
  },
) => {
  const { authStore: { auth } } = useStore();
  const [_fileList, _setFileList] = useState<UploadFile[]>([]);

  const newAttaches: Attaches = useMemo(() => (
    _fileList.map((f) => f?.response?.file).filter(Boolean)
  ), [_fileList]);

  const action = useMemo(() => {
    switch (uploadType) {
      case 'any':
        return `${getApiBase()}/api/editorjs/uploadFile`;
      case 'video':
        return `${getApiBase()}/api/editorjs/uploadVideo`;
      case 'image':
        return `${getApiBase()}/api/editorjs/uploadImage`;
      default:
        absurd(uploadType);
        throw new Error('Unknown uploadType');
    }
  }, [uploadType]);

  const accept = useMemo(() => {
    switch (uploadType) {
      case 'video':
        return 'video/*';
      case 'image':
        return 'image/*';
      case 'any':
        return getAllowedAttachmentMimeTypes();
      default:
        absurd(uploadType);
        throw new Error('Unknown uploadType');
    }
  }, [uploadType]);

  const [deletedAttaches, setDeletedAttaches] = useState<Attaches>([]);
  const deleteUrls = useMemo(() => deletedAttaches.map((a) => a.url), [deletedAttaches]);

  const handleDeleteFile = useCallback((a: Attach) => {
    setDeletedAttaches([...deletedAttaches, a]);
  }, [deletedAttaches]);

  // берём вложения что уже есть attache, убираем удалённые deletedAttaches и добавляем новые загруженные newAttaches
  const attachesToForm: Attaches = useMemo(() => (
    [
      ...(attaches || []),
      ...newAttaches,
    ].filter((a) => !deleteUrls.includes(a.url))
  ), [attaches, deleteUrls, newAttaches]);

  useEffect(() => {
    onAttachesChange(attachesToForm);
  }, [attachesToForm, onAttachesChange]);

  const headers: HttpRequestHeader = useMemo(() => ({
    Authorization: `Bearer ${auth.token}`,
  }), [auth.token]);

  const itemRender = useCallback((originNode: React.ReactElement, file: UploadFile) => {
    if (file.status === 'error') {
      return null;
    }

    return originNode;
  }, []);

  const onChangeUpload = useCallback((
    {
      file,
      fileList,
      ...onChangeRest
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }: UploadChangeParam<UploadFile<any>>,
  ) => {
    if (file.status === 'done') {
      if (file?.response?.success === 1 && file?.response?.file?.url) {
        message.success(`${file.name} файл успешно загружен`);
      } else {
        console.error(file.response);
        message.error(`${file.name} не был загружен.`);
      }
    }

    if (file.status === 'error') {
      message.error(`${file.name} не был загружен.`);
    }

    _setFileList(fileList);
    if (onChange) {
      onChange({
        file,
        fileList,
        ...onChangeRest,
      });
    }
  }, [onChange]);

  return (
    <>
      {
        !!attaches
        && attaches.length > 0
        && attaches.map((attache) => {
          if (deleteUrls.includes(attache.url)) {
            return null;
          }

          return (
            <PresetAttach
              key={attache.url}
              handleDeleteFile={handleDeleteFile}
              attach={attache}
            />
          );
        })
      }
      <Upload
        fileList={_fileList}
        action={action}
        itemRender={itemRender}
        headers={headers}
        accept={accept}
        onChange={onChangeUpload}
        {...rest}
      >
        {!!children && children}
        {!children && (
          <Tooltip
            title="Прикрепить файл"
          >
            <Button
              icon={<PaperClipOutlined />}
              type="ghost"
            >
              Прикрепить файл
            </Button>
          </Tooltip>
        )}
      </Upload>
    </>
  );
};

export default observer(LmsUpload);
