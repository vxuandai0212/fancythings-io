import { Container } from 'components/layout/layout-style'
import Nav from 'components/nav'
import Footer from 'components/footer/footer'

const Layout = ({stick, children} : any) => {
  return (
    <div>
      <Nav />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout