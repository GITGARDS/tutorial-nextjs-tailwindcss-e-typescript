"use client";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";
interface IContextCopyProps {
  content: string;
  title: string;
  children: React.ReactNode;
}

export const ContextCopy = ({
  content,
  title,
  children,
}: IContextCopyProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const handleCopy = () => {
    setCopied(true);
    window.navigator.clipboard.writeText(content);
  };
  return (
    <DropDownMenu.Root>
      <DropDownMenu.Trigger asChild>{children}</DropDownMenu.Trigger>
      <DropDownMenu.Portal>
        <DropDownMenu.Content className="p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 min-w-72 max-w-sm">
          <span>{title}</span>
          <div className="flex gap-2 items-center">
            <input
              readOnly
              autoFocus
              value={content}
              onFocus={(e) => e.target.select()}
              className="bg-background p-1 px-2 rounded w-full"
            />
            <button className="p-2" onClick={handleCopy}>
              {copied ? (
                <MdCheck className="text-primary" />
              ) : (
                <MdContentCopy />
              )}
            </button>
          </div>
        </DropDownMenu.Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
};
