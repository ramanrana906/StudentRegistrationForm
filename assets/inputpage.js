
// let countries =[]
// const countryListElement = document.querySelector('#country-list')
// const countryInputElement = document.querySelector('#country-input')
// function fetchCountries(){
//   fetch("http://localhost:8000/country/list").then((response) => response.json())
//   .then((data) =>{
//    countries = data.country_list.map((x) => x.name);
//    countries.sort();
//    loadData(countries,countryListElement);
 
//   })
// }


// function loadData(data,element){
//   if(data){
//     element.innerHTML =" ";
//     let innerElement =" ";
  
//     data.forEach((item) =>{
     
//       innerElement += `<li>${item}</li>`;
//     });

//     element.innerHTML  = innerElement;
//   }
// }



// function filterData(data,searchText){
//  return data.filter((x ) => x.toLowerCase().includes(searchText.toLowerCase()));

// }



// fetchCountries();

// countryInputElement.addEventListener("input",function(){
//  const filteredData= filterData(countries,countryInputElement.value);
//  loadData(filteredData,countryListElement);
// })

document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#countries');
  // const selectDrop = document.getElementById('countries');


  fetch('http://localhost:8000/country/list').then(res => {
    return res.json();
  }).then(data => {
    let output = "";
    data.country_list.forEach(country => {
      output += `
      
      <option value="${country.name}">${country.name}</option>`;
    })

    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })


});


$(function(){
  $("#countries").select2();
 }); 