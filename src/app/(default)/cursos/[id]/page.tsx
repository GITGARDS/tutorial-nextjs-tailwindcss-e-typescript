"use client";
import { CourseContent } from "@/components/course-content/CourseContent";
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
        <div className="flex-[2] flex flex-col gap-12 pb-12">
          <CourseHeader
            title="Curso de figma para DEVS"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, eveniet.
        Laborum cum voluptates quas obcaecati assumenda. Commodi maxime magnam
        perferendis sapiente corrupti eum cumque, debitis, quisquam voluptatibus
        vel dolor. Architecto ullam, quae consequuntur quis, ratione ex itaque
        assumenda labore esse asperiores beatae aspernatur suscipit inventore
        illum nesciunt odit dolorem facere, natus maxime fugit. Et ab assumenda
        libero hic iusto quasi temporibus iste cumque veritatis. Praesentium
        unde consectetur maiores temporibus eos? Nesciunt rerum illo, modi non
        eum quas, placeat eligendi asperiores rem repellendus recusandae
        repudiandae? Facere velit fuga id ipsum vitae reiciendis dolor esse
        doloribus, aspernatur a aliquam perspiciatis fugit, non corporis
        reprehenderit, commodi ab consequuntur laboriosam aut rerum. Aliquid,
        atque! Vel fugiat vitae molestiae aut velit ratione. Laboriosam labore
        fugit nisi, quisquam quidem esse, maxime reprehenderit, illo repudiandae
        distinctio veritatis mollitia eveniet ea est error vitae animi aut
        molestias eos? Perferendis, est. Maxime adipisci dicta accusamus! Ipsum
        amet suscipit pariatur."
            numberOfClasses={48}
          />
          <CourseContent
            classGroups={[
              {
                title: "Introducao e apresentacao do projeto",
                courseId: "123",
                classes: [
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
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                courseId: "123",
                classes: [
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
                  {
                    id: "3",
                    title:
                      "NextJs, TailwindCSS e Typescript: #02 - Apresentacao do prototipo",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                courseId: "123",
                classes: [
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
                ],
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
