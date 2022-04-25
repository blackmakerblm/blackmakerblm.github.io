# INTRODUCTION

Être un bon informaticien de nos jours, ne signifie pas écrire des milliers de lignes de codes qui fonctionnent. Un système qui fait ce qu’on attend de lui n’est pas forcément un bon système. Développer un système d’information demande une gestion des ressources( argent, temps, humain) et un bon rendement à la fin. Alors pour atteindre cet objectif, afin de maîtriser son projet tout au long de son développement il est nécessaire de pratiquer les bonnes manières de travailler ce qui demande une bonne analyse et conception. Et il est très fréquent de rencontrer des problèmes de même nature plusieurs lors de la phase de développement. C’est donc dans cette optique des choses que le cursus de ma formation Miage M2 a insisté sur la compréhension de UML pour la conception et des patrons de conception ou encore Design Pattern en (Anglais). Et toujours dans l’objectif de nous procurer la bonne compréhension des différents sujets il nous a été donné un projet qui fait intervenir les notions.

### BESOIN ET OBJECTIFS DU PROJET

## Contexte

Comme cité en introduction, un bon ingénieur doit forcément maîtriser un projet de la phase analyse, conception jusqu’au déploiement. Mais pour toute chose il est nécessaire de bien travailler la fondation, dans notre cas en l'occurrence l'ingénieur doit savoir utiliser les outils et langages mis à sa disposition pour représenter, concevoir le projet dont il est en charge, tout d'abord pour lui même ceci lui permettra de comprendre le projet sous tous ses différents angles, et aussi de pouvoir travailler avec d’autre personne s’il le souhaite puisque il aura convertit ce qui est dans sa tete dans un langage que toute personne technique pourra comprendre, il s’agit donc d’uniformiser son idée ou les idées quand il s’agit d’un projet en groupe. Et ensuite, nous partageons dans la vie la même planète et les mêmes problèmes différents dans la forme mais pareil de base; il y’a plusieurs de ces problèmes que les informatiques ont en commun, plusieurs de ces problèmes ont été solutionné et représenté dans un langage technique UML pour la plupart des cas. L’ensemble de ces problèmes qu’on appelle les Patrons de Conception. Le projet qui nous a été donné à la suite est la conception d’un jeu de dé en utilisant les diagrammes UML et les Patrons de conceptions.

## Motivation

Les designs patterns, ou patrons de conceptions, ce n'est pas la première fois qu’on les voit en classes, j’ai trouvé cela très soulageant de trouver des manières de conceptions qui améliore les qualités de développeur de SI, je vois donc ce projet en défis. Le fait d’essayer de trouver par moi même en fonction du sujet les patrons de conceptions que je pourrai utiliser pour me faciliter la
tâche est quelque de très intéressant pour moi.

## Objectif

L’objectif du projet, c’est de faire la conception d’un jeu de dé, qui fonctionne de la manière suivante: Il ya deux dés dans le jeu, à chaque lancé des dés si la somme est =7, alors le joueur a 10 points sinon il a 0 point, sachant qu’un dé peut afficher entre 1 et 6(inclusifs). Si le nombre de lancés atteint 10 la partie est terminée on calcule la somme des scores du joueurs et on insère ca de manière persistante soit dans un fichier ou base de donnée.

## Enjeux

Il est pas très compliqué normalement de faire un tel mécanisme avec un code désordonné, ca pourrait même marcher à savoir répondre à l’objectif mais comme je l’ai cité l’enjeu consiste à justement observer ce fonctionnement essayer de voir comment représenter ce projet avec des patrons UML qu’on a vu avec le professeurs afin d’avoir un code propre, logique, fonctionnel et très
facilement maintenable.

# GESTION DU PROJET

## Equipe

Tous les modules et toutes les interfaces concernant ce projet ont été conçus et réalisés par moi.

## Difficultés

