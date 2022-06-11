
    //form can be filled and stored on local storage 


    add = document.getElementById("click");
    add.addEventListener("click", ()=>{
        emId = document.getElementById('id').value;
        fnm = document.getElementById('firstName').value;
        lnm = document.getElementById('lastName').value;
        ag = document.getElementById('age').value;
        gndr = document.getElementById('gender').value;
        hgt = document.getElementById('height1').value, document.getElementById('height2').value;
        wgt = document.getElementById('weight').value; 
        bdtmp = document.getElementById('bodyTemp').value;
        pulsrt = document.getElementById('pulseRate').value;
        bldprssr = document.getElementById('bloodPrssr1').value, document.getElementById('bloodPrssr2').value;
        resprt = document.getElementById('respRate').value;
        avgexr = document.getElementById('avgExercise').value;
        vacbln = document.getElementById('vacBalnc').value;
        avgwrk = document.getElementById('avgWork').value;

        if(localStorage.getItem('itemsJson')==null){
            itemJsonArray =[];
            itemJsonArray.push([emId, fnm, lnm, ag, gndr, hgt, wgt, bdtmp, pulsrt, bldprssr, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
        else{
            itemJsonArrayStr =localStorage.getItem('itemsJson');
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([emId, fnm, lnm, ag, gndr, hgt, wgt, bdtmp, pulsrt, bldprssr, resprt, avgexr, vacbln, avgwrk]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        }
    })
