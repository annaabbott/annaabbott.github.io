const apiURL = "../Hotel/hoteldata.json";            



function createPhoneNumber(item) {
    let phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.classList.add("infoColumnText");

    let phoneNumberP = document.createElement("p");
    phoneNumberP.innerText = item.phone;
    phoneNumberDiv.appendChild(phoneNumberP);

    return phoneNumberDiv;
}

function createInfoColumn(iconName) {
    let iconDiv = document.createElement("div");
    iconDiv.classList.add("infoColumnWrapper");

    let iconTag = document.createElement("ion-icon");
    iconTag.name= iconName;
    iconDiv.appendChild(iconTag);
    
    iconDiv.appendChild(iconTag);
    return iconDiv;
}



function buildPage(myList) {
    console.log(myList);
    let inventoryDiv = document.getElementById('inventoryWrapper');
    
    for (item = 0; item < myList.length; item++) {
        let sectionTag = document.createElement("section");

        // creates figure in memory
        let imgTag = document.createElement("img");
        imgTag.src = myList[item].photo;
    
        let figcaptionTag = document.createElement("figcaption");
        figcaptionTag.textContent= myList[item].name;
    
        let figureTag = document.createElement("figure");
        figureTag.appendChild(imgTag);
        figureTag.appendChild(figcaptionTag);
        sectionTag.appendChild(figureTag);

        let contactInfo = document.createElement("div");
        contactInfo.classList.add("hotelInfo");
    
        let leftColumn = createInfoColumn("car");

        //create address
        let addressDiv = document.createElement("div");
        addressDiv.classList.add("infoColumnText");
    
        let addressLine = document.createElement("p");
        addressLine.innerText = myList[item].address[0];
        addressDiv.appendChild(addressLine);
    
        addressLine = document.createElement("p");
        addressLine.innerText = myList[item].address[1];
        addressDiv.appendChild(addressLine);
    
        addressLine = document.createElement("p");
        addressLine.innerText = myList[item].address[2];
    
        addressDiv.appendChild(addressLine);

        leftColumn.appendChild(addressDiv);

        ///------------------
    
        contactInfo.appendChild(leftColumn);
    
        let rightColumn = createInfoColumn("call");
        rightColumn.appendChild(createPhoneNumber(myList[item]));
    
        contactInfo.appendChild(rightColumn);
    

        sectionTag.appendChild(contactInfo);

        inventoryDiv.appendChild(sectionTag);
    }
}

function main() {
    fetch(apiURL)
        .then((response) => response.json())
        .then(data => buildPage(data));
}

main();