const testimonials = [
    {
        name: "Sarah El Amrani",
        title: "Cliente fidèle",
        message:
            "Excellent service ! Ma voiture est ressortie comme neuve. Le personnel est professionnel et rapide.",
        image: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Yassine Bouzid",
        title: "Propriétaire de taxi",
        message:
            "J’ai fait appel à eux pour un entretien complet. Très satisfait du rapport qualité/prix. Je recommande !",
        image: "https://i.pravatar.cc/100?img=14",
    },
    {
        name: "Hajar Benyamina",
        title: "Cliente occasionnelle",
        message:
            "Très bon accueil, travail soigné et rapide. Le carwash est top et les prix sont raisonnables.",
        image: "https://i.pravatar.cc/100?img=17",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Témoignages Clients</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                                <p className="text-sm text-gray-500">{t.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">"{t.message}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
