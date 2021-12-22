import React, { useEffect } from 'react';
import GetStartedStyled from './GetStarted.styled';
import Container from '../../../Components/Container';
import { AiOutlineForm } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetStarted = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section>
            <Container>
                <GetStartedStyled>
                    <p>GET STARTED</p>
                    <div data-aos="fade-up">
                        <div className="step-block">
                            <div className="step-content">
                                <div className="step-header">
                                    <AiOutlineForm className="step-icon" />
                                    <span>1</span>
                                </div>
                                <div className="step-body">
                                    <span>REGISTER</span>
                                    <p>Enter your login and password. Fill in your registration information. Read the Rules and click "Register".</p>
                                </div>
                            </div>
                        </div>
                        <div className="step-block">
                            <div className="step-content">
                                <div className="step-header">
                                    <AiOutlineFileSearch className="step-icon" />
                                    <span>2</span>
                                </div>
                                <div className="step-body">
                                    <span>DEPOSIT</span>
                                    <p>Choose the investment plan, select any payment system and make a deposit in your personal account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="step-block">
                            <div className="step-content">
                                <div className="step-header">
                                    <AiOutlineLineChart className="step-icon" />
                                    <span>3</span>
                                </div>
                                <div className="step-body">
                                    <span>PROFIT</span>
                                    <p>You can monitor your profit from your account. You can also manage your profits and make new deposits.</p>
                                </div>
                            </div>
                        </div>
                        <div className="step-block">
                            <div className="step-content">
                                <div className="step-header">
                                    < FaRegMoneyBillAlt className="step-icon" />
                                    <span>4</span>
                                </div>
                                <div className="step-body">
                                    <span>WITHDRAW</span>
                                    <p>Do not forget to specify the details of an e-wallet in the settings of personal account to which you want to transfer money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </GetStartedStyled>
            </Container>
        </section>
    )
}

export default GetStarted;
