import { title } from "@/components/primitives";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4  flex flex-col gap-5">
      <div className="text-center">
        <h1 className={title({ color: "blue", size: "lg" })}>Contact</h1>
        <p className="mt-2 text-lg text-default-600 font-medium">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 ">
        <span className="text-default-600 font-medium">
          Or connect with me:
        </span>
        <div className="flex gap-4 text-2xl mt-1">
          <a
            href="mailto:mahmood.sharkawey@gmail.com"
            className="hover:text-primary-500 transition-colors"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/mahmoudsharkawey"
            className="hover:text-primary-500 transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mahmoud-gamal-elsharkawey"
            className="hover:text-primary-500 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <form className="bg-white/80 dark:bg-black/40 shadow-lg rounded-xl p-6 flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-default-700 mb-1 text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-transparent"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-default-700 mb-1 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-transparent"
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-default-700 mb-1 text-left"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-default-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-transparent"
            placeholder="Type your message..."
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
