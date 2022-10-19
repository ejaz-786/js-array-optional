let data = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: "64",
    price: "15000",
    rating: 4,
    quantity: 20,
  },
  {
    company: "Nokia",
    model: "S730",
    memory: "128",
    price: "22000",
    rating: 3,
    quantity: 15,
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: "32",
    price: "12000",
    rating: 5,
    quantity: 21,
  },
  {
    company: "Motorola",
    model: "G10",
    memory: "32",
    price: "15000",
    rating: 4,
    quantity: 13,
  },
  {
    company: "Apple",
    model: "S12",
    memory: "64",
    price: "25000",
    rating: 3,
    quantity: 18,
  },
];

let table1 = document.getElementById("mytable"); // table

// console.log(datarow);
// 1. display static data in table
const displayData = () => {
  document.getElementById("mytable").querySelector("tbody").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    // array iteration
    let tr = document.createElement("tr");
    for (let j in data[i]) {
      // object iteration
      let td = document.createElement("td");
      td.innerHTML = data[i][j];
      tr.append(td);
    }
    let td2 = document.createElement("td");
    td2.innerHTML = `<input class="check" type="checkbox"/>`;
    tr.append(td2);
    table1.querySelector("tbody").appendChild(tr);
  }
};
displayData();

// 2. take input box and fill data and add to the table

const addData = () => {
  let company = document.getElementById("company-val").value;
  let model = document.getElementById("model-val").value;
  let memory = document.getElementById("memory-val").value;
  let price = document.getElementById("price-val").value;
  let qunatity = document.getElementById("qunatity-val").value;
  let rating = document.getElementById("rating-val").value;
  let obj = {
    company: company,
    model: model,
    memory: memory,
    price: price,
    qunatity: qunatity,
    rating: rating,
  };
  data.push(obj);
  displayData();
};

// 3.search according to select and text box
const searchData = () => {
  let tablerows = document
    .getElementById("mytable")
    .querySelector("tbody").rows;

  let select = document.getElementById("select-1").value;
  let inp = document.getElementById("search-inp").value.toLowerCase();

  if (select == -1) {
    return alert("please select type....");
  }

  if (inp == "") {
    return alert("please write something...");
  }

  let c = 0;
  data.forEach((val, index) => {
    if (val[select].toLowerCase().indexOf(inp) > -1) {
      tablerows[index].style.display = "";
      c++;
    } else {
      tablerows[index].style.display = "none";
    }
  });

  if (c == 0) {
    alert("no result Found");
    Array.from(tablerows).forEach((val) => {
      val.style.display = "";
    });
  }
};

// 4. Add two dropdowns to sort and display a product based on the fields a product have as given in the attachment.

const sortbyIncDec = () => {
  let selectincdec = document.getElementById("select-3").value;
  if (selectincdec != "-1") {
    sortbyBrand();
  } else {
    return alert("choose sort method...");
  }
};
const sortbyBrand = () => {
  let selectbrand = document.getElementById("select-2").value;
  let selectincdec = document.getElementById("select-3").value;

  // sorting logic:

  if (selectincdec == "-1") {
    return alert("choose  how to sort....");
  }

  if (selectincdec == "asc") {
    if (selectbrand == "company") {
      data.sort((a, b) => {
        if (a.company > b.company) return 1;
        else return -1;
      });
      displayData();
    } else if (selectbrand == "model") {
      data.sort((a, b) => {
        if (a.model > b.model) return 1;
        else return -1;
      });
      displayData();
    } else if (selectbrand == "memory") {
      data.sort((a, b) => {
        if (a.memory > b.memory) return 1;
        else return -1;
      });
      displayData();
    } else if (selectbrand == "price") {
      data.sort((a, b) => {
        if (a.price > b.price) return 1;
        else return -1;
      });
      displayData();
    }
  } else {
    if (selectbrand == "company") {
      data.sort((a, b) => {
        if (a.company > b.company) return -1;
        else return 1;
      });
      displayData();
    } else if (selectbrand == "model") {
      data.sort((a, b) => {
        if (a.model > b.model) return -1;
        else return 1;
      });
      displayData();
    } else if (selectbrand == "memory") {
      data.sort((a, b) => {
        if (a.memory > b.memory) return -1;
        else return 1;
      });
      displayData();
    } else if (selectbrand == "price") {
      data.sort((a, b) => {
        if (a.price > b.price) return -1;
        else return 1;
      });
      displayData();
    }
  }
};

