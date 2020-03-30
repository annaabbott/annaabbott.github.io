const apiURL = "../Hotel/hoteldata.json";            

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
    let spanTag = document.createElement("span");

    let iconTag = document.createElement("ion-icon");
    iconTag.name="car";
    spanTag.appendChild(iconTag);
    
    let pTag = document.createElement("p");
    pTag.innerText = item.address[0];
    spanTag.appendChild(pTag);

    pTag = document.createElement("p");
    pTag.innerText = item.address[1];
    spanTag.appendChild(pTag);

    pTag = document.createElement("p");
    pTag.innerText = item.address[2];
    spanTag.appendChild(pTag);


    return spanTag;
}

function createContactInfo(item) {
    let spanTag = document.createElement("span");

    let iconTag = document.createElement("ion-icon");
    iconTag.name="call";
    spanTag.appendChild(iconTag);

    let pTag = document.createElement("p");
    pTag.innerText = item.phone;
    spanTag.appendChild(pTag);

    return spanTag;
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
        let divTag = document.getElementById('inventoryWrapper');
        
        for (let item in myList) {
            let sectionTag = createSection(myList[item]);
            divTag.appendChild(sectionTag);
        }
    });