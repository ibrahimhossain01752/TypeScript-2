"use strict";
const useForm = document.querySelector('form');
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
useForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value
    };
    console.log(data);
});
