import Theme from './Theme';
import GlobalStyle from './Global/GlobalStyled';
import HeaderSection from './components/HeaderSection/HeaderSection';
import About from './components/About/About';
import Calculate from './components/Calculator/Calculate';
import PayMethods from './components/PayMethods/PayMethods';
import GetStarted from './components/GetStarted/GetStarted';
import WhyBlock from './components/WhyBlock/WhyBlock';
import ReferralProgram from './components/ReferralProgram/ReferralProgram';
import News from './components/News/News';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      <HeaderSection />
      <About />
      <Calculate />
      <PayMethods />
      <GetStarted />
      <WhyBlock />
      <ReferralProgram />
      <News />
      <Footer />
    </Theme>
  );
}

export default App;
