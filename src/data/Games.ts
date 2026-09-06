export interface Game {
	id: string // Format Example: developer-name.game-name
	name: string // Game Name
	description: string // Description of Game
	developer: string // Developer Name
	url: string // URL to your game. Browser ONLY. No Steam.
	image: string // Image must be hosted somewhere else and a valid url
}

export const Games = (): Game[] => {
	return [
		{
			id: 'Orteil.Cookie Clicker',
			name: 'Cookie Clicker',
			description:
				'An idle game about making cookies! Originally released in 2013 on the web, and actively developed since then. This is the official version for Steam.',
			developer: 'Orteil',
			url: 'https://orteil.dashnet.org/cookieclicker/',
			image: 'https://cdn.mos.cms.futurecdn.net/bYZdn47Fa7mFXjEdNrYk5J-610-80.jpg'
		},
		{
			id: 'Demonin.DodecaDragons',
			name: 'DodecaDragons',
			description:
				"DodecaDragons utilizes stacking layers of prestige systems to use player's resources, and keep them relevant through the entire game.",
			developer: 'Demonin',
			url: 'https://demonin.com/games/dodecaDragons/',
			image: 'https://incrementaldb.b-cdn.net/img/362dd.png'
		},
		{
			id: 'Frank Lantz.Universal Paperclips',
			name: 'Universal Paperclips',
			description:
				'Become a super-powerful AI. Use your unstoppable intelligence to create a massive paperclip empire in this addictive idle/management/strategy/sim.',
			developer: 'Frank Lantz',
			url: 'https://www.decisionproblem.com/paperclips/',
			image: 'https://images.squarespace-cdn.com/content/v1/52d848b4e4b0281856c5b918/1588125765912-HDL4R25CBDC6DJW7J460/up_screen2.PNG?format=1500w'
		}
	]
}
