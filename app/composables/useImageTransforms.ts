export const useImageTransforms = () => {
  // Uses Netlify on production, ipx on dev, to transform images to the correct size for the page
  const transformImage = (image: string, width: number, height: number) => {
    if (process.env.NODE_ENV === 'production') {
      return `${image}&w=${width}&h=${height}`
    } else {
      return `${image}`
    }
  }
  return {
    transformImage,
  }
}
