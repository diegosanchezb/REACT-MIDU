import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './assets/TwitterFollowCard'

const users = [
  {
  userName: 'diegosanchezb',
  name: 'Diego',
  isFollowing: true
  },
  {
    userName: 'nancyaliciabrisa',
    name: 'Nancy Brisa',
    isFollowing: true
  },
  {
    userName: 'lionelmessi',
    name: 'Lionel Andres Messi',
    isFollowing: false
  },
  {
    userName: 'sosbrisa',
    name: 'Solange Sos Brisa',
    isFollowing: true
  },
  {
    userName: 'federicoschwab',
    name: 'federico schwab',
    isFollowing: false
  }
]

export function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>   
        ))
      }
    </section>
  )
}


