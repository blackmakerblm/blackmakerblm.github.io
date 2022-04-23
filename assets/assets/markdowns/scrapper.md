### I. BESOIN ET OBJECTIFS DU PROJET

**1) Contexte**
      La présence sur internet est devenue quelque chose de nécessaire, voire indispensable, pour
les entreprises de nos jours. Cette règle n'épargne pas les commerçants, qui ont pour la majorité
créer des boutiques en ligne, ou des plateformes pour tout simplement faire connaître leurs
produits. Alors, chose est de noter qu’un consommateur lorsqu’il cherche un produit, va toujours
chercher celui qui répond le plus à ses critères , critères qui sont pour la majorité subjective. Mais
il y a un point commun entre les différents consommateurs c’est qu’il souhaite avoir un produit
souhaité à un prix le plus abordable possible. Ce qui demande d’avoir connaissance des
différentes sources(site ou boutique) qui proposent le même produit et pouvoir comparer les prix
et faire son choix. Cette tâche peut très vite devenir compliquée et fastidieuse car les sources ne
sont pas toujours connues par le consommateur.
C’est donc dans cet objectif que Phaino ( **entreprise marocaine dans le digital** ) a
eu l'initiative de proposer une plateforme qui permettrait aux consommateurs de
retrouver pour un produit donné, les différentes sources et les prix directement sur la
même plateforme. Maintenant la question qui se pose naturellement c’est comment
regrouper ces informations provenant de différentes sources sur une même plateforme.
C’est là que Phaino l’entreprise qui m’a accueillie en son sein m’a offert mon stage PFE
 au cours du quel j’ai pour tâche de récupérer pour différents produits provenants de sites
web différents.

**2) Motivation**

Pendant toute ma formation et aussi mes projets aussi bien académiques que
personnels, je n’ai pas eu à travailler profondément dans ce domaine,même si j’avais
 une connaissance superficielle du scraping (grattage) web.C'était donc une opportunité 
pour moi de me mettre moi-même au défis,et deplus l’idée que ce projet peut être dans
la vraie vie afin d'améliorer l'expérience d'achat des consommateurs était une source très
grande de motivation pour moi.

**3) Objectif**
     Ce projet a donc pour objectif de mettre en place un outil de scraping ou grattage des différents sites choisis au préalable par las tructure dans le cadre de leur partenariat ou selon d’autres critères définis par eux même.

**4) Enjeux**
Le principal en enjeu de ce projet,est que selon la vision et la volonté de mon maître de stage, cet outil de grattage qu’on doit mettre en place doit être paramétrable afin de
pouvoir gratter plusieurs sites web. Alors qu'un outil de scraping lors de son développement se base sur la structure du site web dont il a la charge de gratter afin de récupérer, puisqu’il s’agit de parcourir le DOM(Document Object Model) Html pour trouver les informations qu’on souhaite récupérer. Nous remarquons que c’est donc une tâche qui est fortement relative au site auquel le
scraper est destiné.

## II- Gestion du projet

**1) Equipe**

Tout ce qui concerne la partie de grattage de sites web ici notamment le site web de marjane a été par moi et tout ce qui concerne la logique pour rendre l’outil configurable a été proposée par moi.
Mais l'étape d’après c’est à dire la persistance de ces données que je récupère à été pensé avec la collaboration du développeur du comparateur de prix.

**2) Difficultés**
Comme énoncé plutôt la difficulté majeure de ce projet est dûe au fait qu’on m’a imposé quel outil que je dois mettre en place soit configurable, c’est à dire selon mon maître de stage, il faut qu’on puisse en fonction d’un URL(Uniform Resource Locator) c’est à dire l’adresse d’un site web et ou du nom d’un produit, pouvoir aller sur ce site en question qui a été précisé en paramètre et extraire les contenus renseignés en paramètre ou pas. Une autre difficulté est que certains sites web interdisent ou limitent l’accès aux robots de grattage à leur contenus. Et aussi il y'a l'obstacle de la légalité. C’est donc un domaine qui est lié à un aspect juridique qu’il faut forcément prendre en compte surtout qu’il s’agisse d’une entreprise donc c’est un facteur à ne pas négliger vu les enjeux.

