let sendGetRequestBtnE1 = document.getElementById("sendGetRequestBtn");
let loadingE1 = document.getElementById("loading");
let requestStatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");
let load = document.getElementById("load");
let loadingE11 = document.getElementById("spinner");
let loadE22 = document.getElementById("spinnerE1");

function createAppend(item) {

    let newElement = document.createElement("div");
    newElement.classList.add("country-card", "ml-auto", "mt-auto", "mb-3", "w-100");

    let joinE1 = document.createElement("div");
    joinE1.classList.add("d-flex", "flex-row");
    newElement.appendChild(joinE1);

    let idE1 = document.createElement("p");
    idE1.classList.add("texting-fact1", "mt-3", "ml-2");
    idE1.textContent = item.email;


    let spanE1 = document.createElement("span");
    spanE1.classList.add("texting-fact", "mt-3", "ml-2");

    spanE1.textContent = "Email";
    joinE1.appendChild(spanE1);
    joinE1.appendChild(idE1);

    let extra = document.createElement("div");
    extra.classList.add("d-flex", "flex-row");
    newElement.appendChild(extra);

    let studentName = document.createElement("p");
    studentName.classList.add("texting-fact1", "mt-3", "ml-2");
    spanE1 = document.createElement("span");
    spanE1.textContent = "Gender :";
    spanE1.classList.add("texting-fact", "mt-3", "ml-2");
    studentName.textContent = item.gender;
    extra.appendChild(spanE1);
    extra.appendChild(studentName);

    extra = document.createElement("div");
    extra.classList.add("d-flex", "flex-row");
    newElement.appendChild(extra);

    let idE2 = document.createElement("p");
    idE2.textContent = item.id;
    idE2.classList.add("texting-fact1", "mt-3", "ml-2");
    spanE1 = document.createElement("span");
    spanE1.classList.add("texting-fact", "mt-3", "ml-2");
    spanE1.textContent = "Id :";
    extra.appendChild(spanE1);
    extra.appendChild(idE2);

    extra = document.createElement("div");
    extra.classList.add("d-flex", "flex-row");
    newElement.appendChild(extra);

    let otherName = document.createElement("p");
    otherName.textContent = item.name;
    spanE1 = document.createElement("span");
    spanE1.classList.add("texting-fact", "mt-3", "ml-2");
    spanE1.textContent = "Name :";
    otherName.classList.add("texting-fact1", "mt-3", "ml-2");
    extra.appendChild(spanE1);
    extra.appendChild(otherName);

    extra = document.createElement("div");
    extra.classList.add("d-flex", "flex-row");
    newElement.appendChild(extra);

    let status = document.createElement("p");
    status.textContent = item.status;
    spanE1 = document.createElement("span");
    spanE1.classList.add("texting-fact", "mt-3", "ml-2");
    spanE1.textContent = "Status :";
    status.classList.add("texting-fact1", "mt-3", "ml-2");
    extra.appendChild(spanE1);
    extra.appendChild(status);




    httpResponseE1.appendChild(newElement);
}



function displayIemE1(object) {
    for (let item of object) {
        createAppend(item);
    }
}

function display() {

    let requestUrl = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET",
    };

    loadingE1.classList.remove("d-none");
    loadingE11.classList.remove("d-none");
    loadE22.classList.remove("d-none");
    load.classList.remove("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            loadingE1.classList.add("d-none");
            load.classList.add("d-none");
            loadingE11.classList.add("d-none");
            loadE22.classList.add("d-none");

            let requestStatus = jsonData.code;
            requestStatusE1.textContent = requestStatus;
            let {
                data
            } = jsonData;
            displayIemE1(data);
            console.log(jsonData);
        });
}
sendGetRequestBtnE1.addEventListener("click", display);