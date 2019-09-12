const parkUl = document.getElementById("list")


const ADVCONT = document.querySelector('#adventures-container')

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
    
    clearDiv()
    const parkName = document.createElement('h1')
    const parkState = document.createElement('h3')
    const parkImage = document.createElement('img');
    
    parkName.textContent = park.name
    parkState.textContent = park.state
    parkImage.src = park.img_url
    
    ADVCONT.append(parkName)
    ADVCONT.append(parkState)
    ADVCONT.append(parkImage)
    
  }
  
  function clearDiv() {
    var element = document.getElementById("adventures-container")
    while (element.firstChild) { 
        element.removeChild(element.firstChild)
  }}
  

  // function renderForm() {
  //   const form = document.createElement("form")
  //   form.setAttribute("method", "post")
  //   document
  // }


  // <form id="adventure_form">
  //       <input id="date_input" type="date" name="date" placeholder="YYYY-MM-DD"/>
  //       <input id="snippet_input" type="blob" name="snippet" placeholder="How was your adventure?"/>
  //       <input id="rating_input" type="integer" name="rating" placeholder="1-10"/>
  //       <input type="submit" value="Submit"/>
  //       </form>



