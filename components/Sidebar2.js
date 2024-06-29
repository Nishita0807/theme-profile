import styled from 'styled-components';
import { FaArrowRight, FaBorderAll, FaCircle, FaFile, FaThemeco, FaUser } from 'react-icons/fa';
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
 <div onClick={() => onMenuItemClick('home')}><FaBorderAll/></div>
 <div className='active' ><FaUser/></div>
 <div><FaFile/></div>
 <div><FaCircle/></div>
</div>
                       </div>
<div className='logout'>
<ProfileImage src="/images/profile.png" alt="person"/>
<FaArrowRight onClick={() => onMenuItemClick('home')} />
    </div>       </SidebarContainer>
    );
  };
  
  export default Sidebar2;