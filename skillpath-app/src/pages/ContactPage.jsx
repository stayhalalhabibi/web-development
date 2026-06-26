import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      alert("Fill all fields");
      return;
    }

    setSuccess(true);
  };

  return (
    <>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
        />

        <br />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />

        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      {success && (
        <h3>
          Form Submitted Successfully!
        </h3>
      )}
    </>
  );
}

export default ContactPage;