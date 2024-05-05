
var formdataarray = JSON.parse(localStorage.getItem('formdataarray')) || [];


let values = null;
function onFormSubmit() {
    if (validate()) {              
        let formData = readFormData();
        if (values == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    var selectedSmallType = getSelectedRadioValue("small");
    
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["website"] = document.getElementById("website").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["another"] = document.getElementById("another").value;
    formData["notes"] = document.getElementById("notes").value;
    formData["small"] = selectedSmallType;
    formData["category"] = document.getElementById("category").value;
    formData["commission"] = document.getElementById("commission").value;
    formData["date"] = document.getElementById("date").value;
    formData["file"] = document.getElementById("file").value;
    formData["yes"] = isCheckboxChecked("yes") ? "yes":"no";
    formData["no"] = isCheckboxChecked("no") ? "yes":"no";
    formData["payment"] = document.getElementById("payment").value;
    
   console.log(formData);
    return formData;
}

var formdataarray =[];
function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.website;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.contact;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.phone;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.another;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.notes;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.small;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.category;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = data.commission;
    cell12 = newRow.insertCell(11);
    cell12.innerHTML = data.date;
    cell13 = newRow.insertCell(12);
    cell13.innerHTML = data.file;
    cell14 = newRow.insertCell(13);
    cell14.innerHTML = data.yes;
    cell15 = newRow.insertCell(14);
    cell15.innerHTML = data.payment;
    cell16 = newRow.insertCell(15);
    cell16.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

    formdataarray.push(data); 
    localStorage.setItem('formdataarray',JSON.stringify(formdataarray));

                    }

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("website").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("another").value = "";
    document.getElementById("notes").value = "";
    document.getElementById("small");
    document.getElementById("category").value = "";
    document.getElementById("commission").value = "";
    document.getElementById("date").value = "";
    document.getElementById("file").value = "";
    document.getElementById("yes").value = "";
    document.getElementById("payment").value = "";
    values = null;
}

function onEdit(td) {
    values = td.parentElement.parentElement;
    document.getElementById("name").value = values.cells[0].innerHTML;
    document.getElementById("email").value = values.cells[1].innerHTML;
    document.getElementById("number").value = values.cells[2].innerHTML;
    document.getElementById("website").value = values.cells[3].innerHTML;
    document.getElementById("contact").value = values.cells[4].innerHTML;
    document.getElementById("phone").value = values.cells[5].innerHTML;
    document.getElementById("another").value = values.cells[6].innerHTML;
    document.getElementById("notes").value = values.cells[7].innerHTML;
    document.getElementById("small");
    document.getElementById("category").value = values.cells[9].innerHTML;
    document.getElementById("commission").value = values.cells[10].innerHTML;
    document.getElementById("date").value = values.cells[11].innerHTML;
    document.getElementById("file").value = values.cells[12].innerHTML;
    document.getElementById("yes").value = values.cells[13].innerHTML;
    document.getElementById("payment").value = values.cells[14].innerHTML;

    localStorage.setItem('formdataarray',JSON.stringify(formdataarray));
    // var storedarray=localStorage.getItem('formdataarray');

}
function updateRecord(formData) {
    values.cells[0].innerHTML = formData.name;
    values.cells[1].innerHTML = formData.email;
    values.cells[2].innerHTML = formData.number;
    values.cells[3].innerHTML = formData.website;
    values.cells[4].innerHTML = formData.contact;
    values.cells[5].innerHTML = formData.phone; 
    values.cells[6].innerHTML = formData.another;
    values.cells[7].innerHTML = formData.notes;
    values.cells[8].innerHTML = formData.small;
    values.cells[9].innerHTML = formData.category;
    values.cells[10].innerHTML = formData.commission;
    values.cells[11].innerHTML = formData.date;
    values.cells[12].innerHTML = formData.file;
    values.cells[13].innerHTML = formData.yes;
    values.cells[14].innerHTML = formData.payment;

    formdataarray[values.rowIndex -1]=formData;

    localStorage.setItem('formdataarray',JSON.stringify(formdataarray));

}
function onDelete(td) {
    if (confirm('Sure..you wanna delete this ?')) {
        row = td.parentElement.parentElement;

        var rowIndex = rowIndex -1;
        formdataarray.splice(rowIndex,1);

        localStorage.setItem('formdataarray',JSON.stringify(formdataarray));

        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }

}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("firstnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("firstnameValidationError").classList.add("hide");
    }
    return isValid;
}
  
function isCheckboxChecked(checkboxId) {
    return document.getElementById(checkboxId).checked;
}

function getSelectedRadioValue(radioGroupName) {
    let radioButtons = document.getElementsByName(radioGroupName);

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }

    return null;
}

function filterMerchants() {
    const selectedType = document.getElementById("filterType").value;
    const selectedPayment = document.getElementById("filterPayment").value;
    const filterName = document.getElementById("filterName").value.toLowerCase();
    const filterMobile = document.getElementById("filterMobile").value;


    const filteredMerchants = formdataarray.filter(merchant => {
        const nameMatch = merchant.name.toLowerCase().includes(filterName);
        const mobileMatch = merchant.number.includes(filterMobile);
        const typeMatch = selectedType === 'all' || merchant.small === selectedType;
        const paymentMatch = selectedPayment === 'all' || merchant.payment === selectedPayment;

        return nameMatch && mobileMatch && typeMatch && paymentMatch;
    });

    displayMerchants(filteredMerchants);
}

function displayMerchants(merchants) {
    const tableBody = document.querySelector("#employeeList tbody");
    tableBody.innerHTML = '';

    merchants.forEach(formData => {
        const newRow = tableBody.insertRow();
        newRow.insertCell().textContent = formData.name;
        newRow.insertCell().textContent = formData.email;
        newRow.insertCell().textContent = formData.number;
        newRow.insertCell().textContent = formData.website;
        newRow.insertCell().textContent = formData.contact;
        newRow.insertCell().textContent = formData.phone;
        newRow.insertCell().textContent = formData.another;
        newRow.insertCell().textContent = formData.notes;
        newRow.insertCell().textContent = formData.small;
        newRow.insertCell().textContent = formData.category;
        newRow.insertCell().textContent = formData.commission;
        newRow.insertCell().textContent = formData.date;
        newRow.insertCell().textContent = formData.file;
        newRow.insertCell().textContent = formData.yes;
        newRow.insertCell().textContent = formData.payment;
        newRow.insertCell().innerHTML = `<a onClick="onEdit(this)">Edit</a>
                                         <a onClick="onDelete(this)">Delete</a>`;
    });
}
