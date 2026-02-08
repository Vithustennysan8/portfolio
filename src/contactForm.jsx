import { useState } from "react";

const ContactForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/abcdwxyz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormSent(true);
      e.target.reset();
    } else {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="border-t border-white/10 pt-8">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4 text-center">
        Send a message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white resize-none"
            placeholder="Your message..."
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="btn-primary min-w-[180px]"
            disabled={formSent}
          >
            {formSent ? "Sent ✓" : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;