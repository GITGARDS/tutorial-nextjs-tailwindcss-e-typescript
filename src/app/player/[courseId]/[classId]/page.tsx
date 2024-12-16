"use client";

import { PlayerHeader, PlayerPlaylist } from "@/components/player";

interface Props {
  params: {
    classId: string;
    courseId: string;
  };
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {
  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader
        title="API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias
          usads e muito mais"
        subTitle="Curso de API Rest, Node e Typescript"
      />
      <div className="flex gap-2 h-[calc(100vh-72px)]">
        <div className="max-w-96">
          <PlayerPlaylist
            playingCourseId={courseId}
            playingClassId={classId}
            classGroup={[
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-01",
                    title:
                      "API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-02",
                    title:
                      "API Rest, Node e Typescript #02 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-03",
                    title:
                      "API Rest, Node e Typescript #03 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-04",
                    title:
                      "API Rest, Node e Typescript #04 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-05",
                    title:
                      "API Rest, Node e Typescript #05 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-06",
                    title:
                      "API Rest, Node e Typescript #06 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-07",
                    title:
                      "API Rest, Node e Typescript #07 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-08",
                    title:
                      "API Rest, Node e Typescript #08 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introducao e apresentacao do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-09",
                    title:
                      "API Rest, Node e Typescript #09 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-10",
                    title:
                      "API Rest, Node e Typescript #10 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-11",
                    title:
                      "API Rest, Node e Typescript #11 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-12",
                    title:
                      "API Rest, Node e Typescript #12 - Apresentacao do curso tecnologias usadas e muito mais",
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="flex-1">Player</div>
      </div>
    </main>
  );
}
