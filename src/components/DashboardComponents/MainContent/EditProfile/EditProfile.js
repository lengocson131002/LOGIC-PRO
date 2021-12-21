import styled from "styled-components";
import ContentHeader from "../ContentHeader";
import ProfileCard from "./ProfileCard";
import InputText from "../../../General/InputText";
import InputWithIcon from "../../../General/InputWithIcon";
import coin1 from '../../../../asset/payment-icon/1.png';
import coin2 from '../../../../asset/payment-icon/2.png';
import coin3 from '../../../../asset/payment-icon/3.png';
import coin4 from '../../../../asset/payment-icon/4.png';
import coin5 from '../../../../asset/payment-icon/5.png';
import coin6 from '../../../../asset/payment-icon/6.png';
import coin7 from '../../../../asset/payment-icon/7.png';
import coin8 from '../../../../asset/payment-icon/8.png';
import coin9 from '../../../../asset/payment-icon/9.png';
import coin10 from '../../../../asset/payment-icon/10.png';
import coin11 from '../../../../asset/payment-icon/11.png';
import coin12 from '../../../../asset/payment-icon/12.png';
import coin13 from '../../../../asset/payment-icon/13.png';
import coin14 from '../../../../asset/payment-icon/14.png';
import Button from "../../../../UI/Button";

const EditProfileStyled = styled.div`
    & .top {
        display: flex;
        gap: 4rem;
        margin-bottom: 4rem;

        @media (max-width: 1400px) {
            flex-direction: column;
        }
        @media (max-width: 1024px) {
            flex-direction: row;
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    & .change-password {
        display: flex;
        gap: 3rem;

        @media (max-width: 576px) {
            gap: 2rem;
            flex-direction: column;
        }
    }
    ${Button} {
        transform: translateY(-50%);
    }
`;
const EditProfile = () => {
    return (
        <EditProfileStyled>
            <ContentHeader>Edit profile</ContentHeader>
            <div className="top">
                <ProfileCard header="Personal Information">
                    <InputText
                        readonly
                        label="Username"
                        id="username"
                        value="USER NAME"
                    />
                    <InputText
                        label="Full name"
                        id="fullname"
                    />
                    <InputText
                        label="E-mail"
                        id="email"
                    />
                </ProfileCard>
                <ProfileCard header="Payment data">
                    <InputWithIcon
                        id="perfect-money"
                        label="PerfectMoney"
                        icon={coin1}
                    />
                    <InputWithIcon
                        id="bitcoin"
                        label="Bitcoin"
                        icon={coin2}
                    />
                    <InputWithIcon
                        id="litecoin"
                        label="Litecoin"
                        icon={coin3}
                    />
                    <InputWithIcon
                        id="dogecoin"
                        label="Dogecoin"
                        icon={coin4}
                    />
                    <InputWithIcon
                        id="ethereum"
                        label="Ethereum"
                        icon={coin5}
                    />
                    <InputWithIcon
                        id="bitcoin-cash"
                        label="Bitcoin Cash"
                        icon={coin6}
                    />
                    <InputWithIcon
                        id="dash"
                        label="Dash"
                        icon={coin7}
                    />
                    <InputWithIcon
                        id="ripple"
                        label="Ripple"
                        icon={coin8}
                    />
                    <InputWithIcon
                        id="tether-ERC20"
                        label="Tether ERC20"
                        icon={coin9}
                    />
                    <InputWithIcon
                        id="tether-TRC20"
                        label="Tether TRC20"
                        icon={coin10}
                    />
                    <InputWithIcon
                        id="tether-BEP20"
                        label="Tether BEP20"
                        icon={coin11}
                    />
                    <InputWithIcon
                        id="tron"
                        label="Tron"
                        icon={coin12}
                    />
                    <InputWithIcon
                        id="bnb"
                        label="BNB"
                        icon={coin13}
                    />
                    <InputWithIcon
                        id="stellar"
                        label="Stellar"
                        icon={coin14}
                    />
                </ProfileCard>

            </div>
            <ProfileCard header="Change password">
                <div className="change-password">
                    <InputWithIcon
                        type="password"
                        id="password"
                        label="Password"
                    />
                    <InputWithIcon
                        type="password"
                        id="confirm-password"
                        label="Confirm password"
                    />
                </div>
            </ProfileCard>
            <Button
                href="#"
                className="btn-cta"
                background="#f1c069"
                clickbackground="#ffb83d"
                center
            >SAVE SETTINGS  &rarr; </Button>
        </EditProfileStyled>
    )
}

export default EditProfile;
