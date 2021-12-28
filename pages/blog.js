import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { BlogGridItem } from '../components/grid-item'

import thumbJeanPierre from '../public/images/blog/jean_pierre_eyecatch.png'

const Blog = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <BlogGridItem
            id="jean-pierre"
            title="Jean Pierre"
            thumbnail={thumbJeanPierre}
          >
            The infamous and important story about my Name.
          </BlogGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Blog
