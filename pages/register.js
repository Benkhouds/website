import {
   MainLayout,
   FormLayout,
   FormInput,
   FormButton,
   Loader,
} from '../components';
import { Formik, Form } from 'formik';
import AuthService from '../services/auth';
import { registerValidation } from '../validations';
import useAuth from '../hooks/useAuth';
import Router from 'next/router';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { toastOptions, initialOptions } from '../helpers/toast.js';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
   const { user, setUser, isLoading } = useAuth();

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
         //simulating network latency
         setTimeout(() => {
            setUser(data.user);
            setSubmitting(false);
            Router.push('/');
         }, 500);
      } catch (err) {
         toast.update(
            requestStatus,
            toastOptions(
               err.response?.data?.error || 'Error has occurred',
               'error',
               false
            )
         );
         setStatus({ error: true });
         setSubmitting(false);
      }
   };

   if (isLoading) {
      return <Loader />;
   } else if (user) {
      Router.push('/');
      return <Loader />;
   } else {
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
                        <Form>
                           <InputContainer>
                              <FormInput
                                 status={status}
                                 error={errors.firstName}
                                 placeholder="First Name*"
                                 name="firstName"
                                 type="text"
                              />
                              <span></span>
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
                        </Form>
                     </div>
                  )}
               </Formik>
            </FormLayout>
         </MainLayout>
      );
   }
}

export default Register;

const InputContainer = styled.div`
   display: flex;
   span {
      width: 1rem;
   }
   width: 100%;
`;
