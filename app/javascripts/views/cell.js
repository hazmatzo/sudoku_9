Sudoku.View.Cell = Sudoku.View.Base.extend({
  className: 'cell unit size1of9',

  templateId: '#cell-template',

  viewData: function(){
    return this.model.toJSON();
  }
});


  // events: function(){
  //   var baseEvents = Sudoku.View.Base.prototype.events.call(this);
  //   baseEvents.blah = blah;
  //   return baseEvents;
  // },