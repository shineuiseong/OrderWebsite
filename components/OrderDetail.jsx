import { useState } from 'react'
import styles from '../styles/OrderDetail.module.css'

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 })
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>배달 정보를 작성해주세요</h1>
        <div className={styles.item}>
          <label className={styles.label}>성함</label>
          <input placeholder="김xx" type="text" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>휴대전화</label>
          <input type="text" placeholder="010 0000 0000" className={styles.input} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>주소</label>
          <textarea rows={5} placeholder="경기도 광주시" type="text" className={styles.textarea} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
