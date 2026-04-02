import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setError("");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-6 bg-dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Contact <span className="text-primary">Us</span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              setSuccess(false);
              setError("");
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setSuccess(false);
              setError("");
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            required
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              setSuccess(false);
              setError("");
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded min-h-[120px]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-primary px-6 py-3 rounded-full text-black font-semibold w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
