-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 27 fév. 2022 à 18:29
-- Version du serveur :  10.4.16-MariaDB
-- Version de PHP : 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `d_facilities`
--

-- --------------------------------------------------------

--
-- Structure de la table `administrateur`
--

CREATE TABLE `administrateur` (
  `login` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`login`, `password`, `lastname`, `firstname`) VALUES
('admin', '$2y$10$a7Pg3LtCXerRHjqEubMzQu04KenxdJ3E4Y0TEzp2D3MUoEqEDbYdq', 'ruet', 'cindy');

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `article_title` varchar(255) NOT NULL,
  `article_description` text NOT NULL,
  `article_image1` varchar(300) DEFAULT NULL,
  `article_image2` varchar(300) DEFAULT NULL,
  `article_video` varchar(300) DEFAULT NULL,
  `article_createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`article_id`, `article_title`, `article_description`, `article_image1`, `article_image2`, `article_video`, `article_createdAt`) VALUES
(1, 'Nouveaux locaux !!!!!', 'Et voil&agrave; ! &Ccedil;a y est ! Enfin ! \r\nRetrouvez d&egrave;s &agrave; pr&eacute;sent votre agence D-facilities, au :\r\nℹ 4 route du Lavoir &agrave; Saint geours de Maremne. \r\nNous sommes situ&eacute;s derri&egrave;re la chocolaterie TTotte. \r\nN\'h&eacute;sitez pas &agrave; venir nous rendre visite, le caf&eacute; vous sera offert ! ?☕', 'locaux.jpeg', 'locaux2.jpg', NULL, '2022-02-01 18:39:34'),
(4, 'nouveau site internet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus magna eget purus eleifend eleifend. Donec vitae sodales lorem. Mauris sagittis faucibus mauris et congue. Vivamus interdum id lacus sit amet finibus. In et lobortis nisi. Sed eleifend nisi ut vulputate tempor. Proin elementum lectus in interdum feugiat. Proin at leo mauris.\r\n\r\nFusce at felis erat. Praesent sit amet dolor orci. Fusce eleifend, diam id varius commodo, libero nulla interdum justo, sit amet interdum dui ligula eu elit. Fusce dictum arcu vel ante faucibus ullamcorper. Duis in laoreet nunc. Aliquam a sem sit amet metus sollicitudin congue et sit amet quam. Integer tempus, magna nec vestibulum vestibulum, purus lacus rutrum lacus, vel tempus justo diam facilisis erat. Vivamus dolor felis, laoreet id nunc eu, vulputate eleifend nisi. Aliquam pellentesque leo ac ante dictum fermentum. Etiam nec sapien elit. Cras faucibus mollis ligula vehicula elementum. Aliquam elit leo, viverra nec mauris et, egestas pellentesque sapien. Mauris lacinia erat ac libero bibendum dignissim eu vitae risus.', NULL, NULL, 'remise-en-etat.mp4', '2022-01-02 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

CREATE TABLE `equipe` (
  `equipe_id` int(11) NOT NULL,
  `equipe_nom` varchar(255) NOT NULL,
  `equipe_prenom` varchar(255) NOT NULL,
  `equipe_poste` varchar(255) NOT NULL,
  `equipe_image` text NOT NULL,
  `equipe_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`equipe_id`, `equipe_nom`, `equipe_prenom`, `equipe_poste`, `equipe_image`, `equipe_description`) VALUES
(1, 'SOURIGUES-GAVINET', 'David', 'Gérant', 'David.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum dolor in elementum mollis. Nullam nunc velit, congue sit amet est pharetra, porttitor pellentesque nibh. Pellentesque bibendum tempor interdum. Integer sed ipsum quis sem lobortis scelerisque. Nullam vitae euismod tellus, et gravida lectus.');

-- --------------------------------------------------------

--
-- Structure de la table `offres`
--

