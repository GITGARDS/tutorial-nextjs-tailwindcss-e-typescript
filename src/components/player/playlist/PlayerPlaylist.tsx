"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IPlayerClassGroupProps,
  PlayerClassGroup,
} from "./components/PlayerClassGroup";

interface IPlayerPlaylistProps {
  playingCourseId: string;
  playingClassId: string;
  classGroup: Pick<IPlayerClassGroupProps, "classes" | "title">[];
}

export const PlayerPlaylist = ({
  playingCourseId,
  playingClassId,
  classGroup,
}: IPlayerPlaylistProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(
    classGroup.findIndex((classGroup) =>
      classGroup.classes.some(
        (classItem) => classItem.classId === playingClassId
      )
    )
  );
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col p-4 bg-paper">
        <h3 className="text-lg font-bold">Conteudo do Curso</h3>

        <ol className="overflow-auto overflow-primary">
          {classGroup.map((classGroup, index) => (
            <li key={classGroup.title}>
              <PlayerClassGroup
                {...classGroup}
                playingClassId={playingClassId}
                position={index + 1}
                open={openedIndex === index}
                onToggle={() =>
                  setOpenedIndex(openedIndex === index ? undefined : index)
                }
                onPlay={(classId) =>
                  router.push(`/player/${playingCourseId}/${classId}`)
                }
                onCheck={(classId) => console.log("check", classId)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
