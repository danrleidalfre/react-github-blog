import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './layouts/Layout'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
