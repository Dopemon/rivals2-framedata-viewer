var homeContainer = $("#home-container");


var allCharInfo = [
    {name: "Clairen", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/0/01/RoA2_Clairen_css.png/160px-RoA2_Clairen_css.png"},
    {name: "Etalus", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/d6/RoA2_Etalus_css.png/160px-RoA2_Etalus_css.png"},
    {name: "Fleet", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/f/f8/RoA2_Fleet_css.png/160px-RoA2_Fleet_css.png"},
    {name: "Forsburn", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/8/83/RoA2_Forsburn_css.png/160px-RoA2_Forsburn_css.png"},
    {name: "Kragg", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/f/fe/RoA2_Kragg_css.png/160px-RoA2_Kragg_css.png"},
    {name: "Loxodont", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/7/79/RoA2_Loxodont_css.png/160px-RoA2_Loxodont_css.png"},
    {name: "Maypul", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/3/3b/RoA2_Maypul_css.png/160px-RoA2_Maypul_css.png"},
    {name: "Orcane", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/4/4c/RoA2_Orcane_css.png/160px-RoA2_Orcane_css.png"},
    {name: "Ranno", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/4/4b/RoA2_Ranno_css.png/160px-RoA2_Ranno_css.png"},
    {name: "Wrastor", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/9/91/RoA2_Wrastor_css.png/160px-RoA2_Wrastor_css.png"},
    {name: "Zetterburn", iconUrl: "https://static.wikitide.net/dragdownwiki/thumb/d/da/RoA2_Zetterburn_css.png/160px-RoA2_Zetterburn_css.png"},
    
]

var dividedCharInfo = chunkArray(allCharInfo, 3);

dividedCharInfo.forEach(charGroup => {
    homeContainer.append(homeContainerRow(charGroup));
})

console.log(dividedCharInfo);