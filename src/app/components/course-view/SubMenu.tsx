"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { SiGoogleclassroom } from "react-icons/si";
import { PiProjectorScreenBold } from "react-icons/pi";
import { MdOutlineVideoSettings } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { GrDocumentText, GrDocumentVideo } from "react-icons/gr";
import VideoPlayback from "./VideoPlayback";

const tabOptions = [
  {
    icon: <SiGoogleclassroom />,
    title: "Classroom",
  },
  {
    icon: <PiProjectorScreenBold />,
    title: "Whiteboard",
  },
  {
    icon: <MdOutlineVideoSettings />,
    title: "Videos",
  },
  {
    icon: <RiSlideshowLine />,
    title: "Slide Show",
  },
  {
    icon: <GrDocumentText />,
    title: "Documents",
  },
  {
    icon: <GrDocumentVideo />,
    title: "Doc,Cam",
  },
];
export default function SubMenu() {
  return (
    <div className="flex flex-col items-center w-full">
      <Tabs radius="full" size="lg" className="">
        {tabOptions.map((tab) => (
          <Tab
            title={
              <div className="flex items-center space-x-2">
                {tab.icon}
                <span>{tab.title}</span>
              </div>
            }
            className="p-6"
          />
        ))}
      </Tabs>
    </div>
  );
}
