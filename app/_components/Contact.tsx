import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="inline-flex items-center gap-4 hover:bg-accent/50 rounded flex flex-col items-start gap-1">
      <div className="border border rounded-lg w-full mt-[-7rem]"> {/* Ajustement de la marge supérieure */}
        <div className="flex flex-col gap-9 p-3 bg-transparancy rounded-lg"> {/* Ajout de la classe bg-black pour le fond noir */}
          <div className="flex max-md:flex-col w-full gap-4 mt-1">
            <ContactCard
              name="Mail"
              image="https://i.ibb.co/jwXD5T3/photo-profile.jpg"
              mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw"
              description="yanis.hamoudi06@gmail.com"
              url="mailto:yanis.hamoudi06@gmail.com"
            />
            <ContactCard
              name="LinkedIn"
              image="https://i.ibb.co/jwXD5T3/photo-profile.jpg"
              mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              description="Yanis Hamoudi"
              url="https://www.linkedin.com/in/yanis-hamoudi/"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
