import Theme from './Theme';
import GlobalStyle from './Components/GlobalStyles';
import DashboardPage from './Features/Dashboard';
import HomePage from './Features/Home';
import AuthenticationPage from './Features/Authentication';
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </Theme>
  );
}

export default App;
