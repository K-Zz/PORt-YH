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
            Je cherche actuellement une alternance en ingenerie informatique en complement de ma formation à l'ecole d'ingenieur{" "}
            <Link href="https://www.cesi.fr/">
              <Code className="inline-flex items-center gap-2">
                CESI
              </Code>
            </Link>{" "}
            </p>
            </div>
            <div className="justify-center mt-10">
              <div className="relative lg:left-[-350px] lg:mt-[220px]"> 
            <Button className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1">
              <Link href="https://drive.google.com/file/d/1SHUOyVTX_S5E1hZnWAg77IYkx6dHssAF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Mon CV</Link>
             </Button>
              </div>
            </div>     
        <div className="flex-[2] max-md:m-auto ml-auto z-10 relative">
          <img
            src="https://i.ibb.co/jwXD5T3/photo-profile.jpg"
            className="w-full h-auto max-w-xs max-md:w-56 rounded-full transition duration-300 transform hover:scale-110"
            alt="Yanis'picture"
          />
        </div>
      </div>
    </Section>
  );
};
