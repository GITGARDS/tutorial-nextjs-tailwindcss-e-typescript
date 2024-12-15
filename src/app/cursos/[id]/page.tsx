import { ClassGroup } from "@/components/course-content/components/ClassGroup";
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
      <div className="w-full min-[880px]:max-w-[880px] px-2 lg:px-0 flex flex-col gap-4 md:flex-row-reverse">
        <div className="flex-1">
          <StartCourse
            title="Curso de Figma para DEVs"
            idClass="1"
            idCourse="1"
            imageUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
          />
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <CourseHeader />
          <ClassGroup
            title="Introducao e apresentacao do projeto"
            courseId="123"
            classes={[
              {
                id: "1",
                title:
                  "NextJs, TailwindCSS e Typescript: #00 - Apresentacao do prototipo",
              },
              {
                id: "2",
                title:
                  "NextJs, TailwindCSS e Typescript: #01 - Apresentacao do prototipo",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
