import styles from "../styles/Items.module.css";
import { ItemData } from "../Data/ItemData";
import { ItemCard } from "./ItemCard";
export const Items = ({handleCart}) => {
  // console.log(handleCart);
  return (
    <>
      <div className={`${styles.wrapper}`}>
        {ItemData.map((item) => (
          <>
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              handleCart={handleCart}
            />
          </>
        ))}
      </div>
    </>
  );
};
