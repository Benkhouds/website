import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../ui/Logo';

function Navbar() {
   return (
      <NavbarLayout>
         <div className="links">
            <Logo size="sm" />
            <div>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Link href="/about">
                  <a>About us</a>
               </Link>
               <Link href="/contact">
                  <a>Contact us</a>
               </Link>
            </div>
         </div>
         <button>AR</button>
      </NavbarLayout>
   );
}

export default Navbar;

const NavbarLayout = styled.nav`
   height: 12%;
   background: ${(props) => props.theme.colors.dark};
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;
   padding: 0.5rem 2rem;
   .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div:nth-child(2) {
         display: flex;
         margin-left: 3rem;
         a {
            margin-right: 2rem;
            font-weight: 500;
         }
      }
   }
   button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: white;
      color: black;
      font-weight: bold;
   }
`;
