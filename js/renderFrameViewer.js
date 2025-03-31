
$(window).load($(".fd-modal").toArray().forEach((modal, i) => {
    modal = $(modal);
    let videoContainer = $(`<div class="frameData"></div>`);
    let url1 = modal.text().split("&&")[0].trim();
    let url2 = modal.text().split("&&")[1].trim();
    let currentFrame = url1.length > 2 ? url1.split("?f=").pop().trim() : 0;
    let video1 = $(`<video class="noHitboxes top"></video>`);
    let video2 = $(`<video class="yesHitboxes bottom"></video>`);
    let source1 = $(`<source src="${url1}">Your browser does not support the video tag.</source>`);
    let source2 = $(`<source src="${url2}">Your browser does not support the video tag.</source>`);
    let controlsContainer = $( `<div class=""></div>` );
  
    let iconSize = (size) => `${size ?? 4}rem`;
    let iconBackwards = (size = 16) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/></svg>`);
    let iconForwards = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>`);
    let iconToggleOff = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/></svg>`);
    let iconToggleOn = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"><path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/></svg>`);
    let iconExpand = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/></svg>`);
    let iconPlay = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>`);
    let iconPause = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`);
    let iconInfo = (size) => $(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/></svg>`);
  
    let backwards = $( `<button class="fd-control-button move backward"></button>` ).append(iconBackwards(iconSize()));
    let forwards = $( `<button class="fd-control-button move forward"></button>` ).append(iconForwards(iconSize()));
    let toggleIcons = $( `<div class=""></div>`);
    let hbOff = $(`<button class="fd-control-button toggle hitboxes off show"></button>`).append(iconToggleOff(iconSize()));
    let hbOn = $(`<button class="fd-control-button toggle hitboxes on hide"></button>`).append(iconToggleOn(iconSize()));
    let toggleModal = $(`<button class="fd-control-button toggle"></button>`).append(iconExpand(iconSize()));
  
    let playButton = $(`<button class="fd-control-button show"></button>`).append(iconPlay(iconSize()));
    let pauseButton = $(`<button class="fd-control-button hide"></button>`).append(iconPause(iconSize()));
    let infoButton = $(`<button class="fd-control-button"></button>`).append(iconInfo(iconSize()));
  
    let infoContainer = $(`<div class="info-container"></div>`)
    let infoRow = $(`<div class="info-container-row"></div>`)
    let infoText = (text) => $(`<p font-size=1rem;>${text}</p>`);
  
    infoContainer.append(infoRow.clone().append(iconPlay(iconSize(2))).append(infoText("Play video.")));
    infoContainer.append(infoRow.clone().append(iconPause(iconSize(2))).append(infoText("Pause video.")));
    infoContainer.append(infoRow.clone().append(iconBackwards(iconSize(2))).append(infoText("Move the player backwards by 1 frame.")));
    infoContainer.append(infoRow.clone().append(iconForwards(iconSize(2))).append(infoText("Move the player forwards by 1 frame.")));
    infoContainer.append(infoRow.clone().append(iconToggleOff(iconSize(2))).append(infoText("Toggle hitboxes on/off.")));
    infoContainer.append(infoRow.clone().append(iconExpand(iconSize(2))).append(infoText("Toggle pop-out modal.")));
    infoContainer.append(infoRow.clone().append(iconInfo(iconSize(2))).append(infoText("Toggle info view (this).")));
  
    modal.text("");
    controlsContainer.addClass("fd-controls-direction");
    toggleIcons.addClass("fd-controls-toggle").append(infoButton).append(hbOn).append(hbOff).append(toggleModal);
    video1.append(source1);
    video2.append(source2);
    infoContainer.append(infoRow.clone());
    videoContainer.append(toggleIcons).append(video1).append(video2).append(infoContainer).append(controlsContainer);
    controlsContainer.append(backwards).append(playButton).append(pauseButton).append(forwards);
    modal.append(videoContainer);
  
    var oneFrameLength = 0.017;
    infoButton.on('click', () => { infoContainer.hasClass("top") ? lowerElement(infoContainer) : raiseElement(infoContainer)});
    const raiseElement = (el) => { el.removeClass("bottom").addClass("top") };
    const lowerElement = (el) => { el.removeClass("top").addClass("bottom") };
    const toggleTopBottom = (el) => { el.hasClass("top") ? lowerElement(el) : raiseElement(el) }
    [hbOn, hbOff].forEach( el => el.on('click', () => { 
      [hbOn, hbOff].forEach(el => toggleShow(el)); 
      [video1, video2].forEach(el => toggleTopBottom(el))
    }));
  
    playButton.on('click', () => {[video1, video2].forEach(el => el[0].play())});
    pauseButton.on('click', () => {
        let newTimestamp = Math.floor(video1[0].currentTime/0.017)*0.017;
        video1[0].pause(); 
        video2[0].pause();
        requestAnimationFrame(()=>{
            video1[0].currentTime=newTimestamp;
            video2[0].currentTime=newTimestamp;
        })
    });
  
    [playButton, pauseButton].forEach( el => el.on('click', () => { 
      [playButton, pauseButton].forEach(el => toggleShow(el)); 
    }));
  
    const expandElement = (inline) => {inline.removeClass("inline").addClass("expanded");}
    const inlineElement = (expanded) => {expanded.removeClass("expanded").addClass("inline");}
    toggleModal.on('click', () => {modal.hasClass("expanded") ? inlineElement(modal) : expandElement(modal)});
  
    const hideElement = (showing) => {showing.removeClass("show").addClass("hide");}
    const showElement = (hiding) => {hiding.removeClass("hide").addClass("show");}
    const toggleShow = (el) => { el.hasClass("show") ? hideElement(el) : showElement(el) }
        
    [video1, video2].forEach( el => el.on('loadedmetadata', () => { el[0].play(); el[0].currentTime = 0+(currentFrame*oneFrameLength); el[0].pause(); el[0].loop=true }));
    backwards.on('click', (e) => { [video1, video2].forEach(el => {if((el[0].currentTime -= oneFrameLength) <= 0){el[0].currentTime = el[0].duration;}})});
    forwards.on('click', (e) => { [video1, video2].forEach(el => {if((el[0].currentTime += oneFrameLength) >= el[0].duration){el[0].currentTime = 0;} })});
  }));