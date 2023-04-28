//  import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
//  import { arrowUp } from 'ionicons/icons';
// import { useEffect, useState, Component, ReactNode } from 'react';
// import "./ScrollBtn.css";
// const ScrollToTopButton: React.FC = () => {

//     const handleClick = () => {
//         setTimeout(() => {
//             console.log("timeout");
//             window.document.documentElement.scrollTo(0,0);
//         }, 500);
//         console.log("click");
//     };

//     return (
//         <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{ zIndex: 999 }}>
//         <IonFabButton onClick={handleClick}>
//           <IonIcon icon={arrowUp} />
//         </IonFabButton>
//       </IonFab>
//     );
// }


// export default ScrollToTopButton;
import React, { useState, useEffect } from 'react';
import './ScrollBtn.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    console.log("click button");
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={handleButtonClick}
    >
      Scroll to top
    </button>
  );
};

export default ScrollToTopButton;
