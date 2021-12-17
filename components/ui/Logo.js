import styled from 'styled-components';

const borders = {
   sm: {
      width: '40px',
      first: '3px 0 0 0',
      second: '3px 0 2px 0',
      third: '0 0 3px 0',
      fourth: '2px 0 3px 0',
   },
   md: {
      width: '60px',
      first: '5px 0 0 0',
      second: '5px 0 3px 0',
      third: '0 0 5px 0',
      fourth: '3px 0 5px 0',
   },
   lg: {
      width: '90px',
      first: '5px 0 0 0',
      second: '5px 0 3px 0',
      third: '0 0 5px 0',
      fourth: '3px 0 5px 0',
   },
};

function Logo({ size, padding }) {
   return (
      <LogoContainer padding={padding ? padding : '1rem'}>
         <LogoLayout width={borders[size]['width']}>
            <Rectangle border={borders[size]['first']}></Rectangle>
            <Rectangle border={borders[size]['second']}></Rectangle>
            <Rectangle border={borders[size]['third']}></Rectangle>
            <Rectangle border={borders[size]['fourth']}></Rectangle>
         </LogoLayout>
      </LogoContainer>
   );
}
export default Logo;

const LogoContainer = styled.div`
   margin: 0 auto;
   width: fit-content;
   height: fit-content;
   padding: ${(props) => props.padding};
   background: ${(props) => props.theme.colors.dark};
   display: flex;
   align-items: center;
   justify-content: center;
`;

const LogoLayout = styled.div`
   aspect-ratio: 10/13;
   width: ${(props) => props.width};
   position: relative;
   transform: rotate(-45deg);
   span {
      position: absolute;
   }
   span:nth-child(2n + 1) {
      width: 80%;
      height: 20%;
   }
   span:nth-child(2n) {
      width: 26%;
      height: 55%;
   }
   span:nth-child(1) {
      background: #f2994a;
      top: 5px;
      right: 0;
   }
   span:nth-child(2) {
      background: #f2994a;
      top: 5px;
      left: 20%;
   }
   span:nth-child(3) {
      left: 0;
      bottom: 5px;
      background: #2d9cdb;
   }
   span:nth-child(4) {
      bottom: 5px;
      right: 10%;
      background: #2d9cdb;
   }
`;

const Rectangle = styled.span`
   border-radius: ${(props) => props.border};
`;
