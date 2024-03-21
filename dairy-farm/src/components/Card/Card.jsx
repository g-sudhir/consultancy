import styles from './Card.module.css';
export default function Card(props) {
  return <div className={styles.card}>
    <img src={props.img} alt={props.name} className={styles.products}/>
    <h1 className={styles.title}>{props.name}</h1>
    <p className={styles.description}>{props.description}</p>
    <button className={styles.button}>Show More</button>
  </div>;
}
