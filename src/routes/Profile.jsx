import { useAuthContext } from '../contexts/AuthContext';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Profile:</h1>
      <div className={styles.profile}>
        <h2>
          Hello,
          {user}
        </h2>
      </div>
    </div>
  );
};
export default Profile;
