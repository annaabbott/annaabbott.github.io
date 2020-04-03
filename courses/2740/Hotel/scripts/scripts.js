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
    let divTag = document.createElement("div");
    divTag.classList.add("infoText");

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

function createPhoneNumber(item) {
    let divTag = document.createElement("div");
    divTag.classList.add("infoText");

    let pTag = document.createElement("p");
    pTag.innerText = item.phone;
    divTag.appendChild(pTag);

    return divTag;
}

function createInfoColumn(iconName) {
    let divTag = document.createElement("div");
    divTag.classList.add("infoColumnWrapper");

    let iconTag = document.createElement("ion-icon");
    iconTag.name= iconName;
    divTag.appendChild(iconTag);
    
    divTag.appendChild(iconTag);
    return divTag;
}

function createHotelInfo(item) {
    let divTag = document.createElement("div");
    divTag.classList.add("hotelInfo");

    let leftColumn = createInfoColumn("car");
    leftColumn.appendChild(createAddress(item));

    divTag.appendChild(leftColumn);

    let rightColumn = createInfoColumn("call");
    rightColumn.appendChild(createPhoneNumber(item));

    divTag.appendChild(rightColumn);

    return divTag;
}

function createSection(item) {
    let sectionTag = document.createElement("section");
    sectionTag.appendChild(createFigure(item));
    sectionTag.appendChild(createHotelInfo(item));

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