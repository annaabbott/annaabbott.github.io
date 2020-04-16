const apiURL = "../Hotel/hoteldata.json";            

function buildPage(myList) {
    console.log(myList);
    let inventoryDiv = document.getElementById('inventoryWrapper');
    
    for (item = 0; item < myList.length; item++) { 
        let sectionTag = document.createElement("section");
        // end section, one hotel card

        // creates figure in memory
        let imgTag = document.createElement("img");
        imgTag.src = myList[item].photo;
    
        let figcaptionTag = document.createElement("figcaption");
        figcaptionTag.textContent= myList[item].name;
    
        let figureTag = document.createElement("figure");
        //appends img, figcaption in DOM
        figureTag.appendChild(imgTag);
        figureTag.appendChild(figcaptionTag);
        sectionTag.appendChild(figureTag);
        //creates div.hotelinfo in memory
        let contactInfo = document.createElement("div");
        contactInfo.classList.add("hotelInfo");
        //creates div.infoColumnWrapper in memory
        let leftColumn = document.createElement("div");
        leftColumn.classList.add("infoColumnWrapper");
        //creates car icon in memory, attaches to leftColumn in DOM
        let iconTag = document.createElement("ion-icon");
        iconTag.name= "car";
        leftColumn.appendChild(iconTag);
        
        //create address (div.infoColumnText), adds to DOM
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
        contactInfo.appendChild(leftColumn);
            //creates call icon in memory, attaches to rightColumn in DOM

        let rightColumn = document.createElement("div");
        rightColumn.classList.add("infoColumnWrapper");
    
        iconTag = document.createElement("ion-icon");
        iconTag.name= "call";
        rightColumn.appendChild(iconTag);
        
        rightColumn.appendChild(iconTag);
    
        //create phone number
        let phoneNumberDiv = document.createElement("div");
        phoneNumberDiv.classList.add("infoColumnText");
    
        let phoneNumberP = document.createElement("p");
        phoneNumberP.innerText = myList[item].phone;
        phoneNumberDiv.appendChild(phoneNumberP);
    
        rightColumn.appendChild(phoneNumberDiv);
  
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
//build the page.
main();