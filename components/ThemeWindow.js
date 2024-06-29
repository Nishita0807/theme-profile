import { useState } from 'react';
import { FaPlus, FaCheck, FaLocationArrow } from 'react-icons/fa';
import styled from 'styled-components';

const ThemeContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ bgColor }) => bgColor};
  transition: background-color 0.3s;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ColorBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const ColorTemplate = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ColorPalette = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  position: relative;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TickIcon = styled(FaCheck)`
  color: black;
  font-size: 12px;
`;

const LandscapeContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px dashed black;
  box-shadow: 12px 4px 8px ${({ lgradientColor }) => lgradientColor};
  border-radius: 10px;
  margin: 12px;
`;

const LandscapeImage = styled.img`
  overflow-x: hidden;
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin: 0px;
  border-radius: 10px;
  margin-top: 8px;
  margin-left: 8px;
`;

const PersonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const ThemeWindow = () => {
  const [bgColor, setBgColor] = useState('#fff');
  const [lgradientColor, setLgradientColor] = useState('grey');
  const colors = ['black', '#d9d9d9', '#fff', '#c9e7b9', '#f3df98', '#8abcf7', '#eb9385', '#f9b4ee', '#9489f2', '#fef1ba'];
  const gradientc = ['#b3c2ab', '#a5a0c9', '#84dc67', '#74c5bb', '#9facbe', '#9eb4da', '#d8ab9e', '#d7b683', '#7fd6c6', '#de8ad6', '#a6859d', '#8680da', '#9d7ce6', '#dcd190'];
  const radialc = ['#8bb5c8', '#baa6d2', '#80e16c', '#80d3af', '#a9abbb', '#9fcfdf', '#deba9e', '#d8b782', '#82d2bc', '#de86d6', '#c886b5', '#917edc', '#a275e9', '#dece9a'];
  const forec = ['black', '#fff'];

  return (
    <ThemeContainer bgColor={bgColor}>
      <Header>
        <div className="theme-header">Themes</div>
        <div className="theme-person">
          <div>Kushagra Singh</div>
          <div className="t-toggle"></div>
        </div>
      </Header>
      <div className="profile">
        <div className="profile-content">Apply a skin to your profile</div>
        <div className="buttons">
          <div className="add">
            <div><FaPlus /></div>
            <div>Custom</div>
          </div>
          <div className="save">Save</div>
        </div>
      </div>
      <div className="boxes">
        <div className="palette">
          <div>
            <div className="color-palette">Solids</div>
            <div>
              <ColorBox>
                <ColorTemplate>
                  {colors.map((color) => (
                    <ColorPalette key={color} color={color} onClick={() => setBgColor(color)}>
                      {bgColor === color && <TickIcon />}
                    </ColorPalette>
                  ))}
                </ColorTemplate>
              </ColorBox>
            </div>
          </div>
          <div>
            <div className="color-palette gradient">Linear Gradients</div>
            <div>
              <ColorBox>
                <ColorTemplate>
                  {gradientc.map((color) => (
                    <ColorPalette key={color} color={color} onClick={() => setLgradientColor(color)}>
                      {lgradientColor === color && <TickIcon />}
                    </ColorPalette>
                  ))}
                </ColorTemplate>
              </ColorBox>
            </div>
          </div>
          <div>
            <div className="color-palette gradient">Radial Gradients</div>
            <div>
              <ColorBox>
                <ColorTemplate>
                  {radialc.map((color) => (
                    <ColorPalette key={color} color={color} onClick={() => setBgColor(color)}>
                      {bgColor === color && <TickIcon />}
                    </ColorPalette>
                  ))}
                </ColorTemplate>
              </ColorBox>
            </div>
          </div>
          <div>
            <div className="color-palette gradient">Foreground Color</div>
            <div>
              <ColorBox>
                <ColorTemplate>
                  {forec.map((color) => (
                    <ColorPalette key={color} color={color} onClick={() => setBgColor(color)}>
                      {bgColor === color && <TickIcon />}
                    </ColorPalette>
                  ))}
                </ColorTemplate>
              </ColorBox>
            </div>
          </div>
        </div>
        <div className="all-box">
          <div className="inner">
            <LandscapeContainer lgradientColor={lgradientColor}>
              <LandscapeImage src="/images/landscape.jpg" alt="Landscape" />
            </LandscapeContainer>
            <div className="image">
              <PersonImage src="/images/person.jpeg" alt="Person" />
            </div>
            <div className="profile-contents">
              <h2>Mason Parker</h2>
              <h5 className="heading">Graphics & UI/UX Designer</h5>
              <h5 className="heading"><FaLocationArrow /> Denver, United States</h5>
              <div className="content-box">
                I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic
                flair with technical expertise. With a degree in Graphic Design, I
                consistently deliver visually stunning and user-centric solutions, leaving an
                indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting
                pixel-perfect UIs and captivating graphics that elevate user experiences.
              </div>
              <div className="bio">Biography</div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContainer>
  );
};

export default ThemeWindow;
