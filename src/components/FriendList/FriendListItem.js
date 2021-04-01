import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImg from '../../assets/default.png';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <img className={styles.avatar} src={avatar} alt="User Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <div className={styles.statusDiv}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
