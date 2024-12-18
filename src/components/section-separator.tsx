import { Separator } from "./ui";

export const SectionSeparator = ({ title }: { title: string }) => {
  return (
    <div className="mb-10 flex flex-row items-center gap-4">
      <h1 className="title text-foreground/70">{title}</h1>
      <Separator decorative className="hidden md:block md:flex-1" />
    </div>
  );
};
