Sudoku.View.Cell = Backbone.View.extend({
  render: function(){
    this.$el.append('<div class="cell">' + this.model.get('value') + '</div>');
  }
});
/* The above may be exclusive with the mustache idea. Unsure.
I think previous iterations of this were working, but not this one.*/
/* To do: investigate when this did work and why. */

// var cellView = new Sudoku.View.Cell({model: cellModel});
/* This is correct. It is an instance of the model,
not referencing the model class itself. */