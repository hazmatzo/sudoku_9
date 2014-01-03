Sudoku.View.Cell = Backbone.View.extend({
  template: function(){
    return $('#template').html();
  },

  initialize: function(){
    this.setElement( this.template() );
    this.render();
  },

  render: function(){
    this.$el.html(this.template().innerHTML);
    return this;
  }
});