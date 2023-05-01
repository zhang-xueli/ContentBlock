import { RichText } from "@sitecore-jss/sitecore-jss-react";
import { ContentBlockProps } from "./ContentBlock.types";

const ContentBlock = (props: ContentBlockProps): JSX.Element => {
  return (
    <div>
      <RichText field={props.content} />
    </div>
  );
};
