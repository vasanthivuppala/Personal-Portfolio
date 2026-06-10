import "../Pagescss/contact.css";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
const [success, setSuccess] = useState("");

const handleSubmit = async (e) => {

  e.preventDefault();

  const response = await fetch(
    "http://localhost:5000/api/contact",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(formData)
    }
  );

  if (response.ok) {

    setSuccess("✅ Message sent successfully!");
    setTimeout(() => {
  setSuccess("");
}, 5000);

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  } else {

    setSuccess("❌ Failed to send message");

  }
};

  return (
    <section className="contact">

  <div className="contact-container">

    <div className="contact-left">

      <h2>Let's Build </h2>
      <h2>Something Amazing Together🚀</h2>

      <p>
        I'm always excited to discuss new ideas,
        collaborate on innovative projects,
        contribute to open source, or simply
        connect with fellow developers.
      </p>

     <div className="contact-email">
       <MdEmail />
    <p>vasanthivuppala890@gmail.com</p>
</div>

      <div className="contact-links">

        <a href="https://github.com/vasanthivuppala">💼 LinkedIn</a>

        <a href="https://linkedin.chttps://www.linkedin.com/in/vasanthi-vuppala-217165348/om/in/yourlinkedin">💻 GitHub</a>

        

      </div>

    </div>

    <div className="contact-right">

      <form className="contact-form" onSubmit={handleSubmit}>

       <input
  type="text"
  placeholder="Name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value
    })
  }
/>

        <input
  type="email"
  placeholder="Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value
    })
  }
/>

      <textarea
  placeholder="Message"
  rows="4"
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value
    })
  }
/>

{success && (
  <div className="success-message">
    {success}
  </div>
)}

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>

  </div>

</section>
  );
}

export default Contact;