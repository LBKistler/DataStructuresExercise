// 1a
const Jedi = [];

// 1b
Jedi [Jedi.length] = 'Luke Skywalker';
// jedi[0] =`Luke Skywalker`
// console.log(Jedi);

// 1c
Jedi.push(`Obi-Wan Kenobi`);
// console.log(Jedi);

// 1d
Jedi.unshift(`Yoda`);
// console.log(Jedi);

// 1e
console.log(Jedi[1]);

// 1f
/*const force = Jedi.pop(;)
console.log(Jedi);
console.log(force);
*/
Jedi.splice(2);
// console.log(Jedi);

// 1g
Jedi.shift();
console.log(Jedi);
/*const dark = Jedi.shift();
console.log(dark);
console.log(Jedi.slie(1));
*/

// 2a
const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`]
// console.log(sithLords);

// 2b
const imperialOfficers = [`Grant Moff Tarkin`, `Orson Krennic`]
// console.log(imperialOfficers);

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
console.log(starWarsVillians.slice(0, 2));

// 3a
const droids = {astromech: `R2-D2`, protocol: `C-3PO`, assassin: `IG-88` };
// console.log(droids);

// 3b
console.log(droids[`astromech`]); 

// 3d
console.log(droids.protocol);

// 3d
droids.assassin = `IG-11`;
console.log(droids.assassin);
console.log(droids);
/*
droids[`assassin`] = `IG-11`;
console.log(droids.assassin);
console.log(droids);
*/

// BONUS
// 4 - did not attempt
// console.log(`Darth Vader`[6]);
console.log(starWarsVillians[0][6]);

// 5 - did not attempt
console.log(starWarsVillians.slice(-4, -3));
// console.log(sithLords.slice(-2, -1));

//6a
const starWarsMovies = [
   {episodeOne: `The Phantom Menace`, episodeTwo: `Attack of the Clones`, episodeThree: `Revenge of the Sith`},

   {episodeFour: `A New Hope`, episodeFive: `The Empire Strikes Back`, episodeSix: `Return of the Jedi`},

   {episodeSeven: `The Force Awakens`, episodeEight: `The Last Jedi`, episodeNine: `The Rise of Skywalker`}
];
console.log(starWarsMovies);

// 6b
starWarsMovies.splice(1,0, `Solo`, `Rogue One`);
console.log(starWarsMovies);




