function AddNewWeField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('placeholder', 'Add here')

    let we = document.getElementById('we')
    let weAddBtn = document.getElementById('weAddBtn')
    newNode.style.display = 'block';
    newNode.style.marginBottom = '1rem'

    we.insertBefore(newNode, weAddBtn)
}

function addNewAqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.setAttribute('placeholder', 'Add here')

    let aq = document.getElementById('aq')
    let aqAddBtn = document.getElementById('aqAddBtn')
    newNode.style.display = 'block'

    aq.insertBefore(newNode, aqAddBtn)
}






// left field 
let nameField = document.getElementById('nameField');
let contactField = document.getElementById('contactField');
let addressField = document.getElementById('addressField');
let emailField = document.getElementById('emailField');
let linkedField = document.getElementById('linkedField');
let twitterField = document.getElementById('twitterField');
// right field
let objectiveField = document.getElementById('objectiveField');
let weField = document.getElementById('weField');
let eqField = document.getElementById('eqField');
// button 
let generateResumeBtn = document.getElementsByClassName('generateResumeBtn');

// resume template fields 
let resumeTemplateContainer = document.querySelector('.resumeTemplateContainer')
let Name = document.getElementsByClassName('Name')
let contact = document.getElementById('contact')
let address = document.getElementById('address')
let email = document.getElementById('email')
let linkedin = document.getElementById('linkedin')
let twitter = document.getElementById('twitter')

let objectiveText = document.getElementById('objectiveText');
let workExperienceText = document.getElementById('workExperienceText');
let academicQualificationText = document.getElementById('academicQualificationText');

generateResumeBtn[0].addEventListener('click', function () {
    resumeTemplateContainer.style.display = 'flex';

    Name[0].innerHTML = nameField.value;
    Name[1].innerHTML = nameField.value;
    contact.innerHTML = contactField.value;
    address.innerHTML = addressField.value;
    email.setAttribute('href', `mailto:${emailField.value}`);
    linkedin.setAttribute('href', linkedField.value);
    twitter.setAttribute('href', twitterField.value);
    objectiveText.innerHTML = objectiveField.value;
    workExperienceText.innerHTML = weField.value;
    academicQualificationText.innerHTML = eqField.value;







})