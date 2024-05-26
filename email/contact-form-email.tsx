import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
}

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head/>
      <Preview>Someone has reached out to you on your portfolio contact form.</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You received the following message from your portfolio's contact form.</Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
