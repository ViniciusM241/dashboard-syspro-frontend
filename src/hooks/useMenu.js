import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDashboard, MdPeopleAlt, MdNotifications, MdPostAdd } from 'react-icons/md';

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
        to: '/admin/usuarios',
        icon: MdPeopleAlt,
      });
      newMenu.push({
        name: 'Notificações',
        to: '/admin/notificacoes',
        icon: MdNotifications,
      });
      newMenu.push({
        name: 'Postagens',
        to: '/admin/posts',
        icon: MdPostAdd,
      });
    }

    setMenu(newMenu);
  };

  useEffect(() => {
    verifyMenu();
  }, [user]);

  return menu;
}
