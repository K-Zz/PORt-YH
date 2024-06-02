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
    title: "Isitech",
    role: "Licence 3 Responsable de Projets Informatiques",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQG-JuRmlNp1_Q/company-logo_200_200/0/1630592280933/isitech_ecole_dalternance_en_informatique_logo?e=1725494400&v=beta&t=ZY-Wytplp5OZZA2glu_3r52PuZJ4MGdprI6Tnw0Tmzw",
    date: "2024 2023",
    url: "https://www.fdgl.fr/",
  },
  {
    title: "GRETA Lyon",
    role: "Bac +2 Informatique (Réseaux & Cybersécurité) ",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQHsgoG-4ojPFw/company-logo_200_200/0/1672740512123/greta_lyon_mtropole_logo?e=1725494400&v=beta&t=yhVJdOEFoDkl0Lua_W3ZCwSRg6-DSlHM7PknjNPsOWc",
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
    role: "Baccalauréat Science Système numérique",
    image:
      "https://media.licdn.com/dms/image/C4E0BAQGknvKqpRdm8Q/company-logo_200_200/0/1655918963085/lyce_edouard_branly_logo?e=1725494400&v=beta&t=NxokgwBuSHITw3kYBE-5-mS-wv6n6NoZAbbjxuLvY3o",
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
    <div className="inline-flex items-center gap-3 p-1 rounded bg-black text-white">
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
