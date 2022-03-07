import Madlibs from "./madlib.js";
const submitBtn = document.querySelector('.submit-btn');
const formSection = document.querySelector('.form_section');
const textArea = document.querySelector('.enjoy-story');
const area = document.querySelector('.text-area');
const backBtn = document.querySelector('.back-btn');

const madlib = new Madlibs();

const getUserInfo = () => {
    const noun1 = document.getElementById('noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const adjective1 = document.getElementById('adjective1').value;
    const noun2 = document.getElementById('noun2').value;
    const verb2 = document.getElementById('verb2').value;
    const adjective2 = document.getElementById('adjective2').value;

    
    if (noun1 === '' || verb1 === '' || adjective1 === '' || noun2 === '' || verb2 === '' || adjective2 === '') {
        alert('Please fill all empty fields')
        return;
    }

    const story = madlib.createMadlib(noun1, verb1, adjective1, noun2, verb2, adjective2);
    area.innerHTML = story;

    formSection.style.display = 'none';
    textArea.style.display = 'block';
    
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getUserInfo();
});

backBtn.addEventListener('click', () => {
    window.location.href = './Play.html';
})

