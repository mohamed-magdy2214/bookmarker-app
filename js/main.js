
var siteName = document.getElementById(`siteName`);
var siteUrl = document.getElementById(`siteUrl`);


var bookmarks = [];

if (localStorage.getItem(`list`) !== null) {
    
    bookmarks = JSON.parse(localStorage.getItem(`list`));
    displayData()
}
else {
    var bookmarks = [];

}

function addBookmark() {

    var bookmark = {
        name: siteName.value ,
        url: siteUrl.value 
    }


    var regex = /^(https:\/\/).{1,}\.(com)/;


    if (regex.test(siteUrl.value)) {
        
        bookmarks.push(bookmark);
        localStorage.setItem(`list`, JSON.stringify(bookmarks));
        displayData()
        clearData()
        
    }
    else {

        
        document.getElementById(`inValid`).innerHTML = `this url is not valid .`;
        document.getElementById(`recorrect`).innerHTML = `please enter valid url (start with http://) .`;
    }

    

}



function displayData() {

    var cartona = ``;

    for (var i =0; i< bookmarks.length; i++) {

        cartona +=`<tr>
        <td>${i + 1}</td>
        <td class="text-capitalize">${bookmarks[i].name}</td>
        <td>
        <a class="btn btn-visit btn-sm" href="${bookmarks[i].url}" target="_blank">
        <i class="fa-solid fa-eye pe-2"></i>
            Visit
        </a>
        </td>
        <td>
        <button class="btn btn-delete btn-sm" onclick="deleteData(${i})">
        <i class="fa-solid fa-eye pe-2"></i>
            Delete
    </button>
        </td>
    </tr>`
    }

    document.getElementById(`table`).innerHTML = cartona;
}

function clearData() {

    siteName.value = ``;
    siteUrl.value = ``;
}



function deleteData(index) {

    bookmarks.splice(index , 1);
    localStorage.setItem(`list`, JSON.stringify(bookmarks));
    displayData()
}




