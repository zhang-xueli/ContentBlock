import { Image, RichText } from "@sitecore-jss/sitecore-jss-react";
import { ContentImagePosition, ContentProps } from "./Content.types";

const Content = (props: ContentProps): JSX.Element => {
  const hasImage = !!props.image;
  const imageContainerClass =
    hasImage &&
    (props.imagePosition == ContentImagePosition.Top ||
      props.imagePosition == ContentImagePosition.Bottom)
      ? "col-12"
      : "col-6";
  const contentContainerClass = imageContainerClass;
  return (
    <div className="content row">
      {hasImage &&
      (props.imagePosition == ContentImagePosition.Top ||
        props.imagePosition == ContentImagePosition.Left) ? (
        <div className={imageContainerClass}>
          <Image field={props.image} />
        </div>
      ) : null}
      <div className={contentContainerClass}>
        <RichText field={props.content} />
      </div>
      {hasImage &&
      (props.imagePosition == ContentImagePosition.Bottom ||
        props.imagePosition == ContentImagePosition.Right) ? (
        <div className={imageContainerClass}>
          <Image field={props.image} />
        </div>
      ) : null}
    </div>
  );
};
export default Content;

export const NoImage = (props: ContentProps): JSX.Element => {
  return (
    <div>
      <h1>No Image</h1>
      <RichText field={props.content} />
    </div>
  );
};
