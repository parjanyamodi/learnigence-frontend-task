import InfoBar from "./InfoBar";
import SubMenu from "./SubMenu";
import VideoPlayback from "./VideoPlayback";

export default function CourseView() {
  return (
    <div className="flex flex-col items-start w-full">
      <InfoBar title="Basic Mathematics 101" />
      <SubMenu />
      <VideoPlayback />
    </div>
  );
}
