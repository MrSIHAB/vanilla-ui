import { Tag, TagOptions } from "../core/tag.js";

export interface ImageInterface extends TagOptions {
    src: string | URL;
    alt?: string;
    srcset?: Record<string, string | URL>;
    sizes?: string;
}

//  ====================    ImageTag =============
export const Image = (options?: ImageInterface): HTMLImageElement => {
    const element = Tag("img", options) as HTMLImageElement;

    if (!options) return element;
    // setting options
    if (options.src) element.src = options.src.toString();
    if (options.sizes) element.sizes = options.sizes;
    if (options.alt) element.alt = options.alt;
    if (options.srcset) {
        const srcset = Object.entries(options.srcset).map((key, value) =>
            `${value.toString()} ${key}`
        ).join(" ");
        element.srcset = srcset;
    }

    return element;
};
export const Img = (Option: ImageInterface) => Image(Option);

//  ====================    Video Tag =============
export interface VideoInterface extends TagOptions {
    src: string | URL;
}
export const Video = (options?: VideoInterface): HTMLVideoElement => {
    const element = Tag("video", options) as HTMLVideoElement;

    if (!options) return element;
    if (options.src) element.src = options.src.toString();
    return element;
};
