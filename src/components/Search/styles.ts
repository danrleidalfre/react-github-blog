import styled from 'styled-components'

export const SearchContainer = styled.section`
  max-width: 54rem;
  margin: 4.5rem auto 3rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Input = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
