import styles from "styles/privacy.module.scss"
import Layout from 'components/layout/layout'

const Privacy =  () => {
  return (
    <Layout stick={true}>
      <div className={styles.container}>
        <div className={styles.heading}>
          Chính sách bảo mật yummy
        </div>
        <div className={styles.content}>
          <p className={styles.mb20}>
          Ứng dụng của chúng tôi sẽ thu thập thông tin từ khóa tìm kiếm, lượt xem công thức, lượt xem quảng cáo của người dùng.
          </p>
          <p>
          Những thông tin trên chỉ nhằm mục đích cập nhật nội dung mà người dùng quan tâm vào ứng dụng, không nhằm mục đích nào khác. Ngoài những thông tin trên chúng tôi không thu thập thông tin nào khác của người dùng.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Privacy