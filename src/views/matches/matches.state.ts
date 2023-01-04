import { ref } from "vue";
import axios from "axios";
import { MatchesInterface } from "./matches.model";
import { useLegacyStore } from "@/state/store";

export interface MatchesState {
  payload: MatchesInterface[];
}

const BASEURL = 'api/matches';
const state = ref({
    payload: [] as MatchesInterface[]
  });
const { computedProperty, value } = useLegacyStore<MatchesState>(state, { name: 'MatchesStore', resettable: true });

export function useMatchState() {  
  async function getMatches(account_id: number) {
    // const { data } = await axios.get(`${BASEURL}/${account_id}`);

    updatePayload(data.body, 'payload');
  }

  function updatePayload(diff: MatchesInterface[], key: keyof MatchesState): void {
    const payload = [computedProperty(key), ...diff];
    Object.assign(value().payload, payload);
  }

  return {
    state,
    getMatches,
  }
}
