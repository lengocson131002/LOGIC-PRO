import React from 'react';
import InfoStatusStyled from './InfoStatus.styled';
import InfoCard from './InfoCard.styled';
import stat_1 from '../../../asset/status-icon/stat_1.png';
import stat_2 from '../../../asset/status-icon/stat_2.png';
import stat_3 from '../../../asset/status-icon/stat_3.png';
import stat_4 from '../../../asset/status-icon/stat_4.png';
import stat_5 from '../../../asset/status-icon/stat_5.png';
import stat_6 from '../../../asset/status-icon/stat_6.png';

const InfoStatus = () => {
    return (
        <InfoStatusStyled>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_1} alt="" />
                </div>
                <div>
                    <h4>FEB 16, 2019</h4>
                    <span>START DATE</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_2} alt="" />
                </div>
                <div>
                    <h4>1023</h4>
                    <span>DAYS ONLINE</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_3} alt="" />
                </div>
                <div>
                    <h4>787955</h4>
                    <span>REGISTERED MEMBERS</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_4} alt="" />
                </div>
                <div>
                    <h4>$ {(137451935).toLocaleString()}</h4>
                    <span>TOTAL DEPOSITS</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_5} alt="" />
                </div>
                <div>
                    <h4>$ {(65954571).toLocaleString()}</h4>
                    <span>TOTAL WITHDRAW</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={stat_6} alt="" />
                </div>
                <div>
                    <h4>802</h4>
                    <span>VISITORS</span>
                </div>
            </InfoCard>

        </InfoStatusStyled>
    )
}

export default InfoStatus
