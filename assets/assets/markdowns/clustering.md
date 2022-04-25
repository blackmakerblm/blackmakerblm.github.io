##### RAPPORT ANALYSE INDICATEURS PAYS AFRICAINS

**Imputation de données manquantes**

Cet exercice a pour but de regrouper les pays dans des clusters en fonctions des indicateurs
donnés dans l’exercice.

**Problème:** L’une des étapes importantes dans chaque analyse de donnée est de s’assurer
que les données sont complètes, qu’il y’a pas de valeurs manquantes. Ici en regardant
attentivement les observations(Lignes) on peut voir que pour certains pays il y’a des
données qui manquent.

**Solution:** Il faut donc remplacer ces valeurs avec des valeurs qui pourraient se rapprocher
de la réalité. Pour ce faire on va appliquer l’algorithme des **K-NN** qui est utilisé pour la
classification normalement mais on s’en servira juste pour connaitres les K voisins les plus
proches des pays qui ont des données manquantes. Ensuite pour chaque attribut manquant
on fait la moyenne de cet attribut des K plus proches voisins.

**Note:** Pour cet exercice on va utiliser k=4 donc les 4 voisins les plus proches ce qui nous
donnera pour la Somalie( Tunisie,Soudan sud,Bénin et Libye) et pour le Soudan du
sud(Zimbabwe,Bénin,Tchad et le Mali).On aura donc pour le Soudan du Sud et Somalie ce tableau

![](assets/assets/images/clustering/donnees.png)

Les données en rouge sont les données remplaçantes.

### A)Clusterisation sur Orange avec K-means

**Qu’est ce que K-means?**

L’algorithme des K-means pour K-moyennes(en français) est un algorithme de machine
Learning dans la catégorie Unsuppervised Machine Learning.
Le K étant une variable défini par l’analyste en fonction de ces propres critères et choix.
Elle consiste à tout simplement laisser la machine calculer des similarités entres les
differents élements d’un Ensemble donné. En fonction de ces similarité et du K defini par
l’analyse, l’algorithme regroupe les données qui ont le plus de similarité dans le même sous
ensemble appelé cluster

## A.1) Clusterisation Par Catégorie

## A.1.1)Population pour K=4, K=6, K=8 et K=

Ci dessous le schéma sous orange
![](assets/assets/images/clustering/population_orange.png)

Essayons donc de visualiser pour chaque valeur de K le résultat de clusterisation

**k=4**
![](assets/assets/images/clustering/populationk4.png)

On peut distinguer les 4 clusters ici le Nigeria qui seul dans son cluster ceci est normale
parce que sa population est largement supérieur aux autres pays, un autre cluster qui
regroupe le Congo, l’Égypte et Éthiopie mais on peut voir sur le graphique que y’a clairement
une distance assez considérable entre le Congo Rep Démocratique entre les autres
éléments.
On peut vérifier facilement la pertinence de cette clusterisation dans le cas de la population
en calculant l’étendue de chaque cluster.
Pour le C1 par exemple si on calcule l’étendue:
Étendu=|min-max|
ce qui donne |93.000-18.535.000| = 18.442.

Et aussi on peut visualiser la distribution des élements par cluster pour k=

![](assets/assets/images/clustering/population_distribution.png)

On voit ici que le C1 contient à peu près tous les pays avec 37 pays sur 54 soit 68% des
pays

Passons maintenant au K =6 pour comparer la pertinence

**k=6**
![](assets/assets/images/clustering/populationk6.png)

On peut constater que 15 pays qui étaient dans le c1 ont été regroupé à part dans un
nouveau cluster à savoir le Burundi,Benin,Tunisie,Somalie,Soudan du sud,Tchad etc...
Maintenant si on calculons l’étendue du cluster 1 par exemple
Étendu=|min-max|
ce qui donne |93.000-6.993.000| = 6.900.
ce qui a considérablement diminué alors les clusters sont plus homogènes avec le k=6 que

**k=8**
![](assets/assets/images/clustering/populationk8.png)
on peut aussi voir ça dans le graphique de distribution par cluster.

**K=10**
![](assets/assets/images/clustering/populationk10.png)
Le Congo Démocratique n’est plus avec l’Égypte et l’Éthiopie ici,
Plus le k avance plus on voit que les clusters sont heterogènes entre eux.



