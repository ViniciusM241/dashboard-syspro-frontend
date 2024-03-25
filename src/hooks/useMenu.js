import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  MdDashboard,
  MdPeopleAlt,
  MdNotifications,
  MdPostAdd,
  MdHistory,
} from 'react-icons/md';

import { DepartmentsEnum } from "~/utils/enums";

export default function () {
  const user = useSelector(state => state.profile.user);
  const [menu, setMenu] = useState([]);

  const menus = {
    GENERAL: {
      title: '',
      menus: [
        {
          name: 'Dashboard',
          to: '/home',
          icon: MdDashboard,
        }
      ],
    },
    ADMIN: {
      title: "Administrativo",
      menus: [
        {
          name: 'Usuários',
          to: '/admin/usuarios',
          icon: MdPeopleAlt,
        },
        {
          name: 'Notificações',
          to: '/admin/notificacoes',
          icon: MdNotifications,
        },
        {
          name: 'Postagens',
          to: '/admin/posts',
          icon: MdPostAdd,
        },
      ],
    },
    [DepartmentsEnum.SUPORTE.value]: {
      title: DepartmentsEnum.SUPORTE.label,
      menus: [
        {
          name: 'Migração BIN ISO',
          to: '/suporte/migracao',
          icon: MdHistory,
        },
      ],
    },
    [DepartmentsEnum.SYSPRO_PAY.value]: {
      title: DepartmentsEnum.SUPORTE.label,
      menus: [],
    },
  }

  const verifyMenu = () => {
    const newMenu = [];
    const userDepartments = ['GENERAL', ...user.departments, user.isAdmin ? "ADMIN" : '' ];

    userDepartments.forEach(x => {
      if (Object.prototype.hasOwnProperty.call(menus, x)) {
        newMenu.push(menus[x]);
      }
    });

    setMenu(newMenu);
  };

  useEffect(() => {
    verifyMenu();
  }, [user]);

  return menu;
}
