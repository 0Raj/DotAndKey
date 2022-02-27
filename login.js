import { footer } from "./Componentes/footer.js";
document.querySelector("#footer").innerHTML = footer();
import { navBar, navInt, navcar } from "./Componentes/navBar.js";
document.querySelector("#navInterval").innerHTML = navInt();
let i = 0;
navcar(i);
document.querySelector("#navbar").innerHTML = navBar();
let btn = document.getElementById("button1");

btn.onclick = async (event) => {
    event.preventDefault();
    let login_data = {
        username: document.querySelector("#login-username").value,
        password: document.querySelector("#login-password").value
    };

    let login_data_json = JSON.stringify(login_data);

    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: login_data_json,
            headers: {
                "Content-Type" : "application/json"
            }
        });

        let data = await res.json();
         console.log(data);

        getData(data.token, login_data.username);
    } catch (error) {
        console.log(error);
    }
}

let getData = async (token, username) => {
     console.log(token, username);
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
document.querySelector("#leftNav > img ").addEventListener("click",()=>{
    location.href = "index.html";
});

