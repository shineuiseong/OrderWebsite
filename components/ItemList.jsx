import styles from '../styles/PizzaList.module.css'
import ItemCard from './ItemCard'

const ItemList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best</h1>
      <p className={styles.desc}>피자상품을 골라라</p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <ItemCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
