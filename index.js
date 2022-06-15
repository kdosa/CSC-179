import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
  apiUrl: `https://jk3wnzsfni.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://je0rxkwwrg.execute-api.us-west-2.amazonaws.com/graphql`,
  //apiKey: process.env.VENDIA_API_KEY,  <---- API key
});

const { entities } = client;


// USE THIS TO TEST CONNECTIONS TO VENDIA  This is a test
// Add a new employee with test data
const response = await entities.employee.add({
    emp_id: -1,
    firstName: 'link to user input',
    lastName:   'link to user input',
    age: -1,
    genderIdentity: 'PreferNotToRespond',
    height: -1,
    weight: -1,
    bodyTemperature: -1,
    pulseRate: -1,
    bloodPressureSystolic: -1,
    bloodPressureDiastolic: -1,
    respirationRate: -1,
    exerciseHours: -1,
    vacationBalance: -1,
    workHours: -1,
  });
  

//USE THIS TO CREATE AN EMPLOYEE
  // Add an item with an ACL specifying that all nodes are restricted to read-only access w/out PII
const betterResponse = await entities.employee.add
(
    {
        emp_id: -1,
        firstName: 'link to user input',
        lastName:   'link to user input',
        age: -1,
        genderIdentity: 'PreferNotToRespond',
        height: -1,
        weight: -1,
        bodyTemperature: -1,
        pulseRate: -1,
        bloodPressureSystolic: -1,
        bloodPressureDiastolic: -1,
        respirationRate: -1,
        exerciseHours: -1,
        vacationBalance: -1,
        workHours: -1, 
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
    // syncMode: ASYNC
    // {
    //     transaction{
    //         emp_id
    //     }
    // }
);