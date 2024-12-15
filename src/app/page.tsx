import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px]">        
        <Section
          variant="h-list"
          title="Veja + Cursos"
          items={[
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "1 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "2 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "3 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "4 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "5 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
            {
              href: "/cursos/12",
              image: "https://flowbite.com/docs/images/blog/image-1.jpg",
              title: "6 Curso de API Rest, Node e Typescript",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora ea suscipit officiis accusamus nulla, tempore qui commodi iure fugiat quo vitae laudantium, ex dolor libero amet minima blanditiis labore. Maxime ea ipsum soluta repellendus labore quisquam, cupiditate beatae dolores eum voluptas quod eligendi est doloremque excepturi, praesentium nisi, nobis numquam! Unde iure quia ipsam. Eum, explicabo tempore? Corrupti, facere! Numquam nostrum deleniti dicta, officia modi, sapiente error animi reiciendis libero et amet ex quo soluta nihil a, veritatis ducimus obcaecati quidem ipsa. Dolorem, eaque    vitae, amet quod officiis suscipit ipsum maiores illo eligendi cum harum tempore quibusdam, architecto ratione.",
            },
          ]}
        />
        {/* <Section variant="grid" title="Veja + Cursos" /> */}
      </div>
    </main>
  );
}
