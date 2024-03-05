//CRUDS
//Create Read Update Delete Search
// 1 Get elements values
//Get Button id
//Add Event Listener
//Add Values to object prodcut
//Add Object to product Container Array - global var

// Get elements

var productName = document.getElementById("name");
// console.log(productName);
var productPrice = document.getElementById("price");
var productCat = document.getElementById("cat");
var productDesc = document.getElementById("desc");
var productId = document.getElementById("productId");

//Define global array to hold products
var productContainer = [];
// Check here the ls if it has data

var oldData = [];
oldData = JSON.parse(localStorage.getItem("product"));
if (oldData != null) {
  productContainer = oldData;
  showData();
}

//Get buttonelement
var btn = document.getElementById("addBtn");
// Get Update Button
var updateBtn = document.getElementById("updateBtn");
// console.log(btn);

//Add event Listener to add values to object and add object to array

btn.addEventListener("click", function () {
  var product = {
    name: productName.value,
    price: productPrice.value,
    cat: productCat.value,
    desc: productDesc.value,
  };

  productContainer.push(product);
  // Set LS to save array
  localStorage.setItem("product", JSON.stringify(productContainer));
  showData();
  clearData();
});

//Add event for update product button

updateBtn.addEventListener("click", function () {
  updateProduct(parseInt(productId.value));
  localStorage.setItem("product", JSON.stringify(productContainer));
  showData();
  clearData();
  toggleButtons("add");
});

//show Data
//Create Function to show data
//Get table
// Define var to hold HTML
//CRetae loop to llop on productcontainer
//Set innerHTML of table
//Call show Data in Add Button
//Create function to clear data value=''
//call function after showdata

function showData() {
  var divContent = ``;
  //loop on array
  for (var i = 0; i < productContainer.length; i++)
    //get values from array and add to div content
    divContent += `<tr>
  <th scope="row">
    <p id="nameProduct">${i + 1}</p>
    <input
      type="text"
      class="form-control d-none"
      id="nameUpdate"
    />
  </th>
  <th scope="row">
    <p id="nameProduct">${productContainer[i].name}</p>
    <input
      type="text"
      class="form-control d-none"
      id="nameUpdate"
    />
  </th>
  <td>
    <p id="priceProduct">${productContainer[i].price}</p>
    <input
      type="text"
      class="form-control d-none"
      id="priceUpdate"
    />
  </td>
  <td>
    <p id="catProduct">${productContainer[i].cat}</p>
    <input type="text" class="form-control d-none" id="catUpdate" />
  </td>
  <td>
    <p id="descProduct">${productContainer[i].desc}</p>
    <input
      type="text"
      class="form-control d-none"
      id="descUpdate"
    />
  </td>
  <td><button class="btn btn-outline-danger" onclick="deleteProduct(${i});">Delete</button></td>
  <td>
    <button class="btn btn-outline-warning"  id="updatebttn"  onclick="fetchRow(${i});" >
      Update
    </button>
    <button class="btn btn-outline-success px-3 show" id="savebtn">
      Save
    </button>
  </td>
</tr>`;
  //get table element
  document.getElementById("info").innerHTML = divContent;
}

//function to clear data
function clearData() {
  productName.value = ``;
  productPrice.value = ``;
  productCat.value = ``;
  productDesc.value = ``;
}

// save data to local storage
// store objects in local storage using setitem
//LOcal storage need json so convert array first to json
// check for local storage if not null  than set the arry to read from ls and use parse to convert to object
// show data to display data

// inline event search it and it is assignment

// Delete Data
//create function to delete item
// create inline event on delete button to call the function
//pass i in array to teh function
// use splice to delete from array
//set local storage to teh array
// show data

function deleteProduct(index) {
  productContainer.splice(index, 1);

  localStorage.setItem("product", JSON.stringify(productContainer));

  showData();
}
//Update Data
// Create function to fetch row data into form
// Set product id item to teh current item
// Hide Add Product Button
// Show Update Button to update product

function fetchRow(id) {
  productId.value = id;
  productName.value = productContainer[id].name;
  productPrice.value = productContainer[id].price;
  productCat.value = productContainer[id].cat;
  productDesc.value = productContainer[id].desc;

  // Hide Add button and show Update Button
  toggleButtons("update");
}

// FUnction to update current selected product
function updateProduct(id) {
  // update product container
  productContainer[id].name = productName.value;
  productContainer[id].price = productPrice.value;
  productContainer[id].cat = productCat.value;
  productContainer[id].desc = productDesc.value;

  showData();
}

function toggleButtons(state) {
  if (state == "update") {
    // Hide Add button and show Update Button
    btn.classList.add("show");
    updateBtn.classList.remove("show");
  } else if (state == "add") {
    // Hide Add button and show Update Button
    updateBtn.classList.add("show");
    btn.classList.remove("show");
  }
}
