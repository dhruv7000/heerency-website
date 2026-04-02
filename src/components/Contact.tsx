import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-dark">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Contact <span className="text-primary">Us</span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              setSuccess(false);
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setSuccess(false);
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <textarea
            placeholder="Your Message"
            required
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              setSuccess(false);
            }}
            className="w-full p-3 bg-black border border-gray-700 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-primary px-6 py-3 rounded-full text-black font-semibold w-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
