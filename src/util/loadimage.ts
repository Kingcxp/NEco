const loadImageAsset = (url: string): string => {
    return new URL(`../assets/`+url,import.meta.url).href
}

export default loadImageAsset