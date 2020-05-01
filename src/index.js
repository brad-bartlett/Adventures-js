const parkUl = document.getElementById("list")
const ADVCONT = document.querySelector('#adventures-container') //# denotes it getting the id of the element






document.addEventListener("DOMContentLoaded", () => {
  // makes sure dom content is loaded before rendering any function calls 
  console.log('dom loaded')
  fetchParks()
  addEventListenerParks() 
  addEventListenerSortParks()
  

}
)

class CurrentDate {
  constructor(target) {
    this.targetElement = document.getElementById(target)
    this.targetElement.innerText = this.render()
    
    setInterval(() => {
      this.targetElement.innerText = this.render()

    }, 100000)}

    render() {
      const currentDate = new Date().toLocaleDateString("en-US")
      return `Today's date is ${currentDate}`
    
    }
  }
  
  new CurrentDate("date")

  function addEventListenerSortParks(e) {
    
    document.querySelector('#sort').addEventListener('click', function(e) {
      console.log("clicked")
      clearDivParks()
      fetch('http://localhost:3000/parks/')
      .then(resp => resp.json())
      .then(parks => {
        parks.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); 
          var nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        const listPanel = document.querySelector('#list-panel')
        
        })
        
      })
      }

  function clearDivParks() {
    //adventure conatiner is cleared by removing first child
    let element = document.querySelector("#list-panel")
    while (element.firstChild) { 
      element.removeChild(element.firstChild)
    }
  }


    function fetchParks() {
    // fetches all parks from index function in parks controller (rails)
    fetch('http://localhost:3000/parks/')
    //passed through show method
    //this returns a promise. promise is resolved then the json is extracted from the reponse
      .then(resp => resp.json())
      .then(parks => {
        //parks was originally console logged for dev purposes, parks is passed in as argument 
        //to renderParks function
        console.log(parks)
        renderParks(parks)
      }
      )
  }


  function renderParks(parks) {
    //takes all parks and runs them through forEach function to render each individual park
      parks.forEach(park => {
        renderPark(park)
      }
      )
    }


  function renderPark(park) {
    //creates li for each pak and appends each singlePark to that dom element
    
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
    //adds listener to each park li 
    parkUl.addEventListener('click', function(event) {
      fetchParkDetails(event.target)
    }
    )
  }

  
  
  function fetchParkDetails(singlePark) {
    //once clicked, ID is added to URL and fetched from show function in parks controller
    //passed through index method
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
    //If a previous park details has been clicked, div is cleared. 
    //Elements are created for each piece of 
    //data returned from fetch requests. Then form is rendered for 
    //adventure to be input
    
    clearDiv();
    
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
    //adventure conatiner is cleared by removing first child
    let element = document.getElementById("adventures-container")
    while (element.firstChild) { 
      element.removeChild(element.firstChild)
    }
  }
  
  
  
  function renderForm() { 
    //form is rendered to input adventure

    const advForm = document.createElement("form")
    advForm.setAttribute("id", "adventureForm")
    
    const dateInput = document.createElement("input")
    dateInput.setAttribute('type', "date")
    dateInput.setAttribute('placeholder', "YYYY/MM/DD")
    
    const snippetInput = document.createElement("input")
    snippetInput.setAttribute('type', 'string')
    snippetInput.setAttribute('placeholder', "How was it?")
    
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
    //listener attached to submit button on adventure form.
    //prevent default used to keep page from refreshing
    
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault()
      postAdventure(submitBtn.parentNode[0].value, submitBtn.parentNode[1].value, submitBtn.parentNode[2].value)
      submitBtn.parentElement.reset()
    }
    )
  }


  function postAdventure(date, snippet, rating) {
    //adventure is posted to database through create method in adventures controller

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

    //elements created to render each data point returned
    //advLi created to host adventure list
    //ul of adventures attached to list
    
    console.log(data)

    const adv = document.getElementById('advList')
    const advDate = document.createElement('h2')
    const advSnippet = document.createElement('h3')
    const advRating = document.createElement('h2')
    
    const advLi = document.createElement('ul')
    advLi.id = data.id

    advDate.textContent = "Date of adventure: " + data.date
    advSnippet.textContent = data.snippet
    advRating.textContent = "Your rating: " + data.rating + "/10"
    
    
    advLi.appendChild(advDate)
    advLi.appendChild(advSnippet)
    advLi.appendChild(advRating)

    const deleteBtn = document.createElement('button')
    //delete button appended to each adventure, event attached for later use
    deleteBtn.textContent = "Delete"
    advLi.appendChild(deleteBtn)
    //added event listener inline in function instead of making seperate function like done above
    deleteBtn.addEventListener("click", function(e) {
      deleteAdventure()
    })

    adv.appendChild(advLi)
    
    
    }


      function deleteAdventure() {
        //currentAdvId is attached to URL, ran through delete function in adventures controller
        //sets innerHTML of ul to an empty string, thus deleting it from visibility
        
        let adventureObj = {
        method: "DELETE",
        headers: {"Content-Type": "application/json",
        "Accept": "application/json"}
        }
        
        fetch(`http://localhost:3000/adventures/${currentAdvId}`, adventureObj)
        //passed through destroy controller
          .then(resp => resp.json())
          .then(() => {
            let ul = document.getElementById(`${currentAdvId}`)
            ul.innerHTML = ""
            
          })
        }


