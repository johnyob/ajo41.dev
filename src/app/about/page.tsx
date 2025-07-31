import type { Metadata } from "next";
import {
  SiOcaml,
  SiRust,
  SiTypescript,
  SiPython,
  SiC,
  SiGnubash,
  SiNixos,
  SiAmazonaws,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

import Education from "@/components/education";
import List from "@/components/list";
import PageContainer from "@/components/page-container";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "About - Alistair O'Brien",
  description: "About Alistair O'Brien",
};

// TODO: Technology icons could be improved for better brand accuracy
// - Python should have blue/yellow gradient or proper logo colors
// - Bash should only have green underscore, not full green icon
// - Consider using DevIcons (react-icons/di) or custom SVGs for better accuracy
const technologiesData = [
  {
    name: "OCaml",
    icon: <SiOcaml className="h-8 w-8" style={{ color: "#EC6813" }} />,
    level: "Expert",
  },
  {
    name: "Rust",
    icon: <SiRust className="h-8 w-8 text-black dark:text-white" />,
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-8 w-8" style={{ color: "#3178C6" }} />,
    level: "Advanced",
  },
  {
    name: "Python",
    icon: <SiPython className="h-8 w-8" style={{ color: "#3776AB" }} />,
    level: "Advanced",
  },
  {
    name: "C",
    icon: <SiC className="h-8 w-8" style={{ color: "#A8B9CC" }} />,
    level: "Intermediate",
  },
  {
    name: "Bash",
    icon: <SiGnubash className="h-8 w-8" style={{ color: "#4EAA25" }} />,
    level: "Intermediate",
  },
  {
    name: "Nix",
    icon: <SiNixos className="h-8 w-8" style={{ color: "#5277C3" }} />,
    level: "Intermediate",
  },
  {
    name: "AWS",
    icon: <SiAmazonaws className="h-8 w-8 text-black dark:text-white" />,
    level: "Advanced",
  },
  {
    name: "Docker",
    icon: <SiDocker className="h-8 w-8" style={{ color: "#2496ED" }} />,
    level: "Advanced",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="h-8 w-8" style={{ color: "#E10098" }} />,
    level: "Intermediate",
  },
];

const educationData = [
  {
    institution: "University of Cambridge",
    degree: "Doctorate of Philosophy (PhD), Computer Science",
    period: "October 2024 - Present",
    content: (
      <>
        <p className="mb-2 text-sm text-grey-600 dark:text-grey-400">
          <strong>Project:</strong> Typing OCaml in OCaml: A Constraint-Based Approach
        </p>
        <p className="mb-3 text-sm text-grey-600 dark:text-grey-400">
          Research on advanced constraint-based techniques for Hindley-Milner type inference,
          focusing on OCaml&apos;s advanced type system features including GADTs, overloading, and
          row polymorphism.
        </p>
        <p className="mb-3 text-sm text-grey-600 dark:text-grey-400">
          <strong>Supervisor:</strong> Jeremy Yallop
        </p>
      </>
    ),
  },
  {
    institution: "University of Cambridge",
    degree: "Bachelor of Arts, Computer Science",
    period: "October 2019 - July 2022",
    content: (
      <List.Bullet>
        <List.Bullet.Item>Third Year: Class I with distinction (3rd/113)</List.Bullet.Item>
        <List.Bullet.Item>Second Year: Class I (11th/123)</List.Bullet.Item>
        <List.Bullet.Item>
          Queens&apos; College Joshua King Prize and President&apos;s Prize (2022)
        </List.Bullet.Item>
        <List.Bullet.Item>Cambridge Foundation Scholar (Computer Science)</List.Bullet.Item>
        <List.Bullet.Item>Winner of HackCambridge 2020, 2021 and 2022</List.Bullet.Item>
      </List.Bullet>
    ),
  },
  {
    institution: "Ellesmere College",
    degree: "A Levels",
    period: "July 2019",
    content: (
      <List.Bullet>
        <List.Bullet.Item>
          Further Maths A*, Maths A*, Physics A*, Computer Science A*
        </List.Bullet.Item>
        <List.Bullet.Item>Top 50 A Level Computer Science results in the UK</List.Bullet.Item>
      </List.Bullet>
    ),
  },
];

const projectsData = [
  {
    name: "Grace",
    description:
      "A cutting-edge OCaml library for building, reporting, and rendering beautiful compiler diagnostics.",
    tech: ["OCaml", "Compilers"],
    link: "https://github.com/johnyob/grace",
  },
  {
    name: "Dromedary",
    description:
      "Cambridge Part II dissertation implementing a constraint-based inference algorithm for a subset of OCaml.",
    tech: ["OCaml", "Type Systems", "GADTs"],
    link: "https://github.com/johnyob/dromedary",
  },
  {
    name: (
      <>
        <code className="rounded bg-grey-200 px-1 text-sm dark:bg-grey-800">ppx</code>-open
      </>
    ),
    description:
      'OCaml pre-processor extension adding "selective" opens to OCaml, supporting values, types, modules and module types.',
    tech: ["OCaml", "Type Systems"],
    link: "https://github.com/johnyob/ppx-open",
  },
  {
    name: "3-Address Code Optimizer",
    description:
      "Godbolt-style tool for compiler analyses and optimizations on a C-like language using 3-address codes.",
    tech: ["OCaml", "Compilers"],
    link: "https://github.com/johnyob/ocaml-optimizer",
  },
];

export default function About() {
  return (
    <PageContainer>
      <Title.Page tag="h1">/ About Me</Title.Page>
      <p className="my-4 text-grey-600 dark:text-grey-400">
        Hello 👋, my name is Alistair. I&apos;m a PhD student 🎓 at Cambridge working on programming
        languages research for OCaml 🐫. I hold an undergraduate degree in Computer Science 💻 from
        Queens&apos; College, Cambridge, and work part-time as a Senior Software Engineer 👨‍💻 at
        TriliTech, building next-generation programming language compilers and tools for the Tezos
        blockchain.
      </p>
      <p className="mb-8 text-grey-600 dark:text-grey-400">
        Outside of work you&apos;ll often find me contributing to the OCaml ecosystem 🐫, running
        🏃‍♂️, playing the piano 🎹, or baking 🍰.
      </p>

      <Technologies data={technologiesData} />
      <Education data={educationData} />
      <Projects data={projectsData} />
    </PageContainer>
  );
}
