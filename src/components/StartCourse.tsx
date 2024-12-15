"use client";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface IStartCourseProps {
  title: string;
  idCourse: string;
  idClass: string;
  imageUrl: string;
}
export const StartCourse = ({
  title,
  idCourse,
  idClass,
  imageUrl,
}: IStartCourseProps) => {
  const [ref, inView] = useInView({ threshold: 0.2, initialInView: true });

  return (
    <>
      <div ref={ref} className="p-3 bg-paper rounded-md flex flex-col gap-2">
        <Link
          href={`/player/${idCourse}/${idClass}`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
        >
          <div className="w-full h-full flex items-center justify-center bg-background rounded-md opacity-0 hover:opacity-70 transition-opacity">
            <MdPlayCircleOutline size={78} />
          </div>
        </Link>
        <Link
          href={`/player/${idCourse}/${idClass}`}
          className="bg-primary p-2 px-3 rounded text-center"
        >
          Começar curso
        </Link>
      </div>
      {/* Esta como: {inView === true ? "true" : "false"} */}
      {!inView && (
        <div className="p-3 bg-paper rounded-md flex flex-col gap-4 px-2 absolute left-0 right-0 top-14" >
          <h1 className="font-extrabold text-xl">{title}</h1>
          <Link
            href={`/player/${idCourse}/${idClass}`}
            className="bg-primary p-2 px-3 rounded text-center"
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
};
