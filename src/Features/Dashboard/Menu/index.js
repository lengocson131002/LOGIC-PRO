import Logo from "./Logo";
import styled from 'styled-components';
import MenuItem from "./MenuItem";
import Images from "../../../Constants/images";

const MenuStyled = styled.div`
    padding: 6rem 2rem 0 2rem ;
    min-width: 24rem;

    @media (max-width: 1200px) {
        min-width: 20rem;
    }


    @media (max-width: 1024px) {
        display: none;
    }
`;
const Menu = () => {
    return (
        <MenuStyled>
            <Logo className="logo" />
            <div>
                <MenuItem
                    to="account"
                    icon={Images.menuItems.ACCOUNT}
                    name="DASHBOARD"
                />
                <MenuItem
                    to="deposit"
                    icon={Images.menuItems.DEPOSIT}
                    name="MAKE DEPOSIT"
                />
                <MenuItem
                    to="withdraw"
                    icon={Images.menuItems.WITHDRAW}
                    name="WITHDRAW"
                />
                <MenuItem
                    to="referrals"
                    icon={Images.menuItems.SKILL}
                    name="REFERRALS"
                />
                <MenuItem
                    to="deposit_list"
                    icon={Images.menuItems.LIST}
                    name="DEPOSIT LIST"
                />
                <MenuItem
                    to="history"
                    icon={Images.menuItems.CALENDER}
                    name="HISTORY"
                />
                <MenuItem
                    to="referral-links"
                    icon={Images.menuItems.LINK}
                    name="REFERRAL LINKS"
                />
                <MenuItem
                    to="security"
                    icon={Images.menuItems.LOCK}
                    name="SECURITY"
                />
                <MenuItem
                    to="edit_account"
                    icon={Images.menuItems.SETTING}
                    name="EDIT PROFILE"
                />
                <MenuItem
                    to="logout"
                    icon={Images.menuItems.LOGOUT}
                    name="LOG OUT"
                />
            </div>

        </MenuStyled>
    )
}

export default Menu;
