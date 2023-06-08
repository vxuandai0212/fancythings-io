import { Container, Heading, ContactContainer, ContactItem } from 'components/about/contact/contact-style'
import {
  Facebook,
  Github,
  Linkedin,
  Telegram,
  Whatsapp,
  Youtube
} from 'components/icons'

const Contact = () => {
  return (
    <Container>
      <Heading>Liên hệ</Heading>
      <ContactContainer>
        <ContactItem><Github /></ContactItem>
        <ContactItem><Linkedin /></ContactItem>
        <ContactItem><Facebook /></ContactItem>
        <ContactItem><Whatsapp /></ContactItem>
        {/* <ContactItem><Telegram /></ContactItem> */}
        {/* <ContactItem><Youtube /></ContactItem> */}
      </ContactContainer>
    </Container>
  )
}

export default Contact