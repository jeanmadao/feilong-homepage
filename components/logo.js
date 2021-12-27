import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-40deg);
  }
`

const Logo = () => {
  const kyuuImg = '/images/kyuu-chan.png'

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={kyuuImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            FeiLong&apos;s Cozy Bedroom
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
