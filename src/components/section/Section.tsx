import { Card, ICardProps } from "../card/Card";

interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
  items: ICardProps[];
}

export const Section = ({ title, variant = "grid", items }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4 ">
      <h2 className="font-bold text-xl">{title}</h2>

      <ul
        data-variant={variant}
        className="grid grid-cols-1 sm:grid-cols-none gap-2 data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
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
      </ul>
    </section>
  );
};
