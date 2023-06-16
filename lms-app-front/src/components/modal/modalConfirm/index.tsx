import React, {
  FC, ReactNode, useEffect, useRef,
} from 'react';
import { Modal, ModalProps } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ModalFuncProps } from 'antd/es/modal/Modal';
import styles from './styles.module.scss';

export interface ModalConfirmProps extends ModalProps {
  showConfirm: boolean,
  onCancel?: (e: React.MouseEvent) => void
  onOk?: (e: React.MouseEvent) => void
  cancelText: string
  children?: ReactNode
  okText: string
}

const modalDefaultWidth = 520;

const ModalConfirm: FC<ModalConfirmProps> = ({
  showConfirm,
  onCancel,
  onOk,
  children,
  cancelText,
  okText,
  title,
}) => {
  const [modal, contextHolder] = Modal.useModal();

  const modalRef = useRef<{
    destroy:() => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
  }>();

  useEffect(() => {
    if (showConfirm) {
      modalRef.current = modal.confirm({
        open: showConfirm,
        className: styles.modal,
        centered: true,
        icon: <ExclamationCircleOutlined />,
        content: children,
        okText,
        okButtonProps: {
          className: styles.okButton,
          type: 'default',
        },
        cancelButtonProps: {
          className: styles.cancelButton,
          type: 'primary',
        },
        onOk,
        cancelText,
        onCancel,
        title,
        width: modalDefaultWidth,
      });
    } else {
      modalRef.current?.destroy();
    }

    return () => {
      modalRef.current?.destroy();
    };
  }, [showConfirm, onCancel, children, onOk, modal, cancelText, title, okText]);

  return (contextHolder);
};

export default ModalConfirm;
