export type CurationTags = 'classics'

export interface GameFile {
	description: string // Description of Game
	url: string // URL to your game. Browser ONLY. No Steam.
	image: string // Image must be hosted somewhere else and a valid url
	tags: CurationTags[] // Curation tags, added by Braymen
}

export interface Game extends GameFile {
	id: string // Utilizes file structure to build. "FolderName.FileName"
	name: string // Derived from json file name
	developer: string // Derivded from Folder
}

const files = import.meta.glob<GameFile>('./*/*.json', { eager: true, import: 'default' })

const games: Game[] = []

for (const path in files) {
	const parts = path.split('/')
	const developer = parts[1]
	const gameName = parts[2].replace('.json', '')
	const file = files[path]

	games.push({
		id: developer + '.' + gameName,
		name: gameName,
		developer: developer,
		description: file.description,
		url: file.url,
		image: file.image,
		tags: file.tags
	})
}

export const Games = (): Game[] => games
