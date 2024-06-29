import React, { useState, useEffect,useCallback } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaCopy, FaDumpster, FaImage } from 'react-icons/fa';
import Cropper from 'react-easy-crop';

import { getCroppedImg } from './cropImage';
const ProfileContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const HeaderImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  box-shadow: 4px 8px 12px grey;
  border-radius: 50%;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  @media (max-width:600px){
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
  }
`;

const ProfileContent = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width:1100px){
  display:flex;
  flex-direction:column;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

const RoleDropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoleLabel = styled.div`
  color: #939393;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 300px;
  padding: 8px 8px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 12px;
  color: #3e3e3e;
  font-weight: 700;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarLabel = styled.div`
  margin-bottom: 5px;
  color: #939393;
`;

const DatePicker = styled.input`
  width: 280px;
  padding: 10px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 12px;
  color: #3e3e3e;
`;

const OnboardingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-direction:row;
`;
const Portfolio=styled.img`
width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius:12px;
`;
const OnboardingLabel = styled.div`

  margin-right: 10px;
  color: black;
  font-size:14px;
`;

const ToggleButton = styled.button`
  padding: 12px 16px;
  background-color: ${({ active }) => (active ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  margin-right:12px;
`;

const Profile = ({onMenuItemClick}) => {
  const [role, setRole] = useState('');
  const [hr,setHr]=useState('');
  const [manager,setManager]=useState('');
  const [leads,setLeads]=useState('');
  const [onboardingDate, setOnboardingDate] = useState('');
  const [name, setName] = useState('Russel');
  const [Lname, setLName] = useState('Sims');
  const [email, setEmail] = useState('russel@mycompany.com');
  const [phone, setPhone] = useState('+1 255 29345690');
  const [position, setPosition] = useState('iOS Developer');
  const [isOfficeTourRequired, setIsOfficeTourRequired] = useState(true);
  const [isOnboardingRequired, setIsOnboardingRequired] = useState(true);

  const [isManagementIntroductoryRequired, setIsManagementIntroductoryRequired] = useState(false);
  const [isWorkToolsRequired, setIsWorkToolsRequired] = useState(true);
  const [isMeetYourColleaguesRequired, setIsMeetYourColleaguesRequired] = useState(true);
  const [isDutiesJournalRequired, setIsDutiesJournalRequired] = useState(true);
  const [isRequestsHandlingRequired, setIsRequestsHandlingRequired] = useState(true);
  const [isActivityTrackingRequired, setIsActivityTrackingRequired] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    const savedHr = localStorage.getItem('hr');
    const savedManager = localStorage.getItem('manager');
    const savedLeads = localStorage.getItem('leads');
    const savedOnboardingDate = localStorage.getItem('onboardingDate');
    const savedName = localStorage.getItem('name');
    const savedLname = localStorage.getItem('lastName');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phoneNumber');
    const savedPosition = localStorage.getItem('position');
    const savedIsOfficeTourRequired = localStorage.getItem('isOfficeTourRequired') === 'true';
    const savedIsOnboardingRequired = localStorage.getItem('isOnboardingRequired') === 'true';
    const savedIsManagementIntroductoryRequired = localStorage.getItem('isManagementIntroductoryRequired') === 'true';
    const savedIsWorkToolsRequired = localStorage.getItem('isWorkToolsRequired') === 'true';
    const savedIsMeetYourColleaguesRequired = localStorage.getItem('isMeetYourColleaguesRequired') === 'true';
    const savedIsDutiesJournalRequired = localStorage.getItem('isDutiesJournalRequired') === 'true';
    const savedIsRequestsHandlingRequired = localStorage.getItem('isRequestsHandlingRequired') === 'true';
    const savedIsActivityTrackingRequired = localStorage.getItem('isActivityTrackingRequired') === 'true';

    if (savedRole) setRole(savedRole);
    if (savedHr) setHr(savedHr);
    if (savedManager) setManager(savedManager);
    if (savedLeads) setLeads(savedLeads);
    if (savedOnboardingDate) setOnboardingDate(savedOnboardingDate);
    if (savedName) setName(savedName);
    if (savedLname) setLName(savedLname);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
    if (savedPosition) setPosition(savedPosition);
    setIsOfficeTourRequired(savedIsOfficeTourRequired);
    setIsOnboardingRequired(savedIsOnboardingRequired);
    setIsManagementIntroductoryRequired(savedIsManagementIntroductoryRequired);
    setIsWorkToolsRequired(savedIsWorkToolsRequired);
    setIsMeetYourColleaguesRequired(savedIsMeetYourColleaguesRequired);
    setIsDutiesJournalRequired(savedIsDutiesJournalRequired);
    setIsRequestsHandlingRequired(savedIsRequestsHandlingRequired);
    setIsActivityTrackingRequired(savedIsActivityTrackingRequired);
    const savedImage = localStorage.getItem('croppedImage');
    if (savedImage) {
      setCroppedImage(savedImage);
    }
  }, []);


  const handleSaveProfile = () => {
    localStorage.setItem('role', role);
    localStorage.setItem('hr', hr);
    localStorage.setItem('manager', manager);
    localStorage.setItem('leads', leads);
    localStorage.setItem('onboardingDate', onboardingDate);
    localStorage.setItem('isOnboardingRequired', isOnboardingRequired.toString());
    localStorage.setItem('name',name);
    localStorage.setItem('lastName',Lname);
    localStorage.setItem('email',email);
    localStorage.setItem('phoneNumber',phone);
    localStorage.setItem('position',position);
    localStorage.setItem('isOfficeTourRequired', isOfficeTourRequired.toString());
    localStorage.setItem('isManagementIntroductoryRequired', isManagementIntroductoryRequired.toString());
    localStorage.setItem('isWorkToolsRequired', isWorkToolsRequired.toString());

    localStorage.setItem('isMeetYourColleaguesRequired', isMeetYourColleaguesRequired.toString());

    localStorage.setItem('isDutiesJournalRequired', isDutiesJournalRequired.toString());

    localStorage.setItem('isRequestsHandlingRequired', isRequestsHandlingRequired.toString());

    localStorage.setItem('isActivityTrackingRequired', isActivityTrackingRequired.toString());
 localStorage.setItem('croppedImage',croppedImage);
    alert('Profile saved successfully!');
  };

  const handleCancelProfile=()=>{
    setRole('');
    setHr('');
    setManager('');
    setLeads('');
    setOnboardingDate('');
    setName('Russel');
    setLName('Sims');
    setEmail('russel@mycompany.com');
    setPhone('+1 255 29345690');
    setPosition('iOS Developer');
    setIsOfficeTourRequired(true);
    setIsOnboardingRequired(true);
    setIsManagementIntroductoryRequired(false);
    setIsWorkToolsRequired(true);
    setIsMeetYourColleaguesRequired(true);
    setIsDutiesJournalRequired(true);
    setIsRequestsHandlingRequired(true);
    setIsActivityTrackingRequired(true);
    setImageSrc('images/person.jpeg');
    setCroppedImage(null); // Clear cropped image
    localStorage.removeItem('croppedImage'); 

  }



  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
      setImageSrc(null); // Close the cropper by setting imageSrc to null

            localStorage.setItem('croppedImage', croppedImg);


    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <div className='box-1'>
          <div  onClick={() => onMenuItemClick('home')}><FaArrowLeft /></div>
          <HeaderImage src={ croppedImage || "images/person.jpeg"} />
          <h3>{name} {Lname}</h3>
        </div>
        <div className='date'>
          <div>
            Added on 21.04.2022
          </div>
          <div className='delete'>
            <FaDumpster />
            <div>Delete</div>
          </div>
        </div>
      </ProfileHeader>
      <ProfileContent>
        <ProfileImageWrapper>
        <div>
      <RoleLabel>PROFILE IMAGE</RoleLabel>
      <div>
        <Portfolio src={croppedImage || "images/person.jpeg"} />
      </div>
      <div className='image-portfolio'>
      
        <button onClick={() => document.getElementById('fileInput').click()}>
        <FaImage />
          <div>
          Change Profile Image
            </div></button>
          {/* Hidden file input */}
          <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
      </div>
      {imageSrc && (
        <div>
          <div style={{ position: 'fixed', top:"12px",left:"7%",width: '100%', height: 400,zIndex:1 }}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <button onClick={showCroppedImage}>Crop Image</button>
        </div>
      )}
    </div>
        <RoleLabel className='employee'>EMPLOYEE DETAILS</RoleLabel>
        <div>
            <div className='role-select-1'>
              <div className='role'>
                First Name
              </div>
              <DatePicker
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className='role-select-1'>
              <div className='role'>
                Last Name
              </div>
              <DatePicker
                type="text"
                value={Lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className='role-select-1'>
              <div className='role'>
                Email Address
              </div>
              <div className='copy'><FaCopy/></div>

              <DatePicker
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className='role-select-1'>
              <div className='role'>
                Phone Number
              </div>
              <div className='copy'><FaCopy/></div>
              <DatePicker
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
             
            </div>
          </div>
          <div>
            <div className='role-select-1'>
              <div className='role'>
                Position
              </div>
              <DatePicker
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
          </div>
                </ProfileImageWrapper>

        <RoleDropdown>
          <div className='all-drops'>
            <RoleLabel>ROLE</RoleLabel>
            <div className='role-select'>
              <div className='role'>
                Role
              </div>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="professional">Professional</option>
              </Select>
            </div>
          </div>
          <div className='all-drops'>
            <RoleLabel>TEAM</RoleLabel>
            <div className='role-select'>
              <div className='role'>
                HR
              </div>
              <Select value={hr} onChange={(e) => setHr(e.target.value)}>
                <option value="">Select HR</option>
                <option value="1">Katte Middleton</option>
                <option value="2">Ganesh Kumar</option>
                <option value="3">Namburing</option>
              </Select>
            </div>
            <div className='role-select'>
              <div className='role'>
                Manager
              </div>
              <Select value={manager} onChange={(e) => setManager(e.target.value)}>
                <option value="">Select Manager</option>
                <option value="4">Kirik Matrohin</option>
                <option value="5">BK Sharma</option>
                <option value="6">KK Deewan</option>
              </Select>
            </div>
            <div className='role-select'>
              <div className='role'>
                Lead
              </div>
              <Select value={leads} onChange={(e) => setLeads(e.target.value)}>
                <option value="">Select Lead</option>
                <option value="7">Eugene Humell</option>
                <option value="8">Rekha</option>
                <option value="9">Jaya</option>
              </Select>
            </div>
          </div>
        </RoleDropdown>

        <CalendarContainer>
          <div>
            <CalendarLabel>Onboarding Date</CalendarLabel>
            <div className='role-select-1'>
              <div className='role'>
                Starts on
              </div>
              <DatePicker
                type="date"
                value={onboardingDate}
                onChange={(e) => setOnboardingDate(e.target.value)}
              />
            </div>
          </div>
          <OnboardingContainer>
          <ToggleButton
            active={isOnboardingRequired}
            onClick={() => setIsOnboardingRequired(!isOnboardingRequired)}
          >
          </ToggleButton>
          <OnboardingLabel>Onboarding required</OnboardingLabel>


        </OnboardingContainer>

        <div className='status'>
<div className='current-s'>Current Status</div>
<div>
  <div className='board'>
    <div className='onboard'>Onboarding</div>
    <div className='level'>
      <div className='level-1'>
        <div className='level-2'></div>
      </div>
      <div>35%</div>
    </div>
  </div>
  <div className='ans'> View Answers</div>
</div>
        </div>

      <div>
      <div className='current-s'>Onboarding Scripts</div>

<div className='all-toggles'>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isOfficeTourRequired}
  onClick={() => setIsOfficeTourRequired(!isOfficeTourRequired)}
>
</ToggleButton>
<OnboardingLabel>Office Tour</OnboardingLabel>
</div>
<div>
  100%
</div>
</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isManagementIntroductoryRequired}
  onClick={() => setIsManagementIntroductoryRequired(!isManagementIntroductoryRequired)}
>
</ToggleButton>
<OnboardingLabel>Management Introductory</OnboardingLabel>
</div>

</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isWorkToolsRequired}
  onClick={() => setIsWorkToolsRequired(!isWorkToolsRequired)}
>
</ToggleButton>
<OnboardingLabel>Work Tools</OnboardingLabel>
</div>
<div>
  20%
</div>
</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isMeetYourColleaguesRequired}
  onClick={() => setIsMeetYourColleaguesRequired(!isMeetYourColleaguesRequired)}
>
</ToggleButton>
<OnboardingLabel>Meet Your Colleagues</OnboardingLabel>
</div>
<div>
  0%
</div>
</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isDutiesJournalRequired}
  onClick={() => setIsDutiesJournalRequired(!isDutiesJournalRequired)}
>
</ToggleButton>
<OnboardingLabel>Duties Journal</OnboardingLabel>
</div>
<div>
  0%
</div>
</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isRequestsHandlingRequired}
  onClick={() => setIsRequestsHandlingRequired(!isRequestsHandlingRequired)}
>
</ToggleButton>
<OnboardingLabel>Requests Handling</OnboardingLabel>
</div>
<div>
  0%
</div>
</div>

</OnboardingContainer>
<OnboardingContainer>

<div className='toggling'>
<div className='toggle-buttons'>
<ToggleButton
  active={isActivityTrackingRequired}
  onClick={() => setIsActivityTrackingRequired(!isActivityTrackingRequired)}
>
</ToggleButton>
<OnboardingLabel>Activity Tracking</OnboardingLabel>
</div>
<div>
  100%
</div>
</div>

</OnboardingContainer>
</div>
      </div>
        </CalendarContainer>

       
      </ProfileContent>


      <div className='s-c'>
        <div className='save-c' onClick={handleSaveProfile}>Save Changes</div>
        <div className='cancel' onClick={handleCancelProfile}>Cancel</div>
      </div>
      
    </ProfileContainer>
  );
};

export default Profile;
