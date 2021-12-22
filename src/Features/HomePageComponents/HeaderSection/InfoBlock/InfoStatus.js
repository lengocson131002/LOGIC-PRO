import React from 'react';
import InfoStatusStyled from './InfoStatus.styled';
import InfoCard from './InfoCard.styled';
import Images from '../../../../Constants/images';

const InfoStatus = () => {
    return (
        <InfoStatusStyled>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_1} alt="" />
                </div>
                <div>
                    <h4>FEB 16, 2019</h4>
                    <span>START DATE</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_2} alt="" />
                </div>
                <div>
                    <h4>1023</h4>
                    <span>DAYS ONLINE</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_3} alt="" />
                </div>
                <div>
                    <h4>787955</h4>
                    <span>REGISTERED MEMBERS</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_4} alt="" />
                </div>
                <div>
                    <h4>$ {(137451935).toLocaleString()}</h4>
                    <span>TOTAL DEPOSITS</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_5} alt="" />
                </div>
                <div>
                    <h4>$ {(65954571).toLocaleString()}</h4>
                    <span>TOTAL WITHDRAW</span>
                </div>
            </InfoCard>
            <InfoCard>
                <div className="status-icon">
                    <img src={Images.statuses.STAT_6} alt="" />
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
