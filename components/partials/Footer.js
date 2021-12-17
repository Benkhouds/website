import styled from 'styled-components';
import Logo from '../ui/Logo';

function Footer() {
   return (
      <FooterLayout>
         <Logo size="md" />
         <p>
            <span>&copy;</span> All Rights Reserved.
         </p>
      </FooterLayout>
   );
}

export default Footer;

const FooterLayout = styled.footer`
   background: ${(props) => props.theme.colors.dark};
   padding: 1.5rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: white;
`;
