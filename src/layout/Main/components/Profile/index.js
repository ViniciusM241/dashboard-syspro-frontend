import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "~/hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "./store/actions";

import { Wrapper, Collapse, CollapseItem } from './styles';
import { MdLogout, MdPerson } from 'react-icons/md';
import { ProfileImg } from '~/components';

const menus = [
  {
    name: 'Perfil',
    to: '/meu-perfil',
    icon: MdPerson,
  },
  {
    name: 'Sair',
    to: '/sair',
    icon: MdLogout,
  },
];

function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  useOutsideClick(wrapperRef, () => setIsOpened(false));

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch, getProfile]);

  return (
    <Wrapper ref={wrapperRef}>
      <ProfileImg
        {...props}
        className="ml-10"
        onClick={() => setIsOpened(!isOpened)}
      />
      {
        isOpened && (
          <Collapse>
            {
              menus.map((menu, index) => (
                <CollapseItem key={index} onClick={() => navigate(menu.to)}>
                  {
                    React.createElement(menu.icon, {
                      className: 'mr-10',
                    })
                  }
                  {menu.name}
                </CollapseItem>
              ))
            }

          </Collapse>
        )
      }
    </Wrapper>
  );
}

export default Profile;
