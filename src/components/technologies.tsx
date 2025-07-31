import { ReactNode } from "react";

import Card from "@/components/card";
import Title from "@/components/title";

interface TechnologyItemProps {
  name: string;
  icon: ReactNode;
  level: string;
}

function TechnologyItem({ name, icon, level }: TechnologyItemProps) {
  return (
    <Card className="flex flex-col items-center p-4" hover>
      <div className="mb-2">{icon}</div>
      <span className="mb-1 text-sm font-medium text-off-black dark:text-off-white">{name}</span>
      <span className="text-xs text-grey-500 dark:text-grey-400">{level}</span>
    </Card>
  );
}

interface Technology {
  name: string;
  icon: ReactNode;
  level: string;
}

interface TechnologiesProps {
  data: Technology[];
}

export default function Technologies({ data }: TechnologiesProps) {
  return (
    <>
      <Title.Section tag="h2" data-section="technologies">
        / Technologies
      </Title.Section>
      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        {data.map((tech) => (
          <TechnologyItem key={tech.name} {...tech} />
        ))}
      </div>
    </>
  );
}
