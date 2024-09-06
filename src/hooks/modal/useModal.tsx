import { Modal, ModalProps } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type UseModalReturn = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  ModalComponent: React.FC<Omit<ModalProps, "opened" | "onClose">>;
};

export const useModal = (initialOpened: boolean = false): UseModalReturn => {
  const [opened, { open, close }] = useDisclosure(initialOpened);

  const ModalComponent: React.FC<Omit<ModalProps, "opened" | "onClose">> = (
    props
  ) => (
    <Modal
      opened={opened}
      onClose={close}
      {...props}
      styles={{
        content: { paddingLeft: 10, paddingRight: 10 },
        title: { fontSize: 22 },
      }}
    />
  );

  return {
    isOpen: opened,
    openModal: open,
    closeModal: close,
    ModalComponent,
  };
};
