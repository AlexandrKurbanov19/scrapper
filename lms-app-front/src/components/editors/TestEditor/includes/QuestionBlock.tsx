import React, {
  memo, ReactNode, useEffect, useState, FC, useMemo,
} from 'react';
import * as dayjs from 'dayjs';

import { Draggable } from 'react-beautiful-dnd';
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  message,
  Radio,
  Select,
  Space, Switch,
  TimePicker,
  Tooltip,
  Upload,
  Form,
} from 'antd';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  CopyOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import useStore from '../../../../domain/modelLayer/store/useStore';
import styles from '../TestEditor.module.scss';
import ContentEditor from '../../ContentEditor';
import textIcon from '../icons/text';
import bigTextIcon from '../icons/bigText';
import singleIcon from '../icons/single';
import multipleIcon from '../icons/multiple';
import selectIcon from '../icons/select';
import scaleIcon from '../icons/scale';
import matrixSingleIcon from '../icons/matrixSingle';
import matrixMultipleIcon from '../icons/matrixMultiple';
import dateIcon from '../icons/date';
import timeIcon from '../icons/time';

import ListEditor from './ListEditor';
import MatrixRadio from './MatrixRadio';
import {
  Answer, OptionsType, Question, QuestionType,
} from '../types';
import MatrixCheckbox from './MatrixCheckbox';
import { Attaches } from '../../../common/LmsUpload/LmsUpload';
import { getAllowedAttachmentMimeTypes, getApiBase } from '../../../../env';

const dateFormat = 'DD.MM.YYYY';
const timeFormat = 'HH:mm';

interface QuestionBlockProps {
  question: Question,
  isSelected: boolean,
  readOnly: boolean,
  isChecking: boolean,
  isEditingResults: boolean,
  index: number,
  onChange: (question: Partial<Question>) => void,
  onClick: () => void,
  onClickAdd: () => void,
  onClickDelete: () => void,
  onClickDuplicate: () => void,
  answer: Answer,
  rightAnswer: Answer | undefined,
  result: boolean | undefined,
  onChangeAnswer: (question: Answer) => void,
  onChangeResult: (result: boolean) => void,
}

