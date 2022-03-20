import classed, { tw } from "clsc";
import clsx from "clsx";

type SectionProps = { flex?: number };
export const Section = classed.section<SectionProps>(({ flex }) =>
  clsx([
    tw`flex flex-row justify-center items-center w-full h-full`,
    flex && `flex-${flex}`,
  ])
);
export const IconSection = classed<SectionProps>(Section)(
  tw`justify-start pl-8`
);
export const NavSection = classed<SectionProps>(Section)(tw`justify-end pr-8`);
export const NavBox = classed.nav`flex flex-row bg-gray-600 w-full`;
export const Button = classed.a`ml-5`;
