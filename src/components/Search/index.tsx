import { Input, SearchContainer, Title } from './styles.ts'

interface Total {
  total: number
}

export function Search({ total }: Total) {
  return (
    <SearchContainer>
      <Title>
        <h2>Publicações</h2>
        <h3>
          {total} {total === 1 ? 'publicação' : 'publicações'}
        </h3>
      </Title>
      <Input placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
