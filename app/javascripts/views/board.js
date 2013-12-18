var Board = Backbone.View.extend({
  el: '.board',

  render: function(){
    this.$el.append("this is not a board, but there are no numbers");
  },
});

$(document).ready(function(){
  new Board().render();
});
