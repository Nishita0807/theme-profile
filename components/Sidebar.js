import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 850px;

  @media (max-width: 900px) {
    width: 200px;
    height: 1350px;
  }

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const Logo = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 100%;
  border-bottom: 1px solid #ececee;
  padding-bottom: 12px;
`;

const MenuItem = styled.div`
  margin: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ $active }) => ($active ? '#e4e3e7' : 'transparent')};

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Icon = styled.div`
display:flex;
align-itmes:center;
justify-content:center;
width:20px;
height:20px;
  object-fit: cover;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

const Text = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Sidebar = ({ selectedMenu, onMenuItemClick }) => {
  
  return (
    <SidebarContainer>
      <Logo>Logo Here</Logo>
      <Menu>
        <h4>Menu</h4>
        <MenuItem>
          <Icon><img src='/images/home.jpeg'/></Icon><Text>Home</Text>
        </MenuItem>
        <MenuItem>
          <Icon><img src='/images/schedule.jpeg'/></Icon><Text>Schedule</Text>
        </MenuItem>
        <MenuItem>
          <Icon><img src='/images/rec.jpeg'/></Icon><Text>Recommendation</Text>
        </MenuItem>
        <MenuItem>
          <Icon><img src='/images/Analytics.jpeg'/></Icon><Text>Analytics</Text>
        </MenuItem>
        <MenuItem $active={selectedMenu === 'profile'} onClick={() => onMenuItemClick('profile')}>
          <Icon><img src='/images/profileIc.jpeg'/></Icon><Text>Profile</Text>
        </MenuItem>
        <MenuItem>
          <Icon><img src='/images/inbox.jpeg'/></Icon><Text>Inbox</Text> <span className='number'>8</span>
        </MenuItem>
        <MenuItem $active={selectedMenu === 'home'} onClick={() => onMenuItemClick('home')}>
          <Icon><img src='/images/themes.jpeg'/></Icon><Text>Theme</Text>
        </MenuItem>
      </Menu>
      <Menu>
        <h4>Account</h4>
        <MenuItem>
          <Icon><img src='/images/setting.jpeg'/></Icon><Text>Settings</Text>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
