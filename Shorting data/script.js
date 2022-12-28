let myObj = [
    {
        name : "krish patel",
        mobile : "9510675217",
        Dob : "08/07/2010" 
    },
    {
        name : "Meet patel",
        mobile : "8511491401",
        Dob : "02/26/2002" 
    },
    {
        name : "Dhurvi sejani",
        mobile : "9994201294",
        Dob : "12/11/1999" 
    },
    {
        name : "prushti kadchhi",
        mobile : "6325887778",
        Dob : "04/26/2002" 
    }
]


const display = (myObj) =>{
    let text = [];
    for (const key in myObj[0]) {
        text.push(key);
    }
    document.getElementById("thead").innerHTML = text.map((key)=>{
        return `<th>${key}</th>`
    }).join("");

    document.getElementById('tbody').innerHTML = myObj.map((value)=>{
        let val = '';
        for (const key in value) {
            val += `<td>${value[key]}</td>`;
        }
        
        return `<tr>${val}</tr>`;
    }).join("");
}

const sortDate = () =>{

    let sortMyData = myObj.sort((a,b)=>{
        if(new Date(a.Dob) > new Date(b.Dob)){
            return 1;
        }
        else{
            return -1;
        }
    })
    
   
    display(sortMyData);
}
display(myObj);