Sudoku.View.Row = Backbone.View.extend({
  template: function(){
    return $('#row-template').text();
  },

  render: function(){
    var cells = this.collection.each(this.renderCell, this);
    this.$el.html(Mustache.render(this.template(), cells));
    return this;
  },

  className: 'row',

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    cell.render();
    this.$el.append(cell.el);
  }
});