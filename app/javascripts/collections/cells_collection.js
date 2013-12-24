Sudoku.Collection.Cells = Backbone.Collection({model: cellModel});

var cellsCollection = new Sudoku.Collection.Cells(
  {value: 7},
  {value: 8},
  {value: 9}
);
/* To do: Need to add values, cells, etc. As was learned yesterday, just
by putting a hash with attributes, because the model is already specified,
the collection instance automatically puts those attributes on an object
of the base model specified. */