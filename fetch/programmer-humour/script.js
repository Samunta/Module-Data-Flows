
async function fetchLatestComic() {
    try {
      const response = await fetch('https://xkcd.now.sh/?comic=latest'); // fetch API
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); //throw error if response is not ok
      }
      const data = await response.json();
      console.log(data); // log the received data
  
      const imgElement = document.createElement('img'); //create img element
      imgElement.src = data.img;
      imgElement.alt = data.alt; // use comic alt text for accessibility
  
      const container = document.getElementById('comic-container');
      container.appendChild(imgElement); // append image to container
    } catch (error) {
      console.error('Failed to fetch comic:', error); // error handling
      const container = document.getElementById('comic-container');
      container.textContent = 'Oops! Could not load the comic. 😿'; //  show error message to user
    }
  }
  
  //  call the function
  fetchLatestComic();