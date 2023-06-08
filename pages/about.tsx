import styles from "styles/about.module.scss"
import Layout from 'components/layout/layout'
import Contact from 'components/about/contact/contact'
import Project from "components/about/project/project"

const About =  () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heading}>
        Chào mừng đến với fancythings.io
        </div>
        <div className={styles.content}>
          <p>
          Website này được tạo ra nhằm mục đích chia sẻ kiến thức liên quan đến thiết kế, phần mềm và ngoại ngữ.
          </p>
        </div>
        <Project />
        <Contact />
      </div>
    </Layout>
  )
}

export default About