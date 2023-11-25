import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoChatbubbles, IoVideocam } from "react-icons/io5";
import { MdOutlineScreenShare } from "react-icons/md";
import { RxExit } from "react-icons/rx";
export default function VideoPlayback() {
  return (
    <div className="flex flex-row w-full justify-evenly gap-4 p-4">
      <div className="flex flex-col gap-4">
        <Image
          src={
            "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
          }
          width={200}
          height={100}
          alt={""}
          className="aspect-video object-cover rounded-xl"
        />
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOx6WphjTM3k7QYPKuUsv_ErPWbCCkDjiA7g3cr-3RGQNFpiGCpOWMhweS0UA44hyhkc&usqp=CAU"
          }
          width={200}
          height={100}
          alt={""}
          className="aspect-video object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" isIconOnly>
              <IoVideocam className="shrink-0 text-lg" />
            </Button>
            <span className="font-semibold">Cam</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" isIconOnly>
              <FaMicrophoneAlt className="shrink-0 text-lg" />
            </Button>
            <span className="font-semibold">Mic</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" isIconOnly>
              <MdOutlineScreenShare className="shrink-0 text-lg" />
            </Button>
            <span className="font-semibold">Share</span>
          </div>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" isIconOnly>
              <IoChatbubbles className="shrink-0 text-lg" />
            </Button>
            <span className="font-semibold">Cam</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg" isIconOnly className="bg-teal-500 text-white">
              <RxExit className="shrink-0 text-lg" />
            </Button>
            <span className="font-semibold">Mic</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <iframe
          src="https://www.youtube.com/embed/zY38SV2BW7k?si=TCq3NLrZeuLokemL"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg drop-shadow-lg w-[70vw] aspect-video"
        ></iframe>
      </div>
    </div>
  );
}
