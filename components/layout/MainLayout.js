import styled from 'styled-components';
import Header from '../partials/Header';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function MainLayout({ header, children }) {
   return (
      <MainContainer>
         <SubContainer>
            {header ? <Header /> : ''}
            <Navbar />
            <ContentContainer>{children}</ContentContainer>
         </SubContainer>
         <Footer />
      </MainContainer>
   );
}

export default MainLayout;

const MainContainer = styled.div`
   height: fit-content;
   overflow-x: hidden;
`;
const SubContainer = styled.div`
   height: 100vh;
   min-height: 100vh;
   background: ${(props) => props.theme.colors.primary};
`;

const ContentContainer = styled.div`
   padding: 1rem;
   width: 100%;
   min-height: 85%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