# Interprétation

De k=4 à k=10 on voit que le Nigeria est rester seul dans son cluster ce qui permet de voir
clairement que le Nigeria se distingue de par sa population on peut donc dire que son cluster
représente les pays surpeuplés comparés aux autres pays dont il est le seul élément.
On voit aussi que les pays comme Seychelles,Sao Tomé et Principé,Cabo
verde,Comores,Guinée équatorial, Namibie etc. sont toujours resté ensembles et de part leur
population on peut dire que leur cluster qui est composé de 14 pays représente les pays les
moins peuplés.
Si on compare l’étendue du cluster qui regroupe les pays comme Seychelles,Namibie etc.
avec le K=10 et celui avec K=

K=10
Étendu=|min-max|
ce qui donne |93.000-2.348.000| = 2.255.

K=4
Étendue = 18.442.

![](assets/assets/images/clustering/population_frequence.png)

Alors il est très clair désormais l’augmentation du K nous donne des pays beaucoup plus
proches au niveau de leur proches


**A.1.2) Superficie pour K=4, K=6, K=8 et K=**

Ci dessous le schéma pour la superficie
![](assets/assets/images/clustering/superficie_orange.png)
Cette fois ci pour cet attribut pour une meilleur visualisation du résultat on va représenter les nuages de points sous forme de bissectrice où le x=y dans le plan.


**K=4**
![](assets/assets/images/clustering/superficiek4.png)
On peut faire le même processus que dans le cas de la population c’est à dire calculer  l’etendue par cluster on verra que cet dernier se reduit avec l’augmentation du K.

Ci dessous les captures des differents clusters de K=6 et K=8



**K=6**
![](assets/assets/images/clustering/superficiek6.png)
**k=8**
![](assets/assets/images/clustering/superficiek8.png)
Maintenant pour le K=10 on va essayer de voir la logique entre la clusterisation par Population et la clusterisation par Superficie


**K=10**
![](assets/assets/images/clustering/superficiek10.png)
# Interprétation

Là nous pouvons voir visuellement que les éléments de differents clusters sont généralement assez distant entre eux ce qui reflètent hétérogenèse de ces éléments. On voit que deux clusters C2 et C6 sont tr-s éloignes des autres parmi lesquels C2 représente les pays qui ont la superficie la plus grande, on peut ainsi remarquer que la superficie des pays africains est très heterogènes certains pays sont énormément grand tandis que d’autre sont très très petit, c’est le cas du C3 qui représente les pays très petits. Les pays du C3 varient entre 460.000 km² -72.000 km² pendant avec 15 pays soit 28% des pays africains mais les pays du C2 qui contient que deux pays soit 3,7% varient entre 2.345.000 km² - 2.382.000 km² Par rapport à la population on peut voir que pour les pays les moins peuplés C1, on retrouve généralement les même pays ensemble regroupé ensemble par rapport à la superficie aussi, c’est le cas de Seychelles,Sao-Tomé-Et Principes,Comores,Cabo-verde,Guinée équatoriale etc.. Pour ces pays il y’a une logique mais un pays qui se démarque ici encore c’est le Nigeria qui par rapport à la population on voit qu’il est très
peuplé mais quand on regarde sa superficie on voit qu’il appartient au cluster 7 qui vient en 4e position en terme de grandeur de superficie et il est même le pays le moins grand dans son cluster ce qu’on pourrait interprété par un surpeuplement du Nigeria ou encore un taux de natalité très élevé au Nigeria, Mais le croisement avec les analyses suivantes permettront de mieux comprendre ce phénomène. 

**A.1.3) Densité de la population pour K=4, K=6, K=8 et K=**

Ci dessous le schéma sous orange
![](assets/assets/images/clustering/densitepopulation_orange.png)
On va juste mettre les captures d’écrans de k=4,6,8 en raison de la plus grande pertinence du K=10

**k=4**
![](assets/assets/images/clustering/densitepopulationk4.png)
**K=6**
![](assets/assets/images/clustering/densitepopulationk6.png)
**k=8**
![](assets/assets/images/clustering/densitepopulationk8.png)
**k=10**
![](assets/assets/images/clustering/densitepopulationk10.png)

# Interprétation

