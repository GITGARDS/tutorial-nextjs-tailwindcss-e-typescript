
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";

interface IPlayerClassGroupProps {
  title: string;
  open: boolean;
  position: number;
  classes: Pick<IPlayerClassProps, "done" | "playing" | "title">[];
  onToggle: () => void;
}

export const PlayerClassGroup = ({
  title,
  open,
  position,
  classes,
  onToggle,
}: IPlayerClassGroupProps) => {
  return (
    <div className="flex flex-col">
      <button
        className="flex gap-6 p-4 bg-paper items-center"
        onClick={onToggle}
      >
        <div className="flex items-center justify-center bg-background h-12 w-12 rounded-full">
          {position}
        </div>

        <div className="flex flex-col flex-1 items-start line-clamp-1">
          <span className="font-bold text-start line-clamp-1">{title}</span>
          <span className="font-light text-sm text-start line-clamp-1">
            {classes.filter((classItem) => classItem.done).length}/
            {classes.length} aulas
          </span>
        </div>

        {open ? (
          <MdKeyboardArrowDown size={28} />
        ) : (
          <MdKeyboardArrowRight size={28} />
        )}
      </button>

      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map((classItem) => (
          <li key={classItem.title}>
            <PlayerClass
              {...classItem}
              onPlay={() => console.log("play")}
              onCheck={() => console.log("check")}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

{
  /* <li>
<PlayerClass
  onCheck={() => console.log("check")}
  onPlay={() => console.log("play")}
  done={false}
  playing={true}
  title="API Rest, Node e Typescript #00 - Apresentacao do curso tecnologias
usads e muito mais"
/>
</li> */
}
