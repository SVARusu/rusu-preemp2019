function fetchPerson(){

    fetch(`https://cors-anywhere.herokuapp.com/http://swapi.co/api/films`)
      .then( function(response){
        return response.json()
      })
      .then(function(data){
        console.log("data", data)
        data.results.forEach(element => {
          /* let ul = document.createElement('ul');
          let li = document.createElement('li');
          let a = document.createElement('a');
          let button = document.createElement('button')
          button.textContent = "More details"
          a.setAttribute('href', 'movieDetails.html'+ '?' + element.episode_id)
          
          
          a.appendChild(document.createTextNode(element.title));
          a.appendChild(button);
          li.appendChild(a);
          ul.appendChild(li);
          document.getElementById("characters").appendChild(ul); */
          console.log(element.episode_id);
          const html = `
            <div class="character">
              <div class="name">
                <ul>
                  <li>
                    <a href="movieDetails.html?${element.episode_id}">${element.title}</a>
                  </li>
                </ul>
              </div>
            </div>`
          
          document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
        });
        
      })
  }



  function details(){

    fetch(`https://cors-anywhere.herokuapp.com/http://swapi.co/api/films`)
      .then( function(response){
        return response.json()
      })
      .then(function(data){
        var thing = window.location.search;
        var half = thing.split("");
        console.log(half[1]);
        var ep = parseInt(half[1]);
        data.results.forEach(element => {
          if(element.episode_id === ep){
            console.log(element.title);
            const html = `
              <div class="character">
                <div class="name">
                  <h2>Movie title: </h2><p>${element.title}</p>
                  <h3>Release date: </h3><p>${element.release_date}</p>
                  <h3>Opening crawl: </h3><p>${element.opening_crawl}</p>
                  <h3>List of characters: </h3>
                </div>
              </div>`
            
            document.querySelector("#characters").insertAdjacentHTML('afterbegin', html);
            persons();
          }
          
        });
        
      })
  }

  function persons(){
    fetch(`https://cors-anywhere.herokuapp.com/https://swapi.co/api/people`)
    .then( function(response){
      return response.json()
    })
    .then(function(persons){
     
      console.log(persons);
      persons.results.forEach(async element => {
        //const url = fetch(element.homeworld);
        //const stuff = url.json();
        //console.log("url:" + stuff[1]);
        
        const html = `
          <ul>
            <li>
              <p>Name: ${element.name}, Gender: ${element.gender}, Home world: 
              ${await fetch(element.homeworld)
                .then(function(response){return response.json()})
                .then(function(data){return data.name})
              }</p>
            </li>
          </ul>
        `
        document.querySelector("#characters").insertAdjacentHTML('beforeend', html);
      });
    })
  }

