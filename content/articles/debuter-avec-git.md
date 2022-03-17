---
title: Comment initialiser rapidement un dépot git
description: Lors de la création d'un nouveau projet, la mise en place de son
  dépot git est une étape indispensable, voyons comment faire cela rapidement.
img: blog/git.png
alt: Mettre en place son dépot git
date: 2022-03-17T15:59:35.933Z
author: Antoine Queru
---

## Installation de l'environnement

Pour pouvoir commencer convenablement avec git, vous devez dans un premier temps configurer votre environnement pour que tout fonctionne correctement. Pour cela rendez vous sur github ou sur bitbucket et créez vous un compte. Vous pourrez ensuite initialiser un dépôt sur l’une ou l’autre de cette plateforme.

Sur votre ordinateur, cela va dépendre de votre système d'exploitation. 

Si vous êtes sous Linux, ouvrez un Terminal et lancez la commande suivante :

```bash
$ sudo apt-get install git-all
```
l’utilitaire de paquets installera toutes les dépendances de Git si celles ci ne sont pas déjà installées sur votre ordinateur.

Si vous êtes sur Mac ouvrez un terminal et lancez la commande :

```bash
$ git --version
```
si git n’est pas encore installé l’utilitaire vous invitera à le faire. 

Sur windows vous allez devoir télécharger et installer git, à partir du site officiel : [http://git-scm.com/download/win](http://git-scm.com/download/win)

Quand tout est installé vous allez pouvoir commencer à utiliser git.

## Utilisation de git

Pour utiliser git sur un projet logiciel, rendez vous dans un premier temps dans le dossier contenant votre projet et lancez la commande git :

```bash
$ git init
```

Le dépôt git sera initialisé dans le dossier sur lequel vous vous trouvez. 

Il vous faudra ensuite ajouter tous les fichiers et sous dossiers de votre projet pour cela tapez la commande :

```bash
$ git add .
```

Vous pourrez ensuite effectuer votre premier commit ceci afin d’enregistrer les première modifications effectuées :

```bash
$ git commit -m "First Commit"
```

Le premier argument -m indique le message de commit à renseigner, cela vous permettra de commenter les modifications que vous effectuez pour vous retrouvez dans l’historique. Le message doit être simple et concis tout en résumant efficacement la modification effectuée. Par exemple “Ajout d’un champ sur le formulaire de contact”.

Félicitations vous venez d’effectuer votre premier commit. Il faudra ensuite envoyer toutes vos modifications sur votre dépôt distant. Pour cela tapez la commande suivante :

```bash
$ git remote add origin <adresse de votre dépot>
```
Vous pouvez trouver l’adresse de ce dépôt directement sur la page internet de celui-ci.

Ensuite vous n’aurez plus qu'à envoyer les modifications sur le dépôt en effectuant la commande : 

```bash
$ git push
```

L’invite de commande vous demandera sûrement d’effectuer une commande supplémentaire pour envoyer vos modifications. Vous n’aurez qu'à copier coller cette commande et à la valider. 

Félicitaion votre dépot git est initialisé et vous pouvez maintenant commencer à coder en toute sérennité.