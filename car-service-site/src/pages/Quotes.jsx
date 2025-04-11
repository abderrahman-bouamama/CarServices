export default function Quotes() {
    return (
        <section className="min-h-screen bg-gray-600 flex items-center justify-center px-6 py-20">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
                    Demandez un Devis
                </h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nom complet"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="email"
                        placeholder="Adresse email"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <select
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        <option>Type de service souhaité</option>
                        <option>Réparation mécanique</option>
                        <option>Lavage / Carwash</option>
                        <option>Entretien régulier</option>
                        <option>Préparation contrôle technique</option>
                    </select>
                    <textarea
                        placeholder="Détaillez votre demande..."
                        rows="4"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
                    >
                        Envoyer votre demande
                    </button>
                </form>
            </div>
        </section>
    );
}
