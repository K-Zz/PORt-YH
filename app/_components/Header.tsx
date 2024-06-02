"use client";

import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-background/80 backdrop-filter backdrop-blur-sm z-40">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold font-primary-foreground">
          Yanis Hamoudi
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="https://www.linkedin.com/in/yanis-hamoudi/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
              aria-label="Linkedin de Yanis Hamoudi"
            >
              <LinkedinIcon size={16} className="fill-foreground" />
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
