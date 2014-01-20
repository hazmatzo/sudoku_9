Sudoku.View.Base = Backbone.View.extend({

});

_.extend(Sudoku.View.Base.prototype, {

  template: function(){
    return $('#cell-template').text();
  }

});

// ------------------

// BACKBONE INHERITANCE WITH INSTANCE VARIABLES

Sudoku.View.Base = function(){
  Backbone.View.call(this, options);
  // Pulling behaviors from Backbone.View into this database
},

_.extend(Sudoku.View.Base.prototype, Backbone.View.prototype){

});

Sudoku.View.Base.extend = Backbone.View.extend;


