"use client";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, ICardProps } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: ICardProps[];
}

export const Section = ({ title, variant = "grid", items }: ISectionProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleScroll = (scroll: number) => {
    const currrentScrollRef = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({
      behavior: "smooth",
      left: currrentScrollRef + scroll,
    });
  };

  useEffect(() => {}, []);
  return (
    <section className="flex flex-col gap-4 px-4 ">
      <h2 className="font-bold text-xl">{title}</h2>

      <ul
        ref={scrollRef}
        data-variant={variant}
        className="grid grid-cols-1 sm:grid-cols-none gap-2 data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        <button
          onClick={() => handleScroll(-350)}
          className="bg-primary h-14 w-14 flex items-center justify-center rounded-full sticky my-auto left-0 -ml-14"
        >
          <MdKeyboardArrowLeft size={32} />
        </button>
        {items.map((item) => (
          <li
            key={item.title}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              description={item.description}
              href={item.href}
              image={item.image}
              title={item.title}
            />
          </li>
        ))}
        <button
          onClick={() => handleScroll(350)}
          className="bg-primary h-14 w-14 flex items-center justify-center rounded-full sticky my-auto right-0 -ml-14"
        >
          <MdKeyboardArrowRight size={32} />
        </button>
      </ul>
    </section>
  );
};
