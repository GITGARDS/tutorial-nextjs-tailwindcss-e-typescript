"use client";
import Image from "next/image";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

interface ICommentProps {}

export const Comment = ({}: ICommentProps) => {
  return (
    <div className="flex gap-2 items-start">
      <Image
        src={
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        }
        alt="Avatar"
        width={40}
        height={40}
        draggable={false}
        className="rounded-full"
      />

      <div className="bg-paper flex-1 flex flex-col gap-4 p-2 rounded">
        <div className="flex gap-2 items-center">
          <span className="font-bold">User Name</span>
          <span className="font-extrabold opacity-50 text-xs">
            25/07/25 as 15:25data
          </span>
        </div>
        <p>Comment</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <MdThumbUp />
            <span>5</span>
          </div>

          <button className="flex items-center gap-1 text-primary">
            <MdArrowDropDown size={24} />
            <span>Ver Resposta (2)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
