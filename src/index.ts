const useForm = document.querySelector('form') as HTMLFormElement;

const userName = document.querySelector("#name")as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;


useForm.addEventListener("submit", (event: Event) =>{
    event.preventDefault();

    const data = {
        userName: userName.value,
        userEmail: userEmail.value
    }
    console.log(data);
})