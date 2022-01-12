import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import SearchInput from './SearchInput';
import NavButtonGroup from './NavButtonGroup';

function GNB(props) {
  return (
    <NavBar>
      <VisuallyHidden>네비게이션 바</VisuallyHidden>
      <Container>
        <div>
          <Logo fontSize="30px" />
        </div>
        <UserController>
          <SearchInput />
          <NavButtonGroup />
        </UserController>
      </Container>
    </NavBar>
  );
}

const VisuallyHidden = styled.h2`
  ${({ theme }) => theme.visuallyHidden};
`;

const UserController = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')};
  width: 60%;

  ${({ theme }) => theme.device.tablet} {
    width: 33%;
  }
`;

const NavBar = styled.nav`
  position: fixed;
  ${({ theme }) => theme.flexBox('row', 'center', 'center')}
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.white};
  z-index: ${({ theme }) => theme.gnbLevel};
`;

const Container = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')}
  width: 1260px;
  padding: 10px 60px;
`;

export default GNB;

export const IconGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')};
  margin-right: 20px;
`;
