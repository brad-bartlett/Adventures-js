Park.delete_all
Hiker.delete_all
Adventure.delete_all


yosemite = Park.create(name: "Yosemite National Park", state: "California")
grand_canyon = Park.create(name: "The Grand Canyon", state: "Arizona")
lake_tahoe = Park.create(name: "Lake Tahoe", state: "Nevada")
jackson_hole = Park.create(name: "Jackson Hole", state: "Wyoming")
acadia = Park.create(name: "Acadia National Park", state: "Maine")
chugach = Park.create(name: "Chugach State Park", state: "Alaska")
telluride = Park.create(name: "Telluride", state: "Colorado")
adirondack = Park.create(name: "Adirondack Park", state: "New York")
tallulah = Park.create(name: "Tallulah Gorge", state: "Georgia")
glacier = Park.create(name: "Glacier National Park", state: "Montana")

hiker1 = Hiker.create(name: "Ron")

