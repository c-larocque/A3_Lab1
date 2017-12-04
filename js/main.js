(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var  carImages = document.querySelectorAll('.data-ref'),
        theModel = document.querySelector('.modelName'),
        thePrice = document.querySelector('.priceInfo'),
        theDetails = document.querySelector('.modelDetails');
  const httpRequest = new XMLHttpRequest ();

  function switchModels() {
    // make an AJAX call to the DB; handle errors first
    if (!httpRequest) {
      alert('giving up... your browser sucks');
      return false;
    }

    httpRequest.onreadystatechange = processRequest;
    httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
    httpRequest.send();
  }

  function processRequest() {
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { // 200 means everything is awesome
        //debugger;
        let data = JSON.parse(httpRequest.responseText);

        processResult(data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }



    function processResult(data) {
      // destructuring assignment - new for ES6
      const { modelName, pricing, modelDetails } = data;
       //debugger;

      theModel.textContent = modelName;
      thePrice.innerHTML = pricing;
      theDetails.textContent = modelDetails;

      //let model = document.querySelector('.modelName').textContent = modelName;
      //let price = document.querySelector('.priceInfo').innerHTML = pricing;
      //let desc = document.querySelector('.modelDetails').textContent = modelDetails;

      carImages.forEach(function(image, index){
        image.classList.add('nonActive');
      });
      // this is a template string constructor - look it up!
      document.querySelector(`#${data.model}`).classList.remove('nonActive');
    }

    carImages.forEach(function(image, index){
      //add an event handler to each image
      image.addEventListener('click', switchModels, false);
    });

    //switchModels.call(document.querySelector('#F55'));

})();
