import Router from 'next/router';
import useAuth from '../hooks/useAuth';
import { Logo, MainLayout, Loader } from '../components';
import styled from 'styled-components';
export default function Home() {
   const { user, isLoading } = useAuth();

   if (isLoading) {
      return <Loader />;
   } else if (!user) {
      Router.push('/login');
      return <Loader />;
   } else {
      return (
         <MainLayout header={false}>
            <div>
               <Logo size="lg" padding=" 3rem 5rem" />
               <Title>The Logo Above is Made in Pure CSS</Title>
            </div>
         </MainLayout>
      );
   }
}

const Title = styled.h3`
   font-size: 2rem;
   font-weight: normal;
   margin-top: 3rem;
`;