// 5.Select product(s) from the list and their quantity and add them to a array then generate a billing invoice according to the attachment.

let cartArr = [];
const addQuantity = () => {
  let select = document.getElementById("select-prod").value.toLowerCase();
  let quantityval = document.getElementById("quant-inp").value;

  if (select == -1 || quantityval == "") {
    return alert("please provide all the details..");
  }

  data.forEach((val) => {
    if (val.company.toLowerCase() == select) {
      if (val.quantity < quantityval) {
        alert("Not available ...");
      } else {
        val.quantity = val.quantity - quantityval;
        let obj = {
          description: val.company,
          qunatity: quantityval,
          price: val.price * quantityval,
        };
        cartArr.push(obj);
        displayData();
      }
    }
  });
};

const generateBill = () => {
  let tablerow = document.getElementById("bill-table").querySelector("tbody");
  document.getElementById("bill-table").querySelector("tbody").innerHTML = "";

  cartArr.forEach((val) => {
    let tr = document.createElement("tr");
    for (let i in val) {
      let td = document.createElement("td");
      td.innerHTML = val[i];
      tr.append(td);
    }
    tablerow.appendChild(tr);
  });

  let total = 0;
  cartArr.forEach((val) => {
    total += val.price;
  });

  let tr2 = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = "Total Amount=>";

  let td2 = document.createElement("td");
  td2.innerHTML = "";
  let td3 = document.createElement("td");
  td3.innerHTML = `${total}/-`;

  //  td2.innerHTML = "1200";
  tr2.append(td1);
  tr2.append(td2);
  tr2.append(td3);
  tablerow.appendChild(tr2);
};

// 6. Add a checkbox with every product. User can select one or more products to delete from the list and display the remaining products after deletion.

const deleteData = () => {
  let checkedrows = document.getElementsByClassName("check");
  Array.from(checkedrows).forEach((val) => {
    if (val.checked) {
      val.parentNode.parentNode.remove();
    }
  });
};

// 7. Add one more column for quantity available for each of the product. It will be updated when a product is added to cart.

// above question  is same as 5

// 8. Inventory manager should be able to update the quantity of a products. Display the updated quantity.

const updateQuantity = () => {
  let select = document.getElementById("select-prods").value;
  let input = document.getElementById("quant-inpt").value;

  data.forEach((val) => {
    if (val.company == select) {
      val.quantity += +input;
      displayData();
    }
  });
};

// 9. Customer should be able to mark the rating for a product that should be visible in the rating column.

const changeRating = () => {
  let select1 = document.getElementById("select-products").value;
  let select2 = document.getElementById("rating").value;

  data.forEach((val) => {
    if (val.company == select1) {
      val.rating = select2;
      displayData();
    }
  });
};

// 10.Filter and display the products with in a given price range.

const FilterbyRange = () => {
  // let datas = data.slice();

  let minval = document.getElementById("min").value;
  let maxval = document.getElementById("max").value;
  
  // let x = datas.filter((val)=>val.price >= minval && val.price <= maxval);
  
  // console.log(x);
  // datas = [];
  // let data = datas.concat(x)
  // console.log(data);


  //  let y = data[...x]
  let tablerows = document.getElementById('mytable').querySelector('tbody').rows;

  data.forEach((val,i) => {
    if (val.price >= minval && val.price <= maxval) {
        tablerows[i].style.display = ''
    }
    else{
      tablerows[i].style.display = 'none';
    }
  });
};
