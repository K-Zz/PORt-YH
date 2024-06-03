/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import Link from "next/link";
import { GithubIcon }  from "./icons/GithubIcon";
import  cesiLogo from "./icons/cesi.png";
import { Code } from "./Code";
import { NextJsIcon } from "./icons/NextJsIcon";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ButtonIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-4">
      <BackgroundBeams />
      <div className="flex max-md:flex-col items-center gap-4 z-20">
        <div className="flex-[3] w-full flex flex-col gap-2">
          <h2 className="font-caption text-5xl font-bold text-primary">
            Yanis Hamoudi
          </h2>
          <h3 className="text-3xl font-caption">Administrateur systèmes et réseaux</h3>
          <p className="text-base">
            Je recherche actuellement une alternance en ingénierie informatique en complément de ma formation à l'école d'ingénieur{" "}
            <Link href="https://www.cesi.fr/">
              <Code className="inline-flex items-center gap-2">
                CESI
              </Code>
            </Link>{" "}
            </p>
            <Button className="w-max px-4 mt-10">
              <Link href="https://drive.google.com/file/d/1SHUOyVTX_S5E1hZnWAg77IYkx6dHssAF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Mon CV</Link>
             </Button>
            </div>
        <div className="flex-[2] max-md:m-auto ml-auto z-10">
          <img
            src="https://i.ibb.co/jwXD5T3/photo-profile.jpg"
            className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
            alt="Yanis'picture"
          />
        </div>
      </div>
    </Section>
  );
};
