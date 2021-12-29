import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, BlogImage, Meta } from '../../components/blog'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Blog = () => {
  return (
    <Layout title="Jean Pierre">
      <Container>
        <Title>
          Jean Pierre <Badge>Story Time</Badge>
        </Title>
        <BlogImage
          src="/images/blog/jean_pierre_eyecatch.png"
          alt="Jean Pierre"
        />
        <List my={5}>
          <ListItem>
            <Meta>Published</Meta>
            <span>28th December 2021</span>
          </ListItem>
          <ListItem>
            <Meta>Last Edited</Meta>
            <span>28th December 2021</span>
          </ListItem>
        </List>
        <P>
          <strong>
            The story of my name, why it was and is still a headache for me.
          </strong>
        </P>
        <br />
        <P>
          The year is 2017, it was the graduation day, I was finally about to
          say goodbye to the school I attended for 12 long years. It was a very
          exciting day, I was wearing black pants and a white shirt, I remember
          feeling very awkward wearing these. I met my friends there, ate some
          snacks displayed on top of the tables, talked to my teachers for the
          last time. It was really a memorable and moving day.
        </P>
        <br />
        <P>
          It was finally the moment, the school director took the microphone and
          began calling all of the graduating students to hand them their
          diploma. One by one, a name was pronounced and a student would stand
          up directly, head towards the scene, give &quot;la bise&quot; to all
          the teachers and finally receive the piece of paper allowing us to
          attend universities. It was finally my class&apos; turn. I was both
          very stressed but also excited. I saw all of my friends standing up to
          get their diploma, when it was finally my turn.
        </P>
        <br />
        <P>
          &quot;Huynh Jean.&quot;, the director announced with his microphone.
          &quot;Huh ? Is that supposed to be me ?&quot;, I thought. All of my
          friends looked at me, they were as confused as I was. I finally stood
          up and walked towards the table where my teachers and the director
          were waiting for me. All of my teachers congratulated me and finally
          gave me my diploma. I went back to my seat and immediately checked my
          diploma. It was written clear as day: &quot;Huynh Jean&quot;. Weird,
          my name is &apos;Jean-Pierre&apos;, did they forget to write the
          second part of my first name ?
        </P>
        <br />
        <P>
          The next day, I went to the school secretary to ask about this issue.
          &quot;Oh, it&apos;s you.&quot;, said the lady as she saw me enter the
          room. I was a little bit surprised that she knew that I was coming.
          &quot;There is a problem with my diploma, only the first part of my
          first name is written on it.&quot;, I told her. &quot;Yeah, your
          homeroom teacher already told me about this issue.&quot;. That
          explains why she knew I was coming. She then asked me to give her my
          ID card and then pointed out the name written on it. &quot;Huynh Jean
          Pierre&quot;, there is no hyphen between &apos;Jean&apos; and
          &apos;Pierre&apos; as it should have normally be spelled. This is
          crazy, I never noticed that until she pointed it out to me. &quot;So
          officially, &apos;Jean&apos; is your first name, and
          &apos;Pierre&apos; is your middle name.&quot;, she gently explained.
        </P>
        <br />
        <P>
          I was so shocked when she announced me that. For my entire life, I had
          my name wrong. I always wrote &apos;Jean-Pierre&apos; on all the
          papers I had to fill in like exams, administrative papers, letters,
          etc., and nobody never pointed out that problem until that day. It
          goes without saying that I was really really annoyed. &quot;What the
          hell happened ? Why is there no hyphen on my ID card ?&quot;. I then
          went to the city hall and asked about my birth certificate.
          &quot;There is indeed no hyphen written in between, sir. It was
          probably a mistake made by one of your parents.&quot;. Ah yes, my
          parents.
        </P>
        <br />
        <P>
          When we were born, my parents, who fled Asia to settle here in
          Belgium, decided to give my older brother and me a French name for us
          to fit in more easily here. Of course, at the time, they just arrived
          in Europe. So they didn&apos;t know much about the culture, including
          French names. So they asked around, and it was apparently my Belgian
          godfather who gave them the idea to name me &apos;Jean-Pierre&apos;.
        </P>
        <br />
        <P>
          &apos;Jean-Pierre&apos; is, if I may say, a very typical French, but
          also a very old-fashioned name. In my entire life, I&apos;ve never met
          anyone else named &apos;Jean-Pierre&apos; unless it was someone from
          an older generation. As a kid, being an asian surrounded by lots of
          other white kids is never easy. It is even less easy to have such a
          cliché name. Although, I must say that I&apos;ve never really felt
          bullied at school, so I guess I&apos;m pretty lucky compared to
          others.
        </P>
        <br />
        <P>
          Back to the story, even though they thought that
          &apos;Jean-Pierre&apos; would sounds great as a name for their soon to
          be born child, they probably were not aware that there was a hyphen.
          My first name is now &apos;Jean&apos; and my middle name is
          &apos;Pierre&apos;. Now you may ask, why didn&apos;t I just change my
          name at the city hall. There are multiple reasons for that. Firstly,
          changing name cost money, time and is a hassle. Secondly, i&apos;m too
          lazy. And lastly, for me it&apos;s just a name, it&apos;s not such a
          big deal, so you can call me however you want as long as it&apos;s not
          offensive. I&apos;ve pretty much gotten used to being called Jean
          anyways, so it doesn&apos;t bother me at all.
        </P>
        <br />
        <P>
          The main problem I have now is that I have a middle name. So when I
          have to fill in papers, I never know if I have to write
          &apos;Jean&apos; or &apos;Jean Pierre&apos; as I&apos;m used to only
          write a first name and a last name. I&apos;m pretty sure I&apos;ve not
          been very consistent about that, so I just hope I won&apos;t run into
          trouble later because of that.
        </P>
        <br />
        <P>
          In conclusion, uuuh... don&apos;t forget the hyphen if you name your
          child &apos;Jean-Pierre&apos;.
        </P>
      </Container>
    </Layout>
  )
}

export default Blog
