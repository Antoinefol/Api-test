import "./ItemCard.css";

const ItemCard = ({ frontContent, backContent }) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">{frontContent}</div>
        <div class="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default ItemCard;
