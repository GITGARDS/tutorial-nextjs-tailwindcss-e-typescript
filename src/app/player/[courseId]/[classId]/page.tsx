"use client";

import { PlayerClass, PlayerHeader } from "@/components/player";

interface Props {
  params: {
    classId: string;
    courseId: string;
  };
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {
  return (
    <>
      <PlayerHeader
        title="API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias
          usads e muito mais"
        subTitle="Curso de API Rest, Node e Typescript"
      />
      <PlayerClass
        onCheck={() => console.log("check")}
        onPlay={() => console.log("play")}
        done={false}
        playing={true}
        title="API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias
          usads e muito mais"
      />
    </>
  );
}
