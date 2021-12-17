import { useField, ErrorMessage } from 'formik';
import styled from 'styled-components';

function FormInput({ status, error, ...props }) {
   const [field, meta] = useField(props);
   return (
      <div
         style={{ position: 'relative', width: '100%', height: 'fit-content' }}
      >
         <Input
            error={
               (status && status.error) || (meta.touched && meta.error) || error
            }
            {...field}
            {...props}
            autoComplete="on"
         />
         <ErrorMessage component={ErrorBag} name={props.name} />
      </div>
   );
}

export default FormInput;

const Input = styled.input`
   padding: 1rem;
   border-radius: 5px;
   border: solid 1px ${(props) => (props.error ? 'red' : 'black')};
   display: block;
   width: 100%;
   margin-bottom: 1rem;
`;

const ErrorBag = styled.p`
   position: absolute;
   top: 0;
   font-size: 0.7rem;
   right: 1rem;
   color: red;
`;
