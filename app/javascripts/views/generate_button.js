Sudoku.View.GenerateButton = Backbone.View.extend({
  events: {
    "click #generateButton"   : "generateValidBoard" //generateValidBoard is while loop, relies on isFilledIn
  },

  initialize: function(options){
    this.parent = options.parent;
  },

  template: function(){
    return $('#generate-button').text();
  },

  className: 'button',

  render: function(){
    this.$el.append(Mustache.render(this.template()));
    $(this.parent).append(this.$el);
    return this;
  },
});