"use client";

import { PlayerClassGroup, PlayerHeader } from "@/components/player";

interface Props {
  params: {
    classId: string;
    courseId: string;
  };
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {
  return (
    <main className="flex flex-col gap-20">
      <PlayerHeader
        title="API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias
          usads e muito mais"
        subTitle="Curso de API Rest, Node e Typescript"
      />
      <PlayerClassGroup
        onToggle={() => console.log("toogle")}
        open={true}
        title="Introducao e apresentacao do projeto"
        position={1}
        classes={[
          {
            done: true,
            playing: false,
            title:
              "API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias usadas e muito mais",
          },
          {
            done: false,
            playing: true,
            title:
              "API Rest, Node e Typescript #02 - Apresentacao do curso tecnologias usadas e muito mais",
          },
          {
            done: false,
            playing: false,
            title:
              "API Rest, Node e Typescript #03 - Apresentacao do curso tecnologias usadas e muito mais",
          },
          {
            done: false,
            playing: false,
            title:
              "API Rest, Node e Typescript #04 - Apresentacao do curso tecnologias usadas e muito mais",
          },
        ]}
      />
    </main>
  );
}
