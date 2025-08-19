import React from 'react';
import {TOTAL_SCREENS} from '../utilities/commonUtils'
function PortfolioContainer(props) {
  const mapAllScreens = () => {
    return (
      TOTAL_SCREENS.map((screen) => (
        screen.Component ? (
          <screen.Component
            screenName={screen.screen_name}
            key={screen.screen_name}
            id={screen.screen_name}
          />
        ) : (
          <div key={screen.screen_name}></div>
        )
      ))
    );
  }

  return (
    <div className='portfolio-container'>
      {mapAllScreens()}
    </div>
  );
}

export default PortfolioContainer;