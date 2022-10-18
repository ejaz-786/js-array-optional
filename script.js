// THE ARRAY DATA :~
let data = [
  { company: "Samsung", model: "Galaxy", memory: 64, price: 15000 },
  { company: "Nokia", model: "S730", memory: 128, price: 22000 },
  { company: "Xiaomi", model: "Note", memory: 32, price: 12000 },
  { company: "Motorola", model: "G10", memory: 32, price: 15000 },
  { company: "Apple", model: "S12", memory: 64, price: 25000 },
];

let table = document.getElementById("mytable"); // table

// 1. display static data in table
const displayData = () => {
  for (let i = 0; i < data.length; i++) {
    // array iteration
    let tr = document.createElement("tr");
    for (let j in data[i]) {
      // object iteration
      let td = document.createElement("td");
      td.innerHTML = data[i][j];
      tr.append(td);
    }
    table.appendChild(tr);
  }
};
displayData();

// 2. take input box and fill data and add to the table

const addData = () => {
  let company = document.getElementById("company-val").value;
  let model = document.getElementById("model-val").value;
  let memory = document.getElementById("memory-val").value;
  let price = document.getElementById("price-val").value;

  let obj = {
    company: company,
    model: model,
    memory: memory,
    price: price,
  };
  data.push(obj);
  let tr = document.createElement('tr');
  for(let i in obj){
    let td = document.createElement('td');
    td.innerHTML = obj[i]
    tr.append(td);
  }
  table.appendChild(tr);
};

// 3.search according to select and text box 

const searchData = () =>{
   let select = document.getElementById('select-1').value;
   let inp = document.getElementById('search-inp').value;

    let x = data.filter((val)=>val.company === inp);

   data.forEach((val)=>{
      for(let i in val){
        if(i === select){
           console.log(val);
        }
      }
    })

   
   
}




























