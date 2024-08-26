
// declear all the varable 
// call the input form main page index.html
// aft
// let Num_fucture = document.getElementById('Num_fucture');
let Description = document.getElementById('Description');
let count = document.getElementById('count');
let prix_one = document.getElementById('prix_one');
let data_fucture = document.getElementById('data_fucture');
// btn onclick start the main functions 
let submit = document.getElementById('submit');
// array to save data 
// in this array we well sava tha data in array and send the data 
// to local storage and after that 
// التاكد بان اذا كان قاعدة اليبانات المحلية اذا بها بيانات يقوم بإدارج البيانات من ثم 
// اذا لم يكن هناك اعداد يقوم بنشاء المصفوفة    
let datasale;
if(localStorage.product_ar != null){
     datasale = JSON.parse(localStorage.product_ar);
}
else{
    datasale = [];
}
// show whats in logal storage


// creat opp to sava the data and  
submit.onclick = function()
{
    let newsale = {
        Num_fucture:Num_fucture.value,
        Description:Description.value,
        count:count.value,
        prix_one:prix_one.value,
        data_fucture:data_fucture.value,
    }
    if(Description.value == '' || count.value == '' ||  prix_one.value == '' ){
        let msg = 'ألرجاء مل كل الحقول '; 
        document.getElementById('msg').innerHTML = msg;
    }else{
        datasale.push(newsale);
        localStorage.setItem('product_ar' , JSON.stringify(datasale));
    showdata();
    Description.value = '';
    count.value = '';
    prix_one.value = '';
    // element.classList.remove('msg');
    }
}
function showdata(){
    let table = '';
    y = 1; 
    for(let i = 0; i < datasale.length;i++)
{
    table += `
        <tr>
                <td>${y}</td>
                <td> ${datasale[i].Description}</td>
                <td>${datasale[i].count}</td>
                <td>${datasale[i].prix_one}  </td>
                <td>${datasale[i].data_fucture }     </td>
            </tr>
`
    y +=1;
}  
let tablemain = '';
let Myarray = [];
let sum  = 0;
x = 1;
for(let i = 0; i < datasale.length;i++)
{
    // show the date in the main total  
    let total = datasale[i].count * datasale[i].prix_one;
    sum += total;
    Myarray.push(sum);  
    tablemain += `
    <tr>
            <td>${x}</td>
            <td> ${datasale[i].Description}</td>
            <td>${datasale[i].count}</td>
            <td>${datasale[i].prix_one}  </td>
            <td> ${total + ' F'} </td>
            
        </tr>
`   
    x +=1;
let last = Myarray[Myarray.length-1];
    document.getElementById('total_all').innerHTML = last + ' F';
    document.getElementById('total_all_montant').innerHTML = last;
    document.getElementById('total_all_montant_rial').innerHTML = (last/5);

}  
console.log(Myarray);
 //  <td>${datasale[i].Num_fucture}  </td>
document.getElementById('main_data_show').innerHTML = tablemain;      
document.getElementById('tbody').innerHTML = table;      
let btndelat = document.getElementById('deleteall');
if(datasale.length > 0){
    btndelat.innerHTML = ` 
    <button onclick='deleteall()' id="deleteall1">delete All </button>
    `
}
else{
    btndelat.innerHTML = '';
}
}
function deleteall(){
    localStorage.clear();
    datasale.splice(0);
    showdata();
}  
// maindata() 
function maindata(){
    let C_name = document.getElementById('C_name').value;
    let C_num = document.getElementById('C_num').value;
    let C_data = document.getElementById('C_data').value;
    document.getElementById('name_claine').innerText = C_name;
    document.getElementById('num_facture_a').innerText = C_num;
    document.getElementById('data_fact').innerText = C_data;
}
function NewFacture(){
    localStorage.clear();
    datasale.splice(0);
    showdata();
}
window.onload = function(){
    showdata();
}