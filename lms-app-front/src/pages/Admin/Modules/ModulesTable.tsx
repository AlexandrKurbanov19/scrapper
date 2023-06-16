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
  ModuleFiltersInput,
  GetAllModulesQueryVariables,
  useGetAllModulesLazyQuery,
} from '../../../generated/graphql';

type Record = {
  id: string,
  title: string,
  disciplineId: string | null,
  disciplineTitle: string | null,
  age: number,
};

interface IProps {
  onRowClick: (record: Record) => void,
}

const ModulesTable: FC<IProps> = (
  {
    onRowClick,
  },
) => {
  const getVariables = useCallback(
    (page: number, searchValue: string[] | undefined): GetAllModulesQueryVariables => ({
      pagination: {
        pageSize: 10,
        page,
      },
      filters: !searchValue ? undefined : {
        or: flatten(searchValue.map((value) => {
          const filterItem: ModuleFiltersInput[] = [
            {
              title: {
                containsi: value,
              },
            },
          ];

          const maybeId = Number(value);
          if (isFinite(maybeId)) {
            const idFilterItem: ModuleFiltersInput = {
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
    getAllModules,
    {
      data,
      previousData,
      loading,
    },
  ] = useGetAllModulesLazyQuery();

  const result = data || previousData;

  const dataSource: TableProps<Record>['dataSource'] = useMemo(() => {
    if (!result?.modules?.data) {
      return [];
    }

    return result?.modules?.data.map((item) => ({
      id: item.id || '??',
      title: item.attributes?.title || '',
      disciplineId: item.attributes?.discipline?.data?.id || null,
      disciplineTitle: item.attributes?.discipline?.data?.attributes?.title || null,
      age: item.attributes?.age || 1,
    })) || [];
  }, [result]);

  const onDelete = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    message.info('Для удаления модуля обратитесь к администратору системы');
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
      title: 'Возрастная группа',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: 'Дисциплина',
      key: 'discipline',
      dataIndex: 'disciplineTitle',
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
    await getAllModules({ variables: getVariables(page, searchValue) });
  }, [getAllModules, getVariables]);

  return (
    <DataTable
      onClickRow={onRowClick}
      loading={loading}
      dataFetcher={dataFetcher}
      dataSource={dataSource}
      columns={columns}
      total={result?.modules?.meta.pagination.total || 0}
    />
  );
};

export default ModulesTable;
