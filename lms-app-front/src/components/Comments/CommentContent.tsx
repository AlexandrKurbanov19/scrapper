import React, { FC } from 'react';
import { PaperClipOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';

import { Attaches } from '../common/LmsUpload/LmsUpload';

interface IProps {
  text: string;
  attaches?: Attaches,
}

const CommentContent: FC<IProps> = ({ text, attaches }) => (
  <div>
    {!!text && (
      <p>
        {text}
      </p>
    )}
    {!!attaches && attaches?.map((attache, index) => {
      const { name, url } = attache;

      return (
        <div key={`${url}_${name}_${index}`}>
          <a href={url} target="_blank" rel="noreferrer">
            <PaperClipOutlined />
            {name}
          </a>
        </div>
      );
    })}
  </div>
);

export default observer(CommentContent);
