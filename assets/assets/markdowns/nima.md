### I. INTRODUCTION


Le traitement automatique de l'information autrement dit informatique est présent dans tous les secteurs de la vie de nos jours, et la gestion des entreprises ou d’organisations ne fait pas exception. De nos jours, gérer les tâches régaliennes de son entreprise avec les outils traditionnels et les méthodes classiques qui nécessitent un travail manuel et une intervention humaine à tous
les niveaux de calculs est une perte de temps, d'énergie et de ressources pour toute entreprise. C’est donc une responsabilité et non une obligation pour chaque entreprise de se doter des moyens technologiques dans le but d’être la plus organisée possible et il est à noter que ceci va dans le même sens qu’une démarche de veille car il existe de nos jours des méthodes et des moyens très
sophistiqué pour la gestion des entreprises. Et cette dernière est la seule manière de pouvoir profiter au maximum des données que l’on peut récolter pour un objectif d’analyse.

#### BESOIN ET OBJECTIFS DU PROJET

**Contexte**

Pour pouvoir développer une solution pour une entreprise il faut avoir des connaissances basique du fonctionnement des entreprises et des organisations, il existe plusieurs options pour apprendre à développer des systèmes informatiques. Mais un constat a été fait au cours des dernières années auprès des ingénieurs c’est que généralement les ingénieurs les plus performants et qui
ont le plus de valeurs positives c’est ceux qui ont des connaissances sur les schémas organisationnels des entreprises. Un ingénieur doit être capable de communiquer et doit savoir à qui s’adresser pour recueillir une information dont il a besoin; dans cette optique que la filière MIAGE a été créée il y a cela des années. Au cours de ma formation MIAGE(Méthodes informatiques appliquée à la gestion d’entreprises) pendant 3 ans ce sont les différents moyens énumérés en introduction qu’on a apprise. C’est dans ce but que pour mon année de fin d’étude, il est donné à
chaque étudiant un projet industriel avec lequel il devra, à partir des technologies et des outils dont il aura lui-même choisi, mettre en place un système qui rentre dans le cadre de la formation. L’objectif n’est pas forcément un système qui aide à la gestion d’une entreprise mais j’ai décidé de choisir un sujet qui va dans ce sens et qui d'ailleurs est lié à notre entreprise familiale(industrie laitière). NIMA industries est donc une entreprise qui est dans le conditionnement du lait en poudre depuis le début des années 2000, et en 2019 l’entreprise s’est lancée dans la transformations des produits à base de lait(yaourt, lait caillé, lait frais etc..).

**Motivation**

Comme je l’ai cité en haut, mon sujet est destinée à notre entreprise familiale, j’ai fait le constat que malgré les innovations au niveau des produits, l’organisation interne et la manière de travailler au sein de l’entreprise n’a pas beaucoup changée depuis des années.Il y’a eu un effort pour informatiser les bureaux de certains personnels, mais le travail reste toujours fastidieux et pas
très bien organisé. J’ai l’idée et le sentiment qu’avec un bon système de gestion, le travail serait plus contrôlé et les données de l’entreprises pourraient être mieux utilisées à des fins analytique dans un but de veille économique.

**Objectif**

Ce projet a pour but de réaliser un système qui va permettre la prise en charge des commandes et la gestion des différents magasins d’entreposage des produits et matières premières de l’entreprise.

**Enjeux**

Les enjeux de ce projet sont technologique, humain et économique. En premier lieu, comme évoqué précédemment c’est le défi de mise à jour technologique qui a attiré mon attention pour la réalisation de ce projet. Outre la technologie, cette digitalisation doit permettre à l’entreprise de mieux gérer le flux d’information en son sein et les utiliser à des fins analytiques afin de
pouvoir se situer de manières plus précises sur ces transactions et ses capacités de production et de satisfaction de ses clients à chaque instant. Au niveau ressources humaines ce projet a pour but de faciliter les transactions effectuées par les commerciaux et connaître ainsi les performances de ventes des commerciaux, chaque système doit pouvoir situer les responsables
de chaque opérations d’entrée ou de sortie de toutes les ressources au sein de l’entreprise. Le projet aura donc comme conséquence positive une transparence très concrète au sein de l’entreprise.

