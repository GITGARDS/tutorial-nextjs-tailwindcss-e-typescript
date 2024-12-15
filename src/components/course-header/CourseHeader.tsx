import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContextCopy } from "./components/ContextCopy";

export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">Curso de figma para DEVS</h1>
      <CollapsibleText numberOfLinesWhenClosed={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, eveniet.
        Laborum cum voluptates quas obcaecati assumenda. Commodi maxime magnam
        perferendis sapiente corrupti eum cumque, debitis, quisquam voluptatibus
        vel dolor. Architecto ullam, quae consequuntur quis, ratione ex itaque
        assumenda labore esse asperiores beatae aspernatur suscipit inventore
        illum nesciunt odit dolorem facere, natus maxime fugit. Et ab assumenda
        libero hic iusto quasi temporibus iste cumque veritatis. Praesentium
        unde consectetur maiores temporibus eos? Nesciunt rerum illo, modi non
        eum quas, placeat eligendi asperiores rem repellendus recusandae
        repudiandae? Facere velit fuga id ipsum vitae reiciendis dolor esse
        doloribus, aspernatur a aliquam perspiciatis fugit, non corporis
        reprehenderit, commodi ab consequuntur laboriosam aut rerum. Aliquid,
        atque! Vel fugiat vitae molestiae aut velit ratione. Laboriosam labore
        fugit nisi, quisquam quidem esse, maxime reprehenderit, illo repudiandae
        distinctio veritatis mollitia eveniet ea est error vitae animi aut
        molestias eos? Perferendis, est. Maxime adipisci dicta accusamus! Ipsum
        amet suscipit pariatur.
      </CollapsibleText>
      <div className="flex gap-2 items-center">
        <ContextCopy title="Copie o conteudo abaixo" content="https://codarse.com/cursos/PL29TaWXah3iZqMoLjUU8EoKXQXjuc50F1">
          <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-paper">
            <MdShare />
            Compartilhar
          </button>
        </ContextCopy>
        <span>48 aulas</span>
      </div>
    </div>
  );
};