Après avoir fini la conception sur l’outil de modélisation Visual Paradigm dont je parlerai plus tard, je ne pouvais pas generer mes classes, jétais obligé de ecrire à la main car j’ai fait le choix de ne pas utiliser java pour la réalisation de ce projet plutôt le langage dart dont je parlerai plus tard. Il y’a plusieurs patrons qui existe déjà sur java très facile de les implémenter ou hériter à partir d’elles
mais avec dart ce n’est pas le cas j'étais donc obligé la aussi de les reprendre à la main très souvent avec des erreurs mais qui m’ont permis de comprendre.

## CAHIER DE CHARGE

Il est donc demandé de réaliser un jeu de dé avec une interface graphique s’il le faut mais pas obligatoire. J’ai fait le choix d’aller vers le premier choix; à savoir une application web qui permet de jouer au dés, cette application doit reposer pour la plupart sur les patrons de conceptions qu’on a vu en classe à savoir Observer,Singleton,Factory etc...


## Etude de l’existant

Pour mieux comprendre le sujet, j’ai cherché des applications qui font la même chose à peu près à savoir pas du cade uniquement mais avec des patrons de conceptions et de manière générale une conceptions très bien organisée et logique et j’ai eu pendant mes recherches un rapport qui a traité du même sujet je me suis beaucoup inspiré de la conception de l’auteur de ce rapport aussi.

## Etude fonctionnelle

L'analyse fonctionnelle est une démarche qui « consiste à rechercher et à caractériser les fonctions offertes par un produit pour satisfaire les besoins de son utilisateur. » La démarche est généralement conduite en mode projet et peut être utilisée pour créer (concevoir) ou améliorer (reconquérir) un produit. 
Le système couvre les modules fonctionnels suivants :

● Gestion d’un Dé

● Gestion des différentes vues

● Gestion des Scores

● Gestion des joueurs

● Gestion d’un jeu

● Gestion joueur

### Objectifs fonctionnels

Le système doit permettre :

● jouer

● voir son score

● régler paramètres

● quitter quand on le souhaite

**Bloc fonctionnel : Gestion d’un dé**

Le système doit permettre dans ce bloc :

1. Construction d’un objet dé
2. Générer aléatoirement la valeur du dé
3. Faire la somme des valeurs des deux dés

**Bloc fonctionnel : Gestion des vues**

Le système doit permettre dans ce bloc :

● Une vue peut observer un objet

● Une vue se met automatiquement à jour quand le sujet qu’elle observe change de valeur.

**Bloc fonctionnel : Gestion des scores**

Le système doit permettre dans ce bloc:

● D’inscrire un score à la fin d’une partie

● De lire l’ensemble des scores

● De choisir un moyen de persistence

**Bloc fonctionnel : Gestion des Joueurs**

Le système doit permettre dans ce bloc:

● D'écrire son pseudonyme au début de la partie

**Bloc fonctionnel : Gestion de Jeu**

Le système doit permettre dans ce bloc:

● De créer une instance de jeu unique

● prendre en charge plusieur joueurs en même temps

**Acteurs du système**

Le seul acteur c'est le joueur

### Besoin non fonctionnel
Pour les besoins non fonctionnels, le jeu est accessible à travers un navigateur (interface web).

## OUTILS ET LANGAGES

### Outils

Pour la réalisation et même la conception de ce projet j’ai utilisé différents outils qui sont les suivants:

**A. Visual Paradigm**

Visual Paradigm est un outil UML CASE prenant en charge UML 2, SysML et la notation de modélisation de processus métier du groupe de gestion d'objets. En plus de la prise en charge de la
modélisation, il fournit des capacités de génération de rapports et d'ingénierie de code, y compris la génération de code.

**B. Intellij IDEA**

IntelliJ IDEA également appelé IntelliJ , « IDEA » ou « IDJ » est un environnement de développement intégré destiné au développement de logiciels informatiques reposant sur la technologie Java mais il est tout à fait possible de l'intégrer avec d’autres langues voire framework.

### Framework et Langage de programmation
### A. Dart
Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web. Dart est un langage orienté objet, basé sur la classe, récupérateur de mémoire avec une syntaxe de type C
 
**B. Flutter**

Flutter est un kit de développement logiciel d'interface utilisateur open-source créé par Google. Il est utilisé pour développer des applications pour Android, iOS, Linux, Mac, Windows, Google Fuchsia et le web à partir d'une seule base de code

**C. UML**

Le langage UML (Unified Modeling Language, ou langage de modélisation unifié) a été pensé pour être un langage de modélisation visuelle commun, et riche sémantiquement et syntaxiquement. Il est destiné à l'architecture, la conception et la mise en œuvre de systèmes logiciels complexes par leur structure aussi bien que leur comportement. L'UML a des applications qui vont au-delà du développement logiciel, notamment pour les flux de processus dans l'industrie.

## CONCEPTION

Le but de la conception est de fixer les choix techniques et de  réparer l’implantation. Le modèle de la conception décrit la solution (comment le problème est résolu). La conception doit servir de support pour l’implantation et la maintenance Le plus souvent, le modèle de la conception n’est pas destiné à être compréhensible par les utilisateurs mais par les développeurs La conception que je vais présenter s’est basée sur différents design patterns, ceux que j’ai utilisés dans ce projet sont les suivants: Observer, Singleton, Factory. Je présenterai ces patrons plutôt dans cette section. Du début jusqu’à la fin de mon projet j’ai utilisé le langage UML, et j’ai en tout j’ai eu à travailler avec 5 diagrammes (Use case, Classe, Activité,Séquences, State Machine) sur 10 des principaux diagrammes. Dans la suite je vais présenter quelques diagrammes que j’ai fait en fonction de la catégorie.
### Diagramme de use case
Bien souvent, la maîtrise d'ouvrage et les utilisateurs ne sont pas des informaticiens. Il leur faut donc un moyen simple d'exprimer leurs besoins. C'est précisément le rôle des diagrammes de cas d'utilisation qui permettent de recueillir, d'analyser et d'organiser les besoins, et de recenser les grandes fonctionnalités d'un système. Il s'agit donc de la première étape UML d'analyse d'un système. Un diagramme de cas d'utilisation capture le comportement d'un système, d'un sous-système, d'une classe ou d'un composant tel qu'un utilisateur extérieur le voit. Il scinde la fonctionnalité du système en unités cohérentes, les cas d'utilisation, ayant un sens pour les acteurs. Les cas d'utilisation permettent d'exprimer le besoin des utilisateurs d'un système, ils sont donc
une vision orientée utilisateur de ce besoin au contraire d'une vision informatique. Ci dessous mon diagramme de use case de mon projet: 

 ![](assets/assets/images/designpattern/deusecase.png)
 
Le joueur a 3 cas d’utilisation dans le jeu, il pourra soit jouer , ou voir son score ou bien tout simplement quitter le jeu.

### Diagramme d’activité

Les diagrammes d'activités permettent de mettre l'accent sur les traitements. Ils sont donc particulièrement adaptés à la modélisation du cheminement de flots de contrôle et de flots de données. Ils permettent ainsi de représenter graphiquement le comportement d'une méthode ou le déroulement d'un cas d'utilisation. Les diagrammes d'activités sont relativement proches des diagrammes d'états-transitions dans leur présentation, mais leur interprétation est sensiblement différente. Les diagrammes d'états-transitions sont orientés vers des systèmes réactifs, mais ils ne donnent pas une vision satisfaisante d'un traitement faisant intervenir plusieurs classeurs et doivent être complétés, par exemple, par des diagrammes de séquence. Au contraire, les diagrammes
d'activités ne sont pas spécifiquement rattachés à un classeur particulier. On peut attacher un diagramme d'activités à n'importe quel élément de modélisation afin de visualiser, spécifier, construire ou documenter le comportement de cet élément. Ci dessous je présente différents diagrammes d’activité de mon projet.

