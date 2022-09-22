import Navigation from './Navigation';
import Bottom from './Bottom';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navigation title="TestApp" />
      <main className={styles.main}>{children}</main>
      <Bottom />
    </div>
  );
};

export default Layout;
