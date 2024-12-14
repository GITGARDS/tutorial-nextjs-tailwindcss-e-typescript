import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href={"/cursos/12"} className="hover:no-underline">
      <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
        <Image
          src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          alt={"Curso de API Rest, Node e Typescript"}
          height={0}
          width={1000}
          draggable={false}
          className="aspect-video object-cover rounded-xl"
        />
        <h4 className="font-extrabold text-lg">
          Curso de API Rest, Node e Typescript
        </h4>

        <p className="line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure
          fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis
          labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate
          beatae dolores eum voluptas quod eligendi est doloremque excepturi,
          praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo
          tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia
          modi, sapiente error animi reiciendis libero et amet ex quo soluta
          nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque
          vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum
          harum tempore quibusdam, architecto ratione.
        </p>
      </article>
    </Link>
  );
};
