/*import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://arimkqyeak.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://1ckn28vxue.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: '6BNK5vfb4N3VEqqR1c2vQZsAUaToypXZMer2owLqEZ3u',
});  
const { entities } = client;



async function async_list() {
    console.log('Calling async_list function');
    const employeeResponse = await entities.employee.list();
    console.log(employeeResponse);
}
async_list();



async function async_remove() {
    console.log('Calling async_remove function');
    const employeeResponse = await entities.employee.remove('018179af-8528-cb56-9dc3-95e659ae69b0');
    console.log(employeeResponse);
}
//async_remove();


/*
export async function async_add() {
    console.log('Calling async_remove function');
    const employeeResponse = await entities.employee.add(
        {
        emp_id: 4,
        firstName: "Tim",
        lastName: "Turner",
        age: 23,
        genderIdentity: 'NonbinaryNonconforming',
        height: 71,
        weight: 195,
        BodyTemperature: 99,
        pulseRate: 85,
        bloodPressureSystolic: 120,
        bloodPressureDiastolic: 79,
        respirationRate: 18,
        exerciseHours: 0,
        vacationBalance: 50,
        workHours: 60
        }
    );
    console.log(employeeResponse);
}
*/
//async_add();

//let add = document.getElementById("click");
//add.addEventListener("click", async_add);


/*
add.addEventListener("click", () =>
{
            // Add an item with an ACL specifying that all nodes are restricted to read-only access w/out PII
    console.log("made it here");
    const response = await entities.employee.add
    (
        {
            emp_id: document.getElementById('id').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            age: document.getElementById('age').value,
            genderIdentity: document.getElementById('gender').value,
            genderSelector: genderIdentity.options[genderIdentity.selectedIndex].text,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            bodyTemperature: document.getElementById('bodyTemp').value,
            pulseRate: document.getElementById('pulseRate').value,
            bloodPressureSystolic: document.getElementById('systolic').value,
            bloodPressureDiastolic: document.getElementById('diastolic').value,
            respirationRate: -document.getElementById('respRate').value,
            exerciseHours: document.getElementById('avgExercise').value,
            vacationBalance: -document.getElementById('vacBalnc').value,
            workHours: document.getElementById('avgWork').value, 
        },
        {
            aclInput: 
            {
                acl: 
                [
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "emp_id",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "age",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "genderIdentity",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "height",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "weight",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "bodyTemperature",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "pulseRate",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "bloodPressureSystolic",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "bloodPressureDiastolic",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "respirationRate",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "exerciseHours",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "vacationBalance",
                        operations: [READ]
                    },
                    {
                        principal:{
                            nodes:["*"]
                        },
                        path: "workHours",
                        operations: [READ]
                    },
                ],
            },
        },
    );
});
*/



   //form can be filled and stored on local storage 
    // run this command "localStorage.getItem('itemsJson')" on console
    // to check the data submitted on form 
    add = document.getElementById("add");
    function update(){
        console.log("Updating...");
        //emId = document.getElementById('id').value;
        fnm = document.getElementById('firstName').value;
        lnm = document.getElementById('lastName').value;
        ag = document.getElementById('age').value;
        gndr = document.getElementById('gender');
        gen = gndr.options[gndr.selectedIndex].text;
        hgt = document.getElementById('height').value;
        wgt = document.getElementById('weight').value; 
        bdtmp = document.getElementById('bodyTemp').value;
        pulsrt = document.getElementById('pulseRate').value;
        systl = document.getElementById('systolic').value;
        diastl = document.getElementById('diastolic').value;
        resprt = document.getElementById('respRate').value;
        avgexr = document.getElementById('avgExercise').value;
        vacbln = document.getElementById('vacBalnc').value;
        avgwrk = document.getElementById('avgWork').value;

    
        if(localStorage.getItem('itemsJson')==null)
        {
            itemJsonArray =[];
            itemJsonArray.push([fnm, lnm, ag, gen, hgt, wgt, bdtmp, pulsrt, systl, diastl, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else
        {
            itemJsonArrayStr =localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([fnm, lnm, ag, gen, hgt, wgt, bdtmp, pulsrt, systl, diastl, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }

   
        //this will show up the data values on dashboard  <td>${element[13]}</td> onclick="sharing(${index})" <td><button type="submit" class="btn-sm btn-primary">Share</button></td>

        showTable = document.getElementById("showTable");
        str = "";
        itemJsonArray.forEach((element, index) => {
            str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td>
            <td>${element[5]}</td>
            <td>${element[6]}</td>
            <td>${element[7]}</td>
            <td>${element[8]}</td>
            <td>${element[9]}</td>
            <td>${element[10]}</td>
            <td>${element[11]}</td>
            <td>${element[12]}</td>
            
    
            </tr>`;

            });
            showTable.innerHTML = str;

    }
    
    add.addEventListener("click", update);
    update();

    /*
    function sharing(item){
        console.log("Share", item);
        itemJsonArrayStr
    }
        */


