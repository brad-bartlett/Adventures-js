

    document.addEventListener("DOMContentLoaded", ()=>{
      const adventureContainer = document.querySelector('#adventure-container')
      console.log('dom is loaded')
      fetchParks()
    })


  function fetchParks() {
    // console.log('fetching')
    fetch('http://localhost:3000/parks/')
      .then(resp => resp.json())
      .then(parks => {
        console.log(parks)
        renderParks(parks)
      })
  }


  function renderParks(parks) {
      parks.forEach(park => {
        renderPark(park)
      })}


  function renderPark(park) {
    const parkUl = document.getElementById("park")
    parkUl.dataset.id = park.id
    parkUl.textContent = park.name
  }

  // function parkDetails(park) {

  // }
  