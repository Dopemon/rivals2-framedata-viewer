let charSelector = (charInfo) => $(`
    <div class="col-md-4 px-xl-5 py-xl-3 px-md-3 py-md-1 px-sm-5 py-sm-3">
        <a href="./${charInfo.name}.html">
            <img class="card-img-top" src="${charInfo.iconUrl}" data-holder-rendered="true">
        </a>
    </div>
`);

let homeContainerRow = (arr) => $(`<div class="row"></div>`).append(arr.map((ci) => charSelector(ci)));