**3) Cahierdes charges**
L’objectif du projet est l’étude, la conception et la réalisation d’un scrapper web ou encore outil de grattage de site web qui proposent des produits en vente. Cet outil doit en fonction du site web qu’il a gratté, gardé une trace de l’historique afin que la tâche d’extraction soit progressive.
Le système couvre les modules fonctionnels suivants :

```
●Des sous applications de scrapping
●Un gestionnaire de tâche asynchrone
●Un ordonnanceur
●Un module de sauvegarde de l’historique de grattageet aussi pour persister les
données scrappées.
``` 
**4) Etude de l’existant**

Pour comprendre les différentes contraintes techniques du projet et avoir une base de connaissance et d’inspiration je me suis beaucoup renseigné sur des outils qui font à peu près la même chose. J’ai eu donc la connaissance de Web Scraper et Scrappy qui sont des outils avec un caractère un peu universel même si leur utilisation comporte des inconvénients mais l'étude de ces différents outils et de leur comportement m’a aidé dans la conception de ma solution. C’est une extension disponible sous Google Chrome qui permet d’extraire lesd onnées d’un site internet très rapidement. Web Scraper navigue sur les sites choisis afin d’enextraire toutes les données. Les données collectées peuvent être exportées sous forme de CSV. L’extension vous permet également de scrapper plusieurs sites à la fois ou même les
## programmer.

Scrapy est un framework open source permettant la création de robots d’indexation. Développé en python, il dispose d'une forte communauté, offrant de nombreux modules supplémentaires. La première version stable a été publiéeen septembre 2009. Depuis, l'équipe de développement publie régulièrement de nouvelles versions dans le but d'enrichir le framework en fonnctionnalité. L'objectif principal est d'obtenir une API stable pour la version 1.0. Le framework dispose d'une communauté active, et un support commercial est effectué par plusieurs entreprises. Le framework est compatible Python 2.7 et Python 3.6 ou au-dessus, sur la majorité des plates-formes.

## Scraping web

**Définition**

Le web scraping (parfois appelé harvesting) est une technique d'extraction du contenu de site web, via un script ou un programme, dans le but de le transformer pour permettre son utilisation dans un autre contexte, par exemple le référencement.L’intérêt principal du web scraping est de pouvoir récolter du contenu sur un site web, qui ne peut être copié collé sans dénaturer la structure même du document.Ainsi cette technique est souvent utilisée dans le cadre d’une veille concurrentielle,notamment sur des sites e-commerce.Il existe plusieurs sites et programmes permettant de faire du web scraping. Ils se différencient par leurs utilisations.
**Fondement et principes du web scraping**
Les principes de base du Web Scraping consistent à créer un programme qui, de manière automatisée, récupère les données non structurées d'un site Web et ajoute une structure à ces données.Ces données sont souvent encapsulées sous forme de texte brut dans le code HTML d'un site Web, qui est la langue standard dans laquelle les sites Web sont écrits. Il existe une multitude de façons dont le web scraping peut être mis en œuvre,dont beaucoup sont discutés dans l'article.La complexité de ces implémentations varie largement selon le site et l’objectif final.Un site web écrit en HTML, pour être bien interprété par le navigateur il y a un objet appelé le DOM (Document ObjectModel) qui contient toute la structure ainsi que la hiérarchie des différents éléments HTML.

**DOM**

Selon la définition wikipedia: Le Document Object Model (DOM) est une interface de programmation normalisée par le W3C(CONSORTIUM DU WEB), qui permet à des scripts d'examiner et de modifier le contenu du navigateur web. Par le DOM, la composition d'un document HTML ou XML aussi est représentée sous forme d'un jeu d'objets - lesquels peuvent représenter une fenêtre, une phrase ou un style, par exemple – reliés selon une structure en arbre. À l'aide du DOM, un script peut modifier le document présent dans le navigateur en ajoutant ou en supprimant des nœuds de l'arbre(définition wikipedia).
![](assets/images/scrapper/dom.png)
**Les difficultés du scrapping**


