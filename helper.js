let myDoc = document.querySelector(".container");




function generateFirstPage(){

  myDoc.innerHTML = `
    
    <header class="title">

        <h1>Lab Orders</h1>

        <input type="button" id="addMes" name="AddMeasurement" value="Add Mes">

    </header>

    <main class="cutia">

        <div class="messArea">

            <h2>Measurement Set</h2>

            <label for="mess1" class="eticheta">Measurement 1:</label>
            <input type="text" id="mess1" class="mess">
        
            <label for="mess2" class="eticheta">Measurement 2:</label>
            <input type="text" id="mess2" class="mess">

            <label for="mess3" class="eticheta">Measurement 3:</label>
            <input type="text" id="mess3" class="mess">

            <input type="button" id="showRes" name="ShowResults" value="Show Results">

        </div>

    </main>

    <footer class="contact">
        <p>All Measurements Provided by the Laboratory Are Confidential</p>
        <p>Contact: laboratory@mail.com</p>
    </footer>
    
    
    `

    let addBtn = document.querySelector("#addMes");
    addBtn.addEventListener("click", (e)=>{

        let myBox = document.querySelector(".messArea");

        myBox.classList.toggle("afisare");


    });

    let showBtn = document.querySelector("#showRes");

    showBtn.addEventListener("click",(e)=>{

        

    })


}