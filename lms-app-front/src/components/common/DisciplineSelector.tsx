import React, { FC } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

import { useGetAllDisciplinesQuery } from '../../generated/graphql';

interface IProps extends SelectProps {
  value?: string | null,
  onChange?: (value: string | null) => void,
}

const { Option } = Select;

const DisciplineSelector: FC<IProps> = (
  {
    value,
    onChange,
    ...rest
  },
) => {
  const { data, loading } = useGetAllDisciplinesQuery({
    variables: {
      pagination: {
        limit: 1000,
      },
    },
    pollInterval: 5000,
  });

  const values = data?.disciplines?.data || [];

  return (
    <Select
      loading={loading}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {values.map((d) => (
        <Option key={d.id} value={d.id}>
          {d.attributes?.title}
        </Option>
      ))}
    </Select>
  );
};

export default DisciplineSelector;
