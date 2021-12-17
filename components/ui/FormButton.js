import styled from 'styled-components';

function FormButton({ disabled }) {
   return (
      <Button type="submit" disabled={disabled}>
         Submit
      </Button>
   );
}

export default FormButton;

const Button = styled.button`
   border-radius: 10px;
   padding: 0.8rem 3rem;
   display: block;
   margin: 2rem auto 0;
   background: black;
   color: white;
   cursor: pointer;
   &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
   }
`;
