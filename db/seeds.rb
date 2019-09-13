Park.delete_all
Hiker.delete_all
Adventure.delete_all


yosemite = Park.create(name: "Yosemite National Park", state: "California", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jZ1nBTZWfIiXPsnn0ZeS5C7VxOvVGlE1sld8W2N9NRCmu8sJ")
grand_canyon = Park.create(name: "The Grand Canyon", state: "Arizona", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_Djh58Qjvx4RHXJzfqVh5fJCdii42a_sWLk7GowQg4VnYAN1")
    lake_tahoe = Park.create(name: "Lake Tahoe", state: "Nevada", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO04gL7Zt4CmVXS1VeodihUN8urL1368Xp24AlBlK_8Z_cBXT5ZQ")
    jackson_hole = Park.create(name: "Jackson Hole", state: "Wyoming", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLFxKLlpKyV5kJUb7rEq3_2Ch6Oq3IIDzqOJMRtr2_WgdS7_D1g")
acadia = Park.create(name: "Acadia National Park", state: "Maine", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56sbEY8ciAJYmpUTWTAIIJIlbNOUblvGkl51GycxyFE5oLLphJg")
chugach = Park.create(name: "Chugach State Park", state: "Alaska", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AtYNL6YzmEnHLq-JEv8ThOo3OobKBOhAw8Th3J1-Lguu4xjb")
telluride = Park.create(name: "Telluride", state: "Colorado", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJhZNMv4V-TM5QLH5ymY9mhPrnPmWnie8Fe-joxoF7Sryw9BlrQ")
adirondack = Park.create(name: "Adirondack Park", state: "New York", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0GtzDJU0YrOA3EtuEZ7f6UQKILmUiO-qzvcM3Z5CtWD5YGE47g")
tallulah = Park.create(name: "Tallulah Gorge", state: "Georgia", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8f5Rsai7HfshWR0g7kAkn7Q_wNdHWJF2bnMyGe8oPK2nQkf_eOA")
glacier = Park.create(name: "Glacier National Park", state: "Montana", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1xu5GOTrOfRIg3mK3euyqjc07J-b5t2cQ54Trdlq-Wmtz_YDcA")

hiker1 = Hiker.create(name: "Ron")
hiker2 = Hiker.create(name: "Cathy")
hiker3 = Hiker.create(name: "Mike")
hiker4 = Hiker.create(name: "Cheryl")

