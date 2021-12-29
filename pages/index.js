import {
  AspectRatio,
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5'

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
    <Layout>
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
              borderColor={useColorModeValue(
                'blackAlpha.200',
                'whiteAlpha.800'
              )}
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
            Activities
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Brussels, Belgium.
          </BioSection>
          <BioSection>
            <BioYear>2017-2018</BioYear>
            Studied computer sciences at ULB.
          </BioSection>
          <BioSection>
            <BioYear>2018-2019</BioYear>
            Studied programming at 19 Coding School.
          </BioSection>
          <BioSection>
            <BioYear>2019-Now</BioYear>
            Studying translation and interpretation at ULB.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            What is the purpose of this website ?
          </Heading>
          <Paragraph>
            The purpose of this website is for me to practice using React and
            Next.js, the main tools that were used to create this website. It
            will be subject to a lot of modifications as I completely copied the
            code from{' '}
            <Link
              href="https://www.youtube.com/channel/UC7yZ6keOGsvERMp2HaEbbXQ"
              target="_blank"
            >
              {' '}
              @craftzdog, aka devaslife on Youtube
            </Link>
            .
          </Paragraph>
          <br />
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/bSMZgXzC9AA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <br />
          <Paragraph>
            Once I&apos;m done building the website on my own, I will use it as
            a portfolio and also as a blog as I want to share stories and
            opinions with everyone.
          </Paragraph>
          <br />
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jeanmadao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @jeanmadao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/JeanMadao" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @jeanmadao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/jeanmadao/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @jeanmadao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jean-pierre-huynh-998242173/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Jean Pierre Huynh
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UC5zO1HqhcjVkb4DLpQv6g0g"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  FeiLong
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
