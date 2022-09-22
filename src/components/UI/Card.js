import styles from './Card.module.css';
import Button from './Button';

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles['image-box']}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button text="Перейти" />
      </div>
    </div>
  );
};

export default Card;
