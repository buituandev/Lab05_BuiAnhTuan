function SaveContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill all the fields");
        return;
    }
    document.getElementById("result").innerHTML = name + "<br>" + email + "<br>" + message;
}