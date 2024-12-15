"use client";
import { useState } from "react";

interface ICollapsibleTextProps {
  numberOfLinesWhenClosed: number;
  children: React.ReactNode;
}

export const CollapsibleText = ({
  numberOfLinesWhenClosed,
  children,
}: ICollapsibleTextProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <p
        data-open={open}
        style={
          { "--number-Of-Lines-When-Closed": numberOfLinesWhenClosed } as any
        }
        className="data-[open=false]:line-clamp-[var(--number-Of-Lines-When-Closed)]"
      >
        {children}
      </p>
      <button
        data-open={open}
        onClick={() => setOpen(!open)}
        className="bg-paper rounded boder boder-primary px-3 data-[open=false]:-mt-7"
      >
        {open ? "Ver Menos" : "Ver Mais"}
      </button>
    </div>
  );
};
