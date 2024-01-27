import { Header, PostContent } from './styles.ts'

export function Post() {
  return (
    <PostContent>
      <Header>
        <h4>JavaScript data types and data structures</h4>
        <time>Há 1 dia</time>
      </Header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostContent>
  )
}
