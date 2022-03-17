---
title: Nettoyez votre historique de commit avec Git rebase
description: Comment garder un historique git propre et compréhensible quand on travail en équipe sur le même dépot git ? Le rebasage est une solution que nous allons découvrir dans cet article
img: blog/git.png
alt: My first blog Post
date: 2021-11-19T15:40:58.380Z
author: Antoine Queru
---



## Les bonnes pratiques 
Si on s’en tient aux bonnes pratiques de git, un commit est égal à une modification et le message du commit doit être le plus explicite possible. Une branche est égale à une nouvelle fonctionnalité et quand la fonctionnalité a été terminée testée et approuvée cette branche peut être fermée. 

## La problématique
Créer des branches par nouvelle fonctionnalité est une très bonne chose, cependant, lorsqu’on travaille à plusieurs sur un dépôt git, de plus sur un projet d’envergure, l’historique devient rapidement difficile à comprendre. La fonction rebase va donc vous permettre de garder un historique git propre et compréhensible.

## Comment ça fonctionne ? 
Git rebase va vous permettre simplement de placer votre branche de travail à la pointe de master avec une simple commande :

```bash
$ git rebase master mabranche
``` 

Qu’est ce que cela signifie concrètement ? Cela signifie que git va simplement transplanter votre branche de son emplacement d’origine à la pointe de master, vous allez récupérer les changements effectués sur la branche master et vous allez pouvoir rapidement résoudre les conflits facilement s' il y en a (à condition bien sûr de rebaser régulièrement sa branche). 

![Explication du rebasage](/blog/git-rebase/rebasage-1.png)

De plus, lorsque votre fonctionnalité est testée et terminée et que vous êtes prêt à envoyer vos changement sur master, faire un rebase avant va vous permettre d’éviter les commits de fusions assez disgracieux qui gênent votre historique. Git va simplement effectuer un fast forward de master ce qui sera beaucoup plus beau dans l’historique qu’une ouverture de branche et un merge avec un commit de fusion. 

![Meilleur historique](/blog/git-rebase/rebasage-2.png)

## Mise en garde 
L’outil rebase est formidable pour garder un historique propre, cependant, il y a toujours une règle d’or à appliquer lorsque l’on utilise cette commande 

**ne jamais rebaser un historique partagé**

La commande rebase permet, lorsqu’elle est bien utilisée, mettre votre branche a la pointe de master, la branche master reste cependant inchangée. Mais si on suit cette logique et que l’on rebase dans l’autre sens, vous allez transférer master à la pointe de votre branche. Et là c’est le drame. Vous envoyez vos modifications sur le serveur et tout l’historique partagé se retrouve modifié.

Heureusement git est bien fait. Git ne supprime jamais de données même quand vous faites des modifications peu conventionnelles qui que vous pensez supprimer des choses de l'historique celles ci ne sont jamais vraiment supprimées. Il vous sera donc toujours possible de revenir en arrière si vous avez fait une erreur. Cela peut cependant vous prendre du temps et de l’énergie. Le plus simple reste donc d’éviter de faire des bêtises pour ne pas passer une mauvaise journée à tout remettre comme avant. 

## Pour aller plus loin
L’outi rebase de git permet également des fonctionnalités plus avancés telles qu’une modification de l’historique avec le rebasage interactif ou encore la réparation d’historique avec l’option `--onto`
