export default function generateId(key) {
  const id = new Date().getTime();
  return `${key}-${id}`;
}
