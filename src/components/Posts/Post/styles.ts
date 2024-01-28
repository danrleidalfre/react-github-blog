import styled from 'styled-components'

export const PostLink = styled.a`
  text-decoration: none;
`

export const PostContent = styled.article`
  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-post']};
  cursor: pointer;
  border: 2px solid transparent;
  transition: border 0.2s;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    margin: 1.25rem 0;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h4 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
  }
`
export const Footer = styled.footer`
  time {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    margin-top: 0.5rem;
  }
`
