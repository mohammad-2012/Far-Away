export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={item.packed ? "packed" : ""}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