const QuestionBlock: FC<QuestionBlockProps> = (
  {
    question,
    isSelected,
    readOnly,
    isChecking,
    isEditingResults,
    index,
    onChange,
    onClick,
    onClickAdd,
    onClickDelete,
    onClickDuplicate,
    answer,
    rightAnswer,
    result,
    onChangeAnswer = () => {
    },
    onChangeResult = () => {
    },
  },
) => {
  const [points, setPoints] = useState<number | null>(question.points || 1);

  const newPoints = useMemo(() => {
    let _newPoints = points;
    if (!_newPoints || _newPoints < 1) {
      _newPoints = 1;
    }

    return _newPoints;
  }, [points]);

  useEffect(() => {
    if (!question.points || newPoints !== question.points) {
      onChange({ points: newPoints });
    }
  }, [newPoints, onChange, question.points]);

  const { authStore: { auth } } = useStore();
  const [isChoosingAnswer, setIsChoosingAnswer] = useState(false);

  useEffect(() => {
    setIsChoosingAnswer(false);
  }, [isSelected]);

  const isPreview = !isSelected || readOnly || isChoosingAnswer;

  const disabledInput = (
    // isMethodist
    // || (isTeacher && readOnly)
    // || (isParent)
    readOnly
    || isChecking
    || (!readOnly && !isChoosingAnswer)
  );

  const disabledTextColor = isChecking ? 'black' : undefined;

  // TODO: Выпилить эту дичь с isTeacher
  const isTeacher = true;

  return (
    <Draggable
      key={question?.id}
      draggableId={question?.id}
      index={index}
    >
      {(provided) => (
        <Card
          className={styles.block}
          // @ts-ignore
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            boxShadow: (isSelected && !readOnly)
              ? 'inset 5px 0px var(--ant-primary-6)'
              : 'none',
          }}
          onClick={onClick}
        >
          <div
            className={styles.dragHandle}
            {...provided.dragHandleProps}
            style={{
              visibility: readOnly ? 'hidden' : 'visible',
            }}
          >
            <div className={styles.dragDots}>
              {Array(6).fill(1).map((e, i) => (
                <div key={i} className={styles.dragDot} />
              ))}
            </div>
          </div>

          {(!readOnly || question?.content) && (
            <ContentEditor
              disableUndo
              readOnly={readOnly}
              onChange={(v) => onChange({ content: v })}
              value={question?.content}
            />
          )}

          {!isPreview && (
            <Select
              value={question.type}
              onChange={(type) => onChange({ type })}
              className={styles.typeSelect}
            >
              {([
                ['text', 'Текст (строка)', textIcon],
                ['bigText', 'Текст (абзац)', bigTextIcon],
                ['single', 'Один из списка', singleIcon],
                ['multiple', 'Несколько из списка', multipleIcon],
                ['select', 'Выпадающий список', selectIcon],
                ['scale', 'Шкала', scaleIcon],
                ['matrixSingle', 'Сетка (множественный выбор)', matrixSingleIcon],
                ['matrixMultiple', 'Сетка (флажков)', matrixMultipleIcon],
                ['date', 'Дата', dateIcon],
                ['time', 'Время', timeIcon],
                ['file', 'Файл', <UploadOutlined />],
              ] as [QuestionType, string, ReactNode][])
                .map(([type, title, icon]) => (
                  <Select.Option key={type}>
                    <div className={styles.typeOption}>
                      <div className={styles.typeOptionIcon}>
                        {icon}
                      </div>
                      {title}
                    </div>
                  </Select.Option>
                ))}
            </Select>
          )}

          <div className={styles.blockQuestion}>
            {(() => {
              switch (question.type) {
                case 'text':
                  return (
                    <Input
                      placeholder={!isChecking ? 'Краткий ответ' : 'Нет ответа'}
                      disabled={disabledInput}
                      onChange={(e) => onChangeAnswer(e.target.value)}
                      value={answer}
                      style={{ color: disabledTextColor }}
                    />
                  );
                case 'bigText':
                  return (
                    <Input.TextArea
                      placeholder={!isChecking ? 'Развернутый ответ' : 'Нет ответа'}
                      disabled={disabledInput}
                      onChange={(e) => onChangeAnswer(e.target.value)}
                      value={answer}
                      style={{ color: disabledTextColor }}
                    />
                  );
                case 'single':
                  return isPreview
                    ? (
                      <Radio.Group
                        defaultValue={answer}
                        onChange={(e) => onChangeAnswer(e.target.value)}
                        disabled={disabledInput}
                        className={styles.inputGroupVertical}
                        options={
                          question?.options?.map((option) => ({
                            label: (
                              <span style={{ color: disabledTextColor }}>
                                {option?.name}
                              </span>
                            ),
                            value: option?.id,
                          }))
                          ?? []
                        }
                      />
                    ) : (
                      <ListEditor
                        list={question?.options}
                        onChange={(options) => onChange({ options })}
                        iconType="radio"
                        questionId={question?.id}
                      />
                    );
                case 'multiple':
                  return isPreview
                    ? (
                      <Checkbox.Group
                        defaultValue={Array.isArray(answer) ? answer : []}
                        onChange={onChangeAnswer}
                        disabled={disabledInput}
                        className={styles.inputGroupVertical}
                        options={
                          question?.options?.map((option) => ({
                            label: (
                              <span style={{ color: disabledTextColor }}>
                                {option?.name}
                              </span>
                            ),
                            value: option?.id,
                          }))
                          ?? []
                        }
                      />
                    ) : (
                      <ListEditor
                        list={question?.options}
                        onChange={(options) => onChange({ options })}
                        iconType="checkbox"
                        questionId={question?.id}
                      />
                    );
                case 'select':
                  return isPreview
                    ? (
                      (readOnly || isChoosingAnswer)
                        ? (
                          <Select
                            defaultValue={answer}
                            onChange={onChangeAnswer}
                            disabled={disabledInput}
                            className={styles.select}
                            options={
                              question?.options?.map((option) => ({
                                label: (
                                  <span style={{ color: disabledTextColor }}>
                                    {option?.name}
                                  </span>
                                ),
                                value: option?.id,
                              }))
                            }
                          />
                        ) : (
                          <div>
                            {question?.options?.map((option, i) => (
                              <div key={i}>
                                {i + 1}
                                .
                                {' '}
                                {option?.name}
                              </div>
                            ))}
                          </div>
                        )
                    ) : (
                      <ListEditor
                        list={question?.options}
                        onChange={(options) => onChange({ options })}
                        questionId={question?.id}
                      />
                    );
                case 'scale':
                  return isPreview
                    ? (
                      <div className={styles.scaleRadioContainer}>
                        {question.scaleStartTitle}
                        <Radio.Group
                          className={styles.scaleRadioGroup}
                          defaultValue={answer}
                          onChange={(e) => onChangeAnswer(e.target.value)}
                          disabled={disabledInput}
                          options={
                            Array(11).fill(1)
                              .map((_, i) => i)
                              .filter((i) => (
                                (question.scaleStart ?? 0) <= i
                                && i <= (question.scaleEnd ?? 10)
                              ))
                              .map((i) => ({
                                label: (
                                  <span style={{ color: disabledTextColor }}>
                                    {i}
                                  </span>
                                ),
                                value: i,
                                style: {
                                  color: disabledTextColor,
                                  display: 'flex',
                                  flexDirection: 'column-reverse',
                                  alignItems: 'center',
                                },
                              }))
                          }
                        />
                        {question.scaleEndTitle}
                      </div>
                    ) : (
                      <div>
                        <Space size={8} align="center">
                          <Select
                            value={question.scaleStart}
                            onChange={(scaleStart) => onChange({ scaleStart })}
                          >
                            {[0, 1].map((option) => (
                              <Select.Option key={option}>
                                {option}
                              </Select.Option>
                            ))}
                          </Select>
                          <div>-</div>
                          <Select
                            value={question.scaleEnd}
                            onChange={(scaleEnd) => onChange({ scaleEnd })}
                          >
                            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                              <Select.Option key={option}>
                                {option}
                              </Select.Option>
                            ))}
                          </Select>
                        </Space>
                        <div className={styles.edgeInputRow}>
                          <div className={styles.edgeLabel}>
                            {question.scaleStart}
                          </div>
                          <Input
                            className={styles.edgeLabelInput}
                            placeholder="Подпись (необязательно)"
                            value={question.scaleStartTitle}
                            onChange={(e) => onChange({ scaleStartTitle: e.target.value })}
                          />
                        </div>
                        <div className={styles.edgeInputRow}>
                          <div className={styles.edgeLabel}>
                            {question.scaleEnd}
                          </div>
                          <Input
                            className={styles.edgeLabelInput}
                            placeholder="Подпись (необязательно)"
                            value={question.scaleEndTitle}
                            onChange={(e) => onChange({ scaleEndTitle: e.target.value })}
                          />
                        </div>
                      </div>
                    );
                case 'matrixSingle':
                  return isPreview
                    ? (
                      <MatrixRadio
                        rows={question.rows}
                        columns={question.columns}
                        rowToColumnSelected={answer}
                        onChange={onChangeAnswer}
                        disabled={disabledInput}
                        isChecking={isChecking}
                      />
                    ) : (
                      <div className={styles.listColumns}>
                        <div className={styles.listColumn}>
                          Строки:
                          <ListEditor
                            list={question?.rows}
                            onChange={(rows) => onChange({ rows })}
                            questionId={question?.id}
                            optionsType={OptionsType.ROWS}
                          />
                        </div>
                        <div className={styles.listColumn}>
                          Колонки:
                          <ListEditor
                            list={question?.columns}
                            onChange={(columns) => onChange({ columns })}
                            iconType="radio"
                            questionId={question?.id}
                            optionsType={OptionsType.COLUMNS}
                          />
                        </div>
                      </div>
                    );
                case 'matrixMultiple':
                  return isPreview
                    ? (
                      <MatrixCheckbox
                        rows={question.rows}
                        columns={question.columns}
                        rowToColumnSelected={answer}
                        onChange={onChangeAnswer}
                        disabled={disabledInput}
                        isChecking={isChecking}
                      />
                    ) : (
                      <div className={styles.listColumns}>
                        <div className={styles.listColumn}>
                          Строки:
                          <ListEditor
                            list={question?.rows}
                            onChange={(rows) => onChange({ rows })}
                            questionId={question?.id}
                            optionsType={OptionsType.ROWS}
                          />
                        </div>
                        <div className={styles.listColumn}>
                          Колонки:
                          <ListEditor
                            list={question?.columns}
                            onChange={(columns) => onChange({ columns })}
                            iconType="checkbox"
                            questionId={question?.id}
                            optionsType={OptionsType.COLUMNS}
                          />
                        </div>
                      </div>
                    );
                case 'date':

                  return (
                    <DatePicker
                      disabled={disabledInput}
                      className={styles.datePicker}
                      placeholder="Выберите дату"
                      onChange={(v) => onChangeAnswer(v?.format())}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      defaultValue={answer ? dayjs(answer, dateFormat) : null}
                      style={{ color: disabledTextColor }}
                    />
                  );
                case 'time':
                  return (
                    <TimePicker
                      disabled={disabledInput}
                      className={styles.datePicker}
                      placeholder="Выберите время"
                      onChange={(v) => onChangeAnswer(v?.format())}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      defaultValue={answer ? dayjs(answer, timeFormat) : null}
                      minuteStep={5}
                      format="HH:mm"
                      style={{ color: disabledTextColor }}
                    />
                  );
                case 'file':
                  return isChecking
                    ? (
                      <div>
                        {Array.isArray(answer)
                          ? (answer as Attaches)
                            ?.map((file, i) => (
                              <div key={i}>
                                <a href={file?.url} target="_blank" rel="noreferrer">
                                  {file?.name}
                                </a>
                              </div>
                            ))
                          : 'Нет прикрепленного файла'}
                      </div>
                    ) : (
                      <Upload
                        name="file"
                        action={`${getApiBase()}/api/editorjs/uploadFile`}
                        headers={{
                          Authorization: `Bearer ${auth.token}`,
                        }}
                        disabled={!readOnly}
                        accept={getAllowedAttachmentMimeTypes()}
                        onChange={(
                          {
                            file,
                            fileList,
                          },
                        ) => {
                          if (file.status !== 'uploading') {
                            // eslint-disable-next-line no-console
                            console.log(file, fileList);
                          }
                          if (file.status === 'done') {
                            message.success(`${file?.name} файл успешно загружен`);
                            const responses: Attaches = fileList.map((f) => f.response.file);
                            onChangeAnswer(responses ?? []);
                            // eslint-disable-next-line no-console
                            console.log(fileList, file);
                          }
                          if (file.status === 'error') {
                            message.error(`${file?.name} не был загружен.`);
                          }
                        }}
                      >
                        <Button
                          disabled={disabledInput}
                          icon={<UploadOutlined />}
                        >
                          Загрузить файл
                        </Button>
                      </Upload>
                    );
                default:
                  return 'Несуществующий блок';
              }
            })()}
          </div>

          {!isPreview && (
            <div className={styles.blockFooter}>
              <Form.Item label="Баллов за вопрос">
                <InputNumber min={1} value={points} onChange={setPoints} />
              </Form.Item>
              {!['bigText', 'file'].includes(question.type) && (
                <Button
                  size="large"
                  type="ghost"
                  onClick={() => setIsChoosingAnswer(true)}
                  className="mr-auto"
                >
                  Выбрать ответ
                </Button>
              )}
              <Tooltip placement="bottom" title="Добавить вопрос после этого">
                <Button
                  size="large"
                  icon={<PlusOutlined />}
                  type="text"
                  onClick={onClickAdd}
                />
              </Tooltip>
              <Tooltip placement="bottom" title="Удалить">
                <Button
                  size="large"
                  icon={<DeleteOutlined />}
                  type="text"
                  onClick={onClickDelete}
                />
              </Tooltip>
              <Tooltip placement="bottom" title="Дублировать">
                <Button
                  size="large"
                  icon={<CopyOutlined />}
                  type="text"
                  onClick={onClickDuplicate}
                />
              </Tooltip>
              <div className={styles.isNecessaryText}>
                Обязательный вопрос
              </div>
              <Switch
                checked={question.isMandatory}
                onChange={(isMandatory) => onChange({ isMandatory })}
              />
            </div>
          )}

          {isPreview && (
            <div>
              {`Баллов за вопрос: ${points}`}
            </div>
          )}

          {(isChecking) && (
            <div className={styles.blockFooter}>
              <div className={styles.isNecessaryText}>
                Результат:
              </div>
              {(isTeacher && isEditingResults && (
                !rightAnswer
                || ['bigText', 'file'].includes(question.type)
              ))
                ? (
                  <Switch
                    defaultChecked={result}
                    onChange={onChangeResult}
                  />
                )
                : (
                  result
                    ? <CheckCircleFilled className="text-success text-xl" />
                    : <CloseCircleFilled className="text-error text-xl" />
                )}
            </div>
          )}

          {isChoosingAnswer && (
            <div className={styles.blockFooter}>
              <Button
                size="large"
                type="ghost"
                onClick={() => setIsChoosingAnswer(false)}
                className="mr-auto"
              >
                Ок
              </Button>
            </div>
          )}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(QuestionBlock, (prev, next) => (
  prev.index === next.index
  && prev.isSelected === next.isSelected
  && prev.question === next.question
  && prev.answer === next.answer
  && prev.result === next.result
  && prev.rightAnswer === next.rightAnswer
));
