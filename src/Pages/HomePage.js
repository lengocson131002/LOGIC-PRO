import HeaderSection from '../Features/HomePageComponents/HeaderSection';
import About from '../Features/HomePageComponents/About';
import Calculate from '../Features/HomePageComponents/Calculator';
import PayMethods from '../Features/HomePageComponents/PayMethods';
import GetStarted from '../Features/HomePageComponents/GetStarted';
import WhyBlock from '../Features/HomePageComponents/WhyBlock';
import ReferralProgram from '../Features/HomePageComponents/ReferralProgram';
import News from '../Features/HomePageComponents/News';
import Footer from '../Features/HomePageComponents/Footer';
import MobileNavigation from '../Components/MobileNavigation';

const HomePage = () => {
    return (
        <>
            <MobileNavigation />
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
