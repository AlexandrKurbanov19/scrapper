import { Input, Table } from 'antd';
import React, {
  ChangeEvent, FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { TableProps } from 'antd/es/table/InternalTable';
import debounce from 'lodash/debounce';

const { Search } = Input;

type CommonRecord = {
  id: string,
};

interface IProps<T extends CommonRecord> {
  dataSource: TableProps<T>['dataSource'],
  columns: TableProps<T>['columns'],
  onClickRow?: (record: T) => void,
  loading: boolean,
  total: number,
  dataFetcher: (page: number, searchValue?: string[]) => Promise<void>,
}

const DataTable: FC<IProps<any>> = (
  {
    dataSource,
    onClickRow,
    loading,
    columns,
    total,
    dataFetcher,
  },
) => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string[] | undefined>(undefined);
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const getRowKey = useCallback((record: CommonRecord) => record.id, []);
  const showTotal = useCallback((currentTotal: number) => `Всего ${currentTotal}`, []);
  const onChangePagination = useCallback((newPage: number) => setPage(newPage), []);

  useEffect(() => {
    dataFetcher(page, searchValue);
  }, [dataFetcher, page, searchValue]);

  const onSearch = useCallback((_value: string) => {
    let value = _value.trim();

    if (value.length === 0) {
      setSearchValue(undefined);
    } else {
      // удаляем двойные пробелы из поискового запроса
      value = value.replace(/\s+/g, ' ');
      setSearchValue(value.split(' '));
    }
  }, []);

  const changeHandler = useCallback((value: string) => {
    onSearch(value);
  }, [onSearch]);

  const debouncedEventHandler = useMemo(
    () => debounce(changeHandler, 500, { maxWait: 1500 }),
    [changeHandler],
  );

  const onSearchInputValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
    debouncedEventHandler(event.target.value);
  }, [debouncedEventHandler]);

  const onRow: TableProps<CommonRecord>['onRow'] = useCallback((record: CommonRecord) => ({
    onClick: () => onClickRow && onClickRow(record),
  }), [onClickRow]);

  const pagination: TableProps<CommonRecord>['pagination'] = useMemo(() => ({
    pageSize: 10,
    total,
    showTotal,
    onChange: onChangePagination,
    position: ['topRight', 'bottomRight'],
  }), [total, onChangePagination, showTotal]);

  return (
    <>
      <Search
        placeholder="Поиск"
        allowClear
        onSearch={onSearch}
        value={searchInputValue}
        onChange={onSearchInputValueChange}
        enterButton="Найти"
      />
      <Table
        rowKey={getRowKey}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        onRow={onRow}
        pagination={pagination}
      />
    </>
  );
};

export default DataTable;
