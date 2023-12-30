const Header = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Bonani",
          text: "Ukrasi za torte!",
          url: window.location.href,
        });
        console.log("Shared successfully");
      } else {
        alert("Web Share API is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <section className="bg-roza3 w-full p-2 text-center tracking-wider">
      <button onClick={handleShare} className="tracking-widest text-white">
        {"Podijeli stranicu sa drugima".toUpperCase()}
      </button>
    </section>
  );
};

export default Header;
