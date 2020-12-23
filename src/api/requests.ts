import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.football-data.org/v2/",
  headers: { "X-Auth-Token": "0de2b419cd614b6da622b89303e0c8ad" },
});

export const getTournaments = () => {
  try {
    return instance.get("/competitions?plan=TIER_ONE");
  } catch (e) {
    console.log(e.message);
  }
};

export const getTournamentStandings = (id:number) => {
  try {
    return instance.get(`/competitions/${id}/standings?standingType=TOTAL`);
  } catch (e) {
    console.log(e.message);
  }
};

export const getTeam = (id:number) => {
  try {
    return instance.get(`teams/${id}/`);
  } catch (e) {
    console.log(e.message);
  }
};
