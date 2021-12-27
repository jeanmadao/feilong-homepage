import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const getAge = birthday => {
  const today = new Date()
  let age = today.getFullYear() - birthday.getFullYear()
  const thisYearBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  )
  if (today - thisYearBirthday < 0) {
    age--
  }
  return age
}

const Page = () => {
  const birthday = new Date(1999, 10, 28)
  const age = getAge(birthday)
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={5}
        align="center"
      >
        Welcome to my page!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jean Pierre Huynh
          </Heading>
          <p>I love languages and programming</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/feilong.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Me, the potato
        </Heading>
        <Paragraph>
          Hi! My name is Jean Pierre, I&apos;m {age}-year-old, and I live in
          Brussels, in Belgium.
        </Paragraph>
        <Paragraph>
          I&apos;m currently studying translation and interpretation at ISTI,
          Université Libre de Bruxelles(ULB).
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Studies
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Brussels, Belgium.
        </BioSection>
        <BioSection>
          <BioYear>2017-2018</BioYear>
          Studied computer sciences at ULB for a year.
        </BioSection>
        <BioSection>
          <BioYear>2018-2019</BioYear>
          Studied programming at 19 Coding School for a year.
        </BioSection>
        <BioSection>
          <BioYear>2019-Now</BioYear>
          Started studying translation and interpretation at ULB
        </BioSection>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
