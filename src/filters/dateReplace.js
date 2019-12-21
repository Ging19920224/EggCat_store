export default function (date) {
  const result = date.replace(new RegExp('-', 'g'),'/');
  return result;
}