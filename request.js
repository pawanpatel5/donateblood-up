   function openHome() {
    window.location.href = "index.html";
  }
  function requestDetail() {
    let district = document.getElementById("district").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let bloodGroup = document.getElementById("blood").value;
    let contact = document.getElementById("contact").value;

    let requestDetails = {
      district: district,
      address: address,
      pincode: pincode,
      bloodGroup: bloodGroup,
      contact: contact
    };

    let allRequests = JSON.parse(localStorage.getItem("requestDetails")) || [];
    allRequests.push(requestDetails);

    localStorage.setItem("requestDetails", JSON.stringify(allRequests));

    document.getElementById("myForm").reset();
    alert("Thank you for submitting your request. We will contact you soon!");
    return false;
  }