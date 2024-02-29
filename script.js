
const searchBox1 = document.querySelector('.search1 input');
const searchBox2 = document.querySelector('.search2 input');
const searchBox3 = document.querySelector('.search3 input');
const searchBox4 = document.querySelector('.search4 input');
const searchBtn = document.querySelector('.cauta')
const afisareTotal = document.querySelector('.container')
const cupe = document.querySelector('.cupe input')
const vechime = document.querySelector('.vechime input')
const totalSalariu = document.querySelector('.totalSalariu')
const tichete = document.querySelector('.tichete input')
const ticheteAfisare = document.querySelector('.ticheteAfisare')

// console.log(searchBox, searchBtn);
// console.log(Number(cupe.value)* 0.01);

// console.log(Number(vechime.value) * 50);
// console.log(Number(tichete.value) * 30);


searchBtn.addEventListener('click', ()=>{
    const calculTichete = Number(tichete.value) * 30
    const calculVechime = Number(vechime.value) * 50

    const calculateTotal =  (Number(searchBox1.value * 0.01) + 
    Number(searchBox2.value * 0.01) + 
    Number(searchBox3.value * 0.01) + 
    Number(searchBox4.value * 0.01) ) - (Number(searchBox1.value * 0.01) + 
    Number(searchBox2.value * 0.01) + 
    Number(searchBox3.value * 0.01) + 
    Number(searchBox4.value * 0.01) ) /100 * 19 + 600 + Number(cupe.value)* 0.01
  
    afisareTotal.textContent = calculateTotal + calculVechime
    totalSalariu.textContent = calculateTotal + 1500 + calculVechime
    ticheteAfisare.textContent = calculTichete
    // console.log(totals);

    //   console.log( calculateTotal);
    searchBox1.value = ''
    searchBox2.value = ''
    searchBox3.value = ''
    searchBox4.value = ''
    cupe.value = ''
    vechime.value = ''
    tichete.value = ''
})