"use client";

import dynamic from "next/dynamic";

// import ReactPlayer from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

interface IPlayerVideoPlayer {
  videoId: string;
}

export const PlayerVideoPlayer = ({ videoId }: IPlayerVideoPlayer) => {
  return (
    <>
      <ReactPlayer
      height={"100%"}
      width={"100%"}
      playing={true}
      controls={true}
        url={`https://www.youtube.com/embed/bP47qRVRqQs?si=${videoId}`}
      />
    </>
  );
};
