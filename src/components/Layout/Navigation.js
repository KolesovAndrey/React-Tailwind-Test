import styles from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <header className={styles.header}>
      <div>{props.title}</div>
      <nav>
        <ul>
          <li>Главная</li>
          <li>О проекте</li>
          <li>Аккаунт</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
