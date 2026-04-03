import { useState, type FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "../services/firebase";

const projectSteps = [
  "Share your space, goals, and inspiration",
  "Receive a tailored concept direction",
  "Move into planning and execution with clarity",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      className="bg-dark px-4 py-20 sm:px-6 md:px-8 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Start Your Project
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Tell us about your space, style, and timeline. We will get back to
            you with the next steps.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Response Time
              </p>
              <p className="mt-2 text-gray-300">Usually within 24 hours</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-primary">
                Project Support
              </p>
              <p className="mt-2 text-gray-300">
                Residential, commercial, renovation, and 3D planning
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/0 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">
              What Happens Next
            </p>
            <div className="mt-4 space-y-4">
              {projectSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-gray-300 sm:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-black/60 p-5 text-left shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-6 md:p-8"
        >
          <div className="pb-2">
            <h3 className="text-xl font-semibold text-white">Book a Design Consultation</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Share a few details and we will reach out with the right next step
              for your project.
            </p>
          </div>

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
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3"
          />

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
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3"
          />

          <textarea
            placeholder="Your Message"
            required
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              setSuccess(false);
              setError("");
            }}
            className="min-h-[140px] w-full rounded-xl border border-gray-700 bg-black px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="pt-2 text-center text-green-500">
              Message sent successfully!
            </p>
          )}

          {error && <p className="pt-2 text-center text-red-500">{error}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
