import AppButton from "@/components/ui/AppButton";
import { sendContactEmail } from "@/lib/email";
import { useState, useRef } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    // Validation
    const newErrors: typeof errors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!message) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }
    try {
      await sendContactEmail({ name, email, message });
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex-1 bg-card border border-border rounded-2xl shadow-lg p-8 flex flex-col gap-5  w-full mx-auto animate-fadeIn glass-card"
      style={{ overflow: "visible" }}
    >
      <label className="text-foreground text-sm font-medium">
        Name
        <input
          name="name"
          type="text"
          className="mt-1 w-full bg-input/50 border border-input rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition"
          placeholder="Your Name"
          required
        />
        {errors.name && (
          <span className="text-neon-pink text-xs mt-1 block">
            {errors.name}
          </span>
        )}
      </label>
      <label className="text-foreground text-sm font-medium">
        Email
        <input
          name="email"
          type="email"
          className="mt-1 w-full bg-input/50 border border-input rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition"
          placeholder="you@email.com"
          required
        />
        {errors.email && (
          <span className="text-neon-pink text-xs mt-1 block">
            {errors.email}
          </span>
        )}
      </label>
      <label className="text-foreground text-sm font-medium">
        Message
        <textarea
          name="message"
          className="mt-1 w-full bg-input/50 border border-input rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition min-h-[100px]"
          placeholder="Your message..."
          required
        />
        {errors.message && (
          <span className="text-neon-pink text-xs mt-1 block">
            {errors.message}
          </span>
        )}
      </label>
      <AppButton
        type="submit"
        variant="primary"
        size="md"
        className="mt-2 w-full flex items-center justify-center gap-2"
        disabled={loading}
      >
        {loading ? "Sending..." : "SEND"}{" "}
        {loading ? (
          <FaSpinner className="animate-spin" size={20} />
        ) : (
          <FaPaperPlane size={20} />
        )}
      </AppButton>
    </form>
  );
}

export default ContactForm;
