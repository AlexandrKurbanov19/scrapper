import React, { useRef, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import {
  Button, Checkbox, Input, Radio,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from '../TestEditor.module.scss';
import { List, ListItem, OptionsType } from '../types';

interface IProps {
  list: List | undefined,
  onChange: (list: List) => void,
  iconType?: 'number' | 'radio' | 'checkbox',
  questionId: string,
  optionsType?: OptionsType
}

const ListEditor: FC<IProps> = (
  {
    list = [],
    onChange,
    iconType = 'number',
    questionId,
    optionsType = OptionsType.OPTIONS,
  },
) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const focusOnIndex = (index: number) => {
    setTimeout(() => { // сфокусироваться на предыдущем пункте
      if (listRef.current) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        listRef.current.querySelectorAll(`.${styles.listItemInput}`)[index]?.focus();
      }
    }, 100);
  };

  const changeItem = (index: number, item: ListItem) => {
    const newList = [...list];
    newList[index] = item;
    onChange(newList);
  };

  const deleteItem = (index: number) => () => {
    onChange(list.filter((e, i) => (i !== index)));
    focusOnIndex(index - 1); // сфокусироваться на предыдущем пункте
  };

  const addItem = (
    index: number,
    item: ListItem = { id: uuidv4(), name: '' },
  ) => {
    const newList = [...list];
    newList.splice(index, 0, item);
    onChange(newList);
    focusOnIndex(index); // сфокусироваться на новом пункте
  };

  const listWithFakeNewItem = [...list, { id: uuidv4(), name: '' }];

  return (
    <Droppable
      droppableId={`${questionId}_${optionsType}`}
      type={`${questionId}_${optionsType}`}
    >
      {(provided) => (
        <div
          className={styles.list}
          ref={(ref) => {
            listRef.current = ref;
            provided.innerRef(ref);
          }}
          // style={getAnswerListStyle(snapshot.isDraggingOver)}
        >
          {listWithFakeNewItem.map((item, i) => {
            const isFakeNewItem = i === (listWithFakeNewItem.length - 1);
            return (
              <Draggable
                key={`${item?.id}`}
                draggableId={`${item?.id}`}
                index={i}
                isDragDisabled={isFakeNewItem}
              >
                {(prov) => (
                  <div
                    className={styles.listItem}
                    ref={prov.innerRef}
                    {...prov.draggableProps}
                    style={prov.draggableProps.style}
                  >
                    <div
                      className={styles.dragHandleOption}
                      {...prov.dragHandleProps}
                      style={{
                        visibility: isFakeNewItem ? 'hidden' : 'visible',
                      }}
                    >
                      <div className={styles.dragDotsOption}>
                        {Array(6).fill(1).map((e, j) => (
                          <div key={j} className={styles.dragDotOption} />
                        ))}
                      </div>
                    </div>
                    {{
                      number: `${i + 1}.`,
                      radio: <Radio checked={false} />,
                      checkbox: <Checkbox checked={false} />,
                    }[iconType]}
                    <Input
                      className={styles.listItemInput}
                      placeholder={isFakeNewItem ? 'Добавить новый пункт' : 'Текст'}
                      value={item?.name}
                      onChange={(e) => changeItem(
                        i,
                        { ...item, name: e.target.value },
                      )}
                      onPressEnter={() => addItem(i + 1)}
                      onKeyDown={(e) => {
                        if (!item?.name && e.key === 'Backspace') {
                          deleteItem(i);
                        }
                      }}
                    />
                    <Button
                      size="small"
                      icon={<CloseOutlined />}
                      type="text"
                      onClick={deleteItem(i)}
                      style={{
                        visibility: isFakeNewItem ? 'hidden' : 'visible',
                      }}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ListEditor;
