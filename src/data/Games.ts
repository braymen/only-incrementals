export type CurationTags = 'classics'

export interface GameFile {
    developer: string // Author of Game
    title: string // Title of Game
    description: string // Description of Game
    url: string // URL to your game. Browser ONLY. No Steam.
    image: string // Image must be hosted somewhere else and a valid url
    tags: CurationTags[] // Curation tags, added by Braymen
}

export interface Game extends GameFile {
    id: string // Utilizes file structure to build. "FolderName.FileName"
}

const files = import.meta.glob<GameFile>('./*/*.json', { eager: true, import: 'default' })

const games: Game[] = []

for (const path in files) {
    const file = files[path]
    games.push({
        id: file.developer + '.' + file.title,
        developer: file.developer,
        title: file.title,
        description: file.description,
        url: file.url,
        image: file.image,
        tags: file.tags,
    })
}

export const Games = (): Game[] => games
