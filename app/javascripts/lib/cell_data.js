var CellData = function(n) {
  this.id = n;
  this.initialize();
};

_.extend(CellData.prototype, {
  initialize: function() {
    this.value = "B";
    this.row = this.calculateRow();
  },

  calculateRow: function(){
    return (Math.floor(this.id / 9) + 1);
  },

  attributes: function() {
    return {value: this.value, id: this.id, row: this.row};
  }
});