import { Image, RichText } from "@sitecore-jss/sitecore-jss-react";
import { ContentImagePosition, ContentProps } from "./Content.types";

const Content = (props: ContentProps): JSX.Element => {
  const hasImage = !!props.image;
  const imageContainerClass =
    hasImage &&
    (props.imagePosition == ContentImagePosition.Top ||
      props.imagePosition == ContentImagePosition.Bottom)
      ? "col-6"
      : "col-12";
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
        ContentImagePosition.Right) ? (
        <div className={imageContainerClass}>
          <Image field={props.image} />
        </div>
      ) : null}
    </div>
  );
};

export default Content;
