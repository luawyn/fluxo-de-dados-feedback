import { TitleHeader, ProfilePic } from "./styled";

export const Header = (props) => {
  return (
    <TitleHeader>
      <h1>Insta4</h1>
      <h4>{props.sendLogin.name}</h4>
      {props.sendLogin.ProfilePic ? (
        <ProfilePic src={props.sendLogin.ProfilePic} />
      ) : (
        ""
      )}
    </TitleHeader>
  );
};
