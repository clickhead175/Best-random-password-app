const characters = ['0,','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','<','>','?','/','=','_','{','}']
const genbtn = document.querySelector('.generaterbtn');
const div = document.querySelector('.div');
const div2 = document.querySelector('.div2');


async function copytoclip(password){
    try{
        await navigator.clipboard.writeText(password);
            console.log("password is copied!")
    }
    catch(err){
        console.log('failed to copy password',err);
        alert('could not copy text automatically')
    }
}



function passwordgenerator(){
    let password = ""
    let password2 = ""
    const passwordlenght = 10

    for (let index = 0; index <= passwordlenght; index++) {

        let randomnumbers = Math.floor(Math.random() * characters.length)
        let randomnumbers2 = Math.floor(Math.random() * characters.length)

        password += characters[randomnumbers]
        password2 += characters[randomnumbers2]
    }
    
    div.textContent = password
    div2.textContent = password2
}

passwordgenerator()

genbtn.addEventListener('click', () => {
    passwordgenerator() 
})