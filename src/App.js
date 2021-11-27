import Theme from './Theme';
import GlobalStyle from './Global/GlobalStyled';
import HeaderSection from './components/HeaderSection/HeaderSection';
import About from './components/About/About';
import Calculate from './components/Calculator/Calculate';
import PayMethods from './components/PayMethods/PayMethods';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      <HeaderSection />
      <About />
      <Calculate />
      <PayMethods />
    </Theme>
  );
}

export default App;
