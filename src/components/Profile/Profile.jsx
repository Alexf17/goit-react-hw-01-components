import PropTypes from "prop-types";
import { Quantity, Label, Description, Image, Name, StatsList, Info, Wrap, StatsItem } from "./Profile.styled";


export const Profile = ({ profile: { username, tag, location, avatar, stats } }) => {
    return (
<Wrap>
  <Description>
    <Image
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </Description>

  <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</Wrap>
    )
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
     stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  }),
};
