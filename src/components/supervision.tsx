import { ReactNode } from "react";

import Card from "@/components/card";

interface SupervisionProps {
  title: string | ReactNode;
  institution?: string;
  description?: string;
  supervisions: Array<{
    title: string;
    pdf: string;
  }>;
}

export default function Supervision({
  title,
  institution,
  description,
  supervisions,
}: SupervisionProps) {
  return (
    <Card.Border className="space-y-3">
      <h3 className="text-lg font-semibold text-off-black dark:text-off-white">{title}</h3>

      {institution && <p className="text-sm text-grey-600 dark:text-grey-400">{institution}</p>}

      {description && <p className="text-sm text-grey-600 dark:text-grey-400">{description}</p>}

      <div>
        <h4 className="mb-2 text-sm font-medium text-off-black dark:text-off-white">
          Supervision Materials:
        </h4>
        <div className="flex flex-wrap gap-2">
          {supervisions.map((supervision, index) => (
            <Card.Tag.Link key={index} href={supervision.pdf}>
              {supervision.title}
            </Card.Tag.Link>
          ))}
        </div>
      </div>
    </Card.Border>
  );
}
