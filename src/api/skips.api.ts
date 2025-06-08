import type { ISkip } from "../types";
import api from "./axios";

export const fetchSkips = async (): Promise<ISkip[]> => {
  const response = await api.get<ISkip[]>(
    "/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  return response.data;
};
