import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Posts } from '../../components/Posts'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext.tsx'

export function Home() {
  const { posts, total } = useContext(PostsContext)

  return (
    <>
      <Profile />
      <Search total={total} />
      <Posts posts={posts} />
    </>
  )
}
