import styles from "../styles/ItemCard.module.css";
export const ItemCard = ({ name, price, id, img }) => {
  return (
    <>
      <div className={`${styles.ItemWrapper}`}>
        <div className={`${styles.ItemName}`}>{name}</div>
        <img className={`${styles.ItemImg}`} src={img} alt=""></img>
        <div className={`${styles.ItemPrice}`}>&#8377;{price}</div>
      </div>
    </>
  );
};
