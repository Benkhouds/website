import { MainLayout, FormLayout, FormInput, FormButton } from '../components';
import { Formik, Form } from 'formik';
import AuthService from '../services/auth';
import { loginValidation } from '../validations';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions, initialOptions } from '../helpers/toast.js';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
   const navigate = useNavigate();

   const { user, setUser } = useAuth();

   console.log(user);

   const loginHandler = async (values, setSubmitting, setStatus) => {
      setSubmitting(true);
      const requestStatus = toast.loading('Please wait..', initialOptions);

      try {
         const { data } = await AuthService.login(
            values.email,
            values.password
         );
         toast.update(
            requestStatus,
            toastOptions('All is good', 'success', false)
         );
         setTimeout(() => {
            setUser(data.user);
            setSubmitting(false);
            navigate('/');
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

   return (
      <MainLayout header={true}>
         <FormLayout page="login">
            <Formik
               initialValues={{
                  email: '',
                  password: '',
               }}
               validationSchema={loginValidation}
               onSubmit={(values, { setSubmitting, setStatus }) =>
                  loginHandler(values, setSubmitting, setStatus)
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
