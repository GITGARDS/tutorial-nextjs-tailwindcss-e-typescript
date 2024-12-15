import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}
export async function generateMtadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id,
    description: params.id,
  };
}

export default function PageCourseDetail({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4">
        <StartCourse
          idClass="1"
          idCourse="1"
          imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
        />
        <CourseHeader />
      </div>
    </main>
  );
}
