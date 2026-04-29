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
    title: "Omnidirectional type inference for ML",
    authors: ["Alistair O'Brien", "Gabriel Scherer", "Didier Rémy"],
    venue: "WITS",
    year: 2026,
    status: "talk" as const,
    links: {
      pdf: "/papers/wits2026/abstract.pdf",
      slides: "/papers/wits2026/slides/index.html",
      recording: "https://www.youtube.com/watch?v=O7T9AYIH3VU",
    },
  },

  {
    title: "Omnidirectional type inference for ML: principality any way",
    authors: ["Alistair O'Brien", "Gabriel Scherer", "Didier Rémy"],
    venue: "TOPLAS",
    year: 2026,
    status: "submitted" as const,
    links: {
      pdf: "/papers/suspended-final.pdf",
      arXiv: "https://arxiv.org/abs/2511.10343",
      code: "https://github.com/johnyob/omniml",
    },
  },
  {
    title: "Typing OCaml in OCaml: A Constraint-Based Approach",
    authors: ["Alistair O'Brien"],
    venue: "PhD Proposal",
    year: 2025,
    status: "published" as const,
    links: {
      pdf: "/papers/first-year-report.pdf",
    },
  },
  {
    title: "Typing OCaml in OCaml: A Constraint-Based Approach",
    authors: ["Alistair O'Brien"],
    venue: "Part II Dissertation",
    year: 2022,
    status: "published" as const,
    links: {
      pdf: "/papers/typing-ocaml-in-ocaml.pdf",
      code: "https://github.com/johnyob/dromedary",
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
