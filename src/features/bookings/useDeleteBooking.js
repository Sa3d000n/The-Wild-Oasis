import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`booking  was deleted succesfully`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (e) => toast.error(e),
  });
  return { deleteBooking, isDeleting };
}
