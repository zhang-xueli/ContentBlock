import { ImageField, RichTextField } from "@sitecore-jss/sitecore-jss-react";

export type ContentBlockProps = {
    content: RichTextField;
    image: ImageField;
};

export type ContentBlockParams = {
    imagePosition: ContentBlockImagePosition;
};

export enum ContentBlockImagePosition {
    Left,
    Right,
    Top,
    Bottom
};