**1. Diagramme d'activité de jouer**

 ![](assets/assets/images/designpattern/deactivitejouer.png)
 
**2. Diagramme activité de voir son score**

![](assets/assets/images/designpattern/deactivitescore.png)

### Diagramme de classes
Le diagramme de classes est considéré comme le plus important de la modélisation orientée objet, il est le seul obligatoire lors d'une telle modélisation. Alors que le diagramme de cas d'utilisation montre un système du point de vue des acteurs, le diagramme de classes en montre la structure interne. Il permet de fournir une représentation abstraite des objets du système qui vont interagir pour réaliser les cas d'utilisation.Un diagramme de classes n'est donc pas adapté (sauf cas particulier) pour détailler, décomposer, ou illustrer la réalisation d'un cas d'utilisation particulier. Il s'agit d'une vue statique, car on ne tient pas compte du facteur temporel dans le comportement du système. Le diagramme de classes modélise les concepts du domaine d'application ainsi que les
concepts internes créés de toutes pièces dans le cadre de l'implémentation d'une application. Chaque langage de Programmation orienté objet donne un moyen spécifique d'implémenter le paradigme objet (pointeurs ou pas, héritage multiple ou pas, etc.), mais le diagramme de classes permet de modéliser les classes du système et leurs relations indépendamment d'un langage de programmation particulier. Sur la page suivante se trouve le diagramme de classe montrant l’architecture haut niveau du projet:

**Architecture Haut Niveau**

![](assets/assets/images/designpattern/dehautniveau.png)

Nous avons les éléments de l’interfaces tout ce qui est vue, dans le package Interface Utilisateurs, et Les objets qui gère le métier sont dans le package Objets Métiers, les éléments de la persistance sont dans Persistance dépendent tous de Utilitaire.

**Architecture Bas Niveau**

![](assets/assets/images/designpattern/debasniveau.jpg)

Dans cette architecture on peut clairement voir quelques un patron comme Observer mais Factory et Singleton ne sont pas très visible. Alors pourquoi j’ai utilisé ces 3 patrons:

**Observer:**

L’Observer design pattern, abrégé en Observer pattern et traduit par « patron de conception Observateur », est l’un des modèles les plus appréciés dans la conception de logiciels. Il fournit en effet une méthode uniforme permettant de définir un rapport de dépendance entre deux objets ou plus afin de communiquer l’ensemble des modifications à un autre objet donné de façon aussi simple et rapide que possible. À cette fin, il est possible d’enregistrer n’importe quel objet comme « observer » ou observateur d’un autre objet. Ce dernier objet, que l’on appelle « sujet », informe l’observateur enregistré dès qu’il a été modifié ou adapté. 

![](assets/assets/images/designpattern/deobserver.png)

C’est ce patron qui va me permettre de gérer une vue au niveau de l’interface de manière synchrone. A chaque fois que la valeur d’un
élément qui est censé être sur l’ecran change celui-ci doit se mettre à jour automatiquement. Je l’ai utilisé sur La vue des info du joueur, le joueur lui meme, le jeu, le dé, la vue qui affiche le dé etc.... C’est le design pattern que j’ai le plus utilisé. 

**Singleton:**

Le Singleton est un patron de conception de création qui s’assure de l’existence d’un seul objet de son genre et fournit un unique point d’accès vers cet objet. Le singleton possède à peu près les
mêmes avantages et inconvénients que les variables globales. Même s’ils sont super utiles, ils réduisent la modularité du code.

![](assets/assets/images/designpattern/desingleton.png)

Le Singleton c’est lui qui m’a permis par exemple de faire en sorte que lorsqu’on lance l’application c’est toujours une seule et même instance de jeu qui est renvoyé peu 

**Factory** 

