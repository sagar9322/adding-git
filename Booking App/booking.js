function printUserDetail(event) {
    event.preventDefault();
    // Get form input values
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Log form input values to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Date: " + date);
    console.log("Time: " + time);
}