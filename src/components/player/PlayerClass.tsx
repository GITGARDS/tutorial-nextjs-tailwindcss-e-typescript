"use client";
import { MdCheckCircle, MdCircle, MdPlayCircleOutline } from "react-icons/md";

export interface IPlayerClassProps {
  done: boolean;
  playing: boolean;
  title: string;
  onPlay: () => void;
  onCheck: () => void;
}

export const PlayerClass = ({
  done,
  playing,
  title,
  onPlay,
  onCheck,
}: IPlayerClassProps) => {
  return (
    <button className="flex gap-6 p-4 items-center" onClick={onPlay}>
      {done === true ? (
        <MdCheckCircle size={24} className="min-w-6 text-green-400" />
      ) : (
        <div
          className="group"
          onClick={(e) => {
            e.stopPropagation();
            onCheck();
          }}
        >
          <MdPlayCircleOutline
            size={24}
            className="min-w-6 group-hover:hidden"
          />
          <MdCircle size={24} className="min-w-6 hidden group-hover:block" />
        </div>
      )}

      <div className="flex flex-col gap-1 items-start">
        <p
          data-done={done}
          className="line-clamp-2 text-start data-[done=true]:text-green-400"
        >
          {title}
        </p>

        <span className="px-2 py-1 leading-4 bg-blue-600 rounded-full">
          {playing && "Reproduzindo"}
        </span>
      </div>
    </button>
  );
};
