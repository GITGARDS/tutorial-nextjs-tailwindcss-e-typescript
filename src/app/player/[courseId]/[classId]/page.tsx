import {
  PlayerClassDetails,
  PlayerHeader,
  PlayerPlaylist,
} from "@/components/player";

interface Props {
  params: {
    classId: string;
    courseId: string;
  };
}
export default function PagePlayer({ params: { classId, courseId } }: Props) {
  const classGroupData = [
    {
      title: "1 - Introducao e apresentacao do projeto",
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
      title: "2 - Introducao e apresentacao do projeto",
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
      title: "3 - Introducao e apresentacao do projeto",
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
      title: "4 - Introducao e apresentacao do projeto",
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
      title: "5 - Introducao e apresentacao do projeto",
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
  ];

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
            classGroup={classGroupData}
          />
        </div>

        <PlayerClassDetails
          playingCourseId={courseId}
          playingClassId={classId}
          classGroups={classGroupData}
          course={{
            title: "Curso de figma para DEVS",
            numberOfClasses: 48,
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum molestias quibusdam suscipit recusandae modi quam dicta expedita excepturi fugiat alias quaerat nihil, ea vitae cupiditate quod assumenda maxime laudantium numquam sit. Ullam officia earum debitis non maiores. Dolores pariatur neque illo consectetur hic tenetur. Unde sunt sit consequatur eum!",
          }}
        />
      </div>
    </main>
  );
}
