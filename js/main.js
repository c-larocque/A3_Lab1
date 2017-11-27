(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var  carImages = document.querySelectorAll('.data-ref'),
        theModel = document.querySelector('.modelName'),
        thePrice = document.querySelector('.priceInfo'),
        theDetails = document.querySelector('.modelDetails');

    function switchModels() {
      //debugger;
      let modelContent = carData[this.id];

      theModel.firstChild.nodeValue = modelContent.model;
      thePrice.firstChild.nodeValue = modelContent.price;
      theDetails.firstChild.nodeValue = modelContent.details;

      carImages.forEach(function(image, index){
        image.classList.add("nonActive");
      });

      this.classList.remove("nonActive");
    }

    carImages.forEach(function(image, index){
      //add an event handler to each image
      image.addEventListener('click', switchModels, false);
    });

    switchModels.call(document.querySelector('#F55'));

})();
