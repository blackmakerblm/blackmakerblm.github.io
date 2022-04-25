

### But

Le but du projet est la mise en place un système de paiement électronique, de transfert d’argent sur mobile ou par carte pour l’entreprise PDS(Paiement Digital Service).
Le système cible doit couvrir les modules suivants:

● Gestion des clients

● Gestion des vendeurs

● Gestion des transactions

● Gestion comptes

● Gestion des agents

● Gestion de code QR

● Gestion authentifications

● Gestion rôles et permissions

### Missions

Les missions du maître d’oeuvres sont les suivantes:

● Etude fonctionnelle du projet

● Etude techniques du projet

● La conception du projet

● La réalisation du projet

### Livrables d’entrée
| Livrable      | Phase | Auteur     |
| :---        |    :----:   |          ---: |
| charte graphique      | Documentation       | PDS   |


### Livrables de sortie
| Livrable      | Phase | Auteur     |
| :---        |    :----:   |          ---: |
| Conception      | Conception       | CARL&MOI   |
| Etude technique   | Etude préalable        | CARL&MOI      |
| Module client      | Réalisation       | CARL&MOI   |
| Module vendeur   | Réalisation        | CARL&MOI       |
| Module agent   | Réalisation       | CARL&MOI    |
| Module comptes   | Réalisation        |CARL&MOI   |
| Module transactions      | Réalisation       | CARL&MOI  |
| Module  code QR   | Réalisation        | CARL&MOI   |
| Module  authentification   | Réalisation        | CARL&MOI    |
| Module rôles et permissions     | Réalisation       | CARL&MOI    |
| Interfaces graphiques   | Réalisation        | CARL&MOI      |
| Application fonctionnelle | Deploiment     | CARL&MOI    |
| Manuel technique  | Deploiment        | CARL&MOI        |
## Etude de l’existant

Le projet PDS s’inscrit dans une vision que partagent plusieurs acteurs de la finance, à savoir l’inclusion financière. En ce qui concerne le cas spécifique de PDS, il compte évoluer dans un secteur appelé le paiement et transfert mobile. Et dans ce secteur, PDS a des acteurs qui l’ont précédé, il est donc logique de faire une étude des solutions existantes afin de mieux comprendre le processus métier du projet et bien évidemment les innovations que le projet va apporter. Parmi ces solutions existantes il y’a : Orange money, Sama Money, Wave etc....
La liste ci-dessus n’est pas exhaustive mais l'étude se portera sur ces différentes  entreprises qui sont les acteurs majeurs du secteur.

## Orange Money Mali

C’est une solution qui est proposée par l'opérateur de télécommunication Orange Mali, Le service est disponible pour les clients du réseau télécom c'est-à-dire la population disposant d’une puce orange money. Il faut par contre créer un compte orange money et ci dessous les services que la solution offre:

<span style="color:brown">● Transfert d’argent national et intra régional<br>
● Retrait dans un kiosque orange money<br>
● Dépôt dans son compte à travers un kiosque orange money.<br>
● Achat de crédit<br>
● Paiement de services (Isago,Eau/Electricité,Sani web etc....)<br>
● Livraison de cash<br>
</span>

La liste ci-dessus n’est pas exhaustive non plus orange money propose d’autres services.Pour utiliser les services d’orange money il n’est pas nécessaire d’avoir une applications mobiles pour chaque opération il suffit de composer #144# et un menu apparaît dans lequel le client choisit le service qu’il souhaite. Mais il existe aussi une application mobile disponible sur android et ios dont voici quelques captures d'écrans:
![](assets/assets/images/pds/orangemoney.png)

### SAMA Money

SAMA Money est une plateforme de transfert d’argent et de paiement mobile. Il suffit de créer un compte SAMA pour pouvoir envoyer et recevoir de l’argent partout au Mali. Contrairement à Orange money, elle ne repose pas sur un réseau télécom. Les services suivants sont celles qu’elle propose:

<span style="color:brown">● Envoi d’argent<br>
● Retrait d’argent <br>
● Paiement de services( Eau/Électricité, Abonnement Tv, Recharge téléphonique etc...)<br>
</span>
Les services de Sama Money sont accessibles via #600# ou à travers leur application mobile disponible sous android et ios. Pour envoyer de l’argent il faut indiquer le numéro de téléphone du bénéficiaire. Ci dessous quelques captures d'écrans des interfaces.
![](assets/assets/images/pds/samamoney.png)
### Wave

C’est une plateforme indépendante aussi tout comme Sama Money, elle propose les services suivantes:

<span style="color:brown">● Transfert d’argent<br>
● Paiement de services <br>
</span>
Ci dessous quelques captures d'écrans des interfaces de Wave:
![](assets/assets/images/pds/wave.png)
## Etude fonctionnelle et non fonctionnelle

### A.Objectifs fonctionnels


