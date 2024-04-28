import styled from "./about.module.css";
const about = () => {
  return (
    <div className={styled.box}>
      <div className={styled.container}>
        <h2>About Us</h2>

        <div className={styled.mission}>
          <h3>Our Mission</h3>
          <p>
            At Saravana Dairy Farm, our mission is to produce high-quality dairy
            products while promoting sustainable and ethical farming practices.
            We are committed to the well-being of our cows, the health of our
            consumers, and the preservation of our environment. Through
            continuous innovation and improvement, we strive to exceed our
            customers' expectations and contribute positively to our community.
          </p>
        </div>

        <div className={styled.history}>
          <h3>Our History</h3>
          <p>
            Founded in 2004, Saravana Dairy Farm started as a small family-owned
            operation. Over the years, our farm has grown significantly,
            expanding our herd, improving our farming techniques, and
            diversifying our product offerings. Today, we are proud to be a
            leading dairy producer in the region, known for our commitment to
            quality, sustainability, and customer satisfaction.
          </p>
          <p>
            In the early days, we faced many challenges and obstacles, but our
            passion for farming and dedication to our values helped us overcome
            them. We have built strong relationships with our suppliers,
            partners, and customers, and we continue to work together to build a
            brighter and more sustainable future for our dairy farm and
            community.
          </p>
        </div>

        <div className={styled.team}>
          <h3>Meet Our Team</h3>
          <p>
            Our team is the heart and soul of Saravana Dairy Farm. From our
            dedicated herdsmen and veterinarians to our skilled cheesemakers and
            customer service representatives, everyone plays a crucial role in
            the success and sustainability of our farm. We are passionate about
            what we do and take pride in providing you with the best dairy
            products possible.
          </p>
          <p>
            We believe in fostering a positive and inclusive work environment
            where everyone is valued, respected, and empowered to contribute
            their ideas and talents. Our team is constantly learning and
            adapting to new technologies and best practices to improve our
            farming operations and ensure the health and well-being of our cows.
          </p>
          <p>
            We are also committed to investing in the professional development
            of our team members, providing ongoing training and educational
            opportunities to help them grow and succeed in their careers.
            Together, we are united in our mission to make Green Pastures Dairy
            Farm a leader in the dairy industry and a trusted partner for our
            customers.
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
