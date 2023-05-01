import { ImageField, RichTextField } from "@sitecore-jss/sitecore-jss-react";

export type ContentProps = {
  content: RichTextField;
  image: ImageField;
  imagePosition: ContentImagePosition;
};

export enum ContentImagePosition {
  Left,
  Right,
  Top,
  Bottom,
}
