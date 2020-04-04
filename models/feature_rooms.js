const feature_rooms =
{

fakeDB:[],
init()
{
    
     this.fakeDB.push({ // 0
        id:1,
        image: `./images/featured_room1.jpg`,
        name: `The Garden Quarter`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`
        

    });

    this.fakeDB.push({ // 0
        id:2,
        image: `./images/featured_room2.jpg`,
        name: `La Salentina`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `30`

    });

    this.fakeDB.push({ // 0
        id:3,
        image: `./images/featured_room3.jpg`,
        name: `Private 5 Star`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`        

    });
    this.fakeDB.push({ // 0
        id:4,
        image: `./images/featured_room4.jpg`,
        name: `Hidden Gem of Toronto`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`
    });
    
},
getAllFeatureRooms()
{
return this.fakeDB;
}

}
feature_rooms.init();
module.exports=feature_rooms;