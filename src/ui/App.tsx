import logo from '../icons/favicon-white.svg'
import giggity from '../icons/giggity.png'
import { Games, type Game } from '../data/Games.ts'
import GameCard from './GameCard.tsx'
import { useState } from 'react'

// stackoverflow copied shuffle
function shuffle(array: Game[]): Game[] {
    let currentIndex = array.length
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

function App() {
    const games = Games()

    const [classicGames] = useState<Game[]>(shuffle([...games.filter((g) => g.tags.includes('classics'))]))
    const [allGames] = useState<Game[]>(shuffle([...games]))

    return (
        <div className="container">
            <div className="header">
                <h1 style={{ margin: 0 }}>
                    Only<span style={{ color: 'var(--accent)' }}>Incrementals</span>
                </h1>
                <img className="logo" src={logo} alt="" />
                <img className="logo-giggity" src={giggity} alt="" />
            </div>
            <p style={{ margin: 0, padding: 0, marginBottom: '24px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                This is a site that is curated towards quality (made with love), non-vibe coded incrementals that you can play in
                your browser. If you are a developer and think you might fit, please make a PR following the guidelines in the
                readme.{' '}
                <a href="https://github.com/braymen/only-incrementals" target="_blank" rel="noreferrer">
                    Submit your game here
                </a>
                . All curation lists are subjective to Braymen's own taste for games. List order is all randomized.
            </p>
            <h2>The Classics</h2>
            <div className="game-grid">
                {classicGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
            <h2 style={{ marginTop: '96px' }}>All Games</h2>
            <div className="game-grid">
                {allGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
            <p
                style={{
                    margin: 0,
                    padding: 0,
                    marginBottom: '24px',
                    marginTop: '64px',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    borderTop: '1px solid var(--text-muted)',
                    paddingTop: '8px',
                }}
            >
                This site was made with love by Braymen. It's open-source, so you can make your own too!{' '}
                <a href="https://github.com/braymen/only-incrementals" target="_blank" rel="noreferrer">
                    Checkout out the Open-Source GitHub Repo
                </a>
                . If you find mistakes, you are welcome to try and correct them too!
            </p>
        </div>
    )
}

export default App
