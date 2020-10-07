import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  padding-top: 50px;
  background: #008891;

  footer {
    height: 50px;
    display: flex;
    background: #00587a;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      margin-bottom: 0;
      opacity: 0.99;
    }
  }
`;
const Icons = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  p {
    color: white;
    opacity: 0.7;
  }
`;

const Kep = styled.img`
  height: 120px;
  width: 120px;
  padding-bottom: 20px;
`;

const Resources = () => (
  <MainContainer>
    <a name="resources"></a>
    <Icons>
      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        <Kep src="https://www.pngkey.com/png/full/139-1391666_un-logo-white-united-nations-logo-white.png" />
        <p>World Health Organization</p>
      </a>

      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        <Kep src="https://www.ecdc.europa.eu/profiles/custom/ecdc/themes/anthrax/images/logo-ecdc.png" />
        <p>European Centre for Disease Prevention and Control</p>
      </a>

      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        <Kep src="https://www.un-igrac.org/sites/default/files/styles/900x506/public/Square-Dutch-Gov_0.png?itok=XOcYeUSZ" />
        <p>Government of Netherlands</p>
      </a>
    </Icons>

    <footer>
      <p>Designed and coded with ❤︎ by Enikő.</p>
    </footer>
  </MainContainer>
);

export default Resources;
