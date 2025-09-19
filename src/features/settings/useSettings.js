import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { isPending, data } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isPending, data };
}
