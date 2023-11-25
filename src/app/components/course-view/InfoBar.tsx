import { Button } from "@nextui-org/react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function InfoBar({ title }: { title: string }) {
  return (
    <div className="flex flex-row justify-between p-6 w-full">
      <div className="flex flex-row items-center gap-4">
        <Button isIconOnly>
          <MdOutlineArrowBackIosNew className="shrink-0 text-lg" />
        </Button>
        <span className="text-2xl font-bold">{title}</span>
      </div>
      <div className="flex flex-row gap-2">
        <Button
          variant="light"
          startContent={<FaPhone className="shrink-0 text-lg text-teal-600" />}
          className="text-lg font-semibold"
        >
          Call Teacher
        </Button>
        <Button
          variant="light"
          startContent={
            <FaUserCircle className="shrink-0 text-lg text-orange-600" />
          }
          className="text-lg font-semibold"
        >
          Support
        </Button>
      </div>
    </div>
  );
}
