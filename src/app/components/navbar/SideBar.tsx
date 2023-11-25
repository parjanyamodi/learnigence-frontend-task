import { Avatar, Button } from "@nextui-org/react";
import { CgMenuLeft } from "react-icons/cg";
import { GoBell, GoEye } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LuFileCheck } from "react-icons/lu";
import { MdOutlineBarChart, MdPeopleAlt } from "react-icons/md";

export default function SideBar() {
  return (
    <div className="flex flex-col min-h-full w-24 px-4 py-4 bg-gray-200 items-center place-content-between">
      <div className="flex flex-col items-center gap-10">
        <Avatar
          src="data:image/png;base64,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"
          size="lg"
        />
        <Button isIconOnly size="lg" variant="light">
          <CgMenuLeft className="shrink-0 text-4xl" />
        </Button>
        <div className="flex flex-col gap-4 items-center">
          <Button isIconOnly size="lg" variant="light">
            <GoBell className="shrink-0 text-3xl" />
          </Button>
          <Button isIconOnly size="lg" variant="light">
            <IoTimerOutline className="shrink-0 text-3xl text-gray-400" />
          </Button>
          <Button isIconOnly size="lg" variant="light">
            <LuFileCheck className="shrink-0 text-3xl text-gray-400" />
          </Button>
          <Button isIconOnly size="lg" variant="light">
            <GoEye className="shrink-0 text-3xl text-gray-400" />
          </Button>
          <Button isIconOnly size="lg" variant="light">
            <MdPeopleAlt className="shrink-0 text-3xl text-gray-400" />
          </Button>
          <Button isIconOnly size="lg" variant="light">
            <MdOutlineBarChart className="shrink-0 text-3xl text-gray-400" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col py-10">
        <Avatar size="lg" />
      </div>
    </div>
  );
}