La fabrique est un patron de conception créationnel utilisé en programmation orientée objet. Elle permet d'instancier des objets dont le type est dérivé d'un type abstrait. La classe exacte de l'objet n'est donc pas connue par l'appelant.
Voici le diagramme UML du design pattern Factory :

![](assets/assets/images/designpattern/defactory.png)

Comme vous pouvez voir ci-dessus, afin de créer notre Fabrique, nous avons besoin de 4 éléments :

**Une fabrique générique** : Elle contient toutes lesméthodes nécessaires à la création d'un produit

**Une fabrique** : Elle va créer le produit souhaité

**Un produit** : Le produit créé par la fabrique, dérivantdu produit générique

**Un produit générique** : Le produit d'origine, contenanttoutes les méthodes permettant de réaliser les actions associées.
C’est donc ce patron qui permet de gérer la persistance de manière indépendante du fonctionnement intrinsèque du code. Le joueur peut décider de stocker les scores dans un fichier .txt s’il le souhaite ou dans une base de donnée cela ne dérange pas le fonctionnement du code.

**Diagramme de séquences**

Le diagramme de séquence permet de montrer les interactions d'objets dans le cadre d'un scénario lié à un use case. Dans un souci de simplification, on représente l'acteur
principal à gauche du diagramme, et les acteurs secondaires éventuels à droite du système. Le but est de décrire comment se déroulent les interactions entre les acteurs ou objets.
Sur la prochaine page je présente la séquence de différents scénarios ou fonction de mon projet.

**Diagramme séquence voir score**

![](assets/assets/images/designpattern/desequencescore.jpg)

**Diagramme séquence jouer**

![](assets/assets/images/designpattern/desequencejouer.jpg)

## RÉALISATION DU PROJET

Après la conception, je me suis lancé dans la réalisation des différents modules du projet ci-dessous quelques captures d'écrans.

### Snippets

Etant donné que j’ai utilisé un langage différent de java, dans cette section je vais un peu montrer quelques bouts de codes avant de montrer les interfaces utilisateurs.

**Dé:**

Ceci est l'implémentation du Dé:

![](assets/assets/images/designpattern/decodede.png)

**DieView:**

Cette classe represente la vue qui va representer le dé sur l’ecran elle est bien entraint d’implementer l’interface

![](assets/assets/images/designpattern/decodedeview.png)
**Observer:**

## Interfaces

### Page Principale

C’est sur cette page qu’il est demandé à l’utilisateur les 3 cas de use case. La page suivante montre l’interface:

![](assets/assets/images/designpattern/depagemain.png)

**Page Joueur Container**

![](assets/assets/images/designpattern/depagecontainer.png)

**Page RollContainer**

![](assets/assets/images/designpattern/derollcontainer.png)

### CONCLUSION

Pour conclure, je n’ai pas pu réaliser terminer le module de persistance ce qui donne un grand caractère de couplage à mon code. Car il faut nécessaire à ce point ou j’en suis choisir  precisément un moyen de persistance pour que le code marche et même là j’ai du mal à savoir utiliser le Factory comme il le faut. Pour terminer enfin je dois reconnaître que le projet a été un moyen très juste de comprendre davantage la nécessité des patrons de conceptions et la conception tout court au-delà de la théorie.

### BIBLIOGRAPHIE ET WEBOGRAPHIE

https://www.codingame.com/playgrounds/36103/design-pattern-factory-abstract-factory/design-pattern-factory
https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
https://pub.dev/packages/mysql1/example
https://stackoverflow.com/questions/52801201/flutter-renderbox-was-not-laid-out
https://www.youtube.com/watch?v=rMNpKJUda-o&ab_channel=l%27AutoDidacte
https://stackoverflow.com/questions/11674820/how-do-i-generate-random-numbers-in-dart
https://refactoring.guru/fr/design-patterns/singleton/java/example
https://www.ionos.fr/digitalguide/sites-internet/developpement-web/quest-ce-que-lobserver-pattern/


