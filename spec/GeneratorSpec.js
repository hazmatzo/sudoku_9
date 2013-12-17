describe( "Generator", function () {
  describe( "generate button", function () {
    it("generates a new board", function () {
      expect(Generate).toContain(/d+/)
    });
  });
});