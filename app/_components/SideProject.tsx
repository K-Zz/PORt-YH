import {
  Bird,
  Briefcase,
  LucideIcon,
  Sparkles,
  BotMessageSquare,
  Warehouse,
  Plug,
} from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    title: "Administration système",
    description:
      "Garantir la performance et la disponibilité des systèmes grâce à une administration système proactive et fiable.",
    logo: Sparkles,
  },
  {
    title: "Automatisation des processus",
    description:
      "Optimisez l'efficacité opérationnelle grâce à une automatisation intelligente des processus.",
    logo: BotMessageSquare,
  },
  {
    title: "Gestion des services cloud",
    description:
      "Maîtrisez les flux de données avec une expertise éprouvée en gestion des services cloud.",
    logo: Bird,
  },
  {
    title: "Surveillance et gestion des réseaux",
    description: "Assurez une connectivité optimale et une sécurité renforcée grâce à une surveillance et une gestion des réseaux.",
    logo: Warehouse,
  },
  {
    title: "Sécurité informatique",
    description: "Protégez des données sensibles et assurez la continuité des activités avec des solutions de sécurité informatique robustes.",
    logo: Plug,
  },
  {
    title: "Virtualisation",
    description: "Créez des environnements informatiques flexibles et évolutifs grâce à une expertise approfondie en virtualisation.",
    logo: Briefcase,
  },
];

type SideProjectProps = {
  title: string;
  description: string;
  logo: LucideIcon;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground rounded-sm p-3">
        <props.logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-md text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};
