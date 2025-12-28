function openHome() {
    window.location.href = "index.html";
}
function performSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
    const allDonors = JSON.parse(localStorage.getItem("donorDetails")) || [];
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    const filteredDonors = allDonors.filter(donor => 
        donor.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
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