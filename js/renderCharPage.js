// import { generateMoveCards } from './components/characterPage.js';

const allCharacterData = {
    Clairen:{
        character: "Clairen",
        moves:{
            Grounded:[
                {fullName: "Forward Strong", shortName: "Fstrong", startFrame: 10},
                {fullName: "Up Strong", shortName: "Ustrong", startFrame: 11},
                {fullName: "Down Strong", shortName: "Dstrong", startFrame: 7},
                {fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 7},
                {fullName: "Up Tilt", shortName: "Utilt", startFrame: 8},
                {fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6}
            ],
            Aerial:[
                {fullName: "Forward Air", shortName: "Fair", startFrame: 6},
                {fullName: "Up Air", shortName: "Uair", startFrame: 15},
                {fullName: "Down Air", shortName: "Dair", startFrame: 15},
                {fullName: "Back Air", shortName: "Bair", startFrame: 8},
                {fullName: "Neutral Air", shortName: "Nair", startFrame: 9},
            ],
            Special:[],
            Grab:[
                {fullName: "Grab", shortName: "Grab", startFrame: 6},
                {fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9},
                {fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9},
            ],
            Getup:[
                {fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 16},
                {fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0},
                {fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0},
                {fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0},
                {fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 24},
                {fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 23},
                {fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0},
                {fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 32},
                {fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0},
            ]
        }
    },
    Zetterburn:{
        character: "Zetterburn",
        moves:{
            Grounded:[
                {fullName: "Forward Strong", shortName: "Fstrong", startFrame: 16},
                {fullName: "Up Strong", shortName: "Ustrong", startFrame: 9},
                {fullName: "Down Strong", shortName: "Dstrong", startFrame: 6},
                {fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 8},
                {fullName: "Up Tilt", shortName: "Utilt", startFrame: 8},
                {fullName: "Down Tilt", shortName: "Dtilt", startFrame: 5}
            ],
            Aerial:[
                {fullName: "Forward Air", shortName: "Fair", startFrame: 10},
                {fullName: "Up Air", shortName: "Uair", startFrame: 8},
                {fullName: "Down Air", shortName: "Dair", startFrame: 14},
                {fullName: "Back Air", shortName: "Bair", startFrame: 9},
                {fullName: "Neutral Air", shortName: "Nair", startFrame: 5},
            ],
            Special:[],
            Grab:[
                {fullName: "Grab", shortName: "Grab", startFrame: 6},
                {fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9},
                {fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9},
            ],
            Getup:[
                {fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 15},
                {fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0},
                {fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0},
                {fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0},
                {fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 36},
                {fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 24},
                {fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0},
                {fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30},
                {fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0},
            ]
        }
    }
}

var currentCharacter = allCharacterData[window.location.pathname.split("/").pop().split(".")[0]]
$(`#home-container`).append(generateMoveCards(currentCharacter));