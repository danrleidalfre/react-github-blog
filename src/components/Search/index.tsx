import { Input, SearchContainer, Title } from './styles.ts'

export function Search() {
  return (
    <SearchContainer>
      <Title>
        <h2>Publicações</h2>
        <h3>35 publicações</h3>
      </Title>
      <Input placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