## GESTION DU PROJET
**Equipe**

Tous les modules et toutes les interfaces concernant ce projet ont été conçus et réalisés par moi. Les diverses expériences que j’ai acquises dans le développement backend et
frontend m’ont permis de gérer la totalité du projet car c’est ainsi que je me défini un développeur fullstack.

**Difficultés**

Le framework Spring, je l’ai découvert cette année au cours de ma formation j’ai donc choisi de travailler avec mais le problème que j’avais pendant la réalisation de ce projet est que à chaque fois que j’avais une difficulté avec le dit Framework j’avais énormément de soucis à joindre le professeur qui m’a enseigné le framework et autour de moi, mon réseau de connaissance de
développeur pour la plupart n’ont jamais travaillé avec Spring, ce qui faisait qu’une erreur pouvait me prendre des jours souvent même une semaine avant de trouver la solution seule sur les différents forums de développeur(stackoverflow,Baldung etc...).

**Méthode de gestion**

Pour la réalisation de ce projet, étant donné que j’étais seule je n’ai pas utilisé de méthode proprement dite de gestion d’un projet mais j’utilisais une technique simple ce qui consistait à développer un modules du projet au niveau backend, la tester avec Postman si tout fonctionnait correctement, ensuite développer la partie frontend et je faisais en dernier l'intégration du frontend et
backend.

## II. CAHIER DE CHARGE

L’objectif du projet est l’étude, la conception et la réalisation d’un Système de prise en charge des commandes et de gestion des differents unité d’entreposage d’une Industrie Laitière(NIMA industries) avec les Frameworks SPRING BOOT et Flutter.

**Etude de l’existant**

Pour comprendre les différentes contraintes techniques du projet et avoir une base de connaissance et d’inspiration je me suis beaucoup entraîné à comprendre l’ERP Odoo, qui a plusieurs modules.Odooest un outil polyvalent permettant la gestion des entreprises. Il est entièrement personnalisable grâce à ses différents modules et s'adapte parfaitement à toutes sortes de structures.
![](assets/assets/images/nima/nimaetudeexistant.png)
C’est le seul système que j’ai étudié pour la réalisation de ce projet.


**Etude fonctionnelle**

L'analyse fonctionnelle est une démarche qui « consiste à rechercher et à
caractériser les fonctions offertes par un produit pour satisfaire les besoins de
son utilisateur. » La démarche est généralement conduite en mode projet et peut
être utilisée pour créer (concevoir) ou améliorer (reconquérir) un produit.
Le système couvre les modules fonctionnels suivants :

```
● Gestion des clients
● Gestion des commandes
● Gestion des documents(Facture, Bon de sortie,Bon d’entrée)
● Gestion des authentifications
● Gestion des Magasins
● Gestion des Produits
● Gestion des Packs(un pack est composé de plusieurs produits)
● Gestion des Catégories
● Gestion des Fournisseurs
● Gestion des Matières premières
```
**Acteurs**

| Administrateur | Commercial | Magasinier |
| :----------- | :----------- | :----------- |
| Gérer produit | Gérer commande| Gérer Fournisseur|
|  Gérer matières premières       |Gérer client           |Gérer Bon d’entrée           |
|Gérer Pack           | Signer bons de sorties          |           |

**Besoin non fonctionnel**

Le système doit être sécurisé, et contre les accès non autorisés, seuls les
utilisateurs autorisés(à savoir les commerciaux, le magasinier et
l’administrateur), Le
système doit également interdire tout accès aux données en dehors des
applications
officielles.

