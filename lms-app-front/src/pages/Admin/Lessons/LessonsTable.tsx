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
  LessonFiltersInput,
  GetAllLessonsQueryVariables,
  useGetAllLessonsLazyQuery,
} from '../../../generated/graphql';

type Record = {
  id: string,
  title: string,
  moduleTitle: string,
  themeTitle: string,
};

interface IProps {
  onRowClick: (record: Record) => void,
}

const LessonsTable: FC<IProps> = (
  {
    onRowClick,
  },
) => {
  const getVariables = useCallback(
    (page: number, searchValue: string[] | undefined): GetAllLessonsQueryVariables => ({
      pagination: {
        pageSize: 10,
        page,
      },
      filters: !searchValue ? undefined : {
        or: flatten(searchValue.map((value) => {
          const filterItem: LessonFiltersInput[] = [
            {
              title: {
                containsi: value,
              },
            },
          ];

          const maybeId = Number(value);
          if (isFinite(maybeId)) {
            const idFilterItem: LessonFiltersInput = {
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
    getAllLessons,
    {
      data,
      previousData,
      loading,
    },
  ] = useGetAllLessonsLazyQuery();

  const result = data || previousData;

  const dataSource: TableProps<Record>['dataSource'] = useMemo(() => {
    if (!result?.lessons?.data) {
      return [];
    }

    return result?.lessons?.data.map((item) => ({
      id: item.id || '??',
      title: item.attributes?.title || '',
      moduleTitle: [
        item.attributes?.module?.data?.attributes?.title || '',
        `${item.attributes?.module?.data?.attributes?.age || ''} кл.`,
        item.attributes?.module?.data?.attributes?.discipline?.data?.attributes?.title || '',
      ].join(' / '),
      themeTitle: item.attributes?.theme?.data?.attributes?.title || '',
    })) || [];
  }, [result]);

  const onDelete = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    message.info('Для удаления урока обратитесь к администратору системы');
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
      title: 'Модуль',
      key: 'name',
      dataIndex: 'moduleTitle',
    },
    {
      title: 'Тема',
      key: 'theme',
      dataIndex: 'themeTitle',
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
    await getAllLessons({ variables: getVariables(page, searchValue) });
  }, [getAllLessons, getVariables]);

  return (
    <DataTable
      onClickRow={onRowClick}
      loading={loading}
      dataFetcher={dataFetcher}
      dataSource={dataSource}
      columns={columns}
      total={result?.lessons?.meta.pagination.total || 0}
    />
  );
};

export default LessonsTable;
