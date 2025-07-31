import { ReactNode } from "react";

import Card from "@/components/card";
import Title from "@/components/title";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  children?: ReactNode;
}

function EducationItem({ institution, degree, period, children }: EducationItemProps) {
  return (
    <Card.Border>
      <h3 className="text-lg font-semibold text-off-black dark:text-off-white">{institution}</h3>
      <p className="mb-1 text-grey-600 dark:text-grey-400">{degree}</p>
      <p className="mb-2 text-sm text-grey-500 dark:text-grey-400">{period}</p>
      {children}
    </Card.Border>
  );
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  content: ReactNode;
}

interface EducationProps {
  data: Education[];
}

export default function Education({ data }: EducationProps) {
  return (
    <>
      <Title.Section tag="h2" data-section="education">
        / Education
      </Title.Section>
      <div className="mb-12 space-y-6">
        {data.map((education, index) => (
          <EducationItem key={index} {...education}>
            {education.content}
          </EducationItem>
        ))}
      </div>
    </>
  );
}
