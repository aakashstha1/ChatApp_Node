import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

function useFetchRecipient(chat, user) {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members?.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return;
      try {
        const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
        if (response.error) {
          setError(response.error);
        } else {
          setRecipientUser(response);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    getUser();
  }, [recipientId]);

  return { recipientUser, error };
}

export default useFetchRecipient;
