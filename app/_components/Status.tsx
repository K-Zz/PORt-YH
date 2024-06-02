/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SIDE_PROJECTS, SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { WORK, WorkProject } from "./Work";
import { PARC, ParcourProps } from "./parcours";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 h-max">
      <div className="flex-[3] w-full h-96">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-11">
          <p className="text-lg text-muted-foreground">Mes compétences</p>
          <div className="flex flex-col gap-9">
            {SIDE_PROJECTS.map((project) => (
              <SideProject key={project.title} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col w-full h-full gap-4">
        <Card className="p-4 flex-5">
          <p className="text-lg text-muted-foreground">Expériences</p>
          <div className="flex flex-col gap-5">
            {WORK.map((project) => (
              <WorkProject key={project.title} {...project} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-6">
          <p className="text-lg text-muted-foreground">Mon parcours</p>
          <div className="flex flex-col gap-6">
            {PARC.map((project) => (
              <ParcourProps key={project.title} {...project} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
