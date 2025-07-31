import { ReactNode } from "react";

import Card from "@/components/card";

interface PublicationItemProps {
  title: string | ReactNode;
  authors: string[];
  venue?: string;
  year: number;
  status: "published" | "draft" | "preprint" | "submitted";
  links?: {
    pdf?: string;
    arxiv?: string;
    doi?: string;
    code?: string;
    website?: string;
  };
}

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

function PublicationItem({ title, authors, venue, year, status, links }: PublicationItemProps) {
  const statusColors = {
    published: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    draft: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    preprint: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    submitted: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  };

  return (
    <Card.Border className="space-y-3">
      <div className="flex flex-wrap items-start gap-3">
        <h3 className="flex-1 text-lg font-semibold text-off-black dark:text-off-white">{title}</h3>
        <Card.Tag className={`px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
          {capitalize(status)}
        </Card.Tag>
      </div>

      <p className="text-sm text-grey-600 dark:text-grey-400">{authors.join(", ")}</p>

      {venue && (
        <p className="text-sm italic text-grey-500 dark:text-grey-500">
          {venue} ({year})
        </p>
      )}

      {!venue && status !== "published" && (
        <p className="text-sm italic text-grey-500 dark:text-grey-500">{year}</p>
      )}

      {links && Object.keys(links).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.pdf && <Card.Tag.Link href={links.pdf}>PDF</Card.Tag.Link>}
          {links.arxiv && <Card.Tag.Link href={links.arxiv}>arXiv</Card.Tag.Link>}
          {links.doi && <Card.Tag.Link href={links.doi}>DOI</Card.Tag.Link>}
          {links.code && <Card.Tag.Link href={links.code}>Code</Card.Tag.Link>}
          {links.website && <Card.Tag.Link href={links.website}>Website</Card.Tag.Link>}
        </div>
      )}
    </Card.Border>
  );
}

interface Publication {
  title: string | ReactNode;
  authors: string[];
  venue?: string;
  year: number;
  status: "published" | "draft" | "preprint" | "submitted";
  abstract?: string;
  links?: {
    pdf?: string;
    arxiv?: string;
    doi?: string;
    code?: string;
    website?: string;
  };
}

interface PublicationsProps {
  data: Publication[];
}

export default function Publications({ data }: PublicationsProps) {
  return (
    <>
      <div className="mb-12 space-y-6">
        {data.map((publication, index) => (
          <PublicationItem key={index} {...publication} />
        ))}
      </div>
    </>
  );
}
