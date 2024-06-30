import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import useFetchRecipient from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";
import moment from "moment";

function ChatBox() {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipient(currentChat, user);

  if (isMessagesLoading)
    return (
      <p style={{ textAlign: "center", width: "100%" }}>Loading Chat...</p>
    );

  return (
    <Stack gap={4} className="chat-box">
      <div className="chat-header">
        <strong>{recipientUser?.name}</strong>
      </div>
      <Stack gap={3} className="messages">
        {messages && messages.length > 0 ? (
          messages.map((message, index) => (
            <Stack
              key={index}
              className={`${
                message?.senderId === user?._id
                  ? "message self align-self-end flex-grow-0"
                  : "message align-self-start flex-grow-0"
              }`}
            >
              <span>{message.text}</span>
              <span className="message-footer">
                {moment(message.createdAt).calendar()}
              </span>
            </Stack>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No messages available.
          </p>
        )}
      </Stack>
    </Stack>
  );
}

export default ChatBox;
