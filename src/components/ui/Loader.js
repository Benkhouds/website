import styled from 'styled-components';

function Loader() {
   return (
      <LoadWrapper>
         <AnimatedLoader />
      </LoadWrapper>
   );
}

export default Loader;

const LoadWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${(props) => props.theme.colors.primary};
`;
const AnimatedLoader = styled.div`
   display: block;
   width: 80px;
   height: 80px;
   &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid;
      border-color: #222 transparent #222 transparent;
      animation: load 1s linear infinite;
   }
   @keyframes load {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;
