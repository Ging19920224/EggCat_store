export default function (timestamp) {
  const date = new Date(timestamp * 1000);
  const result = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
  return result;
}