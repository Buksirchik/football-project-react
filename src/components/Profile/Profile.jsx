import { useSelector } from "react-redux";
import {
  getFavoritePlayersSelector,
  getFavoriteTeamsSelector,
} from "../../redux/selectors";
import { FavoritePlayer } from "../FavoritePlayer";
import { FavoriteTeam } from "../FavoriteTeam/FavoriteTeam";
import avatar from "./images/avatar.png";
import "./style.css";

export const Profile = () => {
  const favoritePlayers = useSelector(getFavoritePlayersSelector);
  const favoriteTeams = useSelector(getFavoriteTeamsSelector);

  return (
    <div className="profile">
      <div className="profile-avatar">
        <img className="profile-avatar__img" src={avatar} alt="John Snow" />
      </div>
      <p className="profile__name">John Snow</p>
      <div className="following-teams">
        Following teams
        <ul className="favorite-list">
          {Object.values(favoriteTeams).map((team) => (
            <FavoriteTeam key={team.id} {...team} />
          ))}
        </ul>
      </div>
      <div className="following-players">
        Following players
        <ul className="favorite-list">
          {Object.values(favoritePlayers).map((player) => {
            return <FavoritePlayer key={player.id} {...player} />;
          })}
        </ul>
      </div>
    </div>
  );
};
