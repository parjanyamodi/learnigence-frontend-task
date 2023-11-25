import SideBar from "./components/navbar/SideBar";
import CourseView from "./components/course-view/CourseView";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <SideBar />
      <CourseView />
    </div>
  );
}
