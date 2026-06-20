import clsx from "clsx";

type Element = {
    highlight?: boolean;
    titre?: string;
    libelle: string;
    prix: string;
};

export function Plats({
    highlight = false,
    titre,
    libelle,
    prix,
}: Element) {
    return (
        <div
            className={clsx(
                "relative group overflow-hidden",
                highlight && "border border-[#ca9c5e] rounded-xl"
            )}
        >
            {titre && (
                <div className="text-white text-xl text-center lg:text-left py-1">
                    {titre}
                </div>
            )}
            <div className="p-4">
                {/* Libellé + ligne pointillée + Prix */}
                <div className="flex items-baseline gap-2 py-1">
                    <span className="text-white text-xl whitespace-nowrap">
                        {libelle}
                    </span>
                    <span className="flex-1 border-b border-dotted border-white/40 translate-y-[-4px]" />
                    <span className="text-[#ca9c5e] font-bold text-xl whitespace-nowrap">
                        {prix} CFA
                    </span>
                </div>
            </div>
        </div>
    );
}