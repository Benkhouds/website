import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { RequireAuth, Guest } from './routes';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <RequireAuth>
                     <Home />
                  </RequireAuth>
               }
            />
            <Route
               path="/login"
               element={
                  <Guest>
                     <Login />
                  </Guest>
               }
            />
            <Route
               path="/register"
               element={
                  <Guest>
                     <Register />
                  </Guest>
               }
            />
            <Route />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
