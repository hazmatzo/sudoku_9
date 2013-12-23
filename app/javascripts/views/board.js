var cells = new Backbone.Collection(
  [{value: 7}], {model: Cell}
  );

  //TODO are we properly building this collection?
//TODO do we need a cellsListView??

var TodoListView = Backbone.View.extend({});
var todoListView = new TodoListView({collection: todoList});

render: function(){
  this.collection.forEach(addOne);
}

