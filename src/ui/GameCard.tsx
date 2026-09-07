import type { Game } from '../data/Games.ts'

function GameCard({ game }: { game: Game }) {
    return (
        <a className="game-card" href={game.url} target="_blank" rel="noreferrer">
            <img
                style={{ display: 'block', width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                src={game.image}
                alt={game.title}
            />
            <div style={{ padding: '8px 16px' }}>
                <h2 style={{ margin: 0, fontSize: '16px' }}>{game.title}</h2>
                <p
                    style={{
                        margin: '2px 0px 4px 0px',
                        fontSize: '14px',
                        fontStyle: 'italic',
                        color: 'var(--text-muted)',
                    }}
                >
                    {game.developer}
                </p>
                <p className="game-card-description">{game.description}</p>
            </div>
        </a>
    )
}

export default GameCard
