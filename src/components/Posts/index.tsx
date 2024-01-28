import { PostContainer } from './styles.ts'
import { Post } from './Post'

export interface Post {
  id: string
  link?: string
  title: string
  created: string
  comments?: string
  content: string
  user?: string
}

interface Posts {
  posts: Post[]
}

export function Posts({ posts }: Posts) {
  return (
    <PostContainer>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            created={post.created}
            content={post.content}
          />
        )
      })}
    </PostContainer>
  )
}
