export interface Game {
	id: string // Format Example: developer-name.game-name
	name: string // Game Name
	description: string // Description of Game
	developer: string // Developer Name
	url: string // URL to your game. Browser ONLY. No Steam.
	image: string // Image file name from in the images folder.
}

export const Games = (): Game[] => {
	return [
		{
			id: 'orteil.cookie-clicker',
			name: 'Cookie Clicker',
			description:
				'An idle game about making cookies! Originally released in 2013 on the web, and actively developed since then. This is the official version for Steam.',
			developer: 'Orteil',
			url: 'https://orteil.dashnet.org/cookieclicker/',
			image: 'cookie-clicker.jpg'
		}
	]
}
