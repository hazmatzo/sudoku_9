var Board = Backbone.View.extend({
  render: function(){
    this.$el.append("this is not a board, but there are no numbers");
  },
});

$(document).ready(function(){
  new Board({el: $('.board')[0]}).render();
});
