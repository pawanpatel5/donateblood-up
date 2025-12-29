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
  function performSearch() {
    const searchTerm = document.getElementById("district").value.toLowerCase().trim();
    const searchTerm1 = document.getElementById("blood").value.toLowerCase().trim();
    const allDonors = JSON.parse(localStorage.getItem("donorDetails")) || [];
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    const filteredDonors = allDonors.filter(donor => 
        donor.district.toLowerCase().includes(searchTerm.toLowerCase()) &&
        donor.bloodGroup.toLowerCase().includes(searchTerm1.toLowerCase())
    );
    filteredDonors.forEach(donor => {
        const resultCard = document.createElement("div");
        resultCard.className = "resultCard";
        resultCard.innerHTML = `
            <h3>${donor.name}</h3>
            <p>District: ${donor.district}</p>
            <p>Blood Group: ${donor.bloodGroup}</p>
            <p>Contact: ${donor.contact}</p>
            <p>Age: ${donor.age}</p>
        `;
        resultsDiv.appendChild(resultCard);
    });
}