import styled from 'styled-components';

const BackButton = styled.div`
  width: 9rem;
  height: 3rem;
  background: rgba(20, 168, 0, 0.05);
  border-radius: 4px;
  font-size: 16px;
  color: #14a800;
  font-weight: 600;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 426px) {
    font-size: 12px;
    width: 8rem;
    height: 2.5rem;
  }
`;
// New input form

const LoginSection = styled.div`
  width: 50%;
  height: 100vh;
  background: #e5e5e5;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

const ImageSection = styled.div`
  width: 50%;
  height: 100vh;
  @media (max-width: 768px) {
    width: 0%;
    height: 0vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  }
`;

const FormWrapper = styled.div`
  display: block;
  margin-top: 70px;
  padding: 0 100px;
  @media (max-width: 1200px) {
    padding: 0 70px;
   
  }
  @media (max-width: 768px) {
    padding: 0 30px;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Header = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: #21334f;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 20px;
  }
`;

const NavLabel = styled.div`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 33px;
  color: #21334f;
  margin-left: 10px;
  margin-top: 19px;
`;

export {
  LoginSection,
  ImageSection,
  Wrapper,
  LogoWrapper,
  FormWrapper,
  Header,
  NavLabel,
  BackButton,
};
