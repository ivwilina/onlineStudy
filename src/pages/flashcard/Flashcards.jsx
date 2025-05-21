import React from "react";
import FlashCardIcon from "../../assets/icons/library-svgrepo-com.svg";
import "../../style/Flashcards.css";
import WordListItem from "../../components/WordListItem";

const FlashCard = () => {
  const itemDemo = [
    {
      id: 1,
      wordListTopic: "Từ vựng chủ đề văn phòng",
      totalWords: 123,
      numOfParticipants: 9825,
      author: "ivwilina",
      isLearning: true,
      numOfWordsToReview: 20,
      numOfWordsLearned: 16,
    },
    {
      id: 2,
      wordListTopic: "Từ vựng chủ đề văn phòng",
      totalWords: 123,
      numOfParticipants: 9825,
      author: "ivwilina",
      isLearning: false,
    },
    {
      id: 2,
      wordListTopic: "Từ vựng chủ đề văn phòng",
      totalWords: 123,
      numOfParticipants: 9825,
      author: "ivwilina",
      isLearning: false,
    },
    {
      id: 2,
      wordListTopic: "Từ vựng chủ đề văn phòng",
      totalWords: 123,
      numOfParticipants: 9825,
      author: "ivwilina",
      isLearning: false,
    },
    {
      id: 2,
      wordListTopic: "Từ vựng chủ đề văn phòng",
      totalWords: 123,
      numOfParticipants: 9825,
      author: "ivwilina",
      isLearning: false,
    },
  ];

  return (
    <>
      {/*banner của flashcard*/}
      <div className="flashcardsBannerWrapper">
        <div className="flashcardsBanner">
          <div>
            <img src={FlashCardIcon} />
          </div>
          <p>Flash Card</p>
        </div>
      </div>

      {/*wrapper*/}
      <div className="flashcardsContentWrapper">
        <div className="flashcardsContentContainer">
          {/*thống kê*/}
          <div className="flashcardsStatistic">
            <h2>Tiến độ luyện từ của bạn</h2>
            <div className="statisticsTable">
              <li>
                <p>Đã học</p>
                <h1>36</h1>
              </li>
              <li>
                <p>Đã nhớ</p>
                <h1>16</h1>
              </li>
              <li>
                <p>Cần ôn tập</p>
                <h1 style={{ color: "red" }}>20</h1>
              </li>
            </div>
          </div>

          {/*danh sách list từ đang học dở*/}
          <div className="pendingWordListContainer">
            <h2>Bộ từ đang học</h2>
            <div className="pendingWordList">
              {itemDemo.map((item) => (
                <WordListItem wordListItem={item} />
              ))}
            </div>
          </div>

          {/*danh sách list từ đã tạo*/}
          <div className="createdWordListContainer">
            <h2>Bộ từ đã tạo</h2>
            <div className="createdWordList">
              {itemDemo.map((item) => (
                <WordListItem wordListItem={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
