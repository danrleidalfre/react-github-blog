import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { Posts } from '../../components/Posts'

export function Home() {
  return (
    <>
      <Header />
      <Profile />
      <Search />
      <Posts />
    </>
  )
}
