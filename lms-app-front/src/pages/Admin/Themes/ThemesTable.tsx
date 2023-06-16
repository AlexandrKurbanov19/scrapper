import React, {
  FC, MouseEvent,
  useCallback,
  useMemo,
} from 'react';
import { Space, Button, message } from 'antd';
import type { TableProps } from 'antd/es/table/InternalTable';
import flatten from 'lodash/flatten';
import isFinite from 'lodash/isFinite';
import DataTable from '../../../components/DataTable';
import {
  ThemeFiltersInput,
  GetAllThemesQueryVariables,
  useGetAllThemesLazyQuery,
} from '../../../generated/graphql';

type Record = {
  id: string,
  title: string,
};

interface IProps {
  onRowClick: (record: Record) => void,
}

const ThemesTable: FC<IProps> = (
  {
    onRowClick,
  },
) => {
  const getVariables = useCallback(
    (page: number, searchValue: string[] | undefined): GetAllThemesQueryVariables => ({
      pagination: {
        pageSize: 10,
        page,
      },
      filters: !searchValue ? undefined : {
        or: flatten(searchValue.map((value) => {
          const filterItem: ThemeFiltersInput[] = [
            {
              title: {
                containsi: value,
              },
            },
          ];

          const maybeId = Number(value);
          if (isFinite(maybeId)) {
            const idFilterItem: ThemeFiltersInput = {
              id: {
                eq: value,
              },
            };

            filterItem.push(idFilterItem);
          }

          return filterItem;
        })),
      },
      sort: ['id:desc'],
    }),
    [],
  );

  const [
    getAllThemes,
    {
      data,
      previousData,
      loading,
    },
  ] = useGetAllThemesLazyQuery();

  const result = data || previousData;

  const dataSource: TableProps<Record>['dataSource'] = useMemo(() => {
    if (!result?.themes?.data) {
      return [];
    }

    return result?.themes?.data.map((item) => ({
      id: item.id || '??',
      title: item.attributes?.title || '',
    })) || [];
  }, [result]);

  const onDelete = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    message.info('Для удаления темы обратитесь к администратору системы');
    return false;
  }, []);

  const columns: TableProps<Record>['columns'] = useMemo(() => ([
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название',
      key: 'name',
      dataIndex: 'title',
    },
    {
      title: 'Действия',
      key: 'name',
      render: (_, record: Record) => (
        <Space>
          <Button
            title="Редактировать"
            // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
            onClick={() => onRowClick(record)}
          >
            Редактировать
          </Button>
          <Button
            title="Удалить"
            danger
            onClick={onDelete}
          >
            Удалить
          </Button>
        </Space>
      ),
    },
  ]), [onDelete, onRowClick]);

  const dataFetcher = useCallback(async (page: number, searchValue: string[] | undefined) => {
    await getAllThemes({ variables: getVariables(page, searchValue) });
  }, [getAllThemes, getVariables]);

  return (
    <DataTable
      onClickRow={onRowClick}
      loading={loading}
      dataFetcher={dataFetcher}
      dataSource={dataSource}
      columns={columns}
      total={result?.themes?.meta.pagination.total || 0}
    />
  );
};

export default ThemesTable;
