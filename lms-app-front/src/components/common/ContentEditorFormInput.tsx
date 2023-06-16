import React, { FC } from 'react';
import { OutputData } from '@editorjs/editorjs';
import { Card } from 'antd';

import ContentEditor from '../editors/ContentEditor';

interface IProps {
  value?: OutputData,
  onChange?: (value: OutputData) => void,
}

const ContentEditorFormInput: FC<IProps> = (
  {
    value,
    onChange,
  },
) => (
  <Card>
    <ContentEditor
      value={value}
      onChange={onChange}
    />
  </Card>
);

export default ContentEditorFormInput;
