import { Card, Info, Label, Labels, Link, Title } from './styles.ts'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios.ts'

interface Profile {
  name?: string
  bio?: string
  html_url?: string
  login?: string
  company?: string
  followers?: number
}

export function Profile() {
  const [profile, setProfile] = useState<Profile>({})

  const fetchProfile = useCallback(async () => {
    const { data } = await api.get('/users/danrleidalfre')
    setProfile(data)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <Card>
      <img src={`${profile.html_url}.png`} alt="" />
      <Info>
        <Title>
          <h1>{profile.name}</h1>
          <Link href={profile.html_url} target="_blank">
            <span>Github</span>
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </Link>
        </Title>
        <p>{profile.bio}</p>
        <Labels>
          <Label>
            <i className="fa-brands fa-github" />
            <span>{profile.login}</span>
          </Label>
          <Label>
            <i className="fa-solid fa-building" />
            <span>{profile.company}</span>
          </Label>
          <Label>
            <i className="fa-solid fa-profile-group" />
            <span>{profile.followers} seguidores</span>
          </Label>
        </Labels>
      </Info>
    </Card>
  )
}
