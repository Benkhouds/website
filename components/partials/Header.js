import styled from 'styled-components';
import Link from 'next/link';
function header() {
   return (
      <HeaderLayout>
         <Link href="/register">
            <a>Register</a>
         </Link>
         <Link href="/login">
            <a>Login</a>
         </Link>
      </HeaderLayout>
   );
}

export default header;

const HeaderLayout = styled.header`
   background: white;
   padding: 1rem;
   height: 2%;
   display: flex;
   align-items: center;
   font-size: 0.8rem;
   justify-content: flex-end;
   a {
      margin-right: 1rem;
      color: ${(props) => props.theme.colors.gray};
   }
`;
