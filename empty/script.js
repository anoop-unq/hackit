const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const errorMsg = document.getElementById('errorMsg');
const element = document.getElementById('element');
const newUser = document.getElementById('newUser');
const mobile = document.getElementById('mobile');

function onBtn() {
    const freshUser = newUser.value.trim();
    const updateone = password.value.trim();
    const updateTwo = confirmpassword.value.trim();
    const newMobile = mobile.value.trim();

    // Check for empty fields
    if (!freshUser || !newMobile || !updateone || !updateTwo) {
        errorMsg.textContent = "All fields are required!";
        errorMsg.style.color = "#FC0202";
        element.textContent = "Enter valid data only!";
        element.style.color = "#FC0202";
        return false;
    }

    // Validate password match
    if (updateone !== updateTwo) {
        errorMsg.textContent = "Passwords do not match!";
        errorMsg.style.color = "#FF01E6";
        element.textContent = "Please try again.";
        element.style.color = "red";
        return false;
        // Allow form submission
    } else {
       
        errorMsg.textContent = "Signup Successful!";
        errorMsg.style.color = "blue";
        return true;
        

    }
}
