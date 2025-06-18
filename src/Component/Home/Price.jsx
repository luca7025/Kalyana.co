// import React from "react";
// import styles from "./Price.module.css";
// import weddingPackages from "../../data/weddingPackages.json";

// const Card = () => {
//   return (
//     <div className={styles.packContainer}>
//       {weddingPackages.map((pkg) => (
//         <div key={pkg.id} className={styles.card}>
//           <h2 className={styles.title}>{pkg.name}</h2>
//           <p className={styles.price}>{pkg.price}</p>
//           <ul className={styles.features}>
//             {pkg.features.map((feature, index) => (
//               <li key={index} className={styles.featureItem}>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           <button className={styles.buyBtn}>Book</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;


import React, { useState } from "react";
import styles from "./Price.module.css";
import weddingPackages from "../../data/weddingPackages.json";
import Booking from "../Contact/Booking";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Function to open the modal and set the selected package
  const openBookingModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className={styles.packContainer}>
      {weddingPackages.map((pkg) => (
        <div key={pkg.id} className={styles.card}>
          <h2 className={styles.title}>{pkg.title}</h2>
          <p className={styles.price}>{pkg.price}</p>
          <ul className={styles.features}>
            {pkg.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={styles.buyBtn}
            onClick={() => openBookingModal(pkg)} 
          >
            Book
          </button>
        </div>
      ))}
      
      {/* Booking modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <Booking package={selectedPackage} closeModal={closeBookingModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
