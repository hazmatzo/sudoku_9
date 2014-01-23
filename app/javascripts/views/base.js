Sudoku.View.Base = Backbone.View.extend({
  //as soon as the code loads into the page, it is evaluated
  template: function(){
    return $(this.templateId).text();
  },

  viewData: function(){
    //implement if needed, here so it doesn't go crazy
  },

  render: function(){
    //template pattern
    this.$el.html(
      Mustache.render(this.template(), this.viewData())
    );
    return this;
  }

  // events: function(){
  //   //return a hash of the events here
  // },
});

