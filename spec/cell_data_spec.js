describe("CellData, unit", function(){
  var cellData;

  it("returns an object that holds attributes", function(){
    cellData = new CellData(1);
    expect(cellData.attributes().id).toBe(1);
  });

  it("calculates a row value for the first cell", function(){
    cellData = new CellData(0);
    expect(cellData.attributes().row).toEqual(1);
  });

  it("calculates a row value for the ninth cell", function(){
    cellData = new CellData(8);
    expect(cellData.attributes().row).toEqual(1);
  });

  it("calculates a row value for the tenth cell", function(){
    cellData = new CellData(9);
    expect(cellData.attributes().row).toEqual(2);
  });
});