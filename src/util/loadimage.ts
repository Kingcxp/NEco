const loadImageAsset = (url: string): string => {
    // return new URL(`../assets/`+url,import.meta.url).href
    return `/`+url
}

export default loadImageAsset

// TODO: change all assets to public