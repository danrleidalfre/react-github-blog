import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles.ts'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
