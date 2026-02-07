import type { Metadata } from "next";

import Card from "@/components/card";
import PageContainer from "@/components/page-container";
import Supervision from "@/components/supervision";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "Teaching - Alistair O'Brien",
  description: "Teaching materials by Alistair O'Brien",
};

export default function Teaching() {
  return (
    <PageContainer>
      <Title.Page tag="h1">/ Teaching</Title.Page>
      <p className="mb-6 text-grey-600 dark:text-grey-400">
        Course materials, lecture notes, and teaching resources for programming languages and
        computer science.
      </p>

      <div className="space-y-8">
        {/* Course Notes Section */}
        <div>
          <Title.Section tag="h2" data-section="notes">
            / Course Notes
          </Title.Section>
          <div className="space-y-4">
            <Card.Border className="space-y-3">
              <h3 className="text-lg font-semibold text-off-black dark:text-off-white">
                University Notes
              </h3>
              <p className="text-sm text-grey-600 dark:text-grey-400">
                University of Cambridge • 2019-2022
              </p>
              <p className="text-sm text-grey-600 dark:text-grey-400">
                Comprehensive notes covering various computer science topics from my undergraduate
                studies.
              </p>
              <div>
                <Card.Tag.Link href="https://github.com/johnyob/University-Notes">
                  GitHub Repository
                </Card.Tag.Link>
              </div>
            </Card.Border>
          </div>
        </div>

        {/* Supervisions Section */}
        <div>
          <Title.Section tag="h2" data-section="supervisions">
            / Supervisions
          </Title.Section>
          <div className="space-y-6">
            <Supervision
              title="Compiler Construction"
              institution="University of Cambridge"
              description="Supervised students in compilers, covering parsing, CPS-based IRs, and advanced topics."
              supervisions={[
                { title: "Supervision 1", pdf: "/teaching/compilers/supo1.pdf" },
              ]}
            />

            <Supervision
              title="Computation Theory"
              institution="University of Cambridge"
              description="Supervised students in theoretical computer science, covering computability theory, complexity theory, and formal languages."
              supervisions={[
                { title: "Supervision 1", pdf: "/teaching/comp-theory/supo1.pdf" },
                { title: "Supervision 2", pdf: "/teaching/comp-theory/supo2.pdf" },
                { title: "Supervision 3", pdf: "/teaching/comp-theory/supo3.pdf" },
              ]}
            />

            <Supervision
              title="Discrete Mathematics"
              institution="University of Cambridge"
              description="Supervised students in discrete mathematics, covering logic, proof techniques, graph theory, and combinatorics."
              supervisions={[
                { title: "Supervision 1", pdf: "/teaching/discrete-maths/supo1.pdf" },
                { title: "Supervision 2", pdf: "/teaching/discrete-maths/supo2.pdf" },
                { title: "Supervision 3", pdf: "/teaching/discrete-maths/supo3.pdf" },
                { title: "Supervision 4", pdf: "/teaching/discrete-maths/supo4.pdf" },
                { title: "Supervision 5", pdf: "/teaching/discrete-maths/supo5.pdf" },
                { title: "Supervision 6", pdf: "/teaching/discrete-maths/supo6.pdf" },
              ]}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
