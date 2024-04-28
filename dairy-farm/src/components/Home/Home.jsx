import styles from "./Home.module.css";
import { wallpaper } from "../../wallpaper";
export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.box_info}>
          <p className={styles.box_info__text}>
            Saravana Dairy Farm, nestled in the serene surroundings of Uthukuli,
            stands as a beacon of excellence in dairy production. With a
            steadfast commitment to quality and sustainability, Saravana Dairy
            Farm has been serving the community with premium dairy products for
            years. Situated amidst lush greenery and pristine landscapes, our
            farm is dedicated to providing the freshest and most nutritious
            dairy products to our valued customers.
          </p>
        </div>
        <img src={wallpaper[0]} alt="farm_photo" className={styles.img_main} />
      </div>
      <section className={styles.container}>
        <div>
          <h2 className={styles.head}>Why choose Saravana Dairy Farm?</h2>
          <p className={styles.text}>
            Purity. Purity. Purity. We go to great lengths to ensure that you
            only get the best of what we have to offer.
          </p>
        </div>
        <div className={styles.box}>
          <div>
            <img src="https://d392o9g87c202y.cloudfront.net/grbdairy/tree.png"></img>
            <p>100% Natural</p>
          </div>
          <div>
            <img src="https://d392o9g87c202y.cloudfront.net/grbdairy/govt-of-india.png"></img>
            <p>Agmark Certified</p>
          </div>
          <div>
            <img src="https://d392o9g87c202y.cloudfront.net/grbdairy/premium-quality.png"></img>
            <p>Highest Quality Standards</p>
          </div>
          <div>
            <img src="https://d392o9g87c202y.cloudfront.net/grbdairy/fssai-logo.png"></img>
            <p>FSSAI</p>
          </div>
        </div>
      </section>
    </main>
  );
}
