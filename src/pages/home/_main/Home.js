import React from 'react';
import PropTypes from 'prop-types';
// 
import './HomeCommon.scss';
// 
import HomeHead from '../head/_main/HomeHead';
import HomeNew from '../new/_main/HomeNew';
import HomeEntertainment from '../entertainment/_main/HomeEntertainment';
import HomeLife from '../life/_main/HomeLife';
import HomePolitics from '../politics/_main/HomePolitics';
import HomeTech from '../tech/_main/HomeTech';
// 
import './Home.scss';
import './HomeRes.scss';
import HomeLatestArticle from '../latest_article/_main/HomeLatestArticle';

// 
Home.propTypes = {
    
};

// 
function Home(props) {
    
    // 
    return (
        <div className="Home">
            <div className="Home_head">
                <HomeHead />
            </div>

            <div className="Home_body App-width">
                <div className="Home_body-contain">
                    <div className="Home_body-part">
                        <HomeNew />
                    </div><hr />

                    <div className="Home_body-part">
                        <HomeEntertainment />
                    </div><hr />

                    <div className="Home_body-part">
                        <HomeLife />
                    </div><hr />

                    <div className="Home_body-part">
                        <HomePolitics />
                    </div><hr />

                    <div className="Home_body-part">
                        <HomeTech />
                    </div>

                    <div className="Home_body-part">
                        <HomeLatestArticle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;