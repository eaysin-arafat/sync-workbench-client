import { useModal } from "@/hooks/modal/useModal";
import { Input } from "@mantine/core";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchModal = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { ModalComponent, openModal } = useModal();

  return (
    <div
      className="bg-gray text-gray-900 cursor-pointer block sm:hidden"
      onClick={openModal}
    >
      <IoSearchOutline size={23} />

      <ModalComponent
        styles={{ body: { padding: 0, margin: 0 } }}
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
      </ModalComponent>
    </div>
  );
};

export default SearchModal;
