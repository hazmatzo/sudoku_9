describe("CellData, unit", function(){
  var cellData;

  it("returns an object that holds attributes", function(){
    cellData = new CellData(1);
    expect(cellData.attributes().id).toBe(1);
  });

  describe("row", function(){
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

  describe("column", function(){
    it("calculates a column value for the first cell", function(){
      cellData = new CellData(0);
      expect(cellData.attributes().column).toEqual(1);
    });

    it("calculates a column value for the second cell", function(){
      cellData = new CellData(1);
      expect(cellData.attributes().column).toEqual(2);
    });

    it("calculates a column value for the 73rd cell", function(){
      cellData = new CellData(72);
      expect(cellData.attributes().column).toEqual(1);
    });
  });

  describe("group", function(){
    it("calculates a group value for the 21st cell", function(){
      cellData = new CellData(20);
      expect(cellData.attributes().group).toEqual(1);
    });

    it("calculates a group value for the 22nd cell", function(){
      cellData = new CellData(21);
      expect(cellData.attributes().group).toEqual(2);
    });

    it("calculates a group value for the 30th cell", function(){
      cellData = new CellData(29);
      expect(cellData.attributes().group).toEqual(4);
    });

    it("calculates a group value for the 31st cell", function(){
      cellData = new CellData(30);
      //groupRow 2, groupColumn 1, group 4
      expect(cellData.attributes().group).toEqual(5);
    });
  });
});