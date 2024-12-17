"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { MdPlayCircle } from "react-icons/md";

// import ReactPlayer from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IPlayerVideoPlayer {
  videoId: string;
  onPlayNext: () => void;
}

export const PlayerVideoPlayer = ({
  videoId,
  onPlayNext,
}: IPlayerVideoPlayer) => {
  const [progress, setProgress] = useState<number | undefined>(undefined);
  const [totalDuration, setTotalDuration] = useState<number | undefined>(
    undefined
  );

  const secondsUltilEnd = useMemo(() => {
    if (!totalDuration) return undefined;
    if (!progress) return undefined;
    return Number((totalDuration - progress).toFixed(0));
  }, [totalDuration, progress]);

  const showNextButton = useMemo(() => {
    return secondsUltilEnd && secondsUltilEnd <= 30;

  }, [secondsUltilEnd]);

  return (
    <>
      {showNextButton && (
        <button
          onClick={onPlayNext}
          className="flex items-center gap-2 bg-primary p-3 px-4 rounded-lg font-bold absolute right-4 top-36"
        >
          Próxima aula em {secondsUltilEnd}s
          <MdPlayCircle size={24} />
        </button>
      )}

      <ReactPlayer
        height={"100%"}
        width={"100%"}
        playing={true}
        controls={true}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
        onDuration={(duration) => setTotalDuration(duration)}
        onEnded={() => onPlayNext()}
        url={`https://www.youtube.com/embed/bP47qRVRqQs?si=${videoId}`}
      />
    </>
  );
};
