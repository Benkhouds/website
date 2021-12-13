import styled from 'styled-components';
import { Link } from 'react-router-dom';
function header() {
   return (
      <HeaderLayout>
         <Link to="/register">Register</Link>
         <Link to="/login">Login</Link>
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
