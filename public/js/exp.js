
// Get the modal
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');


function validateForm() {
    var x = document.forms["myForm"]["uname"].value;
    var x1 = document.getElementById("psw").value;
    
    if (x == "" ) {
      alert("Name must be filled out");
      return false;
    }
    if(x1 =="")
    {
        alert("Password must be filled out");
        return false;
    }
    if(x1.length<8)
    {
        alert("Password must be atleast 8 characters");
        return false;

    }
    
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


const exp=[
    {
    id:1,
    image: `./images/exp1.jpg`,
    name: `Handmade Pasta with Grandma`,
    place: `Toronto`,
    rating:`4.99`,
    number_of_reviews: `1037`
    },
    {
        id:2,
        image: `./images/exp2.jpg`,
        name: `Tastes and Traditions of Jewish Montreal`,
        place: `Montreal`,
        rating:`4.97`,
        number_of_reviews: `537`
        },
        {
            id:3,
            image: `./images/exp3.jpg`,
            name: `2Day Alongquin Group Camping adventure`,
            place: `Toronto`,
            rating:`5.0`,
            number_of_reviews: `250`
            },
            {
                id:4,
                image: `./images/exp4.jpg`,
                name: `Explore Niagra Region and falls`,
                place: `Toronto`,
                rating:`5.0`,
                number_of_reviews: `880`
                }
];

function getExpAsHtmlString(exp) {
    return `
    <article class="exp">
    <img src="${exp.image}" alt="" id="expImage"> 
    <p id="expTitle">${exp.name}</p>
    <p id="expDescription">${exp.place}</p>
    <p id="expPrice">*<strong>${exp.rating}</strong>(${exp.number_of_reviews})</p></strong> 
    
    </article>
`;
}
document.getElementById('exp').innerHTML = exp.map(getExpAsHtmlString).join('\n');