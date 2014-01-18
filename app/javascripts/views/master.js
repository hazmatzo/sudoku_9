Sudoku.View.Master = function(opts){
  console.log("collection?" + (opts.collection instanceof Backbone.Collection));
  console.log("model?" + (opts.model instanceof Backbone.Model));
  console.log("=========");
  this.collection = opts.collection;
  this.model = opts.model;
  Backbone.View.apply(this); //CIWK we don't even need to pass in the model here
};

_.extend(Sudoku.View.Master.prototype, Backbone.View.prototype, {

  template: function(templateId){
    return $(templateId).text();
  },

  render: function(){
    console.log("does this get ea?")
    this.$el.html(Mustache.render(this.template(this.templateId()))); // CIWK why don't we still need this.model.toJSON()?? MAGIC!!
    return this;
  }
});

Sudoku.View.Master.extend = Backbone.View.extend;
