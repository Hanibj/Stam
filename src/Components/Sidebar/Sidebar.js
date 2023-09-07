import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { RightCircleFilled } from '@ant-design/icons';
import NavbarAdmin from '../NavbarAdmin';
import { FaBars, BellIcon } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Nav = styled.div`
  background-color: #2d3748;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-color: #2d3748;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Center = styled.div`
  text-align: center;
  color: #f5f5f5;
  font-weight: bold;
  font-size: 35px;
  display: flex;
  justify-content: center;
  margin-right: auto;
`;

const Right = styled.div`
  color: #2d3748;
  font-weight: bold;
  font-size: 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2px;
`;

const ProfileButton = styled.button`
  type: button;
  border: none;
  background-color: #2d3748;
  padding: 1rem;
  color: #f5f5f5;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
      <NavIcon to='#'>
        <FaBars onClick={showSidebar} />
        <Center>STAM</Center>
      </NavIcon>
      <Right>
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/Admin/Profile"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/Logout'
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </Right>
    </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
