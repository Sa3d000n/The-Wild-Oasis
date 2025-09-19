import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate("/login", { replace: true });
    },
    onError: () => toast.error("Couldn't logout due to error"),
  });
  return { logout, isLoading };
}
