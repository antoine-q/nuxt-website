---
title: Développer un thème Wordpress avec des super pouvoirs
description: Développer des thèmes wordpress c'est souvent un peu ennuyeux... Aujourd'hui nous allons découvrir un framework Wordpress remarquable basé sur Laravel.
img: blog/themosis.png
alt: My first blog Post
date: 2021-11-19T15:51:26.054Z
author: Antoine Queru
authorslug: antoine-queru
---

## Themosis, un framework Wordpress fabuleux
Le framework dont nous allons discuter aujourd'hui s'appelle [Themosis](https://framework.themosis.com/). Il a été développé par une agence Web (Themosis Studio) et est basé sur Laravel. 
Il reprend un bon nombre des fonctionnalités de Laravel, comme par exemple son ORM (Eloquent) le moteur de rendu Blade, ainsi que composer et npm qui sont très pratiques pour intégrer tout types de dépendances à son projet. Son gros avantage est qu'il intègre totalement Wordpress dans cette architecture. En utilisant ce framework vous allez redécouvrir Wordpress et vous pourrez mettre en place des fonctionnaltés très facilement. D'un point de vue sécurité Themosis est également intéressant car il intègrera une surcouche de protection pour votre site Wordpress ainsi que une gestion des Routes spécifiques. 

## Des fonctionnalités très utiles pour votre projet
Les fonctionnalités que rajoute Themosis sont très intéressantes si vous avez un projet avec des spécifications techniques qui peuvent aller au delà de Wordrpress ou si vous souhaitez développer un Thème Wordpress de manière plus structurée. 

Cependant ce framework n'est pas forcément adapté à tous les projets. Si vous n'êtes pas a l'aise avec la programmation orientée objet ou si vous ne connaissez pas le fonctionnement de Laravel ou tout autre framework PHP tel que Symfony, vous risquez de perdre du temps à comprendre le fonctionnement de Themosis. De même si votre projet est assez simple et ne demande pas de foncitonnalités spécifiques ou qu'un plugin Wordpress bien connu peut vous aider à répondre à votre besoin, Themosis ne sera pas fait pour votre projet car sa surcouche apporte beaucoup de complexité à Wordpress au niveau du développement.

### LE MVC un atout pour l'organisation
Themosis intègre le modèle MVC de Laravel ce qui est un réel atout pour le développement de votre site. Vous pourrez organiser votre code correctement et vous y retrouvez lors des différentes mises à jour et de la maintenance de votre code.

### Eloquent
Eloquent peut être un réel atout pour le développement de votre site. Si vous ne souhaitez pas passer par le modèle de custompost de wordpress et créer votre propre modèle de données, eloquent pourra vous être très utile pour intégrer vos modèles personnalités sur votre site Wordpress.

### Bade ou Twig
L'utilisation d'un moteur de template est un réel confort. Vous avez ainsi le loisir de choisir votre moteur de template préféré entre Balde et Twig. Cela vos permettra d'éviter d'insérer du PHP dans vos vues et de mieux structurer l'affichage des différents éléments de votre site.

### Le routing simplifié
Themosis intègre également le système de routes de Laravel. Cela vous permettre définir toutes vos routes de manière simplifiés. Les routes natives de wordpress sont également supportés.

## Installer Themosis pour son prochain projet

Dans cette partie nous allons voir comment mettre en place un environnement de développement pour Themosis, si vous souhaitez plus d'information sur son fonctionnement,vous pouvez vous référer à la [documentation présente sur le site officiel](https://framework.themosis.com/)).

### Prérequis
Afin de permettre l'intallation de Themoisis, voici les différents outils dont vous allez avoir besoin :
- [PHP](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org/)
- [Vagrant](https://www.vagrantup.com/downloads)
- [Git](https://gitforwindows.org)
- [Node](https://nodejs.org/en/download/)
- [VirtualBox](https://www.virtualbox.org)
- [PhpMyAdmin](https://www.phpmyadmin.net)

### Installation

#### Téléchargement de Themosis
Ouvrez votre terminal ou PowerShell dans votre dossier de travail et exécutez la commande suivante :
remplacez simplement `myproject` par le nom de votre projet.

```bash
composer create-project themosis/themosis myproject
```

#### Initialisation de Homestead
Themosis V2 fonctionne avec Homestead, pour le faire fonctionner vous devez initialiser homestead. 

```bash
cd myproject
./vendor/bin/homestead make
```

#### Configuration du fichier `homestead.yaml`

Afin de faire fonctionner votre environnement, modifiez le fichier `homestead.yaml` comme ce qui suit. Il vous faudra juste remplacer `myproject` par le nom de votre projet, `PATH_TO_YOUR_WORKSPACE` par le chemin menant au dossier contenant votre projet et enfin `USERNAME` par votre nom d'utilisateur. Si votre nom d'utilisateur comprend des espaces, commencer le chemin par des antislash jusqu'au nom d'utilisateur `\` et terminez le par des slash après le nom d'utilisateur `/`.

Exemple :
```
'C:\Users\PC foo bar/.ssh/id_rsa'
```

```yaml
ip: VOTRE_IP
memory: 2048
cpus: 1
provider: virtualbox
authorize: 'C:\Users\UNSERNAME/.ssh/id_rsa.pub'
keys:
    - 'C:\Users\UNSERNAME/.ssh/id_rsa'
folders:
    -
        map: 'C:\PATH_TO_YOUR_WORKSPACE\myproject'
        to: /home/vagrant/code
    -
        map: 'C:\PATH_TO_YOUR_WORKSPACE/phpMyAdmin'
        to: /home/vagrant/code/phpMyAdmin
sites:
    -
        map: myproject.test
        to: /home/vagrant/code/htdocs
    -
        map: phpmyadmin.test
        to: /home/vagrant/code/phpMyAdmin
databases:
    - homestead
name: myporject
hostname: myproject
```

#### Configuration du fichier `.env`
Ce fichier est automatiquement généré lors de la création de votre projet, vous aurez simplement à modifier les urls `APP_URL` et `WP_URL`. Assurez vous également d'avoir les mêmes identifiants de base de données entre le fichier `.env` et le fichier `homestead.yaml`

```env
APP_ENV=local
APP_DEBUG=true
APP_KEY= ...
APP_TD=themosis

APP_URL=http://myproject.test
WP_URL=http://myproject.test/cms

DATABASE_NAME=homestead
DATABASE_USER=homestead
DATABASE_PASSWORD=secret
DATABASE_HOST=localhost

MAIL_HOST=your-smtp-host
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_FROM_ADDRESS=noreply@themosis.com
MAIL_FROM_NAME=Themosis
```

#### Installation du thème
Rendez vous à la racine de votre projet et tapez :

```
php console theme:install my-theme
```

#### Installation des dépendances NPM ou YARN
Une fois le thème installé vous pouvez vous rendre dans le dossier du thème `/htdocs/content/theme/my-theme` et taper les commandes suivantes pour installer les dépendances NPM


```bash
# Using yarn
yarn install
yarn run watch

# Using npm
npm install
npm run watch
```

#### Happy coding 
Votre site est installé, il ne vous restera plus qu'a lancer l'utilitaire Vagrant pour monter une machine virtuelle : `vagrant up` a la racine de votre projet.

## Conclusion
Themosis est un framework très pratique pour structurer son projet Wordpress, le maintenir et le faire grandir petit à petit sans avoir le besoin de tout recommencer. N'hésitez pas à me contacter si vous avez des questions à ce sujet.
