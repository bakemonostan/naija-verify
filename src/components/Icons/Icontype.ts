export type SvgProps = {
  svg?: <T extends React.SVGProps<SVGSVGElement>>(props: T) => JSX.Element;
  width: string;
  height?: string;
};

export interface LogoProps {
  variant?: "light" | "dark";
}
