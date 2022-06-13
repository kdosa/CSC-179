
    //form can be filled and stored on local storage 
    // run this command "localStorage.getItem('itemsJson')" on console
    // to check the data submitted on form 
    add = document.getElementById("click");

    add.addEventListener("click", ()=>{
        emId = document.getElementById('id').value;
        fnm = document.getElementById('firstName').value;
        lnm = document.getElementById('lastName').value;
        ag = document.getElementById('age').value;
        gndr = document.getElementById('gender');
        gen = gndr.options[gndr.selectedIndex].text;
        hgt = document.getElementById('height').value;
        wgt = document.getElementById('weight').value; 
        bdtmp = document.getElementById('bodyTemp').value;
        pulsrt = document.getElementById('pulseRate').value;
        bldprssr1 = document.getElementById('systolic');
        systl = bldprssr1.options[bldprssr1.selectedIndex].text;
        bldprssr2 = document.getElementById('diastolic');
        diastl = bldprssr2.options[bldprssr2.selectedIndex].text;
        resprt = document.getElementById('respRate').value;
        avgexr = document.getElementById('avgExercise').value;
        vacbln = document.getElementById('vacBalnc').value;
        avgwrk = document.getElementById('avgWork').value;

    
        if(localStorage.getItem('itemsJson')==null){
            itemJsonArray =[];
            itemJsonArray.push([emId, fnm, lnm, ag, gen, hgt, wgt, bdtmp, pulsrt, systl, diastl, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArrayStr =localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([emId, fnm, lnm, ag, gen, hgt, wgt, bdtmp, pulsrt, systl, diastl, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
    })
