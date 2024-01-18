# Griglia Campo Minato

## Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### Consigli del giorno

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

## SVOLGIMENTO

- creo la struttura della griglia con html e css;

### foglio main.js

- recupero gli elementi bottone e box-container;
- al click del bottone genero la griglia

### foglio functions.js

#### funzione griglia

- inserisco contenitore dove mettere la griglia;
- genero la cella (funzione cella) per 100 volte con ciclo for;
- aggiungo la cella;

#### funzione cella

- creo l'elemento cella;
- aggiungo la classe box all'elemento creato;
- al click della cella
  - faccio toggle della classe active;
  - mostro il numero della cella cliccata in console.

### BONUS

- creo nell'html il select;
- recupero il select nel main.js;

#### funzione griglia

- assegno a una variabile il valore della select;
- SE il livello è facile
  - stampo 100 celle;
- SE il livello è medio
  - stampo 81 celle;
- SE il livello è difficile
  - stampo 49 celle;

### funzione cella

- assegno a una variabile il valore della select;
- SE il livello è facile
  - la cella avrà classe easy;
- SE il livello è medio
  - la cella avrà classe medium;
- SE il livello è difficile
  - la cella avrà classe hard;