**Accès à l’application:**\
L’application ne peut être accédée qu’à travers le portail officiel, c'est -à -dire à travers une application web avec une adresse unique, il ne sera pas possible dans un premier instant de pouvoir accéder à des fonctionnalités à travers un téléphone ou autre portail non officiel.

### OUTILS ET LANGAGES
**Outils**\
Pour la réalisation et même la conception de ce projet j’ai utilisé différents outils qui sont les suivants:

**A. Visual Paradigm**\
Visual Paradigm est un outil UML CASE prenant en charge UML , SysML et la notation de modélisation de processus métier du groupe de gestion d'objets. En plus de la prise en charge de la modélisation, il fournit des capacités de génération de rapports et d'ingénierie de code, y compris la génération de code.

**B. Eclipse**\
Eclipse est un projet, décliné et organisé en un ensemble de sous-projets de développements logiciels, de la fondation Eclipse visant à développer un environnement de production de logiciels libre qui soit extensible, universel et polyvalent, en s'appuyant principalement sur Java.

**C. Intellij IDEA**\
IntelliJ IDEA également appelé IntelliJ , « IDEA » ou « IDJ » est un environnement de développement intégré destiné au développement de logiciels informatiques reposant sur la technologie Java mais il est tout à fait possible de l'intégrer avec d’autres langues voire framework.

**D. Postman**

Postman sert à exécuter des appels HTTP directement depuis une interface graphique. Vous pourrez simplement choisir l'URL, la méthode HTTP (le plus souvent GET, POST, PUT, PATCH et DELETE), les headers, les query params et dans certains cas le body de la requête.
#### Framework et Langage de programmation

**A. Java**\
java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy, présenté officiellement le 23 mai 1995 au SunWorld. La société Sun a été rachetée en 2009 par la société Oracle qui détient et maintient désormais Java.

**B. Dart**\
Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web. Dart est un langage orienté objet, basé sur la classe, récupérateur de mémoire avec une syntaxe de type C

**C. Json**\
JavaScript Object Notation, abrégé JSON, est un format de données textuelles et génériques permettant de représenter de l’information structurée comme le permet le langage XML par exemple.

**D. Spring Boot**\
 c’est un framework de développement JAVA. C'est une déclinaison du framework classique de Spring qui permet essentiellement de réaliser des micro services (ce sont la majeure partie du temps des services web qui sont regroupés en API)

**E. Flutter**\
Flutter est un kit de développement logiciel d'interface utilisateur open-source créé par Google. Il est utilisé pour développer des applications pour Android, iOS, Linux, Mac, Windows, Google Fuchsia et le web à partir d'une seule base de code

### CONCEPTION

Avant toute chose pour la conception de ce projet, ma discussion avec mon contact au sein de l’entreprise m’a amené à représenter le processus métier actuel au sein de l’entreprise que j'ai représenté avec un diagramme de business process(BPMN).

**Diagramme Business process actuel**\
Business Process Model and Notation, c'est-à-dire « modèle de procédé d'affaire et notation », est une méthode de modélisation de processus d'affaires pour décrire les chaînes de valeur et les activités métier d'une organisation sous forme d'une représentation graphique.L’enjeu principal est de fluidifier le passage de la phase de conception et de modélisation des processus, à la phase
de mise en œuvre, pour en faciliter l’exécution. Sur la page suivante se trouve ma modélisation du processus métier de l’entreprise concernant la prise en charge d’une commande, la facturation, la sortie de l'entrepôt d’une commande.
 ![](assets/assets/images/nima/nimabpm.png)\
 C’est donc ce processus que la projet a pour but de reprendre en ajoutant d’autre couche et en optimisant le processus.

