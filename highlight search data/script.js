let myArray = [];
let ediColor = -1;

async function getData() {
    let mydata = await fetch("https://jsonplaceholder.typicode.com/posts");
    let y = await mydata.json();

    await new Promise((suceess, reject) => {
        if (mydata.status == 200) {
            suceess(display(y))
        }
        
    })

}
getData();

display = (data) => {
    myArray = data;
    kys = Object.keys(data[0]);
    for (const key of Object.keys(data[0])) {
        document.getElementById("head").innerHTML += `<th>${key}</th>`;
    }
    document.getElementById("body").innerHTML += data.map((value) => {
        let text = "";
        for (const key in value) {
            text += `<td>${value[key]}</td>`;

        }
        return `<tr id="${value.id}">${text}</tr>`;
    }).join("");
}

searchData = () => {
    let txt = document.getElementById("txt").value;


    let filterData = myArray.filter((element) => {

        let newData = Object.values(element).join(" ");

        return newData.indexOf(txt) >= 0;
    })
    console.log(filterData);

    let tr = document.getElementsByTagName("tr");

    for (const i of tr) {
        document.getElementById(`${i.id}`).style.background = "#fff";
    }

    for (const i of tr) {
        
        for (const j of filterData) {
            if (i.id == j.id) {
                document.getElementById(`${i.id}`).style.background = "skyblue";
            }
            
        }
    }

}