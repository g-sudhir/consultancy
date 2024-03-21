import styles from './Home.module.css';
export default function Home(){
   return( <main>
        <div>
            <div className={styles.box_info}>
                <p className={styles.box_info__text}>Saravana Dairy Farm, nestled in the serene surroundings of Uthukuli, 
                stands as a beacon of excellence in dairy production. With a steadfast
                commitment to quality and sustainability, Saravana Dairy Farm has been 
                serving the community with premium dairy products for years. Situated 
                amidst lush greenery and pristine landscapes, our farm is dedicated to 
                providing the freshest and most nutritious dairy products to our valued customers.</p>
            </div>
        <img src="../../public/Rectangle 2.png" alt="farm_photo" className={styles.img_main}/>
        </div>
    </main>);
}