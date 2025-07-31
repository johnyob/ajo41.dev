"use client";

import { useEffect, useState, useCallback } from "react";

export interface VimCommand {
  command: string;
  action: () => void;
  description: string;
}

export function useVim(commands: VimCommand[] = [], onToggleHelp?: () => void) {
  const [isCommandMode, setIsCommandMode] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("");
  const [completionIndex, setCompletionIndex] = useState(0);
  const [originalInput, setOriginalInput] = useState("");

  const executeCommand = useCallback(
    (command: string) => {
      const trimmedCommand = command.trim();
      const foundCommand = commands.find((cmd) => cmd.command === trimmedCommand);

      if (foundCommand) {
        foundCommand.action();
        return true;
      }

      return false;
    },
    [commands],
  );

  const getAvailableCommands = useCallback(() => {
    return commands.map((cmd) => cmd.command);
  }, [commands]);

  const getCompletions = useCallback(
    (input: string) => {
      const availableCommands = getAvailableCommands();
      return availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()));
    },
    [getAvailableCommands],
  );

  const handleTabCompletion = useCallback(() => {
    // Use original input for finding completions, or current command if we haven't started completing yet
    const inputToComplete = originalInput || currentCommand;
    const completions = getCompletions(inputToComplete);
    if (completions.length === 0) return;

    // Store the original input on first tab press
    if (!originalInput) {
      setOriginalInput(currentCommand);
    }

    if (completions.length === 1) {
      // Single completion - complete it
      setCurrentCommand(completions[0]!);
      setCompletionIndex(0);
      setOriginalInput(""); // Reset after completion
    } else if (completions.length > 1) {
      // Multiple completions - cycle through them
      const nextIndex = completionIndex % completions.length;
      setCurrentCommand(completions[nextIndex]!);
      setCompletionIndex(nextIndex + 1);
    }
  }, [currentCommand, completionIndex, getCompletions, originalInput]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't interfere with input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Handle vim-like navigation
      if (!isCommandMode) {
        switch (event.key) {
          case "h":
            event.preventDefault();
            window.scrollBy(-100, 0);
            break;
          case "l":
            event.preventDefault();
            window.scrollBy(100, 0);
            break;
          case "j":
            event.preventDefault();
            window.scrollBy(0, 100);
            break;
          case "k":
            event.preventDefault();
            window.scrollBy(0, -100);
            break;
          case "g":
            event.preventDefault();
            window.scrollTo(0, 0);
            break;
          case "G":
            event.preventDefault();
            window.scrollTo(0, document.documentElement.scrollHeight);
            break;
          case "/":
            event.preventDefault();
            setIsCommandMode(true);
            setCurrentCommand("/");
            break;
          case "?":
            event.preventDefault();
            onToggleHelp?.();
            break;
          case "Escape":
            event.preventDefault();
            onToggleHelp?.();
            break;
        }
      } else {
        // Command mode
        if (event.key === "Escape") {
          setIsCommandMode(false);
          setCurrentCommand("");
          setCompletionIndex(0);
          setOriginalInput("");
        } else if (event.key === "Enter") {
          const success = executeCommand(currentCommand);
          setIsCommandMode(false);
          setCurrentCommand("");
          setCompletionIndex(0);
          setOriginalInput("");
          if (!success) {
            // Could show error message here
            console.log(`Unknown command: ${currentCommand}`);
          }
        } else if (event.key === "Tab") {
          event.preventDefault();
          handleTabCompletion();
        } else if (event.key === "Backspace") {
          if (currentCommand.length <= 1) {
            setIsCommandMode(false);
            setCurrentCommand("");
            setCompletionIndex(0);
            setOriginalInput("");
          } else {
            setCurrentCommand((prev) => prev.slice(0, -1));
            setCompletionIndex(0); // Reset completion when typing
            setOriginalInput(""); // Reset original input when typing
          }
        } else if (event.key.length === 1) {
          setCurrentCommand((prev) => prev + event.key);
          setCompletionIndex(0); // Reset completion when typing
          setOriginalInput(""); // Reset original input when typing
        }
      }
    },
    [isCommandMode, currentCommand, executeCommand, onToggleHelp, handleTabCompletion],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return {
    isCommandMode,
    currentCommand,
    availableCommands: commands,
    getCompletions,
  };
}
