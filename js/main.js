(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var  carImages = document.querySelectorAll('.data-ref'),
        theModel = document.querySelector('.modelName'),
        thePrice = document.querySelector('.priceInfo'),
        theDetails = document.querySelector('.modelDetails');
  //const httpRequest = new XMLHttpRequest ();

  function switchModels() {
    const url = './includes/functions.php?carModel=' + this.id;

    // the fetch API uses new Javascript Promise API
    fetch(url) // do an AJAX call with fetch
      .then((resp) => resp.json()) // convert to JSON - resp can be whatever you want it to be
      .then(( { modelName, pricing, modelDetails, model }) => {
        theModel.textContent = modelName;
        thePrice.innerHTML = pricing;
        theDetails.textContent = modelDetails;

        carImages.forEach(function(image, index){
          image.classList.add('nonActive');
        });
        // this is a template string constructor - look it up!
        document.querySelector(`#${model}`).classList.remove('nonActive');
         }) // call the process function
      .catch(function(error) {
        console.log(error); // catch any error and report it to the console
      });

  }

    function processResult(data) {
      // destructuring assignment - new for ES6
      const { modelName, pricing, modelDetails } = data;
       //debugger;

      /*theModel.textContent = modelName;
      thePrice.innerHTML = pricing;
      theDetails.textContent = modelDetails;

      //let model = document.querySelector('.modelName').textContent = modelName;
      //let price = document.querySelector('.priceInfo').innerHTML = pricing;
      //let desc = document.querySelector('.modelDetails').textContent = modelDetails;

      carImages.forEach(function(image, index){
        image.classList.add('nonActive');
      });
      // this is a template string constructor - look it up!
      document.querySelector(`#${data.model}`).classList.remove('nonActive');*/
    }

    carImages.forEach(function(image, index){
      //add an event handler to each image
      image.addEventListener('click', switchModels, false);
    });

    //switchModels.call(document.querySelector('#F55'));

})();
