import React, {
  FC, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import type { MenuProps } from 'antd';
import { CaretDownFilled, CheckOutlined, PushpinOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { Anchor, Button } from 'antd';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import { ReactComponent as ChatIcon } from 'assets/images/chat-icon.svg';
import { useNavigate } from 'react-router-dom';
import styles from './StudentLessonsMenu.module.scss';
import ModalConfirm from '../modal/modalConfirm';

type RightSidebarItemStatus = 'current' | 'passed' | 'notPassed';

type RightSidebarListItem = {
  id: string
  href: string
  itemNumber?: string
  title: string
  status?: RightSidebarItemStatus
};

export type StudentRightSidebarMenuProps = Omit<MenuProps, 'items'> & {
  module: {
    id: string
    title: string
  }

  themes: Array<RightSidebarListItem & {
    lessons: Array<RightSidebarListItem>
  }>
};

type StudentRightSidebarMenuLink = {
  title: React.ReactNode;
  href: string;
};

const showAllText = 'Показать все';
const contactText = 'Связаться с куратором';
const leaveModalOkText = 'Да, выйти';
const leaveModalCancelText = 'Отмена';
const leaveModalTitleText = 'Уверен, что хочешь покинуть занятие?';
const leaveModalDescText = 'Советуем пройти до конца, но если ты выйдешь, то твой прогресс сохранится';

const onShowAllContainerHandler = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent) => {
  e.stopPropagation();
  e.preventDefault();
};

const ShowAllButton: FC<{ onShowAllHandler: () => void, show: boolean }> = ({ onShowAllHandler, show }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={cn([
      styles.showAllContainer,
      {
        hidden: !show,
      },
    ])}
    onClick={onShowAllContainerHandler}
    onKeyDown={onShowAllContainerHandler}
  >
    <div className={styles.showAllButtonContainer}>
      <Button
        type="link"
        onClick={onShowAllHandler}
        icon={<CaretDownFilled className={styles.showAllIcon} />}
        className={styles.showAllButton}
      >
        {showAllText}
      </Button>
    </div>
  </div>
);

const getMenuItemIcon = (status: RightSidebarItemStatus | undefined) => {
  let icon: React.ReactNode;

  switch (status) {
    case 'passed':
      icon = <CheckOutlined className={cn([styles.icon, styles.iconPassed])} />;
      break;
    case 'current':
      icon = <PushpinOutlined className={cn([styles.icon, styles.iconPinned])} />;
      break;
    default:
      icon = null;
  }

  return (
    <div className={styles.iconContainer}>
      {icon}
    </div>
  );
};

const getItemClassByStatus = (status: RightSidebarItemStatus | undefined) => ({
  [styles.itemCurrent]: status === 'current',
  [styles.itemPassed]: status === 'passed',
  [styles.itemNotPassed]: status === 'notPassed',
});

const StudentLessonsMenu: FC<StudentRightSidebarMenuProps> = ({
  module,
  themes,
}) => {
  const navigate = useNavigate();

  const [showAll, setShowAll] = useState<boolean>(false);
  const [currentLink, setCurrentLink] = useState<StudentRightSidebarMenuLink | undefined>(undefined);
  const [showLeaveLessonModal, setShowLeaveLessonModal] = useState<boolean>(false);
  const showAllFirstRender = useRef<boolean>(true);

  const onShowAllHandler = useCallback(() => {
    setShowAll(true);
  }, [setShowAll]);

  const onClickAnchorItem = useCallback((e: React.MouseEvent, link: StudentRightSidebarMenuLink) => {
    e.preventDefault();

    setCurrentLink(link);
    setShowLeaveLessonModal(true);
  }, [setShowLeaveLessonModal, setCurrentLink]);

  const onOkLeaveLesson = useCallback(() => {
    setShowLeaveLessonModal(false);

    if (currentLink?.href) {
      navigate(currentLink.href);
    }
  }, [currentLink, navigate, setShowLeaveLessonModal]);

  const onCancelLeaveLesson = useCallback(() => {
    setShowLeaveLessonModal(false);
  }, []);

  const previewLastItemKey = useMemo(() => {
    let itemsCount = 0;
    let key;

    // получаем идентификатор 15-ого элемента, если он есть
    // показываем ShowAll компонент сразу за этим элементом
    themes.forEach((theme) => {
      itemsCount += 1;

      if (itemsCount === 15) {
        key = `${theme.id}-theme`;
      }

      theme.lessons.forEach((lesson) => {
        itemsCount += 1;

        if (itemsCount === 15) {
          key = `${lesson.id}-lesson`;
        }
      });
    });

    return key;
  }, [themes]);

  useEffect(() => {
    if (showAllFirstRender.current && previewLastItemKey) {
      showAllFirstRender.current = false;
      setShowAll(false);
    }
  }, [previewLastItemKey, setShowAll]);

  const anchorItems: AnchorLinkItemProps[] = useMemo(() => themes.map((theme) => ({
    key: `${theme.id}-theme`,
    href: theme.href,
    title: (
      <>
        <div className={styles.titleContainer}>
          {getMenuItemIcon(theme.status)}
          <span className={cn([styles.title, styles.titleTheme])}>{theme.title}</span>
        </div>
        {(previewLastItemKey === `${theme.id}-theme` && !showAll) && (
        <ShowAllButton
          onShowAllHandler={onShowAllHandler}
          show={!showAll}
        />
        )}
      </>
    ),
    className: cn([
      styles.item,
      styles.itemTheme,
      getItemClassByStatus(theme.status),
      {
        [styles.lastPreviewItem]: previewLastItemKey === `${theme.id}-theme` && !showAll,
      },
    ]),
    children: theme.lessons.map((lesson) => ({
      key: `${lesson.id}-lesson`,
      href: lesson.href,
      title: (
        <>
          <div className={styles.titleContainer}>
            {getMenuItemIcon(lesson.status)}
            <span className={styles.itemNumber}>
              {`${lesson.itemNumber}.`}
&nbsp;
            </span>
            <span className={styles.title}>{lesson.title}</span>
          </div>
          {(previewLastItemKey === `${lesson.id}-lesson` && !showAll) && (
          <ShowAllButton
            onShowAllHandler={onShowAllHandler}
            show={!showAll}
          />
          )}
        </>
      ),
      className: cn(
        [
          styles.item,
          styles.itemLesson,
          getItemClassByStatus(lesson.status)],
        {
          [styles.lastPreviewItem]: previewLastItemKey === `${lesson.id}-lesson` && !showAll,
        },
      ),
    })),
  })), [themes, showAll, onShowAllHandler, previewLastItemKey]);

  return (
    <div className={styles.sidebarMenuContainer}>
      <div className={styles.moduleInfo}>{module.title}</div>
      <Anchor
        affix={false}
        className={cn([
          styles.menu,
          {
            'overflow-hidden': !showAll,
            'overflow-auto': showAll,
          },
        ])}
        onClick={onClickAnchorItem}
        items={anchorItems}
      />
      <div className={styles.contactContainer}>
        <span className={styles.contactDescription}>{contactText}</span>
        <div className={styles.chatIconContainer}>
          <ChatIcon />
        </div>
      </div>
      <ModalConfirm
        showConfirm={showLeaveLessonModal}
        onOk={onOkLeaveLesson}
        onCancel={onCancelLeaveLesson}
        cancelText={leaveModalCancelText}
        okText={leaveModalOkText}
        title={leaveModalTitleText}
      >
        {leaveModalDescText}
      </ModalConfirm>
    </div>
  );
};

export default StudentLessonsMenu;
