import HeaderSection from '../components/HomePageComponents/HeaderSection/HeaderSection';
import About from '../components/HomePageComponents/About/About';
import Calculate from '../components/HomePageComponents/Calculator/Calculate';
import PayMethods from '../components/HomePageComponents/PayMethods/PayMethods';
import GetStarted from '../components/HomePageComponents/GetStarted/GetStarted';
import WhyBlock from '../components/HomePageComponents/WhyBlock/WhyBlock';
import ReferralProgram from '../components/HomePageComponents/ReferralProgram/ReferralProgram';
import News from '../components/HomePageComponents/News/News';
import Footer from '../components/HomePageComponents/Footer/Footer';
import MobileNavigation from '../components/HomePageComponents/MobileNavigation/MobileNavigation';
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

export default HomePage
