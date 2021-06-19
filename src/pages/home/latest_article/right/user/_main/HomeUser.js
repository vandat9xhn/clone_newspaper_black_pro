import React from 'react';
import PropTypes from 'prop-types';
// 
import HomeUserInfo from '../info/HomeUserInfo';
import HomeUserPic from '../pic/_main/HomeUserPic';

// 
HomeUser.propTypes = {
    
};

// 
function HomeUser(props) {
     
    // 
    return (
        <div>
            <div>
                <div className="home_item-right">
                    <HomeUserInfo />
                </div>

                <div>
                    <HomeUserPic />
                </div>
            </div>
        </div>
    );
}

export default HomeUser;