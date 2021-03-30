import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={styles.section}>
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.itemHead}>Type</th>
          <th className={styles.itemHead}>Amount</th>
          <th className={styles.itemHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
