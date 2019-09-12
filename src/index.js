const parkUl = document.getElementById("list")


const ADVCONT = document.querySelector('#adventures-container')
const ADV = document.getElementById('adventures')

    document.addEventListener("DOMContentLoaded", ()=>{
      
      console.log('dom loaded')
      fetchParks()
      addEventListenerParks()
  
    }
    )
  
  
    function fetchParks() {
    // console.log('fetching')
    fetch('http://localhost:3000/parks/')
      .then(resp => resp.json())
      .then(parks => {
        console.log(parks)
        renderParks(parks)
      }
      )
  }


  function renderParks(parks) {
      parks.forEach(park => {
        renderPark(park)
      }
      )
    }


  function renderPark(park) {
    
    const singlePark = document.createElement("li")
    singlePark.dataset.id = park.id
    singlePark.textContent = park.name
    parkUl.appendChild(singlePark)

  }


  function addEventListenerParks() {
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
    }
    )
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
    
    renderForm()
    
  }
  
  function clearDiv() {
    var element = document.getElementById("adventures-container")
    while (element.firstChild) { 
      element.removeChild(element.firstChild)
    }
  }
  
  
  
  function renderForm() {
    
    const advForm = document.createElement("form")
    advForm.setAttribute("id", "adventureForm")
    
    const dateInput = document.createElement("input")
    dateInput.setAttribute('type', "date")
    dateInput.setAttribute('placeholder', "MM/DD/YYYY")
    
    const snippetInput = document.createElement("input")
    snippetInput.setAttribute('type', 'string')
    snippetInput.setAttribute('placeholder', "How was your adventure?")
    
    const ratingInput = document.createElement("input")
    ratingInput.setAttribute('type', 'integer')
    ratingInput.setAttribute('placeholder', '1-10')
    
    const submitBtn = document.createElement('input')
    submitBtn.id = ('submitBtn')
    submitBtn.setAttribute('type', 'submit')
    submitBtn.setAttribute('value', 'Submit')
    
    advForm.appendChild(dateInput)
    advForm.appendChild(snippetInput)
    advForm.appendChild(ratingInput)
    advForm.appendChild(submitBtn)
    
    document.getElementById("adventures-container").appendChild(advForm)
    
    addEventListenerSubmit()
    
    
  }
  
  function addEventListenerSubmit() {
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault()
      postAdventure(event.target,submitBtn.parentNode[0].value,submitBtn.parentNode[1].value,submitBtn.parentNode[2].value )
    }
    )
  }
  
  function postAdventure(button,date, snippet, rating) {

    let adventureObj = {
      method: "POST",
      headers: {"Content-Type": "application/json", 
      "Accept": "application/json"},
      body: JSON.stringify({
        date: date,
        snippet: snippet,
        rating:rating
        
      })
          }
        fetch("http://localhost:3000/adventures", adventureObj)
      .then(resp =>resp.json())
      .then(adventure=>{
        renderAdventure(adventure)
      })
  }
  
  // function renderAdventure(adventure) {
  //   const date = document.createElement("h2")
  //   const snippet = document.createElement("h3")
  //   const rating = document.createElement("h2")

  //   date.textContent = adventure.date
  //   snippet.textContent = adventure.snippet
  //   rating.textContent = adventure.snippet

  //   ADV.append(date)
  //   ADV.append(snippet)
  //   ADV.append(rating)
  // }

