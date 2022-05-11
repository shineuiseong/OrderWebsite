import styles from '../styles/PizzaList.module.css'
import ItemCard from './ItemCard'

const ItemList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best 피자 메뉴입니다.</h1>
      <p className={styles.desc}></p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <ItemCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
