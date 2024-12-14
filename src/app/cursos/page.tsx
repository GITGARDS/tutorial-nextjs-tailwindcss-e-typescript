import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Todos os Cursos",
};

export default function PageCursos() {
  return (
    <main>
      <Section variant="grid" title="Todos os Cursos" />
    </main>
  );
}
