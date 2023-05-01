import { RichText } from "@sitecore-jss/sitecore-jss-react";
import { ContentProps } from "./Content.types";

const Content = (props: ContentProps): JSX.Element => {
  return (
    <div>
      <RichText field={props.content} />
    </div>
  );
};

export default Content;
