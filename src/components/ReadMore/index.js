// Write your code here
import {useState} from 'react'
import {
  HookContainer,
  Heading,
  Subtitle,
  Image,
  Description,
  ReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, setReadMore] = useState(true)

  const onClickReadMore = () => {
    setReadMore(prevText => !prevText)
  }

  return (
    <HookContainer>
      <Heading>React Hooks</Heading>
      <Subtitle>Hooks are a new addition to React</Subtitle>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />

      <Description>
        {readMore
          ? reactHooksDescription.slice(0, 170)
          : reactHooksDescription.slice(0)}
      </Description>
      <ReadMoreButton onClick={onClickReadMore}>
        {readMore ? 'Read More' : 'Read Less'}
      </ReadMoreButton>
    </HookContainer>
  )
}

export default ReadMore