**Diagramme de use case**\
Bien souvent, la maîtrise d'ouvrage et les utilisateurs ne sont pas des informaticiens. Il leur faut donc un moyen simple d'exprimer leurs besoins. C'est précisément le rôle des diagrammes de cas d'utilisation qui permettent de recueillir, d'analyser et d'organiser les besoins, et de recenser les grandes fonctionnalités d'un système. Il s'agit donc de la première étape UML d'analyse
d'un système. Un diagramme de cas d'utilisation capture le comportement d'un système, d'un sous-système, d'une classe ou d'un composant tel qu'un utilisateur extérieur
le voit. Il scinde la fonctionnalité du système en unités cohérentes, les cas d'utilisation, ayant un sens pour les acteurs. Les cas d'utilisation permettent d'exprimer le besoin des utilisateurs d'un système, ils sont donc une vision orientée utilisateur de ce besoin au contraire d'une vision informatique. Ci dessous mon diagramme de use case que j’ai divisé en 3 parties pour
une meilleure visibilité de l’image sur le document:

Use case1           |Use case2           |Use case3            
:-------------------------:|:-------------------------:|:-------------------------:
 ![](assets/assets/images/nima/nimausecase1.png) |   ![](assets/assets/images/nima/nimausecase2.png)|   ![](assets/assets/images/nima/nimausecase3.png)
 
**Diagramme d’activité**

Les diagrammes d'activités permettent de mettre l'accent sur les traitements. Ils sont donc particulièrement adaptés à la modélisation du cheminement de flots de contrôle et de flots de données. Ils permettent ainsi de représenter graphiquement le comportement d'une méthode ou le déroulement d'un cas d'utilisation. Les diagrammes d'activités sont relativement proches des diagrammes
d'états-transitions dans leur présentation, mais leur interprétation est sensiblement différente. Les diagrammes d'états-transitions sont orientés vers des systèmes réactifs, mais ils ne donnent pas une vision satisfaisante d'un traitement faisant intervenir plusieurs classeurs et doivent être complétés, par exemple, par des diagrammes de séquence. Au contraire, les diagrammes
d'activités ne sont pas spécifiquement rattachés à un classeur particulier. On peut attacher un diagramme d'activités à n'importe quel élément de modélisation afin de visualiser, spécifier, construire ou documenter le comportement de cet élément.
Ci dessous je présente différents diagrammes d’activité de mon projet.

**1. Diagramme activité ajout commande**

 ![](assets/assets/images/nima/nimaajoutcommande.png)
 
**2. Diagramme activité ajout client**

![](assets/assets/images/nima/nimaajoutclient.png)\
**Diagramme de séquences**

Le diagramme de séquence permet de montrer les interactionsd'objets dans le cadre d'un scénario lié à un use case. Dans un souci de simplification, on représente l'acteur principal à gauche du diagramme, et les acteurs secondaires éventuels à droite du système. Le but est de décrire comment se déroulent les interactions entre les acteurs ou objets.Sur la prochainepage je présente la
séquence de différents scénarios ou fonction de mon projet. On ne presentera que la sequence de l'inscription.

**Diagramme sequence inscription**

![](assets/assets/images/nima/nimasequenceinscrire.png)

**Diagramme de classes**

Le diagramme de classes est considéré comme le plus important de la modélisation orientée objet, il est le seul obligatoire lors d'une telle modélisation. Alors que le diagramme de cas d'utilisation montre un système du point de vue des acteurs, le diagramme de classes en montre la structure interne. Il permet de fournir une représentation abstraite des objets du système qui vont interagir pour réaliser les cas d'utilisation.Un diagramme de classes n'est donc pas adapté (sauf cas particulier) pour détailler, décomposer, ou illustrer la réalisation d'un cas d'utilisation particulier.
Il s'agit d'une vue statique, car on ne tient pas compte du facteur temporel dans le comportement du système. Le diagramme de classes modélise les concepts du domaine d'application ainsi que les concepts internes créés de toutes pièces dans le cadre de l'implémentation d'une application. Chaque langage de Programmation orienté objet donne un moyen spécifique d'implémenter le
paradigme objet (pointeurs ou pas, héritage multiple ou pas, etc.), mais le diagramme de classes permet de modéliser les classes du système et leurs relations indépendamment d'un langage de programmation particulier. Et grâce à l’outil Visual paradigm que j’utilise, il est très facile à partir du diagramme de classe de générer les classes en java de mon projet ce qui m’a
facilité la tâche de manière considérable. Sur la page suivante se trouve le diagramme de classe du projet

