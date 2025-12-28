   function openHome() {
    window.location.href = "index.html";
  }
  function donorDetail() {
   let name = document.getElementById("Name").value;
   let age = document.getElementById("Age").value;
   let gender = document.getElementById("gender").value;
    let bloodGroup = document.getElementById("blood").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let district = document.getElementById("district").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let lastDonated = document.getElementById("lDonated").value;
    let status = document.getElementById("status").value;
    
    let donorDetails = {
      name: name,
      age: age,
      gender: gender,
      bloodGroup: bloodGroup,
      phone: phone,
      email: email,
      district: district,
      address: address,
      pincode: pincode,
      lastDonated: lastDonated,
      status: status
    };

     let allDonors = JSON.parse(localStorage.getItem("donorDetails")) || [];
     allDonors.push(donorDetails);

    localStorage.setItem("donorDetails", JSON.stringify(allDonors));

    document.getElementById("myForm").reset();
    alert("Thank you for registering as a donor. We will contact you soon!");
    return false;
    }