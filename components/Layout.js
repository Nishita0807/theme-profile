import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import ThemeWindow from './ThemeWindow';
import Profile from './Profile';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Layout = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleMenuItemClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleLogout = () => {
    setSelectedMenu('home'); // Navigate to home (theme page) on logout
  };

  return (
    <LayoutContainer>
      {selectedMenu !== 'profile' ? (
        <Sidebar selectedMenu={selectedMenu} onMenuItemClick={handleMenuItemClick} />
      ) : (
        <Sidebar2 onLogout={handleLogout} onMenuItemClick={handleMenuItemClick}/>
      )}
      {selectedMenu === 'home' && <ThemeWindow />}
      {selectedMenu === 'profile' && <Profile />}
      {/* Add other components for other menu items as needed */}
    </LayoutContainer>
  );
};

export default Layout;
