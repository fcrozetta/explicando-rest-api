document.addEventListener("DOMContentLoaded", function(event) { 

    // ! API C#
    
    // Busca de dados
    document.getElementById('btnBuscarCSharp').addEventListener('click',(ev)=>{
        
        fetch("https://localhost:5001/api/values").then(res=>{
            return res.json()
        },rej=>{
            console.log("deu erro");
            return null
        }).then(data=>{
            console.log(data);
            document.getElementById('nomesCSharp').innerText = data
        })
    } )

    // Envio de dados
    document.getElementById('btnNovoNomeCSharp').addEventListener('click',(ev)=>{
        let newName = {name: document.getElementById("inputNomeCSharp").value}
        fetch("https://localhost:5001/api/values",{
            method:"POST", 
            body:JSON.stringify(newName),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res=>{
            console.log(res)
        },rej=>{
            console.log("erro!", rej)
        })
    } )

    //  ! API NEST

    // Busca de dados
    document.getElementById('btnBuscarNest').addEventListener('click',(ev)=>{
        
        fetch("http://localhost:3000/values").then(res=>{
            return res.json()
        },rej=>{
            console.log("deu erro");
            return null
        }).then(data=>{
            console.log(data);
            document.getElementById('nomesNest').innerText = data
        })
    } )

    // Envio de dados
    document.getElementById('btnNovoNomeNest').addEventListener('click',(ev)=>{
        let newName = {name: document.getElementById("inputNomeNest").value}
        fetch("http://localhost:3000/values",{
            method:"POST", 
            body:JSON.stringify(newName),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res=>{
            console.log(res)
        },rej=>{
            console.log("erro!", rej)
        })
    } )

});