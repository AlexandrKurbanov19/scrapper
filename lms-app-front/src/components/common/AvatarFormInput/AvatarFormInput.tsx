import React, { FC, useCallback } from 'react';
import {
  Avatar, Button, message, Space,
} from 'antd';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/lib/upload/interface';

import UploadImage, { Attach } from '../LmsUpload/UploadImage';

interface IProps {
  value?: string | null,
  onChange?: (value: string | null) => void,
  avatarLetter?: string,
}

const AvatarFormInput: FC<IProps> = (
  {
    value,
    onChange,
    avatarLetter,
  },
) => {
  const onClick = useCallback(() => {
    if (onChange) {
      onChange(null);
    }
  }, [onChange]);

  const onUploadDone = useCallback((file: UploadFile<Attach | null>) => {
    if (onChange) {
      if (file.response?.file.url) {
        onChange(file.response.file.url);
      } else {
        console.error('Ошибка при загрузке аватара');
      }
    }
  }, [onChange]);

  const onUploadError = useCallback(() => {
    console.error('Ошибка при загрузке аватара');
    message.error('Ошибка при загрузке аватара');
  }, []);

  return (
    <Space direction="vertical" className="mb-[20px]">
      {!value && (
        <Avatar className="mb-[20px]" size={82}>
          {avatarLetter?.toUpperCase()}
        </Avatar>
      )}
      {value && (
        <Space direction="vertical">
          <Avatar className="mb-[20px]" size={82} src={value} />
          <Button
            icon={<CloseOutlined />}
            onClick={onClick}
          >
            Удалить аватар
          </Button>
        </Space>
      )}
      <UploadImage
        onUploadDone={onUploadDone}
        onUploadError={onUploadError}
      >
        <Button icon={<UploadOutlined />}>
          Загрузить аватар
        </Button>
      </UploadImage>
    </Space>
  );
};

export default AvatarFormInput;
