document.getElementById("contactForm").addEventListener("submit",function (event) {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;

    if (!name || !email || !password) {
      alert("لطفا تمامی مقادیر پر شود.");
      event.preventDefult();
    } else {
      let emailPattern =
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!emailPattern.test(email)) {
        alert("payam ersal shod!");
        event.preventDefult();
      }
    }
  });