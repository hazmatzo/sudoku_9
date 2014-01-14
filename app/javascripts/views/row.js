Sudoku.View.Row = Backbone.View.extend({
  template: function(){
    return $('#row-template').text();
  },

  className: 'row',

  render: function(){
    this.$el.html(Mustache.render(this.template()));
    this.collection.each(this.renderCell, this);
    return this;
  },

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    cell.render();
    this.$('.last-unit').append(cell.el);
  }
});