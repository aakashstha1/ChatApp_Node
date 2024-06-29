import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

function useFetchRecipient(chat, user) {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recepientId = chat?.members?.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recepientId) return null;
      const response = await getRequest(`${baseUrl}/users/find/${recepientId}`);

      if (response.error) {
        return setError(error);
      }

      setRecipientUser(response);
    };
    getUser();
  }, [recepientId]);
  return { recipientUser };
}

export default useFetchRecipient;
