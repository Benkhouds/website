import CheckIcon from '../ui/CheckIcon';
import styled from 'styled-components';
import { BiUserPlus, BiLogIn } from 'react-icons/bi';
import Link from 'next/link';
function FormLayout({ children, page }) {
   return (
      <Layout>
         <Header>
            <InnerContainer>
               <Link href="/register">
                  <a>
                     <BiUserPlus />
                     <h3>Register</h3>
                     <p>Browse and and find what you need</p>
                  </a>
               </Link>
            </InnerContainer>
            <InnerContainer>
               <Link href="/login">
                  <a>
                     <BiLogIn />
                     <h3>Sign in</h3>
                     <p>Already have an account, then welcome back</p>
                  </a>
               </Link>
            </InnerContainer>
            <CheckIcon leftPosition={page === 'register' ? '5%' : '90%'} />
         </Header>

         {/* form will be passed in children prop */}
         {children}
      </Layout>
   );
}

export default FormLayout;

const Layout = styled.div`
   width: 35%;
   padding: 2rem 0;
`;

const Header = styled.div`
   display: flex;
   border: 1px solid ${(props) => props.theme.colors.gray};
   border-radius: 8px;
   position: relative;
   margin-bottom: 1rem;
   div:nth-child(1) {
      border-radius: 10px 0 0 10px;
   }
   div:nth-child(2) {
      border-radius: 0 10px 10px 0;
   }
`;

const InnerContainer = styled.div`
   background: white;
   width: 50%;
   padding: 2rem 1.5rem;
   &:nth-child(1) {
      border-right: 1px solid ${(props) => props.theme.colors.gray};
   }
   svg {
      font-size: 3rem;
   }
   h3 {
      line-height: 0;
      font-size: 1rem;
      font-weight: bold;
   }
   p {
      font-size: 0.7rem;
      color: ${(props) => props.theme.colors.gray};
      letter-spacing: 0.1px;
   }
`;
