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


import React, { useState, useEffect } from 'react';
import './ScrollBtn.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
    <div className="App">
    <h1>Hello!</h1>
    <h2>Scroll down for the button to appear</h2>
    <p style={{ marginTop: "150vh" }}>bottom</p>
    </div>
    // <button
    //   type='button'
    //   className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
    //   onClick={handleButtonClick}
    // >
    //   Scroll to top
    // </button>
  );
};

export default ScrollToTopButton;


