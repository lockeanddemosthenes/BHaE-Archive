// const units = [{
//     "name": "Briar",
//     "stats": {
//         "hp": 33,
//         "str": 20,
//         "mag": 11,
//         "dex": 18,
//         "spd": 22,
//         "lck": 13,
//         "def": 16,
//         "res": 14,
//         "cha": 12
//     },
//     "class": "Thief",
//     "abilities": {
//         "personal": "Professor's Guidance: etc",
//         "skill1": "Axebreaker",
//         "skill2": "Unarmed Combat",
//         "skill3": "Sword Crit +10",
//         "skill4": "",
//         "skill5": ""
//     },
//     "weapon": "",
//     "equipment": "",
//     "battalion": {
//         "name": "",
//         "type": "",
//         "desc": ""
//     },
//     "crest": ""
// },
//
//     {
//         "name": "Byleth",
//         "stats": {
//             "hp": 0,
//             "str": 0,
//             "mag": 0,
//             "dex": 0,
//             "spd": 0,
//             "lck": 0,
//             "def": 0,
//             "res": 0,
//             "cha": 0
//         },
//         "class": "",
//         "abilities": {
//             "personal": "",
//             "skill1": "",
//             "skill2": "",
//             "skill3": "",
//             "skill4": "",
//             "skill5": ""
//         },
//         "weapon": "",
//         "equipment": "",
//         "battalion": {
//             "name": "",
//             "type": "",
//             "desc": ""
//         },
//         "crest": ""
//     }
// ];
// const units = JSON.parse(unitsJSON);

const jsonData= require('./students.json');
console.log(jsonData);

let outputString = units[0].name;

console.log("the", outputString);
document.getElementById("results").innerHTML = outputString;