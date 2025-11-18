import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import Kyostya from "../assets/images/kostya-square.webp";
import Maxwell from "../assets/images/maxwell-square.webp";
import Misha from "../assets/images/misha-square.webp";
import Xenia from "../assets/images/xenia-square.webp";

const aboutImages = [
  { src: Kyostya, alt: "About Image 1" },
  { src: Maxwell, alt: "About Image 2" },
  { src: Misha, alt: "About Image 3" },
  { src: Xenia, alt: "About Image 4" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 px-4 py-2 justify-between z-10 transition-all duration-300
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-0"
        }
      `}
    >
      <div className="w-full max-w-[1024px] mx-auto flex justify-between items-center h-9">
        <a href="/">
          <div className="flex items-center gap-1.5">
            <img src={Logo} alt="Seline Logo" className="h-[26px]" />
          </div>
        </a>

        {/* Set height to 36px */}
        <div className="flex items-center gap-2 text-text-muted text-[14px] h-[36px]">
          <a
            href=""
            className="px-3 h-full flex items-center bg-transparent hover:bg-secondary rounded-md hover:text-black transition-colors"
          >
            Pricing
          </a>

          <a
            href=""
            className="px-3 flex items-center h-full bg-transparent hover:bg-secondary rounded-md hover:text-black transition-colors"
          >
            About us
            <div className="flex items-center ml-2">
              {aboutImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="h-6 w-6 rounded-full border border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
          </a>

          <a
            href=""
            className="px-3 h-full flex items-center bg-transparent hover:bg-secondary rounded-md hover:text-black transition-colors"
          >
            Blog
          </a>

          <a
            href=""
            className="px-3 flex items-center gap-0.5 h-full bg-transparent hover:bg-secondary rounded-md hover:text-black transition-colors"
          >
            Docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right h-3.5 w-3.5 ml-1.5"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>

          <div className="border-l h-5 border-stone-300"></div>

          <a
            href=""
            className="px-3 h-full flex items-center bg-transparent hover:bg-secondary rounded-md hover:text-black transition-colors"
          >
            Sign In
          </a>

          <a
            href=""
            className="px-3 bg-primary text-white rounded-md py-2 text-[14px] font-medium h-full flex items-center"
          >
            Start for Free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
