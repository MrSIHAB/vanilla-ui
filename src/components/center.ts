import { TagOptions } from "../core/tag.js";
import { Div } from "../main.js";

export interface CenterOptions {
    childs: HTMLElement | HTMLElement[];
}

export const Center = ({ childs }: CenterOptions) => {
    return Div({
        style: {
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        childs: Div({
            childs: childs,
        }),
    });
};
