function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var gender = document.forms["myForm"]["gender"].value;
  var password = document.forms["myForm"]["password"].value;

  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    gender == "" ||
    password == ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}
