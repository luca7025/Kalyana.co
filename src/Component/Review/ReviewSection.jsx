import React from "react";
import styles from "./ReviewSection.module.css";
import reviews from "../../data/Review.json"; // adjust the path if needed

const ReviewSection = () => {
  return (
    <div className={styles.reviewSection}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.cardsContainer}>
        {reviews.map(({ id, name, review, rating, photo }) => (
          <div key={id} className={styles.card}>
            <img src={photo} alt={name} className={styles.photo} />
            <p className={styles.reviewText}>"{review}"</p>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={num <= rating ? styles.starFilled : styles.starEmpty}
                >
                  ★
                </span>
              ))}
            </div>
            <p className={styles.reviewer}>— {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
