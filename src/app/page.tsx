import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Pill from "@/components/pill";
import Socials from "@/components/socials";

const socialsData = [
  {
    href: "https://github.com/johnyob",
    icon: <FaGithub className="h-6 w-6" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/alistair-o-brien-6b516a232/",
    icon: <FaLinkedin className="h-6 w-6" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:ajob410@gmail.com",
    icon: <FaEnvelope className="h-6 w-6" />,
    label: "Email",
  },
];

export default function Home() {
  return (
    // FIXME: This h-[calc(...)] is a hack to force the page not to scroll (due to the vim modal)
    <div className="flex h-[calc(100vh-2rem)] items-center justify-center overflow-hidden px-6 md:px-14">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-off-black dark:text-off-white sm:text-5xl md:text-6xl">
          Hey <span className="inline-block origin-70 hover:animate-wave">👋</span> I&apos;m
          Alistair, <br />a <Pill className="mt-4">developer</Pill>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-sm text-grey-500 sm:text-base">
          I am a compiler developer and programming language researcher 🔬
        </p>
        <div className="flex w-full flex-col items-center justify-center">
          <Socials data={socialsData} />
        </div>
      </div>
    </div>
  );
}
