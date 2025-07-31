import type { Metadata } from "next";

import PageContainer from "@/components/page-container";
import PublicationsComponent from "@/components/publications";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "Publications - Alistair O'Brien",
  description: "Publications and research papers by Alistair O'Brien",
};

const publicationsData = [
  {
    title: "Omnidirectional type inference for ML: principality any way",
    authors: ["Alistair O'Brien", "Gabriel Scherer", "Didier Rémy"],
    venue: "POPL",
    year: 2026,
    status: "draft" as const,
    links: {
      pdf: "/papers/suspended-final.pdf",
      code: "https://github.com/johnyob/mlsus",
    },
  },
];

export default function Publications() {
  return (
    <PageContainer>
      <Title.Page tag="h1">/ Publications</Title.Page>
      <PublicationsComponent data={publicationsData} />
    </PageContainer>
  );
}
