/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";

export const PARC: ParcourProps[] = [
  {
    title: "CESI Lyon",
    role: "Diplôme d’Ingénieur Informatique & Cybersécurité (CTI)",
    image:
      "https://media.licdn.com/dms/image/D4E0BAQFCtXlYLH5E8w/company-logo_200_200/0/1665571254273/cesi_officiel_logo?e=1725494400&v=beta&t=kaGXOsvvZBZdlt8wdpSx7GIfuaMgyuhCno0YxAbDI0I",
    date: "2027 2024",
    url: "",
  },
  {
    title: "IUT Lyon 1",
    role: "3. Informatique et systèmes",
    image:
      "https://https://media.licdn.com/dms/image/v2/D4E0BAQES4WRs2XOxEQ/company-logo_200_200/company-logo_200_200/0/1697874345787/iut_lyon_1_logo?e=1733961600&v=beta&t=RY0r36wc61IAij00rrLdWYYmBrfVeqVFXRrc7_PKvxE",
    date: "2024 2023",
    url: "https://www.fdgl.fr/",
  },
  {
    title: "Université de Lyon",
    role: "Diplome d’étude supérieure +2 Informatique (Réseaux & Cybersécurité) ",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQHajSv4G3XCKw/company-logo_200_200/0/1631331403102?e=1725494400&v=beta&t=92KyjEH5DUp0CtFxLZT_EMlAzlF2UZDXYD8hXauUHsg",
    date: "2023 2021",
    url: "https://www.chu-lyon.fr/",
  },
  {
    title: "Edouard Branly",
    role: "BTS Cybersécurité, informatique réseaux (1)",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQGknvKqpRdm8Q/company-logo_200_200/0/1655918963085/lyce_edouard_branly_logo?e=1725494400&v=beta&t=NxokgwBuSHITw3kYBE-5-mS-wv6n6NoZAbbjxuLvY3o",
    date: "2021 2020",
    url: "https://www.chu-lyon.fr/",
  },
  {
    title: "La Martiniere Monplaisir",
    role: "Baccalauréat (Sciences informatiques appliquées)",
    image:
      "https://media.licdn.com/dms/image/C560BAQFVSyolETk-gw/company-logo_200_200/0/1630594837417?e=1725494400&v=beta&t=5rZ3Rshsij7TKSF6_Mpb4GZmKJZ5xo0XXyBXrtdwoMk",
    date: "2020 2018",
    url: "https://www.chu-lyon.fr/",
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
