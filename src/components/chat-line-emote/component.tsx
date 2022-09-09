import * as React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  url: string;
  zeroWidth: boolean;
}

export const ChatLineEmote: React.FunctionComponent<Props> = (
  props: Props,
) => {
  return (
    <img
      src={props.url}
      alt={props.name}
      className={
        props.zeroWidth ? styles.zerowidthemote : styles.emote
      }
    />
  );
};
