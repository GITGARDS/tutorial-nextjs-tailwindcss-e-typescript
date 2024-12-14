import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Todos os Cursos",
};

export default function PageCursos() {
  return (
    <main>
      <Card />
    </main>
  );
}
