import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link className='SidebarLink' to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <div className='SidebarLabel'>{item.title}</div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link className='DropdownLink' to={item.path} key={index}>
              {item.icon}
              <div className='SidebarLabel'>{item.title}</div>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;