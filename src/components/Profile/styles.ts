import styled from 'styled-components'

export const Card = styled.section`
  max-width: 54rem;
  margin: -5.5rem auto 0;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  display: flex;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const Info = styled.div`
  margin-left: 2rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  position: relative;

  i {
    margin-left: 0.5rem;
    font-size: 0.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 15px;
    left: 0;
    background-color: ${(props) => props.theme.blue};
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

export const Labels = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`

export const Label = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  i {
    margin-right: 0.5rem;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
