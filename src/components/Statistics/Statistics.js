import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className="title">{title}</h2>
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: randomColor }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
