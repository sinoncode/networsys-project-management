import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdPeople,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import Team from 'views/admin/team';
import TeamProfile from 'views/admin/team/teamprofile.jsx'
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';
import Projects from 'views/admin/projects'

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import SignUpCentered from 'views/auth/signUp';

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
    hidden: true,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
    hidden: true,
  },

    {
    name: 'Projects',
    layout: '/admin',
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    path: '/projects',
    component: <Projects />,
  },

    {
    name: 'Team',
    layout: '/admin',
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    path: '/team',
    component: <Team />,
  },


  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
    hidden: true,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
    hidden: true,
  },
   {
    layout: '/auth',
    path: '/sign-up',
    component: <SignUpCentered />,
    hidden: true,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
    hidden: true,
  },

  {
    layout: '/admin',
    path: '/team/teamprofile',
    component: <TeamProfile />,
    hidden: true,
  },

];

export default routes;
