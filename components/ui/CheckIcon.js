import styled from 'styled-components';

function CheckIcon({ leftPosition }) {
   return (
      <IconContainer leftPosition={leftPosition}>
         <span></span>
         <span></span>
      </IconContainer>
   );
}

export default CheckIcon;

const IconContainer = styled.div`
   position: absolute;
   left: ${(props) => props.leftPosition};
   top: 0;
   transform: translateY(-50%);
   border: solid 3px white;
   z-index: 10;
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   background-color: ${(props) => props.theme.colors.brown};
   span {
      position: absolute;
      left: 50%;
      top: 63%;
      height: 2px;
      background-color: white;
   }
   span:nth-child(1) {
      width: 1rem;
      transform-origin: bottom left;
      transform: rotate(-50deg);
   }
   span:nth-child(2) {
      width: 0.6rem;
      transform-origin: bottom left;
      transform: rotate(-140deg);
   }
`;
