// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const room = new Schema({
//   title:
//   {
//       type : String,
//       required : true
//   },
//   price:
//   {
//       type:String,
//       required:true
//   },
//   description:
//   {
//       type:String,
//       required:true
//   },
//   location:
//   {
//     type:String,
//     required:true
//   }
  
// });


// const roomModel = mongoose.model('room', room);

// module.exports = roomModel;







const rooms=
{

fakeDB:[],
init()
{
    
     this.fakeDB.push({ // 0
        id:3,
        image: `images/room3.jpg`,
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
        id:2,
        image: `images/room2.jpg`,
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
        id:1,
        image: `images/room1.jpg`,
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
        id:4,
        image: `images/room4.png`,
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
    this.fakeDB.push({ // 0
        id:5,
        image: `images/room5.jpg`,
        name: `Elizabeth 40m2`,
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
        id:6,
        image: `images/room6.jpg`,
        name: `Apt 70m2 Saint Micheal`,
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
getAllRooms()
{
return this.fakeDB;
}

}
rooms.init();
module.exports=rooms;
