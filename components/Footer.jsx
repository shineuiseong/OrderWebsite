import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>NextJS 피자입니다.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>매장 위치</h1>
          <p className={styles.text}>
            경기도 성남시
            <br /> 모란점
            <br /> (031) 1111-1010
          </p>
          <p className={styles.text}>
            경기도 광주시
            <br /> 광주시청점
            <br /> (031) 2222-1011
          </p>
          <p className={styles.text}>
            판교점
            <br /> (031) 3333-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>영업 시간</h1>
          <p className={styles.text}>
            월~금
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            토~일
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