Diagramme classe 1            |  Diagramme classe 2
:-------------------------:|:-------------------------:
![](assets/assets/images/nima/nimaclasse1.png) |  ![](assets/assets/images/nima/nimaclasse2.png)
 
## RÉALISATION DU PROJET

Après la conception, je me suis lancé dans la réalisation des différents modules du projet ci-dessous quelques captures d'écrans.

### Test avec Postman

**Ajout Commande postman**

![](assets/assets/images/nima/nimaaddcommande.png)

**Page Inscription UI**

![](assets/assets/images/nima/nimainscriptionui.png)

**Page connection**

![](assets/assets/images/nima/nimaconnection.png)

**Page vue ensemble (commercial)**

![](assets/assets/images/nima/NimaOverview.png)

**Page commandes (commercial)**

![](assets/assets/images/nima/Nimacommandes.png)

**Page clients (commercial)**

![](assets/assets/images/nima/nimaajoutclientui.png)
### PERSPECTIVES

Le projet dans sa globalité comme je l’ai imaginé n’est pas achevé, comme perspective je pense à l'intégration d’un module d’analyse et de prédictions des données présente au niveau de la base de données et aussi la compatibilité entre le système et d’autres systèmes existants au sein de l’entreprise.

### CONCLUSION

Pour conclure, je n’ai pas pu réaliser tous les modules initialement prévu dans le délai mais un calcul rapide permet de mesurer l’efficience de réalisation compte tenu de l’objectif du projet: sur 12 modules j’ai réalisé 9 modules ce qui nous donne un rendement de 75% de réalisation côté back-end. Les modules concernés sont :
```
● Gestion des clients
● Gestion des commandes
● Gestion des Factures
● Gestion des Bons de sortie
● Gestion des authentifications
● Gestion des Magasins
● Gestion des Produits
● Gestion des Packs
● Gestion des Catégories
```
Et sur le côté frontend je suis à 1/3 de rendement car il ya 3 application frontend à développer normalement celui du commercial, du magasinier et celui du magasinier. Je n’ai pu terminer que celui du commercial. Mais il est nécessaire que je rappelle que ce système représente une valeur sentimentale pour moi et un besoin d’offrir à l’entreprise familiale un système qui faciliterait leurs travails dans le quotidien donc je finirai ce projet dans sa globalité. Pour terminer je dois reconnaître que la complexité de ce projet a été un grand défi pour moi à de multiple niveau, celui de la compétence ainsi que l’auto-organisation, il m’a considérablement aidé à davantage comprendre le framework avec lequel j’ai travaillé coté back-end en l'occurrence Spring(Springboot).


### BIBLIOGRAPHIE ET WEBOGRAPHIE

https://spring.io/guides/gs/rest-service-cors
https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
https://www.baeldung.com/spring-cors
https://howtodoinjava.com/spring-boot2/spring-cors-configuration/
https://api.flutter.dev/flutter/material/DropdownButton-class.html
https://stackoverflow.com/questions/62892376/access-control-allow-origin-is-no
t-allowed-error-but-if-omitted-then-is-expect/
https://www.invivoo.com/securiser-application-spring-boot-spring-security/
https://www.youtube.com/watch?v=her_7pa0vrg&ab_channel=Amigoscode
https://www.youtube.com/watch?v=_1welXC8gEo&ab_channel=Sourcesdel%
7InformaticienavecPr.MohamedYOUSSFI
https://stackoverflow.com/questions/52167585/detached-persited-parent-entity-
when-saving-unidirectional-one-to-one-child-enti
https://dzone.com/articles/introduction-to-spring-data-jpa-part-3-unidirectio


