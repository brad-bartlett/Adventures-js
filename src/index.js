const parkUl = document.getElementById("list")

const adventureContainer = document.querySelector('adventure-container')


    document.addEventListener("DOMContentLoaded", ()=>{
      
      console.log('dom loaded')
      fetchParks()
      addEventListener()

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
      })
    }


  function renderPark(park) {
    
    const singlePark = document.createElement("li")
    singlePark.dataset.id = park.id
    singlePark.textContent = park.name
    parkUl.appendChild(singlePark)

  }


  function addEventListener() {
    parkUl.addEventListener('click', function(event) {
      fetchParkDetails(event.target)
    }
    )
  }


  function fetchParkDetails(singlePark) {
    const id = singlePark.dataset.id
    fetch('http://localhost:3000/parks/' + id)
      .then(resp => resp.json())
      .then(park => {
        renderParkDetails(park)
      })
  }


  function renderParkDetails(park) {
    const parkName = document.createElement('h1')
    const parkState = document.createElement('h3')
    
    parkName.textContent = park.name
    parkState.textContent = park.state
    
    console.log("all the clicks")
    
    adventureContainer.append(parkName)
    adventureContainer.append(parkState)

  }





