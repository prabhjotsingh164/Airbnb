const allRooms = [
    { // 0
        id:1,
        image: `./images/room1.jpg`,
        name: `The Garden Quarter`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`
        

    }, {

        // 1
        id:2,
        image: `./images/room2.jpg`,
        name: `La Salentina`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `30`
        

    }, {

        // 2
        id:3,
        image: `./images/room3.jpg`,
        name: `Private 5 Star`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`

    }
    , {

        // 3
        id:4,
        image: `./images/room4.png`,
        name: `Hidden Gem of Toronto`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`

    }, {

        // 4
        id:5,
        image: `./images/room5.jpg`,
        name: `Elizabeth 40m2`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`
    }
    , {

        // 5
        id:6,
        image: `./images/room6.jpg`,
        name: `Apt 70m2 Saint Micheal`,
        guests:`2`,
        bedroom:`1`,
        number_of_beds:`1`,
        bathroom:`1`,
        kitchen:`Kitchen`,
        wifi:`Wifi`,
        parking:`Free Parking`,
        price: `20`

    }];
    

    function getRoomsAsHtmlString(room) {
        return `
        <article class="room">
        <img src="${room.image}" alt="" id="roomImage"> 
        <p id="roomTitle">${room.name}</p>
        <p id="roomDescription">${room.guests} guests - ${room.bedroom} bedroom - ${room.number_of_beds} bed - ${room.bathroom} bathroom - ${room.kitchen} - ${room.wifi} - ${room.parking}</p>
        <p id="roomPrice">Price:<strong>$${room.price}</strong> per night</p></strong> 
        
        </article>
    `;
    }
    document.getElementById('rooms').innerHTML = allRooms.map(getRoomsAsHtmlString).join('\n');
    
    
   