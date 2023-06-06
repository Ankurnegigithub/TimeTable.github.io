// Add row to the HTML table



window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("content");
            console.log(content);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Time-Table.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}

const timetable=document.getElementById('my_table');
const timetablebody=timetable.querySelector("tbody");
timetablebody.addEventListener("input",saveData);

loadData();

function addRow() {    
    var table = document.getElementById('my_table'); //html table
    var rowCount = table.rows.length; //no. of rows in table
    var columnCount =  table.rows[0].cells.length; //no. of columns in table          
    var row = table.insertRow(rowCount); //insert a row            
    
    var cell1 = row.insertCell(0); //create a new cell           
    var element1 = document.createElement("input"); //create a new element           
    element1.type = "checkbox"; //set the element type 
    element1.setAttribute('id', 'newCheckbox'); //set the id attribute         
    cell1.appendChild(element1); //append element to cell
                
    var cell2 = row.insertCell(1);            
    var element2 = document.createElement("select");            
    element2.setAttribute('id', 'newSelect1'); //set the id attribute
    var option1 = document.createElement("option"); //create a option element
    option1.text = "MONDAY"; //set the text for option
    option1.value = "1"; //set the value for option
    element2.add(option1); //add option to select box  
    
    var option2 = document.createElement("option");
    option2.text = "TUESDAY";
    option2.value = "2"; 
    element2.add(option2);
    
    var option3 = document.createElement("option");
    option3.text = "WEDNESDAY";
    option3.value = "3";
    element2.add(option3);

    var option4= document.createElement("option"); //create a option element
    option4.text = "THRUSDAY"; //set the text for option
    option4.value = "4"; //set the value for option
    element2.add(option4); //add option to select box  
    
    var option5 = document.createElement("option");
    option5.text = "FRIDAY";
    option5.value = "5"; 
    element2.add(option5);
    
    var option6 = document.createElement("option");
    option6.text = "SATURDAY";
    option6.value = "6";
    element2.add(option6);

    var option7 = document.createElement("option");
    option7.text = "SUNDAY";
    option7.value = "7";
    element2.add(option7);

    cell2.appendChild(element2);
    

    
    var cell3 = row.insertCell(2);            
    var element3 = document.createElement("select");
    var linebreak = document.createElement("br");
    element3.setAttribute('id', 'newSelect2'); //set the id attribute      
    //Create options dynamically. This will not work in mozilla2
    var option1 = document.createElement("option"); //create a option element
    option1.text = "SEM-1"; //set the text for option
    option1.value = "1"; //set the value for option
    element3.add(option1); //add option to select box  
    
    var option2 = document.createElement("option");
    option2.text = "SEM-2";
    option2.value = "2"; 
    element3.add(option2);
    
    var option3 = document.createElement("option");
    option3.text = "SEM-3";
    option3.value = "3";
    element3.add(option3);

    var option4 = document.createElement("option");
    option4.text = "SEM-4";
    option4.value = "4";
    element3.add(option4);

    var option5 = document.createElement("option");
    option5.text = "SEM-5";
    option5.value = "5";
    element3.add(option5);

    var option6 = document.createElement("option");
    option6.text = "SEM-6";
    option6.value = "6";
    element3.add(option6);

    var option7 = document.createElement("option");
    option7.text = "SEM-7";
    option7.value = "7";
    element3.add(option7);

    var option8 = document.createElement("option");
    option8.text = "SEM-8";
    option8.value = "8";
    element3.add(option8);


    var element5 = document.createElement("select");
    element5.setAttribute('id', 'newSelect5'); //set the id attribute      
    //Create options dynamically. This will not work in mozilla2
    var option1 = document.createElement("option"); //create a option element
    option1.text = "SEM-1"; //set the text for option
    option1.value = "1"; //set the value for option
    element5.add(option1); //add option to select box  
    
    var option2 = document.createElement("option");
    option2.text = "SEM-2";
    option2.value = "2"; 
    element5.add(option2);
    
    var option3 = document.createElement("option");
    option3.text = "SEM-3";
    option3.value = "3";
    element5.add(option3);

    var option4 = document.createElement("option");
    option4.text = "SEM-4";
    option4.value = "4";
    element5.add(option4);

    var option5 = document.createElement("option");
    option5.text = "SEM-5";
    option5.value = "5";
    element5.add(option5);

    var option6 = document.createElement("option");
    option6.text = "SEM-6";
    option6.value = "6";
    element5.add(option6);

    var option7 = document.createElement("option");
    option7.text = "SEM-7";
    option7.value = "7";
    element5.add(option7);

    var option8 = document.createElement("option");
    option8.text = "SEM-8";
    option8.value = "8";
    element5.add(option8);
    cell3.appendChild(element3);
    cell3.appendChild(linebreak);
    cell3.appendChild(element5);
    
    
   
   
    var cell4 = row.insertCell(3); //create a new cell           
    var element4 = document.createElement("input"); //create a new element  
    var element6 = document.createElement("input");
    var linebreak = document.createElement("br");  
    element4.type = "text"; //set the element type 
    element4.setAttribute('id', 'newtext'); //set the id attribute 
    element6.type = "text"; //set the element type 
    element6.setAttribute('id', 'newtext1'); //set the id attribute         
    cell4.appendChild(element4); //append element to cell
    cell4.appendChild(linebreak);
    cell4.appendChild(element6);
                

    //Add the cells for more than 4 columns
    if(columnCount >= 4){
     for (var i=5; i<=columnCount; i++) {
      var newCel = row.insertCell(i-1); //create a new cell           
      var element11=document.createElement("input");
      element11.type="text";
      element11.setAttribute('id', 'newInput3');
      var element12=document.createElement("input");
      var linebreak4= document.createElement("br");
      element12.type="text";
      element12.setAttribute('id', 'newInput3');
          newCel.appendChild(element11);
          newCel.appendChild(linebreak4);
          newCel.appendChild(element12);
     }
    }
   } 

    // delete the selected rows from table
    function deleteSelectedRows() {    
        var table = document.getElementById('my_table'); //html table
               var rowCount = table.rows.length; //no. of rows in table          
        for(var i=0; i< rowCount; i++) { //loops for all row in table               
         var row = table.rows[i]; //return a particular row              
         var chkbox = row.cells[0].childNodes[0]; //get check box onject               
         if(null != chkbox && true == chkbox.checked) { //wheather check box is selected                   
          table.deleteRow(i); //delete the selected row                    
          rowCount--; //decrease rowcount by 1                   
          i--;               
         }             
        }
       }
       
       // append column to the HTML table
       function addColumn() {    
        var tblHeadObj = document.getElementById('my_table').tHead; //table head
       
        for (var h=0; h< tblHeadObj.rows.length; h++) {
            // table reference
        var newTh = document.createElement('th');
        var element7=document.createElement("input");
        element7.type="time";
        element7.setAttribute('id', 'newInput');
        var element8=document.createElement("input");
        element8.type="time";
        element8.setAttribute('id', 'newInput1');
        tblHeadObj.rows[0].appendChild(newTh); // inser new th in node in the first row of thead
        newTh.innerHTML="";
        newTh.appendChild(element7);
        newTh.appendChild(element8);
        }
       

        var tblBodyObj = document.getElementById('my_table').tBodies[0]; //table body
        for (var i=1; i< tblBodyObj.rows.length; i++) {
            var newCell = tblBodyObj.rows[i].insertCell(-1);
            var element9=document.createElement("input");
        element9.type="text";
        element9.setAttribute('id', 'newInput2');
        var element10=document.createElement("input");
        var linebreak3= document.createElement("br");
        element10.type="text";
        element10.setAttribute('id', 'newInput3');
            newCell.innerHTML="";
            newCell.appendChild(element9);
            newCell.appendChild(linebreak3);
            newCell.appendChild(element10);

        }
       }
       
       // delete table rows with index greater then 0
       function deleteAllRows() {    
        var tbl = document.getElementById('my_table'); // table reference        
        lastRow = tbl.rows.length - 1; // set the last row index           
        // delete rows with index greater then 0    
        for (i = lastRow; i > 0; i--) {        
         tbl.deleteRow(i);  //delete the row  
        }
       } 
         
       // delete last table column
       function deleteColumn() {    
        var allRows = document.getElementById('my_table').rows;
        for (var i=0; i< allRows.length; i++) {
         if (allRows[i].cells.length > 4) {
          allRows[i].deleteCell(-1);
           //delete the cell
         } else {
          alert("You can't delete more columns.");
          return;
         }
        }
       }


       function saveData(event){
        const input=event.target;
        const row =input.getAttribute("newSelect1","newCheckbox","newSelect2","newSelect5","newInput3","newtext","newtext1");
        const col =input.getAttribute("newInput","newInput1","newInput2","newInput3");
        const value= input.value;
        const datakey = `cell_${row}_${col}`;
        const data = JSON.stringify({ value });
        localStorage.setItem(datakey,data);
       }

       function loadData(){

        for(let i=0;i<localStorage.length;i++){
            const datakey = localStorage.key(i);
            const data=localStorage.getItem(datakey);
            const{ value } = JSON.parse(data);
            const[ row, col ]=datakey.split;
        }
       }


      
