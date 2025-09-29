import { Tag, TagOptions } from "../core/tag.ts";

export interface AnchorOptions extends TagOptions {
  href: string | URL | URLSearchParams;
  target?: "_self" | "_blank" | "_parent" | "_top" | string;
  rel?: string;
  download?: string | boolean;
  type?: string;
  ping?: string;
  hreflang?: string;
  referrerPolicy?: string;
}

//  =====================   Anchor Tag  =====================

export const a = (option: AnchorOptions) => {
  const anchorTag = Tag("a", option);

  if (option.href) {
    if (typeof option.href === "string") {
      anchorTag.setAttribute("href", option.href);
    } else if (option.href instanceof URL) {
      anchorTag.setAttribute("href", option.href.toString());
    } else if (option.href instanceof URLSearchParams) {
      anchorTag.setAttribute("href", option.href.toString());
    }
  }
  if (option.target) {
    anchorTag.setAttribute("target", option.target);
  }
  if (option.rel) {
    anchorTag.setAttribute("rel", option.rel);
  }
  if (option.download) {
    anchorTag.setAttribute(
      "download",
      option.download === true ? "" : option.download
    );
  }
  if (option.type) {
    anchorTag.setAttribute("type", option.type);
  }
  if (option.ping) {
    anchorTag.setAttribute("ping", option.ping);
  }
  if (option.hreflang) {
    anchorTag.setAttribute("hreflang", option.hreflang);
  }
  if (option.referrerPolicy) {
    anchorTag.setAttribute("referrerpolicy", option.referrerPolicy);
  }
  return anchorTag;
};
export const anchor = (option: AnchorOptions) => a(option);

//  =====================   Link Tag     =====================
export interface LinkTagOptions {
  href?: string | URL | URLSearchParams;
  rel?: string;
  type?: string;
  sizes?: string;
  media?: string;
  hreflang?: string;
}
export const link = (option: LinkTagOptions) => {
  const linkTag = document.createElement("link");
  if (option.href) {
    if (typeof option.href === "string") {
      linkTag.setAttribute("href", option.href);
    } else if (option.href instanceof URL) {
      linkTag.setAttribute("href", option.href.toString());
    } else if (option.href instanceof URLSearchParams) {
      linkTag.setAttribute("href", option.href.toString());
    }
  }
  if (option.rel) {
    linkTag.setAttribute("rel", option.rel);
  }
  if (option.type) {
    linkTag.setAttribute("type", option.type);
  }
  if (option.sizes) {
    linkTag.setAttribute("sizes", option.sizes);
  }
  if (option.media) {
    linkTag.setAttribute("media", option.media);
  }
  if (option.hreflang) {
    linkTag.setAttribute("hreflang", option.hreflang);
  }
  return linkTag;
};

//  =====================   Meta Tag   =====================
export interface MetaTagOptions extends TagOptions {
  name?: string;
  content?: string;
  charset?: string;
  httpEquiv?: string;
  scheme?: string;
  property?: string;
  itemprop?: string;
  lang?: string;
  dir?: "ltr" | "rtl" | "auto";
}
export const meta = (option: MetaTagOptions) => {
  const metaTag = Tag("meta", option);
  if (option.name) {
    metaTag.setAttribute("name", option.name);
  }
  if (option.content) {
    metaTag.setAttribute("content", option.content);
  }
  if (option.charset) {
    metaTag.setAttribute("charset", option.charset);
  }
  if (option.httpEquiv) {
    metaTag.setAttribute("http-equiv", option.httpEquiv);
  }
  if (option.scheme) {
    metaTag.setAttribute("scheme", option.scheme);
  }
  if (option.property) {
    metaTag.setAttribute("property", option.property);
  }
  if (option.itemprop) {
    metaTag.setAttribute("itemprop", option.itemprop);
  }
  if (option.lang) {
    metaTag.setAttribute("lang", option.lang);
  }
  if (option.dir) {
    metaTag.setAttribute("dir", option.dir);
  }
  return metaTag;
};
export const metaTag = (option: MetaTagOptions) => meta(option);
