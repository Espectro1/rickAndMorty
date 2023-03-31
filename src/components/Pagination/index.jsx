import "./pagination.css";

export const Pagination = ({ onClickPrev, onClickNext }) => {
  return (
    <div className="pagination_container">
      <button className="buttonPrev" onClick={() => onClickPrev()}>
        Prev
      </button>
      <button className="buttonNext" onClick={() => onClickNext()}>
        Next
      </button>
    </div>
  );
};
