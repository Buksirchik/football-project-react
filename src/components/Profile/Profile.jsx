import { useSelector } from "react-redux";
import {
  getFavoritePlayersSelector,
  getFavoriteTeamsSelector,
} from "../../redux/selectors";
import { FavoritePlayersList } from "../FavoritePlayerlList";
import { FavoriteTeamsList } from "../FavoriteTeam/FavoriteTeamsList";
import avatar from "./images/avatar.jpg";
import "./style.css";

export const Profile = () => {
  const favoritePlayers = useSelector(getFavoritePlayersSelector);
  const favoriteTeams = useSelector(getFavoriteTeamsSelector);
  const isEmptyPlayers = !!Object.values(favoritePlayers).length;
  const isEmptyTeams = !!Object.values(favoriteTeams).length;

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <img className="profile-avatar__img" src={avatar} alt="John Snow" />
        </div>
      </div>
      <p className="profile__name">John Snow</p>

      {isEmptyTeams ? (
        <div className="following-teams">
          <h3 className="following__title">Following teams</h3>
          <FavoriteTeamsList teams={Object.values(favoriteTeams)} />
        </div>
      ) : null}

      {isEmptyPlayers ? (
        <div className="following-players">
          <h3 className="following__title">Following players</h3>
          <FavoritePlayersList players={Object.values(favoritePlayers)} />
        </div>
      ) : null}

      {(isEmptyPlayers || isEmptyTeams) === true ? null : (
        <p className="profile__text">There aren't favorite players and teams</p>
      )}
    </div>
  );
};
