import { AnchorHTMLAttributes } from "react";

export type PillProps = AnchorHTMLAttributes<HTMLDivElement>;

export default function Pill({ children, className, ...rest }: PillProps): JSX.Element {
  return (
    <div
      className="default-transition default-focus inline-flex rounded-2xl bg-primary-500 bg-opacity-[.15] px-5 py-2 pb-4 text-primary-200 saturate-200 filter backdrop-blur-sm backdrop-filter dark:bg-purple-start dark:text-purple-200"
      {...rest}
    >
      {children}
    </div>
  );
}
