Sudoku.View.GenerateButton = Backbone.View.extend({
  events: {
    "click #generateButton"   : "generateValidBoard" //generateValidBoard is while loop, relies on isFilledIn
  },

  initialize: function(options){
    this.parent = options.parent;
  },

  template: function(){
    return $('#generate-button').text(); //we use inheritance
  },

  className: 'button',

// TODO: Add 'generateValidBoard'

  render: function(){
    this.$el.append(Mustache.render(this.template())); //we use inheritance on the Mustache.render()
    $(this.parent).append(this.$el);
    return this;
  },
});

// (render('#generate-button'))

// Refactor template:

// template: function(thetemplate){
//   return $(thetemplate).text();
// }

// Mustache.render(this.template());