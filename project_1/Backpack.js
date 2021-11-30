const Backpack = class {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthLeft,
    strapLengthRignt,
    lidOpen,
    dateAquired,
  ) {
    //  Define Properties
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthLeft,
      right: strapLengthRignt,
    };
    this.lidOpen = lidOpen;
    this.dateAquired = new Date(dateAquired);
    this.dateAquired.toDateString();
  }
  // Add methods like normal functions
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLenth(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let aquired = new Date(this.dateAquired);
    let elapsed = now - aquired;
    let daysSinceAquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAquired;
  }
};
export default Backpack;
