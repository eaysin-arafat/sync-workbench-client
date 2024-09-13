import { RootState } from "@/app/store";
import { logout } from "@/features/auth/auth-slice";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ClickOutside from "../../layout/click-outside";
import AvatarGroup from "../ui/avatar/avatar-group";

const DropdownUser = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state?.auth);
  const { data: employee } = useSelector((state: RootState) => state?.employee);
  const name = `${user?.first_name} ${user?.last_name}`;
  const avatarURL = user?.avatar?.data?.attributes?.url || "";

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-textColor capitalize">
            {name}
          </span>
          <span className="block text-xs text-textGray mt-0.5">
            {employee?.designation?.data?.attributes?.name}
          </span>
        </span>

        {/* <img src={UserOne} alt="User" /> */}
        <AvatarGroup
          data={[{ name: name, url: avatarURL }]}
          isTooltip={false}
        />

        <IoIosArrowDown size={18} />
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-3 flex w-62.5 flex-col rounded-sm border border-stroke bg-secondaryBg shadow-default`}
        >
          <ul className="flex flex-col gap-4 border-b border-stroke px-6 py-4">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-textColor hover:text-primary lg:text-base"
              >
                <CgProfile size={17} />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-textColor hover:text-primary"
              >
                <GrContact />
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-textColor hover:text-primary"
              >
                <MdAccountCircle size={18} />
                Account Settings
              </Link>
            </li>
          </ul>
          <button
            className="flex items-center gap-3.5 px-6 py-2 text-sm font-medium duration-300 ease-in-out text-textColor hover:text-primary"
            onClick={() => dispatch(logout())}
          >
            <BiLogOut />
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
