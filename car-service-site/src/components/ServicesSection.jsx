import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
    {
        title: "Réparation mécanique",
        description: "Diagnostic complet, freins, moteur, suspension, etc.",
        icon: "🛠️",
    },
    {
        title: "Lavage & Carwash",
        description: "Nettoyage intérieur/extérieur, cire, polissage.",
        icon: "🚗",
    },
    {
        title: "Entretien régulier",
        description: "Vidanges, filtres, vérifications périodiques.",
        icon: "🔧",
    },
    {
        title: "Pré-contrôle technique",
        description: "Inspection & ajustements avant le CT.",
        icon: "📋",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 bg-gray-700">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Nos Services</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full">
                            <div className="text-5xl mb-4 text-red-500">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
