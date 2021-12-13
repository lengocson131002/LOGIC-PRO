import Theme from './Theme';
import GlobalStyle from './Global/GlobalStyled';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import {
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </Theme>
  );
}

export default App;
