import { Footer, Header, PostContent, PostLink } from './styles.ts'
import { Post as PostProps } from '../index.tsx'

export function Post({ id, title, created, content }: PostProps) {
  return (
    <PostLink href={`/${id}`}>
      <PostContent>
        <Header>
          <h4>{title}</h4>
        </Header>
        <p>{content.slice(0, 250)}...</p>
        <Footer>
          <time>{created}</time>
        </Footer>
      </PostContent>
    </PostLink>
  )
}
