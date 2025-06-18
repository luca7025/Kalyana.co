import React, { useState } from "react";
import contactBanner from "../../assets/contact-pics/contact-pic.png";
import contactHead from "../../assets/contact-pics/contact-head.png";
import styles from "./Contact.module.css";
import conClass from "./Contact.module.css";
import {
  Box,
  TextField,
  Stack,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // States for form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    details: "",
    date: null,
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validate inputs
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.contact.trim()) tempErrors.contact = "Contact is required";
    if (!formData.details.trim()) tempErrors.details = "Event details required";
    if (!formData.date) tempErrors.date = "Please select event date";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully! ✅");
      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        details: "",
        date: null,
      });
    } else {
      alert("Please fill all fields correctly. ⚠️");
    }
  };

  return (
    <>
      <section className="contact-banner">
        <img src={contactBanner} alt="" style={{ width: "100%", height: "100%" }} />
      </section>

      <section className={conClass.contactImg}>
        <img src={contactHead} alt="" className={styles.handimg} />
        <div className={conClass.p}>
          Want to make us a part of your celebration? Fill the form below with
          your details and we will get back to you as soon as we can.
        </div>
      </section>

      <Container
        className={conClass.main}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          py: 6,
          px: 2,
        }}
      >
        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            padding: 4,
            flex: 1,
            maxWidth: 500,
            width: "100%",
          }}
          noValidate
        >
          <Typography variant="h5" align="center" gutterBottom>
            Contact Us
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
              error={!!errors.contact}
              helperText={errors.contact}
            />
            <TextField
              label="Event details"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.details}
              onChange={(e) => handleChange("details", e.target.value)}
              error={!!errors.details}
              helperText={errors.details}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Event Date"
                value={formData.date}
                onChange={(newValue) => handleChange("date", newValue)}
                slotProps={{ textField: { fullWidth: true, error: !!errors.date, helperText: errors.date } }}
              />
            </LocalizationProvider>
            <Button type="submit" variant="contained" endIcon={<SendIcon />} fullWidth>
              Send
            </Button>
          </Stack>
        </Box>

        {/* Address Card */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            padding: 4,
            flex: 1,
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Our Address
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              fontFamily: "revert-layer",
              lineHeight: 1.8,
            }}
          >
            <strong>Kalyana Company</strong>
            <br />
            1st Floor, Harmony Plaza,
            <br />
            Vellayambalam – Kowdiar Road,
            <br />
            Thiruvananthapuram, Kerala – 695003
            <br />
            📞 +91 88934 56789
            <br />
            📧 contact@kalyanacompany.in
            <br />
            🌐 www.kalyanacompany.in
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
