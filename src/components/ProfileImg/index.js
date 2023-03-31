import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";
import profileImg from '~/assets/profile.png';

function ProfileImg(props) {
  const profile = useSelector(state => state.profile);
  const config = {};

  switch(props.size) {
    case 'min':
      config.width = 50;
      config.height = 50;
      config.borderWidth = 3;
      break;
    case 'medium':
      config.width = 150;
      config.height = 150;
      config.borderWidth = 5;
      break;
    case 'large':
      config.width = 300;
      config.height = 300;
      config.borderWidth = 7;
      break;
    default:
      config.width = 50;
      config.height = 50;
      config.borderWidth = 3;
      break;
  }

  return (
    <Container
      img={profile.user.imgUrl || profileImg}
      {...props}
      config={config}
    />
  );
}

export default ProfileImg;
