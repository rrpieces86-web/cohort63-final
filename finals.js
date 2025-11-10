function Ctof(){
    let c = prompt("enter the temp: ");
    let f = (c * 9/5) + 32;
    let level = document.createElement("div");
        level.classList.add("level");
        console.log(level);
        if(c>10){
            level.style.backgroundColor ="red";
            level.style.height ="50px"
            level.style.marginBottom ="80px"
        }else if(c>26){
            level.style.backgroundcolr ="orange";
        }



        document.getElementById("thermo").appendChild(level)
    document.getElementById("temp").innerHTML+=(`${c} degrees = ${f} degrees `);
}

function ftoc(){
    let f = prompt("enter the temp: ");
    let c = (f - 32) * 5/9;
    let level = document.createElement("div");
        level.classList.add("level");
        console.log(level);
        if(c>10){
            level.style.backgroundColor ="red";
        }else if(c>26){
            level.style.backgroundcolr ="orange";
        }



        document.getElementById("thermo").appendChild(level)
    document.getElementById("temp").innerHTML+=(`${f}degrees = ${c} degrees `);


}

function generatetable(){
    for(let celcius=0;celcius<110;celcius+= 10){
        let farenheit = (celcius * (9/5)) + 32;
        let i = (10)
        console.log(farenheit);

        document.getElementById("temps").innerHTML+=`
        <tr>
            <td>${celcius}<td>
            <td>${farenheit}<td>
        <tr>
        `;
    }
}