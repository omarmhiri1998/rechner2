let list = document.querySelectorAll(".nav li" );
let title= document.getElementById("titles");
let semester= document.getElementById("smester");
let note= document.getElementById("note");
let credit= document.getElementById("credit");
let result=0;
let crediten=0;
let sum=0;
let smes=0;
let dat =[];
let counter=0;
let count=0;
let summe=0;
let teb=[];
teb[0]=["semester", "credit", { role: "style" } ]

let table="";
function aktivlink(){
    list.forEach((item)=> {
        item.classList-remove("hovered");


    })
    this.classList.add("hovered") 
}
list.forEach((item) => item.addEventListener("mouseover",aktivlink ));

let toggle =document.querySelector(".toggle");
let nav =document.querySelector(".nav");
let main =document.querySelector(".main");
toggle.onclick = function(){
    nav.classList.toggle("active");
    main.classList.toggle("active");
};

function clear(){
    title.value=""
    semester.value=""
        note.value=""
        credit.value=""
}
submit.onclick=function()
{  for( i=0 ;i<dat.length;i++){
    if(title.value==dat[i].title){
       count=count+1;
    }
}
    
    if((title.value!="")&&(semester.value!="")&&(note.value!="")&&(credit.value!="")&&(count==0)&&(note.value<=4)){
    counter+=1;
    crediten=crediten + +credit.value;
    sum=sum + (+note.value * +credit.value);
    result=sum/crediten;

    if(smes<semester.value){
        smes=semester.value;
    }
    
     let data= {
        title:title.value,
        semester:semester.value,
        note:note.value,
        credit:credit.value

    };
    dat.push(data);
    for (i=1;i<=smes;i++){
        
        for(j=0;j<dat.length;j++){
          if(dat[j].semester==i){
            
            summe= summe+ +dat[j].credit;
            
          }
        }
        
        teb[i]=[`semester${i}`,summe, "blue"];
        summe=0;
        }
    table+=`<tr>
    <td>${title.value}</td>
    <td>${semester.value}</td>
    <td>${note.value}</td>
    <td>${credit.value}</td>
    
</tr>`
    
    document.getElementById("tbody").innerHTML =table;
    document.getElementById("number").innerHTML =result.toFixed(2);
    document.getElementById("numb").innerHTML =counter;
    document.getElementById("sem").innerHTML =smes;
    if((result>=1)&&(result<2)){
        document.getElementById("gut").innerHTML =` <div id="gut">
        <div class="numbers" >sehr gut</div>
        <div class="cardNumbers">bewertung</div>
    </div>
     <div class="iconbx"><ion-icon name="happy-outline"></ion-icon></div>`;
    }
    if((result>=2)&&(result<3)){
        document.getElementById("gut").innerHTML =` <div id="gut">
        <div class="numbers" > gut</div>
        <div class="cardNumbers">bewertung</div>
    </div>
     <div class="iconbx"><ion-icon name="thumbs-up-outline"></ion-icon></div>`;
        
    }
    if((result>=3)&&(result<4)){
        document.getElementById("gut").innerHTML =` <div id="gut">
        <div class="numbers" > aktzebtabel</div>
        <div class="cardNumbers">bewertung</div>
    </div>
     <div class="iconbx"><ion-icon name="sad-outline"></ion-icon></div>`;
        
    }
    if((result==4)){
        document.getElementById("gut").innerHTML =` <div id="gut" >
        <div class="numbers" > schlecht</div>
        <div class="cardNumbers">bewertung</div>
    </div>
     <div class="iconbx" ><ion-icon name="skull-outline"></ion-icon></div>`;

    }

}
    clear()
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(teb);
      

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "credit of smester",
        width: 550,
        height: 250,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
}
