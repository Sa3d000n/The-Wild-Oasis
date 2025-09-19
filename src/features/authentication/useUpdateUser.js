import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
export  function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      toast.success("User updated successfully");
      queryClient.setQueryData(["user"], data.user);
    },
  });
  return { updateUser, isLoading };
}
