import { Input, SearchContainer, Title } from './styles.ts'
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import { PostsContext } from '../../contexts/PostsContext.tsx'

interface Total {
  total: number
}

export function Search({ total }: Total) {
  const [search, setSearch] = useState('')
  const timeoutRef = useRef<number | null>(null)
  const { onFetchPosts } = useContext(PostsContext)

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const inputText = event.target.value

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setSearch(inputText)
    }, 3000)
  }

  useEffect(() => {
    onFetchPosts(search)
  }, [search])

  return (
    <SearchContainer>
      <Title>
        <h2>Publicações</h2>
        <h3>
          {total} {total === 1 ? 'publicação' : 'publicações'}
        </h3>
      </Title>
      <Input placeholder="Buscar conteúdo" onChange={handleSearch} />
    </SearchContainer>
  )
}
