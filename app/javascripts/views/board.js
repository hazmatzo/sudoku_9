var Board = Backbone.View.extend({
  render: function(){
    this.$el.append(); //TODO determine what to append
    // cells? collection of cells?
  },
});

$(document).ready(function(){
  new Board({el: $('.board')[0]}).render();
});

var cells = new Backbone.Collection([{value: 7}], {model: Cell}); //TODO are we properly building this collection?
//TODO do we need a cellsListView??