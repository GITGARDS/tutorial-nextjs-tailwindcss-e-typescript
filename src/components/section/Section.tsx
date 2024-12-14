import { Card } from "../card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4 ">
      <h2 className="font-bold text-xl">Todos os Cursos</h2>

      <ul className="flex flex-col gap-2">
        <li>
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
        <li>
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
        <li>
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
