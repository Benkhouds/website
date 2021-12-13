import { MainLayout, FormLayout, FormInput, FormButton } from '../components';
import { Formik, Form } from 'formik';
import AuthService from '../services/auth';
import { registerValidation } from '../validations';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { toastOptions, initialOptions } from '../helpers/toast.js';

function Register() {
   const navigate = useNavigate();
   const { user, setUser } = useAuth();
   console.log(user);

   const registerHandler = async (values, setSubmitting, setStatus) => {
      setSubmitting(true);
      const requestStatus = toast.loading('Please wait..', initialOptions);
      console.log(values);
      try {
         const { data } = await AuthService.register(
            values.firstName,
            values.lastName,
            values.email,
            values.password
         );
         toast.update(
            requestStatus,
            toastOptions('All is good', 'success', false)
         );
         setSubmitting(false);
         setUser(() => data.user);
         navigate('/');
      } catch (err) {
         toast.update(
            requestStatus,
            toastOptions(
               err.response?.data?.error || 'Error has occured',
               'error',
               false
            )
         );
         setStatus({ error: true });
         setSubmitting(false);
      }
   };

   return (
      <MainLayout header={true}>
         <FormLayout page="register">
            <Formik
               initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
               }}
               validationSchema={registerValidation}
               onSubmit={(values, { setSubmitting, setStatus }) =>
                  registerHandler(values, setSubmitting, setStatus)
               }
            >
               {({ isSubmitting, isValid, status, errors }) => (
                  <div>
                     <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                     />
                     <Form>
                        <InputContainer>
                           <FormInput
                              status={status}
                              error={errors.firstName}
                              placeholder="First Name*"
                              name="firstName"
                              type="text"
                           />
                           <FormInput
                              status={status}
                              error={errors.lastName}
                              placeholder="Last Name*"
                              name="lastName"
                              type="text"
                           />
                        </InputContainer>
                        <FormInput
                           status={status}
                           error={errors.email}
                           placeholder="Email*"
                           name="email"
                           type="email"
                        />
                        <FormInput
                           status={status}
                           error={errors.password}
                           placeholder="Password*"
                           name="password"
                           type="password"
                        />
                        <FormInput
                           status={status}
                           error={errors.confirmPassword}
                           placeholder="Confirm Password*"
                           name="confirmPassword"
                           type="password"
                        />

                        <FormButton disabled={!isValid || isSubmitting} />
                     </Form>
                  </div>
               )}
            </Formik>
         </FormLayout>
      </MainLayout>
   );
}

export default Register;

const InputContainer = styled.div`
   display: flex;
   input:nth-child(1) {
      margin-right: 1rem;
   }
`;
