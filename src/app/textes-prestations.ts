import { Prestation } from "./prestation";

export const PRESTATIONS: Prestation[] = [
    {
        id: 1,
        prix: 10,
        nb_sessions: 2,
        name: "Accompagnement personnalise à la parentalité",
        description: "(Accompagnement pour le sommeil, les pleurs, l'alimentation (sein et biberon, diversification alimentaire), portage, développement psychomoteur, éveil, soutien émotionnel en post partum, soins au \"nouveau né ?\", change, bain)",
        isVisible:true,
    },
    {
        id: 2,
        prix: 50,
        nb_sessions: 5,
        name: "Massages",
        description: "en individuel ou  en groupe",
        isVisible:true,
    }
];