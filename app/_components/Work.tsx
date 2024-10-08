/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const WORK: WorkProps[] = [
   {
    title: "Koesio",
    role: "Ingénieur Réseaux & Systèmes",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQH180ACV7jEAg/company-logo_200_200/company-logo_200_200/0/1634301647615/koesio_logo?e=1736380800&v=beta&t=qnYMVCouJKV26BzRjFBT9UOW3lIU3bie7UBRyagGw0w",
    date: "En cours",
    url: "",
    freelance: true,
  },
  {
    title: "Dispensaire Général de Lyon",
    role: "Administrateur systèmes et réseaux",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGvrtdop5jGdg/company-logo_200_200/company-logo_200_200/0/1664804219104/fondation_dispensaire_general_de_lyon_logo?e=1733961600&v=beta&t=OHKkQFeRRaH0XT23JUwxpBSCrHn4DWDq1FpoLWSJWVc",
    date: "2022 2023",
    url: "https://www.fdgl.fr/",
    freelance: true,
  },
  {
    title: "Dispensaire Général de Lyon",
    role: "Technicien Informatique",
    image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGvrtdop5jGdg/company-logo_200_200/company-logo_200_200/0/1664804219104/fondation_dispensaire_general_de_lyon_logo?e=1733961600&v=beta&t=OHKkQFeRRaH0XT23JUwxpBSCrHn4DWDq1FpoLWSJWVc",
    date: "2022 2021",
    url: "https://www.fdgl.fr/",
    freelance: true,
  },
  {
    title: "Hospices Civils Lyon",
    role: "Stage Informatique",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQEQxK1n5939Fg/company-logo_200_200/company-logo_200_200/0/1630591046268/hospices_civils_de_lyon_logo?e=1733961600&v=beta&t=vHNV6oBtW6Kp_9nHSawG92S5uSV-ulp_DRqqiI6bp24",
    date: "2 mois",
    url: "https://www.chu-lyon.fr/",
  },
];

type WorkProps = {
  title: string;
  role: string;
  image: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const WorkProject = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold">{props.title}</p>
          {props.freelance && (
            <Badge
              variant="outline"
              className="bg-green-800/100 text-green-400 text-xs py-1 px-1 rounded-lg"
            >
              Alternance
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