CREATE TABLE `offres` (
  `offres_id` int(11) NOT NULL,
  `offres_reference` text NOT NULL,
  `offres_title` varchar(255) NOT NULL,
  `offres_description` text NOT NULL,
  `offres_lieu` varchar(300) NOT NULL,
  `offres_type_de_contrat` text NOT NULL,
  `offres_temps_contrat` text DEFAULT NULL,
  `offres_duree` text DEFAULT NULL,
  `offres_temps_de_travail` text NOT NULL,
  `offres_nbr_heures` text NOT NULL,
  `offres_salaire` varchar(255) NOT NULL,
  `offres_type_site` text NOT NULL,
  `offres_date_debut` text NOT NULL,
  `offres_createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `offres`
--

INSERT INTO `offres` (`offres_id`, `offres_reference`, `offres_title`, `offres_description`, `offres_lieu`, `offres_type_de_contrat`, `offres_temps_contrat`, `offres_duree`, `offres_temps_de_travail`, `offres_nbr_heures`, `offres_salaire`, `offres_type_site`, `offres_date_debut`, `offres_createdAt`) VALUES
(1, 'AGENT40230', 'Agents /Agentes de propreté (H/F) qualifiées.', '                                 L\'entreprise D-Facilities Propreté &amp; Services associés, société dynamique ayant une dimension familiale, créée en 2020 et basée à Saint Geours de Maremne (40) recherche deux agents de propreté (H/F) qualifiés.\r\n\r\nL\' agent sera chargé d\'intervenir sur les sites de nos clients sur Saint geours de maremne. (3 sites professionnels et 1 domicile)\r\ndes opérations de nettoyage au sein de bureaux/logement \r\n\r\n\r\n\r\n', 'Saint Geours de Maremne (40)', 'CDD', 'TEMPS PARTIEL', '6 MOIS', 'Mensuel', '135h', '10,73 / h', 'Industriel', '01/03/2022', '2022-02-27 17:29:51');

-- --------------------------------------------------------

--
-- Structure de la table `partenaires`
--

CREATE TABLE `partenaires` (
  `partenaires_id` int(11) NOT NULL,
  `partenaires_name` varchar(255) NOT NULL,
  `partenaires_subTitle` text NOT NULL,
  `partenaires_description` text NOT NULL,
  `partenaires_image` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `partenaires`
--

INSERT INTO `partenaires` (`partenaires_id`, `partenaires_name`, `partenaires_subTitle`, `partenaires_description`, `partenaires_image`) VALUES
(31, 'Resovalie ', 'Business Club', 'L\'entreprise D-Facilities est un partenaire de Resovalie', '32669_resovalie_Logo-business-club.png'),
(32, 'FEP', 'Centre Sud-Ouest', 'L\'entreprise D-Facilities est adh&eacute;rente de la F&eacute;d&eacute;ration des Entreprises de Propret&eacute;', '61359_FEP CSO.png'),
(33, 'LSM', 'Le tout sur-mesure !', 'L\'entreprise D-Facilities est un partenaire de la LS Menuiserie', '29505_logo_LSM.png');

-- --------------------------------------------------------

--
-- Structure de la table `partenaires_reseau`
--

CREATE TABLE `partenaires_reseau` (
  `partenaires_id` int(11) NOT NULL,
  `reseau_id` int(11) NOT NULL,
  `source` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `partenaires_reseau`
--

INSERT INTO `partenaires_reseau` (`partenaires_id`, `reseau_id`, `source`) VALUES
(31, 8, 'https://resovalie.fr/'),
(31, 9, 'https://www.facebook.com/resovalie/'),
(31, 10, 'https://www.linkedin.com/company/resovalie/?originalSubdomain=fr'),
(32, 8, 'https://www.monde-proprete.com/'),
(32, 9, 'https://www.facebook.com/mondedelaproprete/'),
(32, 11, 'https://www.instagram.com/mondedelaproprete/'),
(32, 12, ' https://twitter.com/FedeProprete'),
(33, 8, 'https://www.lsmenuiserie.fr/'),
(33, 9, 'https://www.facebook.com/LSMenuiserie33/'),
(33, 10, 'https://www.linkedin.com/in/ls-menuiserie-8787a0217/'),
(33, 11, 'https://www.instagram.com/lsmenuiserie/');

-- --------------------------------------------------------

--
-- Structure de la table `reseau`
--

CREATE TABLE `reseau` (
  `reseau_id` int(11) NOT NULL,
  `reseau_name` varchar(255) NOT NULL,
  `reseau_icone` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reseau`
--

INSERT INTO `reseau` (`reseau_id`, `reseau_name`, `reseau_icone`) VALUES
(8, 'site internet', 'fa fa-globe'),
(9, 'facebook', 'fab fa-facebook-f'),
(10, 'linkedin', 'fab fa-linkedin'),
(11, 'instagram', 'fab fa-instagram'),
(12, 'twitter', 'fab fa-twitter');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`login`);

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Index pour la table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`equipe_id`);

--
-- Index pour la table `offres`
--
ALTER TABLE `offres`
  ADD PRIMARY KEY (`offres_id`);

--
-- Index pour la table `partenaires`
--
ALTER TABLE `partenaires`
  ADD PRIMARY KEY (`partenaires_id`);

--
-- Index pour la table `partenaires_reseau`
--
ALTER TABLE `partenaires_reseau`
  ADD PRIMARY KEY (`partenaires_id`,`reseau_id`),
  ADD KEY `FK_reseau_partenaires_reseau` (`reseau_id`);

--
-- Index pour la table `reseau`
--
ALTER TABLE `reseau`
  ADD PRIMARY KEY (`reseau_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT pour la table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `equipe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `offres`
--
ALTER TABLE `offres`
  MODIFY `offres_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `partenaires`
--
ALTER TABLE `partenaires`
  MODIFY `partenaires_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT pour la table `reseau`
--
ALTER TABLE `reseau`
  MODIFY `reseau_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `partenaires_reseau`
--
ALTER TABLE `partenaires_reseau`
  ADD CONSTRAINT `FK_partenaires_partenaires_reseau` FOREIGN KEY (`partenaires_id`) REFERENCES `partenaires` (`partenaires_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_reseau_partenaires_reseau` FOREIGN KEY (`reseau_id`) REFERENCES `reseau` (`reseau_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
