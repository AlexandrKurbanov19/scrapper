import React, {
  FC,
  useCallback,
  useMemo,
} from 'react';
import {
  Typography,
  Space,
  Button,
} from 'antd';
import type { TableProps } from 'antd/es/table/InternalTable';
import { useNavigate } from 'react-router-dom';
import { makeParentPath, makeStudentPath } from 'routes';
import flatten from 'lodash/flatten';
import isFinite from 'lodash/isFinite';
import moment from 'moment';

import {
  GetStudentsQueryVariables,
  StudentFiltersInput,
  useGetStudentsLazyQuery,
} from '../../../../../generated/graphql';
import UserAvatar from '../../../../../components/UserAvatar';
import DataTable from '../../../../../components/DataTable';

type Parent = {
  id: string,
  firstname: string,
  lastname: string,
  patronymic: string,
  avatarUrl?: string,
};

type Tariff = {
  id: string,
  name: string,
};

type Record = {
  id: string,
  firstname: string,
  lastname: string,
  patronymic: string,
  email: string,
  phone: string,
  vk: string,
  birthday?: string,
  telegram: string,
  avatarUrl?: string,
  parents: Parent[],
  tariff?: Tariff,
  blocked: boolean,
};

const StudentsTable: FC = () => {
  const getVariables = useCallback((page: number, searchValue: string[] | undefined): GetStudentsQueryVariables => ({
    pagination: {
      pageSize: 10,
      page,
    },
    filters: !searchValue ? undefined : {
      or: flatten(searchValue.map((value) => {
        const filterItem: StudentFiltersInput[] = [
          {
            firstname: {
              containsi: value,
            },
          },
          {
            lastname: {
              containsi: value,
            },
          },
          {
            patronymic: {
              containsi: value,
            },
          },
          {
            phone: {
              containsi: value,
            },
          },
          {
            email: {
              containsi: value,
            },
          },
          {
            telegram: {
              containsi: value,
            },
          },
          {
            vk: {
              containsi: value,
            },
          },
        ];

        const maybeId = Number(value);
        if (isFinite(maybeId)) {
          const idFilterItem: StudentFiltersInput = {
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
  }), []);

  const [
    getStudents,
    {
      data,
      previousData,
      loading,
    },
  ] = useGetStudentsLazyQuery();

  const result = data || previousData;

  const navigate = useNavigate();

  const onClickRow = useCallback((record: Record) => {
    navigate(makeStudentPath(record.id));
  }, [navigate]);

  const openParentPage = useCallback((parentId: string): React.MouseEventHandler<unknown> => (event) => {
    event.stopPropagation();
    navigate(makeParentPath(parentId));
  }, [navigate]);

  const dataSource: TableProps<Record>['dataSource'] = useMemo(() => {
    if (!result?.students?.data) {
      return [];
    }

    return result?.students?.data.map((item) => ({
      id: item.id || '??',
      firstname: item.attributes?.firstname || '',
      lastname: item.attributes?.lastname || '',
      patronymic: item.attributes?.patronymic || '',
      email: item.attributes?.email || '',
      phone: item.attributes?.phone || '',
      vk: item.attributes?.vk || '',
      birthday: item.attributes?.birthday || undefined,
      telegram: item.attributes?.telegram || '',
      avatarUrl: item.attributes?.avatarUrl || undefined,
      parents: item.attributes?.parents?.data.map((p) => ({
        id: p.id || '??',
        firstname: p.attributes?.firstname || '',
        lastname: p.attributes?.lastname || '',
        patronymic: p.attributes?.patronymic || '',
        avatarUrl: p.attributes?.avatarUrl || undefined,
      })) || [],
      tariff: item.attributes?.tariff?.data ? {
        id: item.attributes.tariff.data.id || '',
        name: item.attributes.tariff.data.attributes?.name || '',
      } : undefined,
      blocked: item.attributes?.user?.data?.attributes?.blocked ?? false,
    })) || [];
  }, [result]);

  const columns: TableProps<Record>['columns'] = useMemo(() => ([
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ФИО',
      key: 'name',
      render: (_, record: Record) => (
        <Space>
          <UserAvatar user={record} />
          <Typography.Text>
            {[record.firstname, record.lastname, record.patronymic].join(' ')}
          </Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Возраст',
      key: 'age',
      render: (_, record: Record) => {
        let birthday: moment.Moment | undefined;

        if (record?.birthday) {
          birthday = moment(record.birthday, 'YYYY-MM-DD');
        }

        return (
          <Space direction="vertical">
            <Space>
              <Typography.Text>
                дата рождения:
              </Typography.Text>

              <Typography.Text>
                {birthday ? birthday.format('DD.MM.YYYY') : '-'}
              </Typography.Text>
            </Space>
            <Space>
              <Typography.Text>
                возраст:
              </Typography.Text>

              <Typography.Text>
                {birthday ? moment().diff(birthday, 'years') : '-'}
              </Typography.Text>
            </Space>
          </Space>
        );
      },
    },
    {
      title: 'Контакты',
      key: 'contacts',
      render: (_, record: Record) => (
        <Space direction="vertical">
          <Space>
            <Typography.Text>
              телефон:
            </Typography.Text>
            <Typography.Text>
              {record.phone}
            </Typography.Text>
          </Space>

          <Space>
            <Typography.Text>
              email:
            </Typography.Text>
            <Typography.Text>
              {record.email}
            </Typography.Text>
          </Space>

          <Space>
            <Typography.Text>
              vk:
            </Typography.Text>
            <Typography.Text>
              {record.vk}
            </Typography.Text>
          </Space>

          <Space>
            <Typography.Text>
              telegram:
            </Typography.Text>
            <Typography.Text>
              {record.telegram}
            </Typography.Text>
          </Space>
        </Space>
      ),
    },
    {
      title: 'Родители',
      key: 'parents',
      render: (_, record: Record) => (
        <Space direction="vertical">
          {record.parents.map((p) => (
            <Button onClick={openParentPage(p.id)} type="link">
              <Space>
                <UserAvatar user={p} />
                <Typography.Text>
                  {[p.firstname, p.lastname, p.patronymic].join(' ')}
                </Typography.Text>
              </Space>
            </Button>
          ))}
        </Space>
      ),
    },
    {
      title: 'Доступы',
      key: 'tariff',
      render: (_, record: Record) => (
        <Space direction="vertical">
          <Space>
            <Typography.Text>
              Тариф:
            </Typography.Text>
            <Typography.Text>
              {record.tariff?.name ?? 'не указан'}
            </Typography.Text>
          </Space>

          <Space>
            <Typography.Text>
              Заблокирован:
            </Typography.Text>
            <Typography.Text>
              {record.blocked ? 'Да' : 'Нет'}
            </Typography.Text>
          </Space>
        </Space>
      ),
    },
  ]), [openParentPage]);

  const dataFetcher = useCallback(async (page: number, searchValue: string[] | undefined) => {
    await getStudents({ variables: getVariables(page, searchValue) });
  }, [getStudents, getVariables]);

  return (
    <DataTable
      onClickRow={onClickRow}
      loading={loading}
      dataFetcher={dataFetcher}
      dataSource={dataSource}
      columns={columns}
      total={result?.students?.meta.pagination.total || 0}
    />
  );
};

export default StudentsTable;
