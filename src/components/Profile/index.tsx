import { Card, Info, Label, Labels, Link, Title } from './styles.ts'

export function Profile() {
  return (
    <Card>
      <img src="https://github.com/danrleidalfre.png" alt="" />
      <Info>
        <Title>
          <h1>Danrlei Dal Fré</h1>
          <Link href="https://github.com/danrleidalfre" target="_blank">
            <span>Github</span>
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </Link>
        </Title>
        <p>
          Commodi similique pariatur cupiditate earum occaecati amet molestiae.
          Eaque ipsam soluta repellat nobis itaque velit. A eius aperiam
          molestias quo aperiam qui debitis praesentium.
        </p>
        <Labels>
          <Label>
            <i className="fa-brands fa-github" />
            <span>danrleidalfre</span>
          </Label>
          <Label>
            <i className="fa-solid fa-building" />
            <span>rpc</span>
          </Label>
          <Label>
            <i className="fa-solid fa-user-group" />
            <span>467 seguidores</span>
          </Label>
        </Labels>
      </Info>
    </Card>
  )
}
