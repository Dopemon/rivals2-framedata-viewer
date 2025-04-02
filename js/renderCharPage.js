// import { generateMoveCards } from './components/characterPage.js';

const allCharacterData = {
    Clairen: {
        character: "Clairen",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 10 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 11 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 7 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 7 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 6 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 15 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 15 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 8 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 9 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 16 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 24 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 23 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 32 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Forsburn: {
        character: "Forsburn",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 6 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 6 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 8 },
                { fullName: "Forward Strong-1", shortName: "Fstrong-1", startFrame: 14 },
                { fullName: "Forward Strong-2", shortName: "Fstrong-2", startFrame: 6 },
                { fullName: "Up Strong-1", shortName: "Ustrong-1", startFrame: 14 },
                { fullName: "Up Strong-2", shortName: "Ustrong-2", startFrame: 4 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 8 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 6 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 9 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 6 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 7 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 11 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 13 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 6 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 15 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 36 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 24 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Loxodont: {
        character: "Loxodont",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 7 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 3 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 27 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 14 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 16 },
                { fullName: "Forward Tilt-1", shortName: "Ftilt-1", startFrame: 12 },
                { fullName: "Forward Tilt-2", shortName: "Ftilt-2", startFrame: 5 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 13 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 10 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 10 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 15 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 8 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 7 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 15 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 20 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 21 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Wrastor: {
        character: "Wrastor",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 4 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 4 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 15 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 16 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 11 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 9 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 14 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 8 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 8 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 9 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 5 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 4 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 16 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 23 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 21 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 45 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Fleet: {
        character: "Fleet",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 5 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 4 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 22 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 20 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 16 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 10 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 9 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 7 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 11 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 17 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 9 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 4 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 16 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 22 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 28 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 32 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Maypul: {
        character: "Maypul",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 4 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 3 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 20 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 22 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 12 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 5 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 12 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 8 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 11 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 6 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 8 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 18 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 39 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 25 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 41 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Kragg: {
        character: "Kragg",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 5 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 5 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 24 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 16 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 12 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 11 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 7 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 5 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 12 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 12 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 13 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 7 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 6 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 10 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 30 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 28 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 45 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Ranno: {
        character: "Ranno",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 3 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 3 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 4 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 14 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 10 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 9 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 6 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 5 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 6 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 4 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 15 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 4 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 3 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 18 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 0 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 24 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Orcane: {
        character: "Orcane",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 4 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 4 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 13 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 19 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 6 },
                { fullName: "Empowered Forward Strong", shortName: "Empowered-Fstrong", startFrame: 13 },
                { fullName: "Empowered Up Strong", shortName: "Empowered-Ustrong", startFrame: 19 },
                { fullName: "Empowered Down Strong", shortName: "Empowered-Dstrong", startFrame: 6 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 9 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 4 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 6 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 8 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 13 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 8 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 8 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 3 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 17 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 18 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 17 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Etalus: {
        character: "Etalus",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 5 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 5 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 6 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 17 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 18 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 14 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 8 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 9 },
                { fullName: "Down Tilt-1", shortName: "Dtilt-1", startFrame: 6 },
                { fullName: "Down Tilt-2", shortName: "Dtilt-2", startFrame: 4 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 7 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 8 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 12 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 9 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 5 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 18 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 30 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 9 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 21 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Zetterburn: {
        character: "Zetterburn",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 4 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 3 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 16 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 9 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 6 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 8 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 8 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 5 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 10 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 8 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 14 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 9 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 5 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 15 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 36 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 24 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 30 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    },
    Olympia: {
        character: "Olympia",
        moves: {
            Grounded: [
                { fullName: "Jab-1", shortName: "Jab-1", startFrame: 2 },
                { fullName: "Jab-2", shortName: "Jab-2", startFrame: 4 },
                { fullName: "Jab-3", shortName: "Jab-3", startFrame: 5 },
                { fullName: "Forward Strong", shortName: "Fstrong", startFrame: 22 },
                { fullName: "Up Strong", shortName: "Ustrong", startFrame: 15 },
                { fullName: "Down Strong", shortName: "Dstrong", startFrame: 6 },
                { fullName: "Forward Tilt", shortName: "Ftilt", startFrame: 10 },
                { fullName: "Up Tilt", shortName: "Utilt", startFrame: 5 },
                { fullName: "Down Tilt", shortName: "Dtilt", startFrame: 4 }
            ],
            Aerial: [
                { fullName: "Forward Air", shortName: "Fair", startFrame: 13 },
                { fullName: "Up Air", shortName: "Uair", startFrame: 6 },
                { fullName: "Down Air", shortName: "Dair", startFrame: 14 },
                { fullName: "Back Air", shortName: "Bair", startFrame: 5 },
                { fullName: "Neutral Air", shortName: "Nair", startFrame: 4 },
            ],
            Special: [],
            Grab: [
                { fullName: "Grab", shortName: "Grab", startFrame: 6 },
                { fullName: "Dash Grab", shortName: "DashGrab", startFrame: 9 },
                { fullName: "Pivot Grab", shortName: "PivotGrab", startFrame: 9 },
            ],
            Getup: [
                { fullName: "GetupAttack", shortName: "GetupAttack", startFrame: 15 },
                { fullName: "GetupNeutral", shortName: "GetupNeutral", startFrame: 0 },
                { fullName: "GetupRollBackward", shortName: "GetupRollBackward", startFrame: 0 },
                { fullName: "GetupRollForward", shortName: "GetupRollForward", startFrame: 0 },
                { fullName: "GetupSpecial", shortName: "GetupSpecial", startFrame: 23 },
                { fullName: "LedgeAttack", shortName: "LedgeAttack", startFrame: 23 },
                { fullName: "Ledgeroll", shortName: "Ledgeroll", startFrame: 0 },
                { fullName: "LedgeSpecial", shortName: "LedgeSpecial", startFrame: 36 },
                { fullName: "LedgeStand", shortName: "LedgeStand", startFrame: 0 },
            ]
        }
    }
}

var currentCharacter = allCharacterData[window.location.pathname.split("/").pop().split(".")[0]]
$(`#home-container`).append(generateMoveCards(currentCharacter));