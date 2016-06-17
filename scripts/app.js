(function() {
  'use strict';
  
  var app ={
    isLoading: false,
    visibleCards: {},
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.add-dialog-container'),
    editDialog: document.querySelector('.edit-dialog-container')
  };
  
  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
  
  //Refresh button
  document.getElementById('butRefresh').addEventListener('click', function() {
    //Refresh all contractions
    //app.updateContractions();
  });
  
  //Add a contraction
  document.getElementById('butFABContractions').addEventListener('click',function() {
    //Start timer and bring up add contraction dialog
    //app.toggleAddDialog(true);
  });
  
  //Edit a contraction
  document.getElementById('contractionbody').addEventListener('click',function() {
    //Edit a timer
    //app.toggleEditDialog(true);
  });
  
  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleAddDialog(false);
  });
  
  document.getElementById('butEditCancel').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleEditDialog(false);
  });
  
  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/
  
  // Toggles the visibility of the add new contraction dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('add-dialog-container--visible');
    } else {
      app.addDialog.classList.remove('add-dialog-container--visible');
    }
  };
  
  // Toggles the visibility of the edit contraction dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('edit-dialog-container--visible');
    } else {
      app.addDialog.classList.remove('edit-dialog-container--visible');
    }
  };
  
  
})();