// ContactForm.jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "../schemas/contactSchema";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            nom: "",
            telephone: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async () => {
        // console.log(data);

        // Appel API ici

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nom */}
                <div>
                    <label
                        htmlFor="nom"
                        className="block mb-1 text-left text-2xl font-medium text-white"
                    >
                        Nom
                    </label>

                    <input
                        id="nom"
                        type="text"
                        {...register("nom")}
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition border border-4 border-white
                            ${
                                errors.nom
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                            }`}
                    />

                    {errors.nom && (
                        <p className="mt-1 text-red-500">
                            {errors.nom.message}
                        </p>
                    )}
                </div>

                {/* Téléphone */}
            <div>
                <label
                    htmlFor="telephone"
                    className="block mb-1 font-medium text-white text-left text-2xl"
                >
                    Téléphone
                </label>

                <input
                    id="telephone"
                    type="tel"
                    {...register("telephone")}
                    className={`w-full rounded-lg border px-4 py-3 outline-none transition border border-4 border-white
                        ${
                            errors.telephone
                                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                        }`}
                />

                {errors.telephone && (
                    <p className="mt-1 text-red-500">
                        {errors.telephone.message}
                    </p>
                )}
            </div>

                
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-1 font-medium text-white text-left text-2xl"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition border border-4 border-white
                            ${
                                errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                            }`}
                    />

                    {errors.email && (
                        <p className="mt-1 text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-1 font-medium text-white text-left text-2xl"
                    >
                        Message (optional)
                    </label>

                    <textarea
                        id="message"
                        rows={1}
                        {...register("message")}
                        className={`w-full rounded-lg border px-4 py-3 outline-none transition resize-none border border-4 border-white
                            ${
                                errors.message
                                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                            }`}
                    />

                    {errors.message && (
                        <p className="mt-1 text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>

            </div>

            {/* Bouton */}
            <div >
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block mr-auto rounded-lg bg-green-600
                    px-6 py-3 font-medium text-white 
                    transition hover:bg-green-700 
                    disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer le message"}
                </button>
            </div>
        </form>
    );
}