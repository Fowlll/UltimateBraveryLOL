allChamps = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie"];
allItems = ["Zèle", "Echo_de_luden", "Visage_spirituel", "Soif_de_sang", "Sceptre_de_riley", "Zhonya"];
allSpells = ["Flash", "Teleportation", "Clarté", "Boule_de_neige"];

allName = ["Bamboo Slayer", "Doggo Doggy", "Did you say dumb ?", "NSFW"];

//generateChamp
function generateChamp(){
  let r = Math.floor(Math.random() * allChamps.length);
  console.log("id champion: " + r);
  return allChamps[r];
}
//generateSpells
function generateSpells(){
  let spells = [];
  let r = Math.floor(Math.random() * allSpells.length);
  let rr = Math.floor(Math.random() * allSpells.length);
  while(r === rr){
    rr = Math.floor(Math.random() * allSpells.length);
  }
  spells.push(allSpells[r]);
  spells.push(allSpells[rr]);

  return spells;
}
//generateStuff
function generateStuff(){
  let stuff = [];
  let item;
  for(let i = 0; i < 6; i++){
    item = allItems[Math.floor(Math.random() * allItems.length)];
    if(stuff.includes(item)){
      i--;
    }else{
      stuff.push(item);
    }
  }
  console.log("Stuff generated");
  return stuff;
}
//generateName
function generateBuildName(){
  let r = Math.floor(Math.random() * allName.length);
  return allName[r];
}

//generate all params
let buildName = generateBuildName();
let champName = generateChamp();
let spellsName = generateSpells();
let stuff = generateStuff();


//genName
console.log(buildName);

//gen champ
console.log(champName);

//gen spell
console.log("Premier spell: " + spellsName[0] + " & " + spellsName[1]);

//gen stuff
let stuffList = "";
stuff.forEach(item => {
  if(stuffList === ""){
    stuffList = item;
  }else{
    stuffList += ", " + item;
  }
});
console.log("All items: " + stuffList);


//Page design
let buildNameElem = document.querySelector("#build_name");
let champElem = document.querySelector("#champ_name");
let spellsElem = document.querySelector("#spells_name");
let stuffElem = document.querySelector("#stuff_name");

buildNameElem.innerHTML = buildName;

champElem.innerHTML = champName;

spellsElem.innerHTML = "Spells: " + spellsName[0] + " & " + spellsName[1];

stuffElem.innerHTML = "All items: " + stuffList;
