export default function getImagePath(img) {
  return new URL(`../assets/images/${img.image}`, import.meta.url).href;
}
