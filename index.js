let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numerric = "0123456789"
    const symbol = "!@#$%^&*()_+<>?,/." 

    const data = lowerAlphabet + upperAlphabet + numerric + symbol
    let generator ='';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}
 
function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password has been generated!')
    }, 1000)
} 

function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'simplepasswordgenerator.txt')
    setTimeout(() => {
        alert('berhasil di simpan!')
    }, 1000);
}