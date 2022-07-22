import classed, { tw } from "clsc";
import clsx from "clsx";

type SectionProps = { flex?: number };
export const Section = classed.section<SectionProps>(({ flex }) =>
  clsx([
    tw`flex flex-row justify-end items-center w-full h-full mx-8`,
    flex && `flex-${flex}`,
  ])
);
export const NavItemSection = classed<SectionProps>(Section)(
  tw`justify-start pl-8`
);
export const MainTitleSection = classed<SectionProps>(Section)(
  tw`justify-content flex-col justify-center`
);
export const NavSection = classed<SectionProps>(Section)(tw`justify-end pr-32`);
export const NavBox = classed.nav`flex flex-row bg-gray-600 w-full`;
export const Button = classed.a`ml-5`;
