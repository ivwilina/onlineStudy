import React from "react";
import FlashCardIcon from "../assets/icons/library-svgrepo-com.svg";
import '../style/FlashCard.css';

const FlashCard = () => {
  return (
    <>
    <div className="flashCardBannerWrapper">
      <div className="flashCardBanner">
        <div>
          <img src={FlashCardIcon} />
        </div>
        <p>Flash Card</p>
      </div>
    </div>
    </>
  );
};

export default FlashCard;
