import Modal from "react-bootstrap/Modal";
import { ReactNode } from "react";
import { CustomButton } from "./CustomButton";
import { ModalProps } from "react-bootstrap";

interface CustomModalProps {
  bodyContent?: ReactNode;
  title?: string;
  footer?: { cancelButtonTitle: string; submitButtonTitle: string };
  props: ModalProps;
}
export const CustomModal = ({
  bodyContent,
  footer,
  title,
  props,
}: CustomModalProps) => {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{title ? title : "Modal heading"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bodyContent
          ? bodyContent
          : "Woohoo, you're reading this text in a modal!"}
      </Modal.Body>
      <Modal.Footer>
        <CustomButton variant="secondary" onClick={props.onHide}>
          {footer?.cancelButtonTitle ? footer.cancelButtonTitle : "Cancel"}
        </CustomButton>
        <CustomButton onClick={props.onHide}>
          {footer?.submitButtonTitle ? footer.submitButtonTitle : "Submit"}
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
};
