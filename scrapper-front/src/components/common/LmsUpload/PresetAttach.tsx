import React, { FC, useCallback } from 'react';
import { Button } from 'antd';
import { DeleteOutlined, PaperClipOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

import type { Attach } from './LmsUpload';

interface IProps {
  attach: Attach,
  handleDeleteFile: (attach: Attach) => void;
}

const PresetAttach: FC<IProps> = ({ attach, handleDeleteFile }) => {
  const onClick = useCallback(() => {
    handleDeleteFile(attach);
  }, [attach, handleDeleteFile]);

  return (
    <div className="my-2">
      <a href={attach.url} target="_blank" rel="noreferrer">
        <PaperClipOutlined />
        {attach?.name}
      </a>
      <Button
        title="Удалить"
        icon={<DeleteOutlined />}
        size="small"
        className="ml-2"
        onClick={onClick}
        type="text"
      />
    </div>
  );
};

export default observer(PresetAttach);
