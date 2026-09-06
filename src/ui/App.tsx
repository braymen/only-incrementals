import logo from '../icons/favicon-white.svg'
import giggity from '../icons/giggity.png'
import { Games } from '../data/Games.ts'
import GameCard from './GameCard.tsx'

function App() {
	const games = Games()

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
				This is a site that is curated towards quality, non-vibe coded incrementals that you can play in your
				browser. If you are a developer and think you might fit, please make a PR following the guidelines in
				the readme.{' '}
				<a href="https://github.com/braymen/only-incrementals" target="_blank" rel="noreferrer">
					Submit your game here
				</a>
				. All curation is subjective to Braymen's own taste for games.
			</p>
			<h2>Classics Curation</h2>
			{/* TODO: SOME KIND OF CURATION LIST I CAN DO MYSELF */}
			<div className="game-grid">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
			<h2>All Games (Random + Not Curated)</h2>
			{/* TODO: RANDOMIZE THIS! DONT FORGET IT */}
			<div className="game-grid">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
			<p
				style={{
					margin: 0,
					padding: 0,
					marginBottom: '24px',
					color: 'var(--text-muted)',
					fontStyle: 'italic',
					borderTop: '1px solid var(--text-muted)',
					paddingTop: '8px'
				}}
			>
				This site was made with love by Braymen. It's open-source, so you can make your own too!{' '}
				<a href="https://github.com/braymen/only-incrementals" target="_blank" rel="noreferrer">
					Checkout out the Open-Source GitHub Repo
				</a>
				.
			</p>
		</div>
	)
}

export default App
