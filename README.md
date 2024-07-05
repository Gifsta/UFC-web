# Introduction/Index

Pour la conception de UFCWeb je suis parti d'un design simple avec peu de couleur.
L'index est donc composé d'un carrousel fonctionnant avec alpine js et tailwind il fait défiler différentes images grâce à des boutons situés sur les extrémités :
- Le carrousel version ordinateur
- 
[![carouselmd.jpg](https://i.postimg.cc/hvjRStwW/carouselmd.jpg)](https://postimg.cc/k6kpsqqf)

-Le carrousel version téléphone

[![carouseltel.png](https://i.postimg.cc/tTqL5g9Z/carouseltel.png)](https://postimg.cc/R3YsC464)

Ensuite j'ai mis plusieurs cartes tailwind avec une histoire rapide de l'UFC :
- Version ordinateur
- 
[![cartepc.png](https://i.postimg.cc/W3Yfw69C/cartepc.png)](https://postimg.cc/7G7Vx7rn)

- Version téléphone
- 
[![cartetel1.png](https://i.postimg.cc/hP1ZCB3V/cartetel1.png)](https://postimg.cc/9rzBMv2f)

[![cartel2.png](https://i.postimg.cc/GmpKqsD1/cartel2.png)](https://postimg.cc/PPB1qJK6)

[![image.png](https://i.postimg.cc/76qnJGwc/image.png)](https://postimg.cc/R3bHj03Q)


# Le Header

Pour le Header j'ai voulu faire une barre de navigation simple et intuitive composé de :
-Home
-Combattants
-Calendrier
-Contact
- Voici un exemple en version ordinateur :
- 
[![image.png](https://i.postimg.cc/Pqy8c6n3/image.png)](https://postimg.cc/wttvRQvL)

- Et la version téléphone :
- 
[![image.png](https://i.postimg.cc/WbZqjpPJ/image.png)](https://postimg.cc/kBngvmGn)

[![image.png](https://i.postimg.cc/zGSLbdvz/image.png)](https://postimg.cc/qNqBWx2S)

Comme je n'avais pas envie de réécrire le code du Header à chaque fois j'ai créé un fichier HTML puis il me suffit de l'appeler grâce à un fichier en Java Script : 

[![image.png](https://i.postimg.cc/d059b2bB/image.png)](https://postimg.cc/xkbHHzTJ)

Appel du header dans l'index.html :

[![image.png](https://i.postimg.cc/T1Dq5Zp7/image.png)](https://postimg.cc/303DPfjm)


## Le Footer
Pour le footer j'ai juste mis un background gris avec un faux copyright et un lien vers mon Github. 
J'ai utilisé la même méthode qu'avec l'Header, j'ai donc créé un fichier HTML puis il m'a suffi de l'appeler grâce à un fichier en Java Script

Le footer : [![image.png](https://i.postimg.cc/v80d0k2g/image.png)](https://postimg.cc/BtPy6Y04)

La version téléphone et ordinateur n'es pas différente

Le Java Script :

[![image.png](https://i.postimg.cc/3wFqd0P4/image.png)](https://postimg.cc/3yW1qNrY)

# La page des dates de combats
J'ai utilisé [FullCalendar](https://fullcalendar.io/) pour répertorier les dates de combat :

[![image.png](https://i.postimg.cc/vmXPXn9n/image.png)](https://postimg.cc/3y4Cxdtr) 

Pour récupérer les données d'api (date.json)  j'ai créé un fichier Java Scrip une fois récupérer je les redistribue directement sur le calendrier en HTML

Voici le code Java Scrip : 

[![image.png](https://i.postimg.cc/htK4dF0G/image.png)](https://postimg.cc/3dbQscVM)

# La page des combattant 
Cette page affiche dans un tableau les combattants avec leurs noms, Prénoms et Surnoms les données provienne d'une api (Fighter json)  :

- Le tableau en version ordinateur :
- 
[![image.png](https://i.postimg.cc/FzCyqNwH/image.png)](https://postimg.cc/BPDPP9qr)

- Le tableau en version téléphone :
- 
[![image.png](https://i.postimg.cc/HkywZGzT/image.png)](https://postimg.cc/cvdtCbPz)

Voici comment les données sont récupérées en Java Script :

[![image.png](https://i.postimg.cc/g0pZgxrK/image.png)](https://postimg.cc/LJy5X6tq)

## Page 2 relier a combattants.html
La deuxième page reliée à combattants.html permet d'obtenir des données supplémentaires sur les combattants
Premièrement pour créer cette deuxième page il faudra récupérer l'id des combattants pour cela rien de plus simple:

[![image.png](https://i.postimg.cc/8cM7Hh3B/image.png)](https://postimg.cc/QKNNNWjH) 

Permets de rendre la ligne cliquable et d'attribuer au clic l'id du combattant

[![image.png](https://i.postimg.cc/XJyqjfVS/image.png)](https://postimg.cc/R644Gn6X)

Ici le script en Java Script permet de récupérer l'id seul.
Une fois l'id obtenu il faut récupérer les données manquantes et les placer dans la page InfoCombattant.html.
La page une fois les données obtenues :
- Version ordinateur
- 
[![image.png](https://i.postimg.cc/3w5bf7dX/image.png)](https://postimg.cc/cvhm6p7C)

[![image.png](https://i.postimg.cc/PxK3qwKy/image.png)](https://postimg.cc/qhhXbgP6)

- Version téléphone
- 
[![image.png](https://i.postimg.cc/HxBHX3T7/image.png)](https://postimg.cc/KkkdyPkZ)

[![image.png](https://i.postimg.cc/QCz3nt98/image.png)](https://postimg.cc/xNLhX93h)

La récupération des données fonctionne comme ceci : 

[![image.png](https://i.postimg.cc/SNYrB30D/image.png)](https://postimg.cc/crZwYDLn)

[![image.png](https://i.postimg.cc/6qvvPs7Z/image.png)](https://postimg.cc/WqszDHwp)

[![image.png](https://i.postimg.cc/DZt6j3fV/image.png)](https://postimg.cc/N9kRFVrb)


## La page de contact
J'ai fait un formulaire pour la page de contact (l'exercice était sans PHP donc formulaire non fonctionnel) voici le résultat : 
- Version ordinateur
- 
[![image.png](https://i.postimg.cc/ZR7tCRL8/image.png)](https://postimg.cc/479F0Xqy)

- Version téléphone
- 
[![image.png](https://i.postimg.cc/Y2vqQKmr/image.png)](https://postimg.cc/23fDftwM)


# Screenshot de la maquette

## Index

[![image.png](https://i.postimg.cc/63cf3vbw/image.png)](https://postimg.cc/2bqZ9VfX)

[![image.png](https://i.postimg.cc/5t7wWVXN/image.png)](https://postimg.cc/7CzCSj1p)

[![image.png](https://i.postimg.cc/KjLLT3JR/image.png)](https://postimg.cc/GTLHwt0C)

[![image.png](https://i.postimg.cc/0jpMjRyS/image.png)](https://postimg.cc/1V357d6R)

[![image.png](https://i.postimg.cc/7YnJykc8/image.png)](https://postimg.cc/YhjC1JMb)


## Calendrier

[![image.png](https://i.postimg.cc/fTDkCPbH/image.png)](https://postimg.cc/V5ZYLDnM)

[![image.png](https://i.postimg.cc/4NW45Nqd/image.png)](https://postimg.cc/1fNZRP9h)

## Combattants

[![image.png](https://i.postimg.cc/C5m0mmvt/image.png)](https://postimg.cc/V0r2NBPB)

[![image.png](https://i.postimg.cc/wjtzQ5Df/image.png)](https://postimg.cc/RWz2MHsK)

## Info du combattant

[![image.png](https://i.postimg.cc/PJ3GmNJn/image.png)](https://postimg.cc/JHkd8rjp)

[![image.png](https://i.postimg.cc/W38xvtMq/image.png)](https://postimg.cc/jwWM6x3R)

[![image.png](https://i.postimg.cc/fygFVFqw/image.png)](https://postimg.cc/wRLFPWdP)

[![image.png](https://i.postimg.cc/mDL68R0L/image.png)](https://postimg.cc/p9SZdNW4)

## Contact
[![image.png](https://i.postimg.cc/056h35zj/image.png)](https://postimg.cc/3WTL0TCQ)
[![image.png](https://i.postimg.cc/V6JZ34Lp/image.png)](https://postimg.cc/dkK9C2Cj)

# Merci d'avoir consulté mon read.Md
