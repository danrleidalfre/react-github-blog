import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios.ts'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Post } from '../components/Posts'

interface User {
  login: string
}

interface PostRequest {
  id: number
  url: string
  title: string
  user: User
  created_at: string
  comments: number
  body: string
}

interface PostContextType {
  posts: Post[]
  total: number
  onFetchPosts: (query: string) => void
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [total, setTotal] = useState<number>(0)

  const fetchPosts = useCallback(async (query?: string) => {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query || ''} repo:danrleidalfre/react-github-blog`,
      },
    })

    const posts = data.items.map((post: PostRequest) => {
      return {
        id: post.id,
        link: post.url,
        title: post.title,
        created: formatDistanceToNow(new Date(post.created_at), {
          addSuffix: true,
          locale: ptBR,
        }),
        comments: post.comments,
        content: post.body,
        user: post.user.login,
      }
    })

    setTotal(data.total_count)
    setPosts(posts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  function onFetchPosts(query: string) {
    fetchPosts(query)
  }

  return (
    <PostsContext.Provider value={{ posts, total, onFetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
