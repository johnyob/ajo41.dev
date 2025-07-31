interface TitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
  "data-section"?: string;
}

function Title({ tag: Tag = "h1", className = "", children, ...props }: TitleProps) {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

function PageTitle({ className = "", ...props }: TitleProps) {
  return (
    <Title
      className={`mb-6 text-start text-2xl font-bold text-off-black dark:text-off-white ${className}`}
      {...props}
    >
      {props.children}
    </Title>
  );
}

function SectionTitle({ className = "", ...props }: TitleProps) {
  return (
    <Title
      className={`mb-4 text-xl font-semibold text-off-black dark:text-off-white ${className}`}
      {...props}
    >
      {props.children}
    </Title>
  );
}

namespace Title {
  export const Page = PageTitle;
  export const Section = SectionTitle;
};

export default Title;
