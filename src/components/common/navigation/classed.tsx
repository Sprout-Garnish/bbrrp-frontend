import classed, { tw } from "clsc";
import clsx from "clsx";

type SectionProps = { flex?: number };
export const Section = classed.section<SectionProps>(({ flex }) =>
  clsx([
    tw`flex flex-row justify-end items-center w-full h-full mx-8`,
    flex && `flex-${flex}`,
  ])
);
export const NavItemSection = classed.section<SectionProps>`flex justify-start w-1/3`;
export const MainTitleSection = classed.section<SectionProps>`flex flex-col justify-center items-center w-1/3`;
export const NavSection = classed.section<SectionProps>`flex justify-end w-1/3`;
export const NavBox = classed.nav`flex items-center w-full px-3 py-5 bg-white flex-row`;
export const Button = classed.a`py-2.5`;
