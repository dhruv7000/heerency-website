const WhatsAppButton = () => {
    const phoneNumber = "919999999999"; // replace with client number
  
    const message = "Hello, I am interested in your interior design services.";
  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed 
          bottom-4 right-4 
          md:bottom-6 md:right-6 
          bg-green-500 
          hover:bg-green-600 
          text-white 
          p-3 md:p-4 
          rounded-full 
          shadow-lg 
          z-50
        "
      >
        💬
      </a>
    );
  };
  
  export default WhatsAppButton;