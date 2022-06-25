import HeaderSection from './Components/HeaderSection';
import About from './Components/About';
import Calculate from './Components/Calculator';
import PayMethods from './Components/PayMethods';
import GetStarted from './Components/GetStarted';
import WhyBlock from './Components/WhyBlock';
import ReferralProgram from './Components/ReferralProgram';
import News from './Components/News';
import Footer from './Components/Footer';
import MobileNavigation from '../../Components/MobileNavigation';

const HomePage = () => {
    return (
        <>
            <MobileNavigation
                breakpoint="768px"
            />
            <HeaderSection />
            <About />
            <Calculate />
            <PayMethods />
            <GetStarted />
            <WhyBlock />
            <ReferralProgram />
            <News />
            <Footer />
        </>
    )
}

export default HomePage;
