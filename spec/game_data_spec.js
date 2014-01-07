describe("gameData, unit", function(){

  it("creates a collection of 81 null values", function(){
    expect(gameData().collection.length).toBe(81);
  });
});