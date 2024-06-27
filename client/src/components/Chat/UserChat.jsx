import { Stack } from "react-bootstrap";
import useFetchRecipient from "../../hooks/useFetchRecipient";

function UserChat({ chat, user }) {
  const { recipientUser } = useFetchRecipient(chat, user);

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
    >
      <div className="d-flex">
        <div className="me-2"></div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Text Message</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <div className="date">27/06/2024</div>
        <div className="this-user-notifications">2</div>
        <span className="user-online"> </span>
      </div>
    </Stack>
  );
}
export default UserChat;