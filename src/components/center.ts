import { div } from "../main.ts";

export interface CenterOptions {
  children: HTMLElement | HTMLElement[];
}

export const Center = ({ children }: CenterOptions) => {
  return div({
    style: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    children: div({
      children: children,
    }),
  });
};
