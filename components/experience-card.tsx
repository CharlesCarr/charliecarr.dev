import { spaceMono } from "@/app/fonts";

interface Experience {
  id: number;
  timeSpan: string;
  title: string;
  company: string;
  techStack: string[];
  description: string;
  url: string;
}

interface ExperienceProps {
  experience: Experience;
}

const experiences: Experience[] = [
  {
    id: 0,
    timeSpan: "Feb 2023 - Present",
    title: "Full Stack Software Developer",
    company: "KeeKees Big Adventures / AAA Travel",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    description: "Freelance role building travel recommendation web app",
    url: "https://keekeesbigadventures.com/", // replace later
  },
  {
    id: 1,
    timeSpan: "June 2022 - Sept 2022",
    title: "Front End Software Engineer",
    company: "Revelio Labs",
    techStack: ["React", "TypeScript", "Redux", "Chakra UI", "D3.js"],
    description: "Building UI/UX for FinTech labor market data startup",
    url: "https://www.reveliolabs.com/",
  },
];

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const { timeSpan, title, company, techStack, description, url } = experience;

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`hidden sm:flex w-full justify-center gap-x-4 sm:gap-x-0 sm:justify-between text-xs flex-wrap items-center sm:items-start ${spaceMono.className}`}
      >
        {techStack.map((tech: string) => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
      <div
        className={`flex sm:hidden w-full justify-center gap-x-4 sm:gap-x-0 sm:justify-between text-xs flex-wrap items-center sm:items-start ${spaceMono.className}`}
      >
        {techStack.slice(0,3).map((tech: string) => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
      <hr />
      <div className="flex w-full justify-center sm:justify-between items-center mt-1">
        <p className="text-lg font-bold">{title}</p>
        <p className={`hidden sm:block text-xs ${spaceMono.className}`}>
          {timeSpan}
        </p>
      </div>
      <p className="text-sm sm:text-base text-center sm:text-start">{`@ ${company}`}</p>
      <p className={`text-sm ${spaceMono.className} mt-2 sm:mt-0 text-center sm:text-start`}>{description}</p>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="w-full h-[475px] sm:h-[425px] flex flex-col rounded-2xl border border-neutral-200 p-8 px-6 sm:px-8 mb-20 xs:mb-0">
      <h2
        className={`text-xl sm:text-2xl tracking-wide mb-8 ${spaceMono.className}`}
      >
        RECENT EXPERIENCE.
      </h2>

      <div className="flex flex-col gap-12 text-sm">
        {experiences.map((experience: Experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
