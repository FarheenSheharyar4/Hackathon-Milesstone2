const Button = document.getElementById("toggle-skills") as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

Button.addEventListener('click' ,() => {   //addEventListner wait krta h button p click krne k bad jo rsult ae uska
    if(skills.style.display ==="NONE") {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});