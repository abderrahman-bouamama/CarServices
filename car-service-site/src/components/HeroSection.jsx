import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";

const slides = [
    {
        title: "Qualified Car Repair",
        subtitle: "// Car Servicing //",
        description: "Fast, reliable, and affordable repair service for your car.",
        button: "Learn More",
        image: car1,
    },
    {
        title: "Professional Carwash",
        subtitle: "// Car Cleaning //",
        description: "Give your car the shine it deserves with our premium wash.",
        button: "Explore Services",
        image: car2,
    },
    {
        title: "Affordable Maintenance",
        subtitle: "// Auto Checkup //",
        description: "Keep your vehicle running smoothly with scheduled maintenance.",
        button: "Book Now",
        image: car3,
    },
    {
        title: "Certified Technicians",
        subtitle: "// Expertise You Can Trust //",
        description: "Our team is trained to provide top-quality service with confidence.",
        button: "Meet the Team",
        image: car4,
    },
];

export default function HeroSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % slides.length;
            const scrollContainer = containerRef.current;
            if (scrollContainer) {
                scrollContainer.scrollTo({
                    left: index * scrollContainer.offsetWidth,
                    behavior: "smooth",
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={containerRef}
            className="w-full overflow-x-scroll snap-x snap-mandatory flex scroll-smooth"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="min-w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-between px-6 md:px-20 snap-start"
                    style={{
                        backgroundImage: "url('/garage-bg.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

                    {/* Texte à gauche animé */}
                    <motion.div
                        className="relative z-10 hidden md:block max-w-md w-full"
                        initial={{ opacity: 0, x: 100, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >

                        <p className="text-red-100 text-lg uppercase tracking-widest">
                            {slide.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">{slide.title}</h1>
                        <p className="text-lg text-gray-200">{slide.description}</p>
                        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold">
                            {slide.button}
                        </button>
                    </motion.div>

                    {/* Image à droite animée */}
                    <motion.div
                        className="relative z-10 hidden md:block max-w-md w-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src={slide.image} alt="car" className="w-full object-contain" />
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
