import type { Origin } from "@/characters/support/models/origin";
import type { Location } from "@/characters/support/models/location";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  episode: Array<string>;
  url: string;
  created: string;
}
