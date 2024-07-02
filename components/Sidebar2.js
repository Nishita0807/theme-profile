import styled from 'styled-components';
const Sidebar2 = ({ selectedMenu, onMenuItemClick }) => {
  const SidebarContainer = styled.div`
  width:80px;
  background-color:#25282a;
  margin-top:4px;
  margin-left:12px;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
border-top-left-radius:12px;
padding-top:12px;
height:900px;
 @media (max-width:1100px){
 height:2000px;
 }
 @media (max-width:700px){
 height:2100px;
 }
  `;
  const HrImage=styled.img`
  width: 50px;
  height: 30px;
  object-fit: cover;
  `;
  const ProfileImage=styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  `;
    return (
        
       <SidebarContainer>
                       <div className='side-1'>
                       <HrImage src="/images/hr.png" alt="person"/>

      
<div className='p-icons'>
 <div onClick={() => onMenuItemClick('home')}><img src='/images/column.png'/></div>
 <div className='active' ><img src='/images/group.png'/></div>
 <div><img src='/images/file.png'/></div>
 <div><img src='/images/settings.png'/></div>
</div>
                       </div>
<div className='logout'>
<ProfileImage src="/images/profile.png" alt="person"/>
<img src='/images/logout.png' onClick={() => onMenuItemClick('home')} />
    </div>       </SidebarContainer>
    );
  };
  
  export default Sidebar2;