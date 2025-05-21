import React from "react";
import "../style/WordListItem.css";
import FlashcardItemIcon from "../assets/icons/library-svgrepo-com.svg";
import StudenIcon from "../assets/icons/student-cap-svgrepo-com.svg";

const WordListItem = (props) => {
  const wordListTopic = props.wordListItem.wordListTopic;
  const totalWords = props.wordListItem.totalWords;
  const numOfParticipants = props.wordListItem.numOfParticipants;
  const author = props.wordListItem.author;
  const isLearning = props.wordListItem.isLearning;
  let numOfWordsToReview;
  let numOfWordsLearned;
  if (isLearning) {
    numOfWordsToReview = props.wordListItem.numOfWordsToReview;
    numOfWordsLearned = props.wordListItem.numOfWordsLearned;
  }

  return (
    <>
      <div className="wordListItemContainer">
        <p className="itemName">{wordListTopic}</p>
        <div className="itemInfo">
          <img src={FlashcardItemIcon} />
          {totalWords} từ | <img src={StudenIcon} /> {numOfParticipants}
        </div>
        <div className="authorInfo">
          <p>Tác giả:</p>
          <p>{author}</p>
        </div>
        {isLearning ? (
          <div className="userLearningInfo">
            <li>Cần ôn tập: {numOfWordsToReview}</li>
            <li>Đã ghi nhớ: {numOfWordsLearned}</li>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default WordListItem;
