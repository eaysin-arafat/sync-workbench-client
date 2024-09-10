import { Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Modal from "../ui/modal";

const SearchModal = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div
      className="bg-gray text-gray-900 cursor-pointer block sm:hidden"
      onClick={open}
    >
      <IoSearchOutline size={23} />

      <Modal
        onClose={close}
        opened={opened}
        withCloseButton={false}
        closeOnEscape={true}
        closeOnClickOutside={true}
      >
        <div className="">
          <Input
            placeholder="Clearable input"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SearchModal;
