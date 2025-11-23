const characters = ['0,','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','<','>','?','/','=','_','{','}']
const genbtn = document.querySelector('.generaterbtn');
const div = document.querySelector('.div');
const div2 = document.querySelector('.div2');
const sidemenu = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const linksdisplay = document.querySelector('.link')
const closetab = document.querySelector('.close-tab');
const thememode = document.querySelector('.themebtn')
const lightmode = document.querySelector('.lightmode');
const darkmode = document.querySelector('.darkmode');
const h1 = document.querySelector('.firsth1')
const paragraph = document.querySelector('.paragraph')


menu.addEventListener('click', () => {
        sidemenu.classList.add('active');
        linksdisplay.style.display = "flex"
        closetab.style.display = "inline"
        menu.style.display = "none"
//         if(event.target.sidemenu.contains('active')){
//         menu.style.display = "none"
// }
})
thememode.addEventListener('click',()=> {
    lightmode.classList.toggle('active2')
    if(lightmode.classList.contains('active2')){
        darkmode.style.display = "none"
        document.body.style.background = "white"
        h1.style.color = "black"
        paragraph.style.color = "black"

    }
    else{
        darkmode.style.display = "inline"
        document.body.style.background = "rgb(4, 4, 59)"
        paragraph.style.color = "white"
        h1.style.color = "white"
    }
})





// async function copytoclip(passwords){
//     try{
//         await navigator.clipboard.writeText(password);
//             console.log("password is copied!")
//     }
//     catch(err){
//         console.log('failed to copy password',err);
//         alert('could not copy text automatically')
//     }
// }



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


genbtn.addEventListener('click', () => {
    passwordgenerator() 
    copytoclip()
})
 

closetab.addEventListener('click',()=> {
    sidemenu.classList.remove('active')
    closetab.style.display = "none"
    linksdisplay.style.display = "none"
    menu.style.display = "inline"
})

