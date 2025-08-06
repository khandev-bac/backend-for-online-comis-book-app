export interface CreateAnime {
    title: string;
    description: string;
    coverImage: string;

    category: string
}
export interface UpdateAnime {
    title?: string;
    description?: string;
    coverImage?: string;
    animeImage?: string;
    category?: string
}