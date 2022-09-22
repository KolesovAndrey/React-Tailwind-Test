import Card from '../components/UI/Card';
import styles from './MainPage.module.css';

const DUMMY_DATA = [
  {
    id: Math.random(),
    title: 'Справочники для технического анализа',
    description:
      'Данный раздел содержит справочную информацию необходимую для проведения технического анализа потенциальных изделий и подготовки технико-коммерческого предложения',
    imgUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: Math.random(),
    title: 'Автоматизированный расчёт материалов и трудозатрат',
    description:
      'Автоматизированная система расчёта материалов и трудозатрат ускоряет процесс проведения технического анализа потенциальных изделий и подготовки технико-коммерческого предложения',
    imgUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const MainPage = () => {
  return (
    <div className={styles.main}>
      {DUMMY_DATA.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgUrl={card.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