Ce graphique nous montre que notre interprétation du surpeuplement du Nigéria est un peu erroné car on le retrouve dans le cluster 6 qui vient en 4e position dans les clusters qui regroupent les populations les plus denses, on peut voir que le Nigéria a une population qui est plus proportionnelle à sa superficie que l’ile Maurice qui est dans le cluster le plus dense en population. Mais d’une autre part on peut remarquer sur la capture suivante où on fait un zoom sur les pays les moins denses (C1) qu’il y’a l’Algérie qui est le plus grand pays du continent, donc l’Algérie a de ce fait d’enormes territoires pour ses populations des générations futures. Mais également le pays le moins dense du cluster C1 c’est la Namibie et on l’a vu précédemment que ce pays fait partie des pays avec les moins peuplés du continent mais n’est pas pour autant un petit pays.
![](assets/assets/images/clustering/densitepopulation_interpretation.png)
**A.1.4) Produit Intérieur Brut pour K=4, K=6, K=8 et K=10**

Ci dessous le schéma sous Orange
![](assets/assets/images/clustering/pib_orange.png)
On va procéder de la même manière c’est à dire on va plus concentrer l’analyse sur le k=10

mais on on va présenter les captures pour k=4,6,8


**k=4**
![](assets/assets/images/clustering/pibk4.png)

**k=6**
![](assets/assets/images/clustering/pibk6.png)

**k=8**
![](assets/assets/images/clustering/pibk8.png)

**k=10**
![](assets/assets/images/clustering/pibk10.png)
# Interprétation

Le PIB étant la richesse créée dans le pays pendant une année, cette graphique nous montre l’économie du continent est assez variée, sur 54 pays on peut voir 4 pays c’est à dire Algerie,Afrique du sud, Egypte et le Nigéria qui appartient chacun à des clusters differents mais la distances entre ces clusters et les autres clusters est très significative. Ces 4 clusters représentent les super économies du continent ou encore les puissances économiques. D’un autre coté on voit que l’autre extrémité est beaucoup plus importante en fonction du cardinal des clusters. Le cluster qui représente les pays avec l’économie la moins importante est composé de 18 pays soit 33% des pays africains, on peut les assimilé aux pays sous développes du continent. Le Nigeria qui a la plus forte économie peut être expliquée par sa plus grande population. Il y’a beaucoup d’autres facteurs qui peuvent expliquer cette différence entre les économies, parmi lesquels facteurs on peut citer la présence de ressources naturelles stratégiques telle que le pétrole et aussi la bonne gestion de ces ressources, il y’a également le facteur géographique c’est à dire l’emplacement du pays.

**A.1.5)** PIB par habitant pour K=4, K=6, K=8 et K=10

Ci dessous le schéma sous orange
![](assets/assets/images/clustering/pibhabitant_orange.png)
On va juste présenter comme dans les 3 derniers indicateurs juste les images de la clusterisation

pour k=4,6,8


**k=4**
![](assets/assets/images/clustering/pibhabitantk4.png)

**k=6**
![](assets/assets/images/clustering/pibhabitantk6.png)

**k=8**
![](assets/assets/images/clustering/pibhabitantk8.png)

**k=10**
![](assets/assets/images/clustering/pibhabitantk10.png)
# Interprétation

Cet indicateur donne une idée sur la proportion entre la population d’un pays et la richesse totale produite dans ce pays. C’est à dire on va considérer si on repartit également la richesse entre les
habitants combien chacun devrait avoir par an. A ce niveau on peut voir que les pays dont les habitants se portent en général les mieux ne sont pas forcément ceux avec la plus grande économie. Le Nigeria appartient au cluster C5 qui regroupent les pays qui viennent en 7è positions des pays où les habitants sont les plus riches, il est même le dernier de la liste de C5. Une autre chose qu’on peut remarquer si on compte les pays qui appartiennent aux clusters en dernière position par rapport au PIB par habitant notamment C8 et C2, ils sont au nombre de 26 soit 49% des pays africains.

**A.1.6)** Taux de croissance du PIB entre 2006 et 2014 pour K=4, K=6, K=8 et K=10

