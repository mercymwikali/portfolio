import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const Nav = () => {
  const [current, setCurrent] = useState('');
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
    {
      label: 'Contact',
      key: '/contact'
    },
  ];

  // Set the current key based on the current pathname
  const findCurrentKey = () => {
    const currentKey = items.find(item => location.pathname.includes(item.key))?.key;
    setCurrent(currentKey || '');
  };

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className='align-items-center justify-content-center'>
      <Menu
        className='background align-items-center justify-content-center'
        onClick={onClick}
        selectedKeys={[current]}
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
