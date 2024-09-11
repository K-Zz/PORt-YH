/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";

export const PARC: ParcourProps[] = [
  {
    title: "CESI Lyon",
    role: "Diplôme d’Ingénieur Informatique & Cybersécurité (CTI)",
    image:
      "",
    date: "2027 2024",
    url: "",
  },
  {
    title: "IUT Lyon 1",
    role: "3. Informatique et systèmes",
    image:
      "",
    date: "2023 2023",
    url: "",
  },
  {
    title: "Université de Lyon",
    role: "Diplome d’étude supérieure +2 Informatique (Réseaux & Cybersécurité) ",
    image:
      "",
    date: "2023 2021",
    url: "",
  },
  {
    title: "Edouard Branly",
    role: "BTS Cybersécurité, informatique réseaux (1)",
    image:
      "",
    date: "2021 2020",
    url: ",
  },
  {
    title: "La Martiniere Monplaisir",
    role: "Baccalauréat (Sciences informatiques appliquées)",
    image:
      "",
    date: "2020 2018",
    url: "",
  },
];

type ParcourProps = {
  title: string;
  role: string;
  image: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const ParcourProps = (props: ParcourProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
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
    </div>
  );
};
