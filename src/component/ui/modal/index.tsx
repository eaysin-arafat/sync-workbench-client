import { Modal as MantineModal } from "@mantine/core";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  title?: string;
  opened: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "70rem" | "90rem";
  withCloseButton?: boolean;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
}

const Modal = ({
  children,
  onClose,
  opened,
  title,
  size,
  closeOnClickOutside,
  closeOnEscape,
  withCloseButton,
}: ModalProps) => {
  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
      title={title}
      size={size}
      withCloseButton={withCloseButton}
      closeOnEscape={closeOnEscape}
      closeOnClickOutside={closeOnClickOutside}
      styles={{
        title: { fontSize: 21, fontWeight: 500 },
        header: { paddingTop: "20px" },
        content: { padding: "0 10px" },
      }}
    >
      {children}
    </MantineModal>
  );
};

export default Modal;
