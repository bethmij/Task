

 var itemBtn = document.querySelectorAll(".btnItem");
 itemBtn.forEach(function(element) {

     element.addEventListener("click", function (){
         document.querySelector("#customer").style.display = "none";
         document.querySelector("#order").style.display = "none";
         document.querySelector("#home").style.display = "none";
         var item = document.querySelector("#item");
         item.style.display = "block";
         item.className = element.className.replace("d-none", "d-block");
         item.className = item.className.replace("ms-2", "ms-0");
         item.className = item.className.replace("mb-5", "mb-0");
         event.preventDefault();

    });
 });

 var orderBtn = document.querySelectorAll(".btnOrder");
 orderBtn.forEach(function(element2) {

     element2.addEventListener("click", function (){
         document.querySelector("#customer").style.display = "none";
         document.querySelector("#item").style.display = "none";
         document.querySelector("#home").style.display = "none";
         var order = document.querySelector("#order");
         order.style.display = "block";
         order.className = element2.className.replace("d-none", "d-block");
         order.className = order.className.replace("ms-2", "ms-0");
         order.className = order.className.replace("mb-5", "mb-0");

     });
 });

 var customBtn = document.querySelectorAll(".btnCustomer");
 customBtn.forEach(function(element3) {

     element3.addEventListener("click", function (){
         document.querySelector("#item").style.display = "none";
         document.querySelector("#order").style.display = "none";
         document.querySelector("#home").style.display = "none";
         var customer = document.querySelector("#customer");
         customer.style.display = "block";
         customer.className = element3.className.replace("d-none", "d-block");
         customer.className = customer.className.replace("ms-2", "ms-0");
         customer.className = customer.className.replace("mb-5", "mb-0");
         event.preventDefault();
     });
 });

 var homeBtn = document.querySelectorAll(".btnHome");
 homeBtn.forEach(function(element4) {

     element4.addEventListener("click", function (){
         document.querySelector("#item").style.display = "none";
         document.querySelector("#order").style.display = "none";
         document.querySelector("#customer").style.display = "none";
         document.querySelector("#home").style.display = "block";
         event.preventDefault();
     });
 });

 var img =  document.querySelectorAll(".menuImg");
 img.forEach(function(element5) {
     element5.addEventListener("mouseover",function (){
         element5.style.opacity = "1";
         element5.style.cursor = "pointer";
     });
     element5.addEventListener("mouseout",function (){
         element5.style.opacity = "0.7";
         element5.style.cursor = "unset";
     });
 });

 var btn =  document.querySelectorAll(".menuBtn");
 btn.forEach(function(element) {
     element.addEventListener("mouseover",function (){
         element.style.cursor = "pointer";
         element.style.opacity = "1";
     });
     element.addEventListener("mouseout",function (){
         element.style.cursor = "unset";
         element.style.opacity = "0.5";
     });
 });

/*var detail = [];
txtID = document.querySelector("#txtCusID");
txtName = document.querySelector("#txtCusName");
txtAddress = document.querySelector("#txtCusAddress");
txtSalary = document.querySelector("#txtCusSalary");*/

/*document.querySelector("#customerSave").addEventListener("click",function (event){

    // var input =  document.querySelectorAll(".cusInput");
    // input.forEach(function(element) {
    //     var inputValue =  element.value;
    //     detail.push(inputValue);
    // });
    // console.log(detail);
    // event.preventDefault();

    var customer = {
        id: txtID.value,
        name: txtName.value,
        address: txtAddress.value,
        salary: txtSalary.value
    }

    detail.push(customer);
    console.log(detail);
    event.preventDefault();
});

table =  document.querySelector("#cusTable");
 document.querySelector("#getAll").addEventListener("click",function (event){
     let tbody = document.querySelector("#cusTBody");

     for (let i=0; i<detail.length; i++){
         let tr = document.createElement("tr");
         let td1 = document.createElement("td");
         td1.textContent = detail[i].id;
         let td2 = document.createElement("td");
         td2.textContent = detail[i].name;
         let td3 = document.createElement("td");
         td3.textContent = detail[i].address;
         let td4 = document.createElement("td");
         td4.textContent = detail[i].salary;
         tr.append(td1,td2,td3,td4);
         tbody.append(tr);

     }
 });*/



 window.addEventListener("load", function(event) {
     event.preventDefault();
     var savedScrollPosition = localStorage.getItem("scrollPosition");

     if (savedScrollPosition !== null) {
         window.scrollTo(0, savedScrollPosition);
     }
 });












