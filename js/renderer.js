var homeContainer = $("#home-container");


var allCharInfo = [
    {name: "Absa", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/e/eb/RoA2_Absa_Portrait.png/300px-RoA2_Absa_Portrait.png"},
    {name: "Clairen", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/7/7f/RoA2_Clairen_Portrait.png/300px-RoA2_Clairen_Portrait.png"},
    {name: "Etalus", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/1/18/RoA2_Etalus_Portrait.png/300px-RoA2_Etalus_Portrait.png"},
    {name: "Fleet", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/a/ab/RoA2_Fleet_Portrait.png/300px-RoA2_Fleet_Portrait.png"},
    {name: "Forsburn", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/8/86/RoA2_Forsburn_Portrait.png/300px-RoA2_Forsburn_Portrait.png"},
    {name: "Kragg", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/d5/RoA2_Kragg_Portrait.png/300px-RoA2_Kragg_Portrait.png"},
    {name: "Loxodont", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/6/6e/RoA2_Loxodont_Portrait.png/300px-RoA2_Loxodont_Portrait.png"},
    {name: "Maypul", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/d7/RoA2_Maypul_Portrait.png/300px-RoA2_Maypul_Portrait.png"},
    {name: "Olympia", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/da/RoA2_Olympia_Portrait.png/300px-RoA2_Olympia_Portrait.png"},
    {name: "Orcane", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/d9/RoA2_Orcane_Portrait.png/300px-RoA2_Orcane_Portrait.png"},
    {name: "Ranno", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/0/02/RoA2_Ranno_Portrait.png/300px-RoA2_Ranno_Portrait.png"},
    {name: "Wrastor", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/a/a0/RoA2_Wrastor_Portrait.png/300px-RoA2_Wrastor_Portrait.png"},
    {name: "Zetterburn", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/3/3c/RoA2_Zetterburn_Portrait.png/300px-RoA2_Zetterburn_Portrait.png"}
]

var dividedCharInfo = chunkArray(allCharInfo, 3);

dividedCharInfo.forEach(charGroup => { homeContainer.append(homeContainerRow(charGroup)); })