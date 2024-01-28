import styled from 'styled-components'

export const Card = styled.section`
  max-width: 54rem;
  margin: -5.5rem auto 0;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const Link = styled.a`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  position: relative;
  gap: 0.5rem;
  display: flex;
  align-items: center;

  i {
    font-size: 0.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
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

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
  margin-top: 1.25rem;
`

export const Labels = styled.div`
  margin-top: 0.5rem;
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

export const Content = styled.main`
  padding: 2rem 2.5rem;
  max-width: 54rem;
  margin: 0 auto;
`
