let bannerText = "Hi my Name is Joseph Danielson Ramli";
let descText = "I'm Software Engineer and Passionate in Backend and Web Development";
let bannerIndex = 0;
let descIndex=0;
let bannerObject = document.querySelector(".banner");
let descObject = document.querySelector(".banner-desc");

function typeBanner(){
    let textnode = document.createTextNode(bannerText.charAt(bannerIndex));
    bannerObject.insertBefore(textnode,bannerObject.childNodes[bannerIndex]);
    bannerIndex++;
    if(bannerIndex < bannerText.length){
        setTimeout(typeBanner,70);
        return;
    }
    typeDesc();   
}

function typeDesc(){
    
    let textnode = document.createTextNode(descText.charAt(descIndex));
    descObject.insertBefore(textnode,descObject.childNodes[descIndex]);
    descIndex++;
    if(descIndex < descText.length)
        setTimeout(typeDesc,50);
}

typeBanner();
