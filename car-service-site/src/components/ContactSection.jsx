export default function ContactSection() {
    return (
        <section className="min-h-screen bg-gray-400 flex items-center justify-center px-6 py-20">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
                    Contactez-nous
                </h2>
                <form className="space-y-4 ">
                    <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                        placeholder="Votre message"
                        rows="4"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}
