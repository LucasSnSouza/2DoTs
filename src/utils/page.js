export function getScreenDimensions(){
    return [window.innerWidth, window.innerHeight];
}

export function getParentElement(element){
    let parent = element.parentElement;
    return [parent.offsetWidth, parent.offsetHeight];
}

export function setFullscreen(){
    document.documentElement.requestFullscreen();
}