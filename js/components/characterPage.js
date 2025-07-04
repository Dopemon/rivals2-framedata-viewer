let charMoveCard = (charName, groupName, moves) => $(`
    <div class="card">
        <div class="card-header">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#${groupName.split(' ').join('-')}" aria-expanded="true" aria-controls="collapseOne">
              <h3>${groupName + " Attacks"}</h3>
            </button>
          </h5>
        </div>
    
        <div id="${groupName.split(' ').join('-')}" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body d-block offset-sm-1 offset-lg-0">
            <div class="row -mt-5">
                ${moves?.map(m => `
                    <div class="col-lg-6 col-sm-10 mt-5">
                        <h4 class="d-block">${m.fullName}</h4>
                        <div class="d-block"><div class="fd-modal">./files/videos/${charName}_${m.shortName.split('-')[0]}_NHB_${m.shortName.split('-')[1] ? Number(m.shortName.split('-')[1])-1 : 0}.webm?f=${m.startFrame} && ./files/videos/${charName}_${m.shortName}_WHB_${m.shortName.split('-')[1] ? Number(m.shortName.split('-')[1])-1 : 0}.webm?f=${m.startFrame}</div></div>
                    </div>
                `).join('')}
            </div>
          </div>
        </div>
    </div>
    `);
    
let generateMoveCards = (charMoveData) => Object.keys(charMoveData.moves).map((v) => charMoveCard(charMoveData.character, v, charMoveData.moves[v]));

// export default { charMoveCard, generateMoveCards }