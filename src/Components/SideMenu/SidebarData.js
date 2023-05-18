import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/Dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Data Access',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Upload',
        path: '/Data_access/Upload',
        icon: <RiIcons.RiUploadCloud2Line/>,
        cName: 'sub-nav'
      },
      {
        title: 'Download',
        path: '/Data_access/Download',
        icon: <RiIcons.RiDownload2Line/>,        
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Eras 5',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Data 1',
        path: '/Eras5/Data_1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Data 2',
        path: '/Eras5/Data_2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];