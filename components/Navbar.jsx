import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>전화주세요</div>
          <div className={styles.text}>031-761-1234</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>홈</li>
          </Link>
          <li className={styles.listItem}>상품</li>
          <li className={styles.listItem}>피자메뉴</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}>이벤트</li>
          <li className={styles.listItem}>블로그</li>
          <li className={styles.listItem}>소개</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
