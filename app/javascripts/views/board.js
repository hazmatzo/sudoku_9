var Board = Backbone.View.extend({
  render: function(){
    this.$el.append(cells.render());
  },
});

$(document).ready(function(){
  new Board({el: $('.board')[0]}).render();
});

var cells = new Backbone.Collection(new Array(81 models), {model: Cell});

//new Cell({
//      model: new Backbone.Model({value: null})}

// this.collection.forEach(function(todoItem)) {
//  var todoView = new TodoView({model: todoItem});
//  this.$el.append(todoView.render().el);
//  });
// }

// this.collection.forEach(this.addOne, this)

// new Collection([models], [options])