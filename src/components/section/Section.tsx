import { Card } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
}

export const Section = ({ title, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4 ">
      <h2 className="font-bold text-xl">{title}</h2>

      <ul
        data-variant={variant}
        className="grid grid-cols-1 sm:grid-cols-none gap-2 data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure
          fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis
          labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate
          beatae dolores eum voluptas quod eligendi est doloremque excepturi,
          praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo
          tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia
          modi, sapiente error animi reiciendis libero et amet ex quo soluta
          nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque
          vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum
          harum tempore quibusdam, architecto ratione."
            href="/cursos/12"
            image="https://flowbite.com/docs/images/blog/image-1.jpg"
            title="Curso de API Rest, Node e Typescript"
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure
          fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis
          labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate
          beatae dolores eum voluptas quod eligendi est doloremque excepturi,
          praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo
          tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia
          modi, sapiente error animi reiciendis libero et amet ex quo soluta
          nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque
          vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum
          harum tempore quibusdam, architecto ratione."
            href="/cursos/12"
            image="https://flowbite.com/docs/images/blog/image-1.jpg"
            title="Curso de API Rest, Node e Typescript"
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure
          fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis
          labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate
          beatae dolores eum voluptas quod eligendi est doloremque excepturi,
          praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo
          tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia
          modi, sapiente error animi reiciendis libero et amet ex quo soluta
          nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque
          vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum
          harum tempore quibusdam, architecto ratione."
            href="/cursos/12"
            image="https://flowbite.com/docs/images/blog/image-1.jpg"
            title="Curso de API Rest, Node e Typescript"
          />
        </li>
      </ul>
    </section>
  );
};
