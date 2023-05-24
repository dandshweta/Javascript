function print(e) {
  e.preventDefault();
  const name1 = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Name: " + name1);
  console.log("Email: " + email);
  console.log("Password: " + password);
}
