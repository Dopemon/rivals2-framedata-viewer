// let charSelector = (charInfo) => $(`
//     <div class="col-md-4">
//         <div class="card mb-4 box-shadow">
//         <img class="card-img-top" src="${charInfo.iconUrl}" data-holder-rendered="true">
//         <div class="card-body">
//             <div class="d-flex justify-content-between align-items-center">
//                 <a href="./${charInfo.name}" type="button" class="btn btn btn-outline-secondary w-100">View</a>
//             </div>
//         </div>
//         </div>
//     </div>
// `);

// ====================================
// ======= HOME PAGE COMPONENTS =======
// ====================================

let charSelector = (charInfo) => $(`
    <div class="col-md-4 px-xl-5 py-xl-3 px-md-3 py-md-1 px-sm-5 py-sm-3">
        <a href="./${charInfo.name}.html">
            <img class="card-img-top" src="${charInfo.iconUrl}" data-holder-rendered="true">
        </a>
    </div>
`);

let homeContainerRow = (arr) => $(`<div class="row"></div>`).append(arr.map((ci) => charSelector(ci)));


// =========================================
// ======= CHARACTER PAGE COMPONENTS =======
// =========================================

let charMoveAccordion = (charInfo) => $(`<div></div>`);

let charMoveCard = (charMoveData) => $(`
<div class="card">
    <div class="card-header">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#${charMoveData.group.split(' ').join('-')}" aria-expanded="true" aria-controls="collapseOne">
          <h3>${charMoveData.group}</h3>
        </button>
      </h5>
    </div>

    <div id="${charMoveData.group.split(' ').join('-')}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body d-block offset-sm-1 offset-lg-0">
        <div class="row">
            ${charMoveData.moves?.map(m => `
                <div class="col-lg-6 col-sm-10">
                    <h4 class="d-block">${m.presentationName}</h4>
                    <div class="d-block"><div class="fd-modal">${m.nhb} && ${m.whb}</div></div>
                </div>
            `).join('')}
        </div>
      </div>
    </div>
</div>
`);