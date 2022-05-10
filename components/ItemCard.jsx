import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'
import Link from 'next/link'

const ItemCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      {/* 아이템 id로 url = 상세페이지 */}
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default ItemCard
