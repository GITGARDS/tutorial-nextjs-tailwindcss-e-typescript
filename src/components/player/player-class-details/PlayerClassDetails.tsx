"use client";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import * as Tabs from "@radix-ui/react-tabs";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";

interface IPlayerClassDetailsProps {
  course: {
    title: string;
    description: string;
    numberOfClasses: number;
  };
  playingCourseId: string;
  playingClassId: string;
  classGroups: Pick<IPlayerClassGroupProps, "classes" | "title">[];
}
export const PlayerClassDetails = ({
  course,
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
    <div className="flex-1 overflow-auto pb-10">
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

      <Tabs.Root defaultValue="course-details">
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger
            value="class-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Visão geral
          </Tabs.Trigger>

          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Comentarios
          </Tabs.Trigger>

          <Tabs.Trigger
            value="course-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Detalhes do curso
          </Tabs.Trigger>
        </Tabs.List>
        <hr className="border-paper" />

        <Tabs.Content value="class-details">Detalhes da aula</Tabs.Content>
        <Tabs.Content value="class-comments">Comentarios da aula</Tabs.Content>
        <Tabs.Content value="course-details">
          <CourseHeader
            numberOfClasses={course.numberOfClasses}
            title={course.title}
            description={course.description}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
