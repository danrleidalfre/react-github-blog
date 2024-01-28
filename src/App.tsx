import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'
import { PostsProvider } from './contexts/PostsContext.tsx'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
