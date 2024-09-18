import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.body}>{item.type}</td>
              <td className={css.body}>{item.amount}</td>
              <td className={css.body}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
