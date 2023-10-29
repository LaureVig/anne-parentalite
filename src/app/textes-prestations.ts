import {Prestation} from "./prestation";

export const PRESTATIONS: Prestation[] = [
  {
    id: 1,
    prix: "60€ la première séance, 50€ les suivantes",
    duree_session: "1h - 1h30",
    name: "Accompagnement personnalisé à la parentalité",
    description: "<p>Chaque enfant est <b>unique</b> et son, ses parents également !</p>" +
      "<p>L'arrivée d'un bébé provoque un bouleversement. Il est souvent difficile de <b>comprendre ce petit être</b> qui a des rythmes, un sommeil, une communication… différents de l'adulte.</p>" +
      "<p>Il n'y a pas de <b>recette Miracle</b> ! Ensemble, avec un temps d'échange, une écoute attentive, sans jugement ni tabou, je vous propose un accompagnement. " +
      "En fonction de vos problématiques, vos besoins, nous chercherons des solutions dans le but que vous trouviez ensuite seul les réponses adaptées à votre enfant.</p>" +
      "<p>Je vous propose plusieurs thématiques :" +
      "<ul> <li>les pleurs,</li>" +
      "<li>les rythmes, le sommeil</li>" +
      "<li> l'alimentation : lait maternel, laits artificiels, diversification alimentaires</li>" +
      "<li>le portage : à bras, écharpe…</li>" +
      "<li> le développement psychomoteur </li>" +
      "<li> l'éveil</li>" +
      "<li> le soutien émotionnel en post partum</li>" +
      "<li> les soins d'hygiène au nouveau-né : change de couche, le bain, le lavage de nez,…</li></ul></p>",
    isVisible: true,
    image: "../../assets/parents.jpg",
    imageDescription: 'Couple de parents tenant un nourrisson'
  },
  {
    id: 2,
    prix: "50€ séance découverte, 150€ les 5 séances",
    duree_session: "3h",
    name: "Apprentissage des massages pour bébé (de 1 à 12 mois) en groupe ou en individuel",
    description: "<p>Instructrice en massages pour bébé de l'AFMB (Association Française de Massages pour Bébé)," +
      " je propose un atelier massages pour les enfants de 1 à 12 mois.  Il s'agit de vous initier à une méthode très respectueuse de l'enfant," +
      " comme le fait de demander l'autorisation à votre bébé de le masser. Vous seul, parent, pouvez masser votre enfant dans ce cadre." +
      " Je vous montre les massages sur un poupon, votre bébé sera touché, massé uniquement par vous.</p>" +
      "<p> <b>Pourquoi masser son bébé ?</b></p>" +
      "<p>Il y a quatre grandes catégories de bienfaits pour le bébé : " +
      "<ul> <li>La relaxation : elle permet l'amélioration du cycle du sommeil, l'augmentation de la capacité de se calmer, d'adaptation à l'environnement," +
      " la normalisation du tonus musculaire, le plaisir des moments privilégiés, la diminution des taux d'hormones liées au stress, ...</li>" +
      "<li>Le soulagement : soulagement des gaz, coliques, la constipation mais aussi les tensions musculaires et les poussées dentaires... </li>" +
      "<li>L'interaction : la promotion d'un attachement sécurisant, des moments de qualités seul à seul, le toucher nourrissant, …</li>" +
      "<li>La stimulation du développement de la conscience corporelle, des systèmes circulatoires, hormonaux (ocytocine,..), immunitaire, respiratoire, …</li></ul></p>" +
      "<p>Pour vous les parents, voici les bienfaits attendus : " +
      "<ul> <li>Une meilleure compréhension, approche de votre bébé, l'observation et le respect des signes envoyés par votre bébé, le développement d'un attachement partagé, </li>" +
      "<li>L'amélioration de l'estime et de la confiance en soi en tant que parent</li>" +
      "<li>La diminution des taux d'hormones liées au stress et l'augmentation des taux d'hormones de détente, </li>" +
      "<li>la rencontre avec d'autres parents...</li></ul></p>" +
      "<p>Lors de chaque cycle de massages, beaucoup de moments très précieux, très riches en émotions sont présents." +
      "Vous partagerez un moment de plaisir avec votre enfant.</p>" +
      "<p> <b>Comment s'organise l'atelier ? </b></p>" +
      "<p>Les ateliers sont au nombre de 5 séances à une semaine d'intervalle minimum. Chaque séance se déroule comme suit :" +
      " vous commencerez par une petite séance de relaxation, puis vous serez guidés pour les massages d'une partie du corps." +
      " Si votre enfant dort ou n'est pas disponible, vous pourrez vous entraîner à masser sur un poupon. Ensuite, vous aurez une discussion variée sur le thème du petit enfant, la parentalité. La séance se termine par un poème." +
      " Chaque séance dure une bonne heure. L'huile est fournie, vous repartez avec un schéma sur les massages vus ensemble. Lors de la séance suivante, des révisions sont faites et une autre partie du corps est montrée." +
      " Il vous est demandé d'apporter une grande serviette de toilette et de quoi changer la couche de votre bébé. Photos et films ne seront pas possibles pendant cet atelier." +
      " L'atelier massages s'effectue en individuel ou par petit groupe (5 familles maximum), chaque enfant est accompagné de son ou ses parent(s) (père et ou mère)." +
      " Espérant que cet atelier répondra à vos attentes .</p>",
    isVisible: true,
    image: "../../assets/afmb.png",
    imageDescription: "Logo de l'AFMB (Association Française de Massage pour Bébé)"
  },
  {
    id: 3,
    prix: "En fonction du choix",
    duree_session: "0h",
    name: "Bons Cadeaux",
    description: "<p> Vous voulez faire plaisir à un proche, pour un cadeau de naissance par exemple ?</p>" +
      "<p>N'hésitez à prendre contact ! </p>" +
      "<p>Il faudra juste me préciser la somme, les coordonnées et si vous désirez une prestation en particulier (massages, soutien à la parentalité,..).</p> " +
      "<p>Le bon est valable un an.</p>",
    isVisible: true,
    image: "../../assets/cadeau.jpg",
    imageDescription: "image de cadeaux"
  }
];
