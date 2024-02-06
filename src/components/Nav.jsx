import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const Nav = () => {
  const [current, setCurrent] = useState('/');
  const location = useLocation();

  const items = [
    {
      label: 'Home',
      key: '/'
    },
    {
      label: 'Portfolio',
      key: '/portfolio'
    },
    {
      label: 'SkillSet',
      key: '/experience'
    },
    // {
    //   label: 'Contact',
    //   key: '/contact'
    // },
  ];


  const onClick = (e) => {
    // Update the selected key with the clicked key
    setCurrent(e.key);
  };

  return (
    <div className='align-items-center justify-content-center' >
      <Menu
        className='background align-items-center justify-content-center'
        onClick={onClick}
        selectedKeys={[current]}
        defaultSelectedKeys={['/']}
        mode="horizontal"
      >
        {items.map(item => (
          <Menu.Item key={item.key}>
            <Link className='text-decoration-none' to={item.key} >{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Nav;
