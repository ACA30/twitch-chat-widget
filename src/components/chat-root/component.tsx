import * as React from "react";
import {useChatBadges} from "../../hooks/use-chat-badges";
import {useMessageStore} from "../../hooks/use-message-store";
import {useTwitchConnection} from "../../hooks/use-twitch-connection";
import {ChatLine} from "../chat-line";

interface Props {
  channelID: string;
  login: string;
}

export const ChatRoot: React.FunctionComponent<Props> = (
  props: Props,
) => {
  const [channelBadges, globalBadges] = useChatBadges(
    props.channelID,
  );
  const messages = useMessageStore();

  useTwitchConnection(props.login, (message) =>
    messages.addMessage(message),
  );

  return (
    <div>
      {messages.getMessages().map((message) => (
        <ChatLine
          channelBadges={channelBadges}
          globalBadges={globalBadges}
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
};
