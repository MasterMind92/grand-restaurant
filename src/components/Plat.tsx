import clsx from "clsx";

type Element = {
    highlight?: string;
    titre?: string;
    image?: string;
    libelle: string;
    prix: string;
    ingredient: string[];
};

export function Plat({
    highlight ,
    titre,
    image,
    libelle,
    prix,
    ingredient,
}: Element) {
    return (
        <div
            className={clsx(
                "relative group overflow-hidden",
                highlight && "border border-[#ca9c5e] rounded-xl"
            )}
        >
            {titre && (
                <div className="text-white text-xl text-center lg:text-left py-2">
                    {titre}
                </div>
            )}

            <div className="p-4">
                {/* Image */}
                {image && (
                    <div className="mb-4">
                        <img
                            src={image}
                            alt={libelle}
                            className="w-full h-56 object-cover rounded-lg"
                        />
                    </div>
                )}

                {/* Libellé et Prix */}
                <div className="flex justify-between items-center py-3">
                    <div className="text-[#FFFFFF] text-xl text-left">
                        {libelle}
                    </div>

                    <div className="text-[#ca9c5e] font-bold text-xl ml-3 whitespace-nowrap">
                        {prix} CFA
                    </div>
                </div>

                {/* Ingrédients */}
                <div className="text-white text-lg text-center sm:text-left">
                    {ingredient.join(" / ")}
                </div>
            </div>

            {/* Tooltip */}
            <div
                className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    mt-2
                    w-72
                    bg-white
                    text-gray-700
                    p-4
                    rounded-lg
                    shadow-xl
                    opacity-0
                    invisible
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:visible
                    z-50
                "
            >
                <h2 className="font-bold text-lg mb-2">
                    Informations du Menu
                </h2>

                <ul className="list-disc pl-5 space-y-1">
                    <li>Produit frais du jour</li>
                    <li>Préparation artisanale</li>
                    <li>Accompagnement inclus</li>
                    <li>Disponible sur place et à emporter</li>
                </ul>

                <p className="mt-3 text-sm">
                    NB : Les ingrédients peuvent varier selon la disponibilité.
                </p>
            </div>
        </div>
    );
}