"use client";

import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { useVim, VimCommand } from "@/lib/use-vim";

interface HelpItem {
  key: string;
  description: string;
}

const vimKeybindings: HelpItem[] = [
  { key: "h", description: "Scroll left" },
  { key: "l", description: "Scroll right" },
  { key: "j", description: "Scroll down" },
  { key: "k", description: "Scroll up" },
  { key: "g", description: "Go to top" },
  { key: "G", description: "Go to bottom" },
];

const vimModeKeys: HelpItem[] = [
  { key: "?", description: "help" },
  { key: "/", description: "command mode" },
  { key: "Tab", description: "auto-complete" },
  { key: "Esc", description: "exit" },
];

function HelpSection({ title, items }: { title: string; items: HelpItem[] }) {
  return (
    <div>
      <h4 className="mb-2 font-semibold text-off-black dark:text-off-white">{title}</h4>
      <div className="space-y-1 font-mono text-sm text-grey-600 dark:text-grey-400">
        {items.map((item) => (
          <div key={item.key}>
            <kbd className="rounded bg-grey-200 px-1 dark:bg-grey-700">{item.key}</kbd> -{" "}
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VimIndicator() {
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = useCallback(() => {
    setShowHelp((prev) => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const commands: VimCommand[] = [
    // Theme commands
    { command: "/light", action: () => setTheme("light"), description: "Switch to light theme" },
    { command: "/dark", action: () => setTheme("dark"), description: "Switch to dark theme" },

    // Page navigation commands
    { command: "/home", action: () => router.push("/"), description: "Go to home page" },
    { command: "/about", action: () => router.push("/about/"), description: "Go to about page" },
    {
      command: "/publications",
      action: () => router.push("/publications/"),
      description: "Go to publications page",
    },
    {
      command: "/teaching",
      action: () => router.push("/teaching/"),
      description: "Go to teaching page",
    },

    // Section navigation commands (only show on specific pages)
    ...(pathname === "/about/"
      ? [
          {
            command: "/technologies",
            action: () => scrollToSection("technologies"),
            description: "Jump to Technologies section",
          },
          {
            command: "/education",
            action: () => scrollToSection("education"),
            description: "Jump to Education section",
          },
          {
            command: "/projects",
            action: () => scrollToSection("projects"),
            description: "Jump to Projects section",
          },
        ]
      : []),
    ...(pathname === "/teaching/"
      ? [
          {
            command: "/notes",
            action: () => scrollToSection("notes"),
            description: "Jump to Notes section",
          },
          {
            command: "/supervisions",
            action: () => scrollToSection("supervisions"),
            description: "Jump to Supervisions section",
          },
        ]
      : []),
  ];

  const { isCommandMode, currentCommand, availableCommands, getCompletions } = useVim(
    commands,
    toggleHelp,
  );

  const completions = isCommandMode && currentCommand ? getCompletions(currentCommand) : [];

  return (
    <>
      {/* Vim Modal at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-50/95 backdrop-blur-sm dark:bg-gray-900/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex min-h-[20px] items-center space-x-3">
            <span className="text-xs font-medium text-primary-500 dark:text-purple-start">
              {isCommandMode ? "COMMAND" : "NORMAL"}
            </span>
            <span className="min-w-[200px] font-mono text-sm text-off-black dark:text-off-white">
              {isCommandMode ? currentCommand : ""}
            </span>
          </div>
          <div className="text-xs text-grey-500 dark:text-grey-400">
            {isCommandMode && completions.length > 1 ? (
              <span>Tab to cycle ({completions.length} matches)</span>
            ) : (
              <span>Press ? for help</span>
            )}
          </div>
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-4 w-full max-w-md rounded-lg bg-grey-100 p-6 dark:bg-grey-800">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-off-black dark:text-off-white">
                Vim Navigation Help
              </h3>
              <button
                onClick={toggleHelp}
                className="text-grey-500 hover:text-off-black dark:hover:text-off-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <HelpSection title="Movement" items={vimKeybindings} />
              <HelpSection
                title="Commands"
                items={availableCommands.map((cmd) => ({
                  key: cmd.command,
                  description: cmd.description,
                }))}
              />
              <div className="text-xs text-grey-500 dark:text-grey-400">
                {vimModeKeys.map((item, index) => (
                  <span key={item.key}>
                    <kbd className="rounded bg-grey-200 px-1 dark:bg-grey-700">{item.key}</kbd>{" "}
                    {item.description}
                    {index < vimModeKeys.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
