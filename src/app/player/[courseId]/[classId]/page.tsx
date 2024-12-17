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
            numberOfClasses: 48,
            title: "🎩 Curso de Figma para DEVs",
            description:
              "Os melhores desenvolvedores do mercado fazem questão que estar preparados para os mais diversos tipos de desafios nas suas carreiras. A habilidade de desenvolver protótipos ou mesmo de entender como um protótipo foi desenvolvido pode ser um baita diferencial para você. Nesse curso que te mostrar de forma simples e prática como desenvolver protótipos no figma, vamos aproveitar certos conhecimentos de programação ao decorrer do curso. Tenho certeza que esse tem o potencial de ser o melhor curso de figma para desenvolvedores disponíveis gratuitamente. #CODARSE",
          }}
          classItem={{
            title:
              "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto",
            description:
              "Crie sua plataforma de cursos online com integração ao YouTube!\n\nCansado de usar o YouTube para aulas e perder tempo procurando por vídeos? Nesse curso, te ensino a criar sua própria plataforma de cursos online que se conecta ao YouTube para carregar e organizar suas aulas!\n\nAprenda a criar a plataforma do zero, com muito pouco conhecimento técnico, importar aulas do YouTube, organizar em módulos e seções e muito mais! A plataforma é personalizável e você adicionar mais recursos para vender cursos, ou permitir adicionar exercícios.\n\nDurante o desenvolvimento do curso vamos utilizar o NextJS, TailwindCSS e Typescript, além se conectar com as APIs do YouTube para trazer os detalhes das aulas e dos cursos.\n\nBônus: Acesso vitalício às atualizações, grupo exclusivo de alunos e muito mais!\n\n\nPrecisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA\n\n\nLinks mencionados no vídeo:\n🅵 Protótipo - https://www.figma.com/community/file/1349332873161679016/plataforma-de-cursos\n🗨️ Discord - https://discord.gg/ZC7JrPZn7P\n\nOutros cursos no canal:\n🔔 NextJS, TailwindCSS e Typescript - https://youtu.be/bP47qRVRqQs\n🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10\n☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc\n⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I\n👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44\n🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0\n\nLivros recomendados:\n📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW\n📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H\n📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9\n\nConteúdo:\n0:00 | Introdução\n0:29 | O que veremos nessa aula\n1:10 | Cronograma no notion\n2:00 | Versão do NodeJS\n3:00 | Abrindo e analizando o site publicado\n4:00 | Entendendo a dinâmica da plataforma de cursos online\n6:00 | SSR\n8:40 | Porque criar uma plataforma de cursos\n10:00 | Tela de player\n16:00 | Continuar assistindo\n17:15 | Aplicação responsiva\n22:40 | Finalização e agradecimentos\n\nCODARSE - Introdução e apresentação do projeto\n\n#DesenvolvimentoWeb #Programação #DesenvolvimentoDeSoftware #AprenderProgramação #CursosOnline #TechTutoriais #YouTubeEducação #CodeNewbies #DesenvolvimentoFrontend #CodeWithMe #TecnologiaEducacional #WebDesign #DesenvolvimentoDeAplicativos #AprendaACodificar #TecnologiaDeFrontend #EducaçãoDigital #DesenvolvimentoDeApps #TutoriaisDeProgramação #CódigoCriativo #ProgramaçãoParaIniciantes",
          }}
        />
      </div>
    </main>
  );
}