Le système doit permettre :
```
● La création d’un compte client ainsi que sa gestion
● La création d’un compte vendeur ainsi que sa gestion
● La création d’un compte agent ainsi que sa gestion
● Le transfert de fond d’un compte vers un autre
● Affecter un code QR à chaque compte
● Contrôler l’accès aux ressources en fonctions des rôles et permissions
● Scanner un code QR et transférer un montant
● Scanner un code QR et encaisser un montant
```
### ACTEURS

### B.Objectifs fonctionnels

### 1. charte graphique

Comme souligné dans les livrables, elle sera fourni par PDS (le maître d’ouvrage) mais le maître d'œuvre peut l’assister dans son choix. Une fois la charte graphique validée, par le maître d'œuvre et d’ouvrage, il ne sera plus possible de revenir en arrière pour des modifications sauf avec l’accord des deux parties.

### 2. Accessibilité

L’application doit être disponible sous android pour un début et les fonctionnalités ne seront disponibles qu’aux utilisateurs déjà inscrits. L’api qui sera développée ne pourra être accessible qu’à travers les applications dédiées.

### 3. Hébergement

L’application sera hébergée sur le serveur de choix du maître d’ouvrage en l'occurrence PDS, mais le maître d'œuvre pourra lui conseiller quelques hébergeurs.


#### 4. Gestion de base de données

Les données de l’application seront stockées dans une base de données Postgresql et leur accès doit être sécurisé et soumis à un contrôle d’accès basé sur les droits.

#### 5. Conditions d’utilisation et politique

La définition de la politique et des conditions d'utilisation de l’application sont la responsabilité du maître d’ouvrage (PDS).

#### 6. Sécurité

Les utilisateurs ne devront accéder qu’à leur propre donnée et en aucun cas à celle des autres utilisateurs.

#### 7. Maintenance

La maintenance peut être faite par l’entreprise ou la personne choisie par PDS, au cas où PDS souhaite que le maître d'œuvre actuel fasse la maintenance de son application, les deux parties doivent signer alors un contrat dont les clauses seront élaborées par les deux parties.

#### 8. Délai du projet

Le délai de réalisation du projet au complet est défini par le maître d’ouvrage, mais celui ci n’est validé que lorsqu’il apparaît sur le cahier de charge validé par les deux partie

### Quelque captures
Accueil agent           |  Profil
:-------------------------:|:-------------------------:
![](assets/assets/images/pds/pdsaccueil.png) |  ![](assets/assets/images/pds/pdsprofil.png)

 Creation compte            |  Saisi identifiant
 :-------------------------:|:-------------------------:
 ![](assets/assets/images/pds/pdscreationcompte.png) |  ![](assets/assets/images/pds/pdsrechercher.png)
  
 Parametre           |  Historique
 :-------------------------:|:-------------------------:
 ![](assets/assets/images/pds/pdsparametre.png) |  ![](assets/assets/images/pds/pdsdetailcompte.png)
   
### Budget du Projet

Le coût total du projet défini par le maître d'œuvre pour son travail et ses efforts s'élève à x fcfa. Ce prix n’inclut pas les frais d'hébergement. Ce coût peut être revu par une des deux parties avant la validation du cahier de charge, mais une fois validé ce prix ne peut être révisé que si les deux parties sont d'accord. Si le maître d’ouvrage souhaite avoir une application sous IOS, le maître d'œuvre s’engage à proposer un prix inférieur ou égal à 70% du coût total dont les deux parties auront validé pour ce projet.

#### Modalité de paiement
Le premier paiement s’effectue après la livraison du premier livrable c’est à dire le dossier de conception à hauteur de 25% du coût total soit x fcfa,le second paiement s’effectue le 06 février 2022 soit x fcfa,et le dernier paiement s’effectue à la livraison de l’application fonctionnelle à hauteur de 50% du coût global soit x. En cas de non paiement comme mentionné, le maître d'œuvre peut suspendre le développement jusqu’à son paiement pour son travail déjà mentionné.

#### Propriétés et droits

En cas d’accord sur le coût initial proposé par le maître d'œuvre(BAH Mamadou Aliou), tout ce qui sera développé, le code source de l’application et l’application elle-même seront exclusivement les propriétés du maître d’ouvrage(PDS). Le maître d'œuvre(BAH Mamadou Aliou) s’il souhaite, peut néanmoins utiliser une partie du code source (50% des modules au maximum sur un même projet) pour des fins commerciales mais doit avertir le maître d’ouvrage. En cas de révision du prix initialement proposé par le maître d'œuvre, la totalité du code source devient automatiquement la propriété du maître d'œuvre mais l’application développée reste dans tous les cas la propriété exclusive du maître d’ouvrage(PDS).

#### Règlement de litige

En cas de litige, une des deux parties peut rapporter le litige devant une autorité ou institution juridique du Mali à Bamako, le choix de l’institution de juridiction revient à la partie qui initie le recours à la justice. Cette autorité de juridiction devra alors jouer le rôle d’arbitrage entre les deux parties.


