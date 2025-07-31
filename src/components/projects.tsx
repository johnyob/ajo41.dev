import { ReactNode } from "react";

import Card from "@/components/card";
import Title from "@/components/title";

interface ProjectItemProps {
  name: string | ReactNode;
  description: string;
  tech: string[];
  link?: string;
}

function ProjectItem({ name, description, tech, link }: ProjectItemProps) {
  return (
    <Card.Border>
      <h3 className="mb-2 text-lg font-semibold text-off-black dark:text-off-white">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-500 dark:hover:text-purple-start"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
      <p className="mb-3 text-grey-600 dark:text-grey-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((techItem) => (
          <Card.Tag key={techItem} className="px-2 py-1 text-xs text-grey-700 dark:text-grey-300">
            {techItem}
          </Card.Tag>
        ))}
      </div>
    </Card.Border>
  );
}

interface Project {
  name: string | ReactNode;
  description: string;
  tech: string[];
  link?: string;
}

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <>
      <Title.Section tag="h2" data-section="projects">
        / Projects
      </Title.Section>
      <div className="mb-12 space-y-6">
        {data.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </>
  );
}
