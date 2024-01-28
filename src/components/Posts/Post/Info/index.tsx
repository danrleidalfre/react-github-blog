import { Card, Content, Label, Labels, Link, Nav, Title } from './styles.ts'
import Markdown from 'react-markdown'

export function Info() {
  const markdown = `
  # Title
  ## Sub Title
  `

  return (
    <>
      <Card>
        <Nav>
          <Link href="/">
            <i className="fa-solid fa-chevron-left" />
            <span>Voltar</span>
          </Link>
          <Link href="https://github.com/danrleidalfre" target="_blank">
            <span>Ver no Github</span>
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </Link>
        </Nav>
        <Title>JavaScript data types and data structures</Title>
        <Labels>
          <Label>
            <i className="fa-brands fa-github" />
            <span>danrleidalfre</span>
          </Label>
          <Label>
            <i className="fa-solid fa-calendar-day" />
            <span>Há 1 dia</span>
          </Label>
          <Label>
            <i className="fa-solid fa-comment" />
            <span>12 comentários</span>
          </Label>
        </Labels>
      </Card>
      <Content>
        <Markdown>{markdown}</Markdown>
      </Content>
    </>
  )
}
