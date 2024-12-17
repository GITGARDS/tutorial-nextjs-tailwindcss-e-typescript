"use client";

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { ContextCopy } from "./components/ContextCopy";

interface ICourseHeaderProps {
  title: string;
  description: string;
  numberOfClasses: number;
}

export const CourseHeader = ({
  title,
  description,
  numberOfClasses,
}: ICourseHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">{title}</h1>
      <CollapsibleText numberOfLinesWhenClosed={3}>
        {description}
      </CollapsibleText>
      <div className="flex gap-2 items-center">
        <ContextCopy
          title="Copie o conteudo abaixo"
          content={window.location.href}
        >
          <button className="flex items-center gap-2 py-2 px-4 rounded-full bg-paper">
            <MdShare />
            Compartilhar
          </button>
        </ContextCopy>
        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  );
};