Comme mentionné dans le sous titre précédent, le scraping web est une tâche qui est fortement liée au site auquel on applique le scrapper, donc vu qu’on se base sur la  structure HTML du site pour écrire le scrapper, alors dès que la structure du site change, le code du scrapper se brise et doit aussi être mis à jour.Ce qui représente une certaine fragilité au niveau de l’efficacité du scraper.
**Structure HTML des sites**


Même si les sites font des mises à jour, cela ne concerne généralement que quelques parties spécifiques du site, il est rare de voir un site web complètement remplacé par un autre d’une structure totalement différente. Il est relativement facile de vérifier cela en comparant la structure de la version d’un site à celle de sa version t-1 ou même t-x.

**Localisation des éléments html**

Il existe plusieurs langages pour localiser des éléments ou un élément spécifique dans un document html. Parmi ces langages, un des plus utilisé est Xpath. Dans ce projet c’est celui que j’ai le plus utilisé vu sa précision.

**Xpath**

XPath est une abréviation pour XML Path Language (qu'on pourrait traduire en français par « langage de chemin XML »). Ce langage utilise une syntaxe non-XML pour cibler différentes parties d'un document XML. Il peut aussi être utilisé pour tester certains nœuds d'un document afin de déterminer s'ils suivent un motif particulier. XPath est principalement utilisé avec XSLT, mais on peut tout aussi bien l'utiliser afin de naviguer dans le DOM de tout document structuré avec un langage semblable à XML (HTML ou SVG par exemple) .Le code Html ci dessous peut être facilement parcouru avec xpath:
![](assets/images/scrapper/xpath.png)
Pour ce code html, si on veut extraire le titre voici le pattern qu’il faut:   /html/head/title/
Ceci va nous retourner l'élément title après en fonction du langage de programmation qu’on utilise on peut afficher le texte qui va nous retourner le contenu de title.

**Responsabilités lié au scrapping**

Voici quelques exemples de problèmes éthiques liés au grattage ou scraping :
● Un scraping agressif peut entraîner le ralentissement ou même le plantage de certains sites dû à la très forte sollicitation du serveur.
● Potentiellement réduire la valeur d'un site car ses informations peuvent désormais être trouvées ailleurs. Cette redirection du trafic Internet peut
entraîner une perte de monétisation, via par exemple des publicités.
● Les aspects juridiques du grattage sont encore une zone grise,mais il existe certains pays qui ont des lois et aussi il y a certaines affaires qui ont confrontés à des entreprises avec la justice de leur pays. Il y’a notamment le cas de HIQ VS LINKEDIN CORP qui est connu par le grand public en 2017.

**Loi marocaine liée au scraping**

En ce qui concerne le maroc, il y’a une grande difficulté de retrouver la loi qui
parle de cela, mais certains site web marocains utilisent un robots.txt pour indiquer
s’ils sont d'accord ou non que leur site soit gratté par un robot et souvent exige le
respect de leur conditions.

**Robots.txt**


Le protocole d'exclusion des robots souvent nommé robots.txt, est une ressource de format texte qui peut être placée à la racine d'un site web, et qui contient une liste des ressources du site qui ne sont pas censées être indexées par les robots d'indexation des moteurs de recherche. Par convention, les robots consultent le fichier texte nommé robots.txt avant d'indexer un site Web. Ce protocole a été proposé par Martijn Koster en 1994 et il a été rapidement adopté comme un standard de facto du web. Il est de la responsabilité de chaque développeur avant de mettre en place un outil de grattage, de vérifier le robots.txt de ce site en question pour voir les conditions et règles qu’il faut respecter.

Le fichier est généralement localisé àhttps://www.domaine/robots.txt


## Etude fonctionnelle


L’outil ou système doit permettre :
1. D’extraire tous les produits disponible sur un siteweb dont l’url a été renseigné en paramètre.
2. D’extraire sur un site dont l’url a été entrée en paramètre, un produit dont le nom a été renseigné en paramètre
3. D’extraire un produit, d’une marque, sur un siteavec tous ces 3 paramètres en arguments
4. Garder la trace de scrapping sur un site donné afin de pouvoir reprendre au lancement de l’outil à partir du dernier produit extrait
5. Programmer le lancement du scrapper.
6. Lancer le scraping de plusieurs sites comme des tachesde manières asynchrones.

## Besoin non fonctionnel

L’outil doit être accessible uniquement par l’entreprise qui est à l'initiative du projet.

## Outils et développement techniques

**Outils**
Pour la réalisation et même la conception de ce projet j’ai utilisé différents
outils qui sont les suivants:

**A. Selenium**

Selenium WebDriver est un framework web qui vous permet d’exécuter des tests multi-navigateurs. Cet outil est utilisé pour automatiser les tests d’applications Web pour vérifier qu’il fonctionne correctement.
Selenium WebDriver vous permet de choisir un langage de programmation de votre choix pour créer des scripts de test. Il permet d'interagir avec différents navigateurs web tels que Google Chrome grâce au chromedriver 1 ou Mozilla Firefox avec le gecko driver2 de même que le ferait un utilisateur de l'application. Il entre ainsi dans la catégorie des outils de test dynamique (à l'inverse des tests statiques qui ne nécessitent pas l'exécution du logiciel) facilitant le test fonctionnel. Selenium client est disponible dans plusieurs langages de programmation comme python,java etc.. dans mon projet j’ai utilisé avec python.
![](assets/images/scrapper/selenium.png)
**B. Django**

Django est un framework Python de haut niveau, permettant un développement rapide de sites internet, sécurisés, et maintenables. Créé par des développeurs expérimentés, Django prend en charge la plupart des tracas du développement web, vous pouvez donc vous concentrer sur l'écriture de votre application sans avoir besoin de réinventer la roue. Il est gratuit, open source, a une communauté active, une bonne documentation, et plusieurs options pour du support gratuit ou non. À l'origine, Django fut développé entre 2003 et 2005 par une équipe web responsable de la création et de la maintenance de sites journalistiques. Après avoir créé un certain nombre de sites, l'équipe commença à exclure et à réutiliser des codes récurrents et des schémas d'architecture. Ce code récurrent finit par évoluer en un framework générique de développement web, qui fut mis à disposition en open-source sous le projet Django en Juillet 2005. Django a continué à se développer et à s'améliorer, depuis sa première sortie (1.0) en Septembre 2008 jusqu'à la version 2.0 récemment sortie (2017). Chaque sortie a ajouté son lot de nouvelles fonctionnalités et de corrections de bugs, allant du support de nouveaux types de bases de données, de moteurs de templates et de cache, à l'addition de fonctions et de classes de vues 'génériques' (qui réduisent la quantité de code que doivent écrire les développeurs pour tout un tas de tâches de programmation). Le choix de Django revient à mon encadrant de stage, même s’il m’a fallu apprendre ce framework,mais il n’est pas différents des autres framework avec lesquels j’ai eu à travailler dans le passés tel que Laravel ou Spring boot 

**C. Redis**

Souvent appelé broker, redis est un magasin de structure de données clé/valeur en mémoire open source rapide. Redis propose un ensemble de structures de données en mémoire polyvalentes qui vous permet de créer facilement un large éventail d'applications personnalisées. Les principaux cas d'utilisation de Redis comprennent la mise en cache, la gestion des sessions, la fonctionnalité pub/sub et les classements. Il est d’une très grande utilité surtout dans le cas de tâche asynchrone. Je l’ai utilisé dans mon code parce que pour une tâche asynchrone il faut la stocker quelque part et ensuite après la fin de la tâche il faut un endroit pour stocker le résultat et la récupération rapide. Il y a d'autres utilités bien évidemment par exemple dans le cas d’une architecture client server. Redis peut être utilisé au milieu de l’architecture entre le client et le serveur pour stocker les données et récupérer plus rapidement au lieu de toujours solliciter le serveur.
![](assets/images/scrapper/redis.png)
**D. Celery**

Celery est un système distribué simple, flexible et fiable pour traiter de grandes de messages, tout en fournissant aux opérations les outils nécessaires pour maintenir un tel système. Il s'agit d'une file d'attente de tâches axée sur le traitement en temps réel, tout en prenant en charge la planification des tâches. Les files d'attente de tâches sont utilisées comme mécanisme pour répartir le
travail entre les threads ou les machines. L'entrée d'une file d'attente de tâches est une unité de travail appelée tâche. Des processus de travail dédiés surveillent en permanence les files d'attente de tâches pour de nouveaux travaux à effectuer. Le céleri communique via des messages, généralement en utilisant un courtier  pour servir de médiateur entre les clients et les travailleurs. Pour lancer une tâche, le client ajoute un message à la file d'attente, le courtier( ici redis dans notre cas) remet ensuite ce message à un worker. Un seul processus Celery peut traiter des millions de tâches par minute, avec une latence aller-retour inférieure à la milliseconde (en utilisant RabbitMQ, Redis, librabbitmq et des paramètres optimisés).

**E. Mongodb**

MongoDB est une base de données NoSQL orientée documents. Comme nous le verrons, l’ensemble du système tourne autour de cette gestion de documents, y compris le langage d’interrogation, ce qui en fait son point fort. Nous allons nous attaquer dès maintenant à la mise en place d’un serveur Mongo et comment intégrer vos données dans cet environnement. Pour une vérification facile vérifications de la base de données il est nécessaire d’utiliser une interface graphique, en ce qui concerne mongodb il y a différents outils, dans mon cas on a utilisé le robot 3T qui est un excellent outil. Pour un début on utilise une base de donnée en local mais l’objectif final est d’utiliser la base de donnée distante utilisée par le développeur du comparateur de prix.

**Langage de programmation**

Dans le cadre de ce projet j’ai utilisé un framework django cité plus haut mais ce framework est basé sur le langage python.

**Python**

Python est le langage de programmation open source le plus employé par les informaticiens. Ce langage s’est propulsé en tête de la gestion d’infrastructure, d’analyse de données ou dans le domaine du développement de logiciels. En effet, parmi ses qualités, Python permet notamment aux développeurs de se concentrer sur ce qu’ils font plutôt que sur la manière dont ils le font. Il a libéré les développeurs des contraintes de formes qui occupaient leur temps avec les langages plus anciens. Ainsi, développer du code avec Python est plus rapide qu’avec d’autres langages.


## CONCEPTION

Compte tenu de la contrainte du projet, voici ci- dessous la manière dont j’ai pensé au
projet. Ce schéma représente les différents modules et dépendances:
![](assets/images/scrapper/conceptionscrapper.png)
Pour expliquer ce schéma, il ya d'abord le premier module Gestionnaires asynchrones c’est dans ce module qu’est défini l’application celery qui permet de définir des tâches asynchrones ainsi que les tâches programmées déclenchable à chaque fois que réglage est respecté, ces tâches programmables sont définies dans l’ordonnanceur. On peut par exemple définir qu’à chaque 5 min ou 10 min que le scrapper puisse aller gratter le site marjane en l'occurrence pour extraire quelques données et ensuite sauvegarder la position du dernier élément extrait avant la fin de l'exécution du
programme. Dans cet exemple on fait à scrapper soit à travers la vue ou un ordonnanceur qui a déclenché une tâche ensuite scrapper dépend de l’url en fonction de l’url on va faire appel au scrapper marjane ou bien du site dont l’url a été précisé après le scraping on appel au module sauvegarde pour persister les données scrapper et aussi garder la trace du dernier élément scrappé.

## Réalisation du projet

Dans ce rapport on va présenter un seul site web ( www.marjane.ma )on va expliquer pourquoi dans la partie suivante. Le premier site web qu’on a voulu scrappé était le site: https://www.mymarket.ma/ mais après avoir vérifié leur protocole de scrapping à travers le robot.txt de leur site on a remarqué qu’ils n'autorisent presque aucune ressource de leur site au 
scraper. Ci dessous une partie de leur protocole:
```
# we use Shopify as our ecommerce platform

User-agent: *
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /24897716302/checkouts
Disallow: /24897716302/orders
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*


Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Sitemap: https://www.mymarket.ma/sitemap.xml

# Google adsbot ignores robots.txt unless specifically
named!User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
Disallow: /24897716302/checkouts
Disallow: /24897716302/orders
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
Disallow: /24897716302/checkouts
Disallow: /24897716302/orders
Disallow: /carts


Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: /blogs/*+*
```
On peut remarquer qu’il ya que des disallow partout du coup il y a déjà une preuve qu’ils ne sont pas d'accord avec les robots de scrapping. Maintenant présentons celui de jumia.ma:

On peut noter que Jumia précise clairement de ne pas dépasser 200 requêtes par minutes sous peine d’être bloquées. 
Présentons maintenant celui de marjane:
![](assets/images/scrapper/marjanerobot.png)
Ici on peut voir que les seules ressources que marjane interdits aux robots c’est tout ce qui est lié au portefeuille du client ou les informations d’un compte
 CI dessous le l’interface d’accueil de marjane
![](assets/images/scrapper/marjaneaccueil.png)
Tout comme on a précisé dans les chapitres précédents le scrapping se base sur la structure du site web, nous devons donc accéder à la structure html du site, ce qu’on peut facilement réaliser avec un ctrl+shift+i ou alors on fait clic droit, inspecter l'élément.
Voici le code source html de la page ci dessus:
![](assets/images/scrapper/marjanehtmldom.png)
Nous pouvons observer le code source html ici, nous devons donc étudier profondément cette structure afin de trouver le moyen de localiser les éléments dont on veut accéder lors de notre
grattage. Il existe plusieurs outils pour pouvoir extraire les données une fois identifié tel que BeautifulSoup qui est très connu, mais comme cité dans la section Outil et Framework on a
décidé d’utiliser Selenium. Le choix est très logique car BeautifulSoup est très limité par exemple si on essaye d'accéder à la page marjane ensuite on souhaite saisir dans la zone de recherche
un texte pour lancer la recherche, il peut très vite se poser un problème car les scripts ou programmes sont écrits dans des langages dans lesquels les instructions sont exécutées de manière séquentielle et synchrone. Dans ce contexte supposons le site prend du temps à se charger ou bien la zone de recherche n'apparaît pas rapidement sur la page le code va tout de suite échouer, sur selenium par contre il y’a un mécanisme pour attendre le chargement d’un élément spécifique même si cette attente est faite de manière synchrone aussi.

**Snippets du scrapper marjane**
Ci dessous l’image montre un bout de code du scrapper de marjane:
![](assets/images/scrapper/marjanesnippet.png)
Cette fonction permet de scrapper tout le contenu du site, tous les articles ou produits qui sont sur le site. Mais pour ne pas être très agressif envers le serveur de marjane il faut penser à faire cette tâche de manière répétitive à travers un ordonnanceur et être capable de recommencer le scrapping à partir de l'élément le programme s’est arrêté avant la fin de sa dernière exécution. C’est pourquoi on remarque en argument from_last (booleen).
Il y’a donc une autre fonction :
![](assets/images/scrapper/marjanesecondsnippet.png)
Cette fonction est simple, elle fait appel à une autre fonction qui vérifie s’il y’a un élément qui existe dans le fichier historique, si oui on fait appel à la première fonction c’est à dire scrape
avec les arguments from last à true et aussi l’objet json contenant les informations sur le derniers éléments gratté lors de la dernière exécutions. Enfin pour le site de marjane la dernière fonction c’est celle qui permet de gratter le site de marjane en saisissant le nom d’un produit spécifique:
![](assets/images/scrapper/marjanelastsnippet.png)
**Appel du scrapper à travers une requête**
![](assets/images/scrapper/appelscrapper.png)
Ici ce lien nous permet d’appeler le scrapper.
![](assets/images/scrapper/executionscrapper.png)
Ce qu’on peut voir ici sur l’image ci-dessus.

**Stockage au niveau de la base de donnée**

Il serait illogique d’extraire les données dans le cadre de ce projet sans les stocker, c’est pour cela à chaque article scrappée sur le site de marjane, on le stocke dans la base donnée. Il existe un modèle prédéfini par le développeur du projet de comparateur de prix. 
La structure qu’on a due respectée se trouve sur la page suivante:
![](assets/images/scrapper/scrappersnippetstockage.png)
On peut constater qu’on a des classes ici, ce qui peut rappeler la notion de ORM (Object Relational Mapping) disponible dans plusieurs frameworks populaire tel que Spring boot mais aussi Django. Alors le problème est que dans le Nosql on ne parle pas de relationnel, alors comment faire ce mapping tant utile? Il ya plusieurs solutions qui ont été développées dans cette optique avec python, parmi ces solutions on retrouve Pymongo et Djongo(à ne pas confondre avec Django le framework, ici il ya O et non A). Ces solutions permettent donc de garder des classes et le mapping est fait avec le nosql au lieu du sql classique. Pour revenir à notre base de données nosql, on a donc 4 collections proposées par le développeur du comparateur de prix:
Provenance,Catégorie,HIst Ajout et Produit.
Après le scrapping voici la base de donnée:
![](assets/images/scrapper/marjanedb.png)
**Stockage du dernier élément scrappé**

En ce qui concerne l’historique, et la trace voici le code qui permet de garder cette trace.
 ![](assets/images/scrapper/scrappingfromlast.png)
 Ce code se trouve au niveau des fonctions utilitaires. L'historique est donc gardé dans un fichier .json créé par le programme s’il n’existe pas ou alors tout simplement modifié. il se présente comme défini dans l’image:

```
exemple:
{
“i”:1,
“j”:1,
“k”:1,
“l”:1, }
```
## PERSPECTIVES

Le projet pour une meilleure efficacité, j’ai pensé à inclureune dimension de machine learning dans le futur afin de mieux connaître et comprendre les patterns et les structures des sites web, même s’il ya des modifications au niveau de ces derniers pour que le code ne soit pas très affecté.

## CONCLUSION

Ce projet vu sa complexité a été une grande occasion pour moi de mettre encore une fois mes connaissances à l'épreuve aussi apprendre de nouvelles choses, la linéarité du projet fait que j’ai développé qu’un seul scrapper à savoir celui de marjane mais celui ci est configurable et aussi la modularité du projet fait que il est tout à fait possible d’ajouter de nouveaux scrapper dédiés à d’autre site cela ne fera qu’augmenter la quantité de données mais n’affectera en rien le code déjà en place qui marche comme il le faudrait. Donc je laisserai un document celui-ci et le code source pour que celui-ci soit compréhensible par moi ou n’importe quel autre personne qui prendra le relai pour continuer ce projet dans le cadre de l’entreprise. Je dois aussi préciser que c’est avec une grande émotion que j'écris ces dernières lignes de mon rapport car voilà 5 ans que j’ai pris le chemin de l’université et à travers ce projet de fin d'étude. Ce document j’espère aussi qu’il sera utilisé et qu’il servira, car comme énoncé dans le titre c’est une proposition ou encore une contribution de ma part pour la mise en place du projet final qu’est le comparateur de prix.


## BIBLIOGRAPHIE

https://www.marjane.ma/

https://www.youtube.com/watch?v=FRn5J31eAMw

https://www.youtube.com/watch?v=o3tYiyE_OXE&t=8116s

https://docs.celeryproject.org/en/stable/userguide/periodic-tasks.html

https://www.edureka.co/community/79425/which-exception-raised-when-element-found-html-using-xpath

https://www.youtube.com/watch?v=OTmQOjsl0eg

https://selenium-python.readthedocs.io/api.html

https://dev.to/mdrhmn/web-scraping-using-django-and-selenium-3ecg

https://docs.celeryproject.org/en/stable/getting-started/index.html

https://docs.celeryproject.org/en/stable/getting-started/next-steps.html

https://pymongo.readthedocs.io/en/stable/

https://www.djongomapper.com/

https://www.diva-portal.org/smash/get/diva2:1468583/FULLTEXT01.pdf

https://www.mongodb.com/compatibility/mongodb-and-django

https://ichi.pro/fr/tutoriel-celery-une-technologie-incontournable-pour-les-developpeurs-python-

https://github.com/urllib3/urllib3/issues/
https://www.youtube.com/watch?v=Wvc2ZqdIPpk