Ci dessous le schéma sous orange
![](assets/assets/images/clustering/TCPIB_orange.png)
Les images ci dessous représentent respectivement la clustérisation avec k=4,6,8 par rapport au taux croissance du pib.
![](assets/assets/images/clustering/TCPIBk4.png)
![](assets/assets/images/clustering/TCPIBk6.png)
![](assets/assets/images/clustering/TCPIBk8.png)
** K=10**
![](assets/assets/images/clustering/TCPIBk10.png)
# Interprétation

Malgré le problème découvert dans les graphiques précédant, on peut constater que à part la République centrafricaine tous les 53 autres pays ont connu des croissances de leur PIB entre 2006-2014 l’Éthiopie qui s’est démarqué à ce niveau étant seul dans le C5 le cluster avec la plus grande croissance dépassant de très loin avec une croissance à deux chiffres. Le chiffre négatif de la Centrafrique pourrait s’expliquer par la violente guerre civile qui a eu lieu dans le pays en 2013.

**A.1.7)** Clusterisation globale pour K=4, K=6, K=8 et K=10

Ci dessous le schéma sous Orange
![](assets/assets/images/clustering/clusterisationgl_orange.png)
Ici nous allons juste augmenter pour le K-means le nombre d’itération pour que l’algorithme puisse donner le meilleur résultat possible en raison du nombre d’indicateurs. La valeur est par défaut à 300 sur Orange on va choisir 500 itérations maximales. Pour une meilleure lecture du résultat on a ajouté au fichier excel une colonne qui indique la région du pays, on peut voir le centre,le nord, l’est,l’ouest et le sud du continent 

**k=4**
![](assets/assets/images/clustering/clusterisationglk4.png)
Cette fois ci c’est plus simple de représenter le résultat de la clustérisation par un tableau plutôt qu’un nuage de point. Mais le constat de la pertinence qui augmente avec le K reste valable. Donc nous allons juste représenter l’évolution des clusters et l’analyse sera faite sur le dernier résultat pour k=10.


**K=6**
![](assets/assets/images/clustering/clusterisationglk6.png)

**k=8**
![](assets/assets/images/clustering/clusterisationglk8.png)

**k=10**
![](assets/assets/images/clustering/clusterisationglk10.png)
# Interprétation

Avant de commencer l’interprétation définissons d’abord une métrique qu’on appelle en K-means la silhouette.


## C’est quoi une silhouette?

C’est un coefficient qui est associé à chaque élément après son affectation à un cluster. Le coefficient varie entre -1 et 1 Si silhouette =0 signifie que l’élément se situe à la frontière entre deux clusters. Si silhouette = 1 signifie que l’élément a été affecté de manière exacte à son cluster Si silhouette = -1 alors cela signifie que l’élément est associé au mauvais cluster.

# Interprétation

Les indicateurs pris globalement permet de voir les pays qui ont le plus de similarité de manière générale, on peut voir ici le Maroc qui se distingue étant seul dans son cluster C8, mais si nous
observons la colonne silhouette on peut voir que sa silhouette = 0,5 ce qui veut dire est peut dans son cluster mais elle pourrait également migrer vers un autre cluster si on augmente le K. Mais si on décide de prendre le résultat que tel le Maroc est un pays qui se démarque de manière générale. Comme le Maroc, le Nigeria et l’Algérie aussi sont chacun dans des clusters differents et seul dans leur cluster avec pour chaque 0,5 comme coefficient de silhouette. Le C10 contient 3 pays dont deux pays du Maghreb à savoir la Libye et la Tunisie., ceci peut d’une certaine manière s’expliquer du fait que les deux pays sont frontaliers. Le C4 composés 4 pays, contient 3 pays à savoir l’Éthiopie, le Soudan et le Kenya qui sont collés cette similarité pourrait aussi s’expliquer par ce rapprochement. Le C1 lui est composé de differents pays de presque sous régions. Considérons le graphique suivant qui est la boite à moustache qui nous permet de connaître le profil d’une série statistique.
Ci dessous la boite à mouche du K-means avec k =10 en fonction de la silhouette et de la région
![](assets/assets/images/clustering/boitemoustache.png)
Dans cette boite on va juste s’intéresser au premier quartile on remarque que pour les pays du centre, de l’Est,du Sud, de l’Ouest sont tous supérieur à 0,50, on peut donc déduire que pour chacune de ces régions, 75% des pays sont dans le bon cluster.


