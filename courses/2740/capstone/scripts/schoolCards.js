const apiURL = "./school-data.json";            

function createFigure(item) {
    let imgTag = document.createElement("img");
    imgTag.src = item.photo;

    let figcaptionTag = document.createElement("figcaption");
    figcaptionTag.textContent= item.name;

    let figureTag = document.createElement("figure");
    figureTag.appendChild(imgTag);
    figureTag.appendChild(figcaptionTag);
    return figureTag;
}

function createAddress(item) {
    let divTag = document.createElement("div");
    divTag.classList.add("schoolInfo");

    let pTag = document.createElement("p");
    pTag.innerText = item.address[0];
    divTag.appendChild(pTag);

    pTag = document.createElement("p");
    pTag.innerText = item.address[1];
    divTag.appendChild(pTag);

    pTag = document.createElement("p");
    pTag.innerText = item.address[2];
    divTag.appendChild(pTag);

    return divTag;
}

function createContactInfo(item) {
    let divTag = document.createElement("div");
    divTag.classList.add("schoolInfo");

    let pTag = document.createElement("p");
    pTag.innerText = item.phone;
    divTag.appendChild(pTag);

    return divTag;
}

function createSection(item) {
    let sectionTag = document.createElement("section");
    sectionTag.appendChild(createFigure(item));

    let divTag = document.createElement("div");
    divTag.appendChild(createAddress(item));
    divTag.appendChild(createContactInfo(item));

    sectionTag.appendChild(divTag);

    return sectionTag;
}

fetch(apiURL)
    .then((response) => response.json())
    .then((myList) => {
        console.log(myList);
        let divTag = document.getElementById('schoolWrapper');
        
        for (let item in myList) {
            let sectionTag = createSection(myList[item]);
            divTag.appendChild(sectionTag);
        }
    });