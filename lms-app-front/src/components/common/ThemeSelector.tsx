import React, { FC, useCallback, useMemo } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import type { FilterFunc } from 'rc-select/lib/Select';

import { useGetAllThemesQuery } from '../../generated/graphql';

interface IProps extends SelectProps {
  value?: string | null,
  onChange?: (value: string | null) => void,
}

type SelectOptionType = {
  label: string,
  value: string,
};

const ThemeSelector: FC<IProps> = (
  {
    value,
    onChange,
    ...rest
  },
) => {
  const { data, loading } = useGetAllThemesQuery({
    variables: {
      pagination: {
        limit: 1000,
      },
    },
    pollInterval: 5000,
  });

  const values = data?.themes?.data || [];
  const filterOption: FilterFunc<SelectOptionType> = useCallback(
    (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    [],
  );

  const options: SelectOptionType[] = useMemo(() => values.map((d) => ({
    label: d.attributes?.title || '',
    value: d.id || '',
  })), [values]);

  return (
    <Select
      {...rest}
      showSearch
      loading={loading}
      value={value}
      onChange={onChange}
      optionFilterProp="children"
      filterOption={filterOption}
      options={options}
    />
  );
};

export default ThemeSelector;
