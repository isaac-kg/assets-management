import { Modal } from "antd";
import { FC, Fragment, ReactNode } from "react";
import "./modal.scss";

interface CustomModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  content: ReactNode;
  title: string;
}

const CustomModal: FC<CustomModalProps> = ({
  isOpen = false,
  setIsOpen,
  content,
  title,
}) => {
  return (
    <Fragment>
      <Modal
        title={title}
        className="custom-modal"
        centered
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        {content}
      </Modal>
    </Fragment>
  );
};

export default CustomModal;
