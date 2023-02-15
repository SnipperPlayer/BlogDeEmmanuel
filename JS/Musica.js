function showText(id) {
    document.querySelectorAll("p").forEach(function(element) {
      element.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

const productContainers = [...document.querySelectorAll('.artist')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})  