const parkUl = document.getElementById("list")
let currentAdvId = null
const ADVCONT = document.querySelector('#adventures-container')
const ADV = document.getElementById('adventures')





document.addEventListener("DOMContentLoaded", () => {
  
  console.log('dom loaded')
  fetchParks()
  addEventListenerParks()
  renderLoginForm()
  
}
)

  function renderLoginForm() {
    const loginForm = document.createElement("form")
    loginForm.setAttribute("id", "loginForm")
    const nameInput = document.createElement("input")
    nameInput.setAttribute('type', "name")
    nameInput.setAttribute('placeholder', "Plese enter your name: ")
    loginForm.appendChild(nameInput)
    document.getElementById("header").appendChild(loginForm)

  }
  
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
    singlePark.style.border = '3px solid black'
    singlePark.style.margin = '30px'
    singlePark.style.height = '60px'
    singlePark.style.width = '100px'
    singlePark.style.textAlign = 'center'
    singlePark.style.color = 'white'
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
    console.log(singlePark)
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
    
    document.getElementById("adventures-container").dataset.id = park.id
    
    renderForm()
    
  }
  
  function clearDiv() {
    let element = document.getElementById("adventures-container")
    while (element.firstChild) { 
      element.removeChild(element.firstChild)
    }
  }
  
  
  
  function renderForm() {
    
    const advForm = document.createElement("form")
    advForm.setAttribute("id", "adventureForm")
    
    const dateInput = document.createElement("input")
    dateInput.setAttribute('type', "date")
    dateInput.setAttribute('placeholder', "YYYY/MM/DD")
    
    const snippetInput = document.createElement("input")
    snippetInput.setAttribute('type', 'string')
    snippetInput.setAttribute('placeholder', "How was your adventure?")
    
    const ratingInput = document.createElement("input")
    ratingInput.setAttribute('type', 'integer')
    ratingInput.setAttribute('placeholder', 'Rating: 1-10')
    
    const submitBtn = document.createElement('input')
    submitBtn.id = ('submitBtn')
    submitBtn.setAttribute('type', 'submit')
    submitBtn.setAttribute('value', 'Submit')
    
    advForm.appendChild(dateInput)
    advForm.appendChild(snippetInput)
    advForm.appendChild(ratingInput)
    advForm.appendChild(submitBtn)
    
    document.getElementById("adventures-container").appendChild(advForm)
    
    const advList = document.createElement('ul')
    advList.setAttribute("id", "advList")
    document.getElementById("adventures-container").appendChild(advList)
    addEventListenerSubmit()
    

    
    
  }
  
  function addEventListenerSubmit() {
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault()
      postAdventure(submitBtn.parentNode[0].value, submitBtn.parentNode[1].value, submitBtn.parentNode[2].value)
      submitBtn.parentElement.reset()
    }
    )
  }
  
  function postAdventure(date, snippet, rating) {

    const park_id = document.getElementById("adventures-container").dataset.id
    let adventureObj = {
      method: "POST",
      headers: {"Content-Type": "application/json", 
      "Accept": "application/json"},
      body: JSON.stringify({
        date: date,
        snippet: snippet,
        rating: rating,
        park_id: park_id
        
      })
          }
        fetch("http://localhost:3000/adventures", adventureObj)
      .then(resp =>resp.json())
      .then(data=>{
        currentAdvId = data.id
        renderAdventures(data)
      })
  }

  function renderAdventures(data) {
    clearAdv()
    console.log(data)

    const adv = document.getElementById('advList')
    const advDate = document.createElement('h2')
    const advSnippet = document.createElement('h3')
    const advRating = document.createElement('h2')
    
    advDate.textContent = "Date of adventure: " + data.date
    advSnippet.textContent = data.snippet
    advRating.textContent = "Your rating: " + data.rating + "/10"
    
    adv.appendChild(advDate)
    adv.appendChild(advSnippet)
    adv.appendChild(advRating)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    adv.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteAdventure)

    // const editBtn = document.createElement('button')
    // editBtn.textContent = "Edit"
    // adv.appendChild(editBtn)
    // editBtn.addEventListener("click", editAdventure)


    }

    function clearAdv() {
      var element = document.getElementById("advList")
    while (element.firstChild) { 
      element.removeChild(element.firstChild)}}


  function deleteAdventure() {
    let adventureObj = {
    method: "DELETE",
    headers: {"Content-Type": "application/json", 
    "Accept": "application/json"}
    }

    fetch(`http://localhost:3000/adventures/${currentAdvId}`, adventureObj)
      .then(resp => resp.json())
      .then(data => {
        document.getElementById('advList').innerHTML = ""
        currentAdvId = null
      })

    }

    function editAdventure(date, snippet, rating) {
      // byebug
      let adventureObj = {
        method: "PUT",
        headers: {"Content-Type": "application/json", 
        "Accept": "application/json"},
        body: JSON.stringify({
          date: date,
          snippet: snippet,
          rating: rating,
          
        })
            }
          fetch(`http://localhost:3000/adventures/${currentAdvId}`, adventureObj)
        .then(resp =>resp.json())
        .then(data=>{
          renderAdventures(data)
        })
    }


