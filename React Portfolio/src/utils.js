/*make easier to dynamically import images n*/
export const getImageUrl = (path) => {
    return new URL (`/assets/${path}`, import.meta.url).href;
};