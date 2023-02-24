import { Prestation } from "./prestation";

export const PRESTATIONS: Prestation[] = [
    {
        id: 1,
        prix: 10,
        duree_session: "1h - 1h30",
        name: "Accompagnement personnalisé à la parentalité",
        description: "<p>Chaque enfant est unique et son, ses parents également !</p> <p>L’arrivée d’un bébé provoque un bouleversement. Il est souvent difficile de  comprendre ce petit être qui a des rythmes, un sommeil, une communication… différents de l’adulte.</p> <p>Il n’y a pas de recette Miracle ! Ensemble, avec un temps d’échange, une écoute attentive, sans jugement ni tabou, je vous propose un accompagnement. En fonction de vos problématiques, vos besoins, nous chercherons des solutions dans le but que vous trouviez ensuite seul les réponses adaptées à votre enfant.</p> <p>Je vous propose plusieurs thématiques :<ul> <li>les pleurs,</li><li>les rythmes, le sommeil</li><li> l'alimentation : lait maternel, laits artificiels, diversification alimentaires</li><li>le portage : à bras, écharpe…</li><li> le développement psychomoteur </li><li> l’éveil</li><li> le soutien émotionnel en post partum</li><li> les soins d’hygiène au nouveau-né : change de couche, le bain, le lavage de nez,…</li></ul></p>",
        isVisible:true,
    },
    {
        id: 2,
        prix: 50,
        duree_session: "3h",
        name: "Apprentissage des massages pour bébé (de 1 à 12 mois) en individuel ou en groupe",
        description: "Instructrice en massages pour bébé Certifiée AFMB depuis 2019, je peux vous apprendre à masser votre bébé.",
        isVisible:true,
    }
];