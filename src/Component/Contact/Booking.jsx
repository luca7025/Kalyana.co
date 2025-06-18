// import React from "react";
// import styles from "./Booking.module.css";

// const Booking = () => {
//   return (
//      <div className={styles.bvideo}>
//     <div className={styles.main}>
//       <div className={styles.bookingContainer}>
//         <h2 className={styles.heading}>Book Your Session</h2>
//         <form className={styles.bookingForm}>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <input type="tel" placeholder="Phone Number" required />
//           <input type="date" required />
//           <input type="time" required />
//           <textarea placeholder="Message (Optional)" rows="4"></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Booking;



import React, { useState } from "react";
import styles from "./Booking.module.css";

const Booking = ({ package: selectedPackage, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data (e.g., API call) here
    console.log(formData);
    closeModal(); // Close the modal after submission
  };

  return (
    <div className={styles.bookingFormContainer}>
      <h2>Book Your {selectedPackage.name} Session</h2>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (Optional)"
          rows="4"
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button" className={styles.closeBtn} onClick={closeModal}>Close</button>
      </form>
    </div>
  );
};

export default Booking;
