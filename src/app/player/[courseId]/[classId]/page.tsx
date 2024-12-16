"use client";

import { PlayerHeader } from "@/components/player";

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
      Player {courseId} {classId}
    </>
  );
}
