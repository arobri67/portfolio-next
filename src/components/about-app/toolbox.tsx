import { IconBrandCss3, IconBrandFigma, IconBrandFramer, IconBrandGit, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandPython, IconBrandReact, IconBrandReactNative, IconBrandTailwind, IconBrandTypescript, IconDatabase, IconLetterE, IconLetterF, IconLetterH } from "@tabler/icons-react";

type Tool = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const tools: Tool[] = [
  { id: 1, name: "Javascript", icon: <IconBrandJavascript className="size-8" stroke={1.5} /> },
  { id: 2, name: "Typescript", icon: <IconBrandTypescript className="size-8" stroke={1.5} /> },
  { id: 3, name: "Python", icon: <IconBrandPython className="size-8" stroke={1.5} /> },
  { id: 4, name: "HTML5", icon: <IconBrandHtml5 className="size-8" stroke={1.5} /> },
  { id: 5, name: "CSS3", icon: <IconBrandCss3 className="size-8" stroke={1.5} /> },
  { id: 6, name: "React", icon: <IconBrandReact className="size-8" stroke={1.5} /> },
  { id: 7, name: "React Native", icon: <IconBrandReactNative className="size-8" stroke={1.5} /> },
  { id: 8, name: "Next.js", icon: <IconBrandNextjs className="size-8" stroke={1.5} /> },
  { id: 9, name: "Tailwindcss", icon: <IconBrandTailwind className="size-8" stroke={1.5} /> },
  { id: 10, name: "Postgres", icon: (
    <IconDatabase
      className="size-8"
      stroke={1.5}
    />
  ) },
  { id: 11, name: "MongoDB", icon: <IconBrandMongodb className="size-8" stroke={1.5} /> },
  { id: 12, name: "ExpressJs", icon: <IconLetterE className="size-8" stroke={1.5} /> },
  { id: 13, name: "Hono", icon: <IconLetterH className="size-8" stroke={1.5} /> },
  { id: 14, name: "FastAPI", icon: <IconLetterF className="size-8" stroke={1.5} /> },
  { id: 15, name: "Framer Motion", icon: <IconBrandFramer className="size-8" stroke={1.5} /> },
  { id: 16, name: "Figma", icon: <IconBrandFigma className="size-8" stroke={1.5} /> },
  { id: 17, name: "Git", icon: <IconBrandGit className="size-8" stroke={1.5} /> },
];

export const Toolbox = () => {
  return (
    <article className="mb-10 flex flex-wrap gap-3 md:flex-nowrap md:gap-1">
      {tools.map(tool => (
        <div
          key={tool.id}
          className="group relative h-[100px] w-full cursor-pointer rounded-md border border-border bg-primary/20 transition-all duration-200 ease-in-out hover:-translate-y-2 hover:bg-muted hover:shadow-xl sm:hover:-translate-y-5 md:h-[300px] md:w-[50px]"
        >
          {/* Accent strip */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in-out group-hover:h-6 md:h-6 md:group-hover:h-8" />

          {/* Tool content */}
          <div className="flex h-full flex-row justify-between p-4 transition-all duration-300 ease-in-out group-hover:py-3 md:flex-col md:px-2 md:py-8 md:group-hover:py-6">
            <div className="relative flex flex-1 items-center md:block md:h-full">
              {/* Text */}
              <div className="ml-3 whitespace-nowrap text-lg font-semibold text-foreground/60 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-foreground md:absolute md:inset-x-0 md:left-1/2 md:top-[10%] md:ml-0 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-90 md:text-base">
                {tool.name}
              </div>
              {/* Icon */}
              <div className="text-foreground/60 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-110 group-hover:text-foreground md:absolute md:left-1/2 md:top-3/4 md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-90">
                {tool.icon}
              </div>
            </div>

            {/* Number at bottom */}
            <div className="font-medium text-foreground/90 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-foreground md:group-hover:-translate-y-4">
              {String(tool.id).padStart(2, "0")}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};
