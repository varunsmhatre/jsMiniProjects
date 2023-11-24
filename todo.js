function updateTableBody(){
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    if (itemsJsonArrayStr!=null){
        itemJsonArray = JSON.parse(itemsJsonArrayStr);
        let tableBody = document.getElementById("tableBody");
        let str = "";
        itemJsonArray.forEach((element, index) => {
            str+=`<tr><th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
        });
        tableBody.innerHTML = str;
    
    }
}

function updateJsonArray(){
    console.log("Updating List...");
    title = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson")==null){
        itemJsonArray = [];
        itemJsonArray.push([title, desc])
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray))
    }
    else{
        itemsJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemsJsonArrayStr);
        itemJsonArray.push([title, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    updateTableBody();
}

function deleted(itemIndex){
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemsJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    console.log('Deleted', itemIndex);
    updateTableBody();
}


add = document.getElementById("add");

add.addEventListener("click", updateJsonArray);
updateTableBody();
