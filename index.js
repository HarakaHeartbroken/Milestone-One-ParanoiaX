
const pc = newPlayableCharacter(100, 110)
move(newImage('assets/floor.png')).to(100, 100)


// create tile, newTile isn't defined for some reason?
// move(newTile("assets/floor.png")).to(100,100)


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
// move(newImage('assets/tree.png')).to(200, 450)
// move(newImage('assets/pillar.png')).to(350, 250)
// move(newImage('assets/pine-tree.png')).to(450, 350)
// move(newImage('assets/crate.png')).to(150, 350)
// move(newImage('assets/well.png')).to(500, 575)
// move(newItem('assets/sword.png')).to(500, 555)
// move(newItem('assets/shield.png')).to(165, 335)
// move(newItem('assets/staff.png')).to(600, 250)
