import Logo from "./Logo";
import styled from 'styled-components';
import MenuItem from "./MenuItem";
import account from '../../../asset/svg/account.svg';
import deposit from '../../../asset/svg/deposit.svg';
import link from '../../../asset/svg/link.svg';
import list from '../../../asset/svg/list.svg';
import logout from '../../../asset/svg/logout.svg';
import setting from '../../../asset/svg/setting.svg';
import withdraw from '../../../asset/svg/withdraw.svg';
import lock from '../../../asset/svg/lock.svg';
import calendar from '../../../asset/svg/calendar.svg';
import skill from '../../../asset/svg/skill.svg';

const MenuStyled = styled.div`
    padding: 6rem 2rem 0 2rem ;
    min-width: 24rem;

    & .logo {
        margin-bottom: 5rem;
    }
`;
const Menu = () => {
    return (
        <MenuStyled>
            <Logo className="logo" />
            <div>
                <MenuItem
                    to="account"
                    icon={account}
                    name="DASHBOARD"
                />
                <MenuItem
                    to="deposit"
                    icon={deposit}
                    name="MAKE DEPOSIT"
                />
                <MenuItem
                    to="withdraw"
                    icon={withdraw}
                    name="WITHDRAW"
                />
                <MenuItem
                    to="referrals"
                    icon={skill}
                    name="REFERRALS"
                />
                <MenuItem
                    to="deposit-list"
                    icon={list}
                    name="DEPOSIT LIST"
                />
                <MenuItem
                    to="history"
                    icon={calendar}
                    name="HISTORY"
                />
                <MenuItem
                    to="referral-links"
                    icon={link}
                    name="REFERRAL LINKS"
                />
                <MenuItem
                    to="security"
                    icon={lock}
                    name="SECURITY"
                />
                <MenuItem
                    to="profile"
                    icon={setting}
                    name="EDIT PROFILE"
                />
                <MenuItem
                    to="logout"
                    icon={logout}
                    name="LOG OUT"
                />
            </div>

        </MenuStyled>
    )
}

export default Menu;
