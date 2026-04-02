const WhatsAppButton = () => {
  const phoneNumber = "919727727599"; // replace with real number
  const message = "Hello, I want to know more about your interior design services.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 md:bottom-6 md:right-6
        bg-green-500 hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        z-50
        animate-bounce
      "
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0012.02 0C5.4 0 .05 5.35.05 11.97c0 2.1.55 4.15 1.6 5.96L0 24l6.23-1.63a11.93 11.93 0 005.79 1.48h.01c6.62 0 11.97-5.35 11.97-11.97 0-3.2-1.25-6.2-3.48-8.4zM12.03 21.5a9.5 9.5 0 01-4.84-1.33l-.35-.21-3.7.97.99-3.61-.23-.37a9.47 9.47 0 01-1.45-5.01c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.93.99 6.73 2.79a9.45 9.45 0 012.78 6.73c0 5.25-4.27 9.52-9.52 9.52zm5.2-7.13c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2 3.06 4.84 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;