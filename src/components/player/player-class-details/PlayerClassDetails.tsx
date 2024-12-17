"use client";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";

interface IPlayerClassDetailsProps {
  playingCourseId: string;
  playingClassId: string;
  classGroups: Pick<IPlayerClassGroupProps, "classes" | "title">[];
}
export const PlayerClassDetails = ({
  playingCourseId,
  playingClassId,
  classGroups,
}: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const nextClassId = useMemo(() => {
    const classes = classGroups.flatMap((claGroup) => claGroup.classes);
    const currentClassIndex = classes.findIndex(
      (f) => f.classId === playingClassId
    );
    const nextClassIndex = currentClassIndex + 1;
    if (nextClassIndex === classes.length) {
      return undefined;
    }
    return classes[nextClassIndex].classId;
  }, [classGroups, playingClassId]);

  return (
    <div className="flex-1">
      <div className="aspect-video">
        <PlayerVideoPlayer
          videoId="bP47qRVRqQs"
          onPlayNext={() =>
            nextClassId
              ? router.push(`/player/${playingCourseId}/${nextClassId}`)
              : {}
          }
        />
      </div>
      <div>Descrição</div>
    </div>
  );
};
