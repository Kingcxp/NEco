const loadImageAsset = (url: string): string => {
    return new URL(`/`+url,import.meta.url).href
}

export default loadImageAsset

// TODO: change all assets to public