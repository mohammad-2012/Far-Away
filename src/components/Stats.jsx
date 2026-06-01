export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer>
      <h4>
        {percentage === 100
          ? "You got everything! ready to Go🛫"
          : `
        You hav ${numItems} item on your list , and you already packed  ${packedItems}  (${percentage}%)`}
      </h4>
    </footer>
  );
}
