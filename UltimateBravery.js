allChamps = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie",
              "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum",
              "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana",
              "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks",
              "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas",
              "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna",
              "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista",
              "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen",
              "Khazix", "Kindred", "Kled", "KogMaw", "LeBlanc", "LeeSin", "Leona",
              "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
              "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus",
              "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn",
              "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus"];

allBoots = ["Bottes_de_mobilité", "Bottes_de_célérité", "Jambières_du_berserker", "Bottes_de_lucidité", "Bottes_de_sorcier", "Tabi_ninja", "Sandales_de_mercure"];

allItems = ["Ange_gardien", "Bâton_de_l'archange", "Bâton_du_vide", "Bâton_séculaire", "Canon_ultrarapide", "Cape_solaire",
            "Casque_adaptatif", "Cimeterre_mercuriel", "Coeur_gelée", "Coiffe_de_rabadon", "Couperet_noir", "Cotte_épineuse",
            "Danse_de_la_mort", "Danseur_fantôme", "Dent_de_nashor", "Echo_de_luden", "Encensoir_ardent", "Epée_vespérale_de_draktar",
            "Faux_spectrale", "Fléau_de_liche", "Force_de_la_trinité", "Gage_de_sterak", "Gantelet_givrant", "Gloire_du_juste",
            "GLP_hextech_800", "Geule_de_malmortius", "Hydre_titanesque", "Hydre_vorace", "Lame_d'infinie", "Lame_du_roi_déchu",
            "Lame_enragée_de_guinsoo", "Lame_spectre_de_youmuu", "Masque_abyssal", "Manteau_de_la_nuit", "Morellonomicon",
            "Médaillon_de_l'iron_solari", "Présage_de_randuin", "Pistolame_hextech", "Plaque_du_mort", "Poignard_de_statikk",
            "Rappel_mortel", "Sablier_de_zhonya", "Spectre_de_riley", "Soif_de_sang", "Tourment_de_liandry", "Visage_spirituel",
            "Voile_de_la_banshee", "Salutations_de_dominik"];

allSpells = ["Fantôme", "Barrière", "Clarté", "Embrasement", "Fatigue", "Purge", "Saut_Eclair", "Soins"];

allName = ["Bamboo Slayer", "Doggo Doggy", "Did you say dumb ?", "NSFW", "Bloup Bloup", "WIIINNNNW", "Ultimate build", "Why this exist"];

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
//generateBoots
function generateBoots(){
  let r = Math.floor(Math.random() * allBoots.length);
  return allBoots[r];
}
//generateStuff
function generateStuff(){
  let stuff = [];
  let item;
  for(let i = 0; i < 5; i++){
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
let bootsName = generateBoots();
let stuff = generateStuff();


//genName
console.log(buildName);

//gen champ
console.log(champName);

//gen spell
console.log("Premier spell: " + spellsName[0] + " & " + spellsName[1]);

//boots
console.log("Boots: " + bootsName);

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
let bootsElem = document.querySelector("#boots_name");
let stuffElem = document.querySelector("#stuff_name");

//img
let champAvatar = document.querySelector("#champ_avatar");
let spell1Avatar = document.querySelector("#spell1");
let spell2Avatar = document.querySelector("#spell2");
let bootsAvatar = document.querySelector("#boots");
let item1 = document.querySelector("#item1");



bootsAvatar.setAttribute("src", "assets/boots/" + bootsName + ".png");
spell1Avatar.setAttribute("src", "assets/spells/" + spellsName[0] + ".png");
spell2Avatar.setAttribute("src", "assets/spells/" + spellsName[1] + ".png");
champAvatar.setAttribute("src", "assets/champs/" + champName + ".png");

//stuff images
for(let i = 0; i < stuff.length; i++){
  console.log("#item" + (i+1));
  let item = document.querySelector("#item" + (i+1));
  item.setAttribute("src", "assets/items/" + stuff[i] + ".png");
  item.setAttribute("title", stuff[i]);
}

//text
buildNameElem.innerHTML = buildName;
champElem.innerHTML = champName;
spellsElem.innerHTML = "Spells: " + spellsName[0] + " & " + spellsName[1];
bootsElem.innerHTML = "Bottes: " + bootsName;
stuffElem.innerHTML = "All items: " + stuffList;
