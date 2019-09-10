function main() {
    document.addEventListener("DOMContentLoaded", function() {
      fetchParks()
    })
}


  function fetchParks() {
    fetch('http://localhost:3000/parks')
      .then(resp => resp.json())
      .then(parks => {
        console.log(parks)
        renderParks(parks)
      })
  }

  function renderParks(parks) {
      parks.forEach(park => {
          renderParks(park)
      })
  
  
  
  
  
  
}
  main()