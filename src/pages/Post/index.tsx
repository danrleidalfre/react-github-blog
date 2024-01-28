import { useParams } from 'react-router-dom'
import { Info } from '../../components/Posts/Post/Info'

export function Post() {
  const { slug } = useParams()
  console.log(slug)

  return <Info />
}
