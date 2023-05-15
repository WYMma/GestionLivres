import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <i className="fas fa-home"></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/books" activeClassName="active">
                        <i className="fas fa-book"></i> Livres
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        <i className="fas fa-envelope"></i> Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
const Home = () => {
    return <div className="container">
        <br/>
        <br/><br/>
        <h1>Bienvenue!</h1>
        <br/>
        <h4>Introduction</h4>
        <p>Dans le cadre de ce rapport, nous présenterons la création d'un projet React avec deux composants JSX. L'objectif principal est de développer une interface conviviale pour la description des livres, ainsi qu'une barre de navigation contenant les rubriques "Home", "Livre" et "Contact". Pour cela, nous avons utilisé Node.js et CSS, en implémentant les fonctionnalités nécessaires pour manipuler les livres et en créant les interfaces requises pour chaque rubrique.</p>
        <h6>1- Composant de description des livres :</h6>
        <p>Le premier composant est dédié à l'interface de description des livres. Chaque livre est défini par un identifiant, un titre, une description et une image de sa page de garde. Les fonctionnalités d'ajout et de suppression de livres ont également été implémentées pour permettre la manipulation des données.</p>
        <h6>2- Barre de navigation :</h6>
        <p>Le deuxième composant est une barre de navigation qui comprend les rubriques suivantes : "Home", "Livre" et "Contact". Pour chaque rubrique, une interface correspondante a été créée pour offrir une expérience utilisateur optimale.</p>
        <h6>3- Gestion des routes :</h6>
        <p>Afin de réaliser la navigation entre les différentes rubriques, nous avons utilisé la bibliothèque react-router-dom. Cela nous a permis d'établir les routes appropriées entre les composants, assurant ainsi une transition fluide d'une rubrique à l'autre.</p>
        <h4>Conclusion</h4>
        <p>En conclusion, ce projet React a été réalisé avec succès en utilisant Node.js et CSS. Deux composants JSX ont été créés, l'un pour la description des livres et l'autre pour la barre de navigation. Les fonctionnalités d'ajout et de suppression de livres ont été implémentées, et les interfaces requises pour chaque rubrique ont été créées. L'utilisation de react-router-dom a permis une gestion efficace des routes entre les composants, offrant ainsi une interface conviviale et valorisant le travail accompli.</p>
    </div>;
};
const Contact = () => {
    return (
        <div className="container">
            <br/>
            <h1>Contact</h1>
            <br/>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/267736139_3230978313855934_6468773691362062258_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WyGIWWfw5M0AX_zDBsT&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCqgc-Q5dxa07EkvgeHMRQnmT0m1A1B-AQtotOfbzQLoQ&oe=646804ED" className="card-img-top" alt="profile" />
                    <div className="card-body">
                        <h5 className="card-title">Yassin Manita</h5>
                        <p className="card-text">CPI2 | Groupe E</p>
                        <p className="card-text">yassin.manita@isimg.tn</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export { Navigation, Home, Contact };