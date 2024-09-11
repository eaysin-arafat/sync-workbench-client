import { Button, Group, Text } from "@mantine/core";

interface Props {
  title?: string;
  handleDelete?: () => void;
  handleBulkDelete?: () => Promise<void>;
  closeModal?: () => void;
}
const DeleteConfirmation = ({
  title,
  closeModal,
  handleDelete,
  handleBulkDelete,
}: Props) => {
  const handleDeleteClick = () => {
    if (handleDelete) {
      handleDelete();
    }
    if (handleBulkDelete) {
      handleBulkDelete();
    }
  };
  return (
    <>
      <Text size="sm" mb="xs" fw={500}>
        Are you sure you want to delete this {title}?
      </Text>
      <Text size="sm" mb="md">
        This action cannot be undone. Deleting this {title} will remove it from
        the system permanently.
      </Text>
      <Group align="end" className="!flex !justify-end">
        <Button onClick={closeModal}>Cancel</Button>
        <Button color="red" onClick={handleDeleteClick}>
          Delete
        </Button>
      </Group>
    </>
  );
};

export default DeleteConfirmation;
