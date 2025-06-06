// Volunteers
const volunteers = [
    { name: "Anjali S", location: "chennai", skill: "Medical Aid" },
    { name: "Ravi K", location: "bangalore", skill: "Food Delivery" },
    { name: "Priya M", location: "chennai", skill: "Shelter Support" },
    { name: "Arun J", location: "bangalore", skill: "Transport Help" },
  ];
  
  // Render all volunteers
  function renderVolunteers(data = volunteers) {
    const grid = document.getElementById('volunteerGrid');
    grid.innerHTML = "";
    data.forEach(v => {
      const card = document.createElement('div');
      card.className = "volunteer-card";
      card.innerHTML = `<h3>${v.name}</h3><p><strong>Location:</strong> ${v.location}</p><p><strong>Skill:</strong> ${v.skill}</p>`;
      grid.appendChild(card);
    });
  }
  
  // Filter volunteers by location
  function filterVolunteers() {
    const location = document.getElementById('locationFilter').value;
    const filtered = location === "all" ? volunteers : volunteers.filter(v => v.location === location);
    renderVolunteers(filtered);
  }
  
  // Handle form submission
  document.getElementById('helpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = "✅ Your request has been received. A volunteer will contact you soon.";
    this.reset();
  });
  
  // Init
  window.onload = () => {
    renderVolunteers();
  };
  