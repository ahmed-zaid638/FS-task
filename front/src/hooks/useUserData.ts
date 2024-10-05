import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_DATA, UPDATE_USER_DATA } from "../graphql/queries";

const useUserData = (userId: any) => {
  const { data, loading, error } = useQuery(GET_USER_DATA, {
    variables: { userId },
  });

  const [updateUser] = useMutation(UPDATE_USER_DATA);

  const updateUserData = async (userData: any) => {
    try {
      const updatedUser = await updateUser({
        variables: {
          updateUserId: userId,
          input: userData,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading, error, updateUserData };
};

export default useUserData;
