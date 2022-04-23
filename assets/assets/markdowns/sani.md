## But

Le but du projet est la réalisation de l’interface graphique d’un service de commande de nourritures et de livraison en ligne.
Le front end cible doit couvrir:

● Page d’accueil

● Page menu

● Page Addition

● Page Livraison

● Page validation commande


## Missions

La mission consiste à réaliser le front-end de l’application adapté à l'écran d’iphone 13, l’application ne gère pas la responsivité. Le front-end doit notamment être capable de sauvegarder quelques données de l’application en local sur l’iphone à savoir l’historique de commande de l’utilisateur. 

## Contraintes de la mission
### Page accueil
```
● L’image a un modifier clipShape pour la rendre en rectangle arrondi
● En bas de l'ecran il y'a un swiper en vert permettant d'aller sur la page suivante
● Pour la vue de « swipe », vous pouvez y aller en étapes :
1-Arrière-plan Texte (commander)
2- Capsule dynamique (qui s’agrandit en même temps que le geste)
3-Cercle qui bouge (qui reconnaît le geste)
● Pour le swipe, l’utilisateur doit se rendre à plus de la moitié (width) de l’écran pour que le geste « compte ». Sinon, rien ne se passe et le bouton est réinitialisé au début.
```
### Page Menu
```
● Un item de type « side » ne peut pas être en trio (et donc ne devrait pas avoir de contextMenu)
● La vue QUITTER doit utiliser un LongPress
● L’image dans une rangée de liste est uniquement présente si le repas est en combo

```
### Page Addition
```
● La date doit être en français et dynamique (change en fonction de la date d'aujourd’hui)
● Si aucun item sélectionné, montre une vue Text demandant de choisir des items dans le menu
● La taxe est de 15%
```
### Page Livraison
```
● Afficher une map interactive
● La région prise en compte est Ottawa donc c'est le périmètre de livraison
● Désactiver le bouton soumettre tant que l'adresse et la ville ne sont pas sélectionnées
● Une fois l'adresse soumise à la map, afficher une icone avec le nom Livraison sur la map
```
### Page Valider commande
```
● Désactiver le bouton commander tant que la commande n'est pas faite et l'adresse de livraison renseignée
● Pour chaque donnée manquante, afficher un message d'erreur
```

##Durée du projet
Le projet dans sa première phase a duré 5 jours, la seconde phase a duré 3 jours; soit 8 jours en total.

## Quelque captures
 Accueil           |  Menu
 :-------------------------:|:-------------------------:
 ![](assets/images/sani/accueil.JPG) |  ![](assets/images/sani/menu.JPG) 
 
  Facture vide           |  Facture non vide
  :-------------------------:|:-------------------------:
  ![](assets/images/sani/facturevide.JPG) |  ![](assets/images/sani/facturefrite.JPG)  
  
   Livraison           |  Livraison
   :-------------------------:|:-------------------------:
   ![](assets/images/sani/livraisondesactiver.JPG) |  ![](assets/images/sani/livraison.JPG)  

 Commande           |  Commande valide
 :-------------------------:|:-------------------------:
 ![](assets/images/sani/validationcommandeincomplet.JPG) |  ![](assets/images/sani/commandevalider.JPG) 

### Propriétés et droits
Le projet appartient exclusivement au client à l’origine de la commande.


