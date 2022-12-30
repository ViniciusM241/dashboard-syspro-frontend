import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDashboard, MdPeopleAlt, MdGroups } from 'react-icons/md';

export default function () {
  const user = useSelector(state => state.profile.user);
  const [menu, setMenu] = useState([]);

  const verifyMenu = () => {
    const newMenu = [];

    newMenu.push({
      name: 'Dashboard',
      to: '/home',
      icon: MdDashboard,
    });

    if (user.isAdmin) {
      newMenu.push({
        name: 'Usuários',
        to: '/usuarios',
        icon: MdPeopleAlt,
      });

      newMenu.push({
        name: 'Departamentos',
        to: '/departamentos',
        icon: MdGroups,
      });
    }

    setMenu(newMenu);
  };

  useEffect(() => {
    verifyMenu();
  }, [user]);

  return menu;
}
