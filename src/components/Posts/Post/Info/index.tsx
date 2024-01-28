import { Card, Content, Label, Labels, Link, Nav, Title } from './styles.ts'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react' // Import useState
import { PostsContext } from '../../../../contexts/PostsContext.tsx'
import { Post } from '../../index.tsx'

export function Info() {
  const { posts } = useContext(PostsContext)
  const { id } = useParams()
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    const getPost = () => {
      const foundPost = posts.find((post) => post.id.toString() === id)

      if (foundPost) {
        setPost(foundPost)
      }
    }

    getPost()
  }, [posts, id])

  return (
    <>
      {post && (
        <Card>
          <Nav>
            <Link href="/">
              <i className="fa-solid fa-chevron-left" />
              <span>Voltar</span>
            </Link>
            <Link
              href={`https://github.com/danrleidalfre/react-github-blog/issues/${post.id}`}
              target="_blank"
            >
              <span>Ver no Github</span>
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </Link>
          </Nav>
          <Title>{post.title}</Title>
          <Labels>
            <Label>
              <i className="fa-brands fa-github" />
              <span>{post.user}</span>
            </Label>
            <Label>
              <i className="fa-solid fa-calendar-day" />
              <span>{post.created}</span>
            </Label>
            <Label>
              <i className="fa-solid fa-comment" />
              <span>{post.comments} comentários</span>
            </Label>
          </Labels>
        </Card>
      )}
      <Content>
        <Markdown>{post?.content}</Markdown>
      </Content>
    </>
  )
}
