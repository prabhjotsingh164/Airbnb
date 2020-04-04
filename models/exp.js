const exps =
{

fakeDB:[],
init()
{
    
     this.fakeDB.push({ // 0
        id:1,
    image: `./images/exp1.jpg`,
    name: `Handmade Pasta with Grandma`,
    place: `Toronto`,
    rating:`4.99`,
    number_of_reviews: `1037`
        

    });

    this.fakeDB.push({ // 0
        id:2,
        image: `./images/exp2.jpg`,
        name: `Tastes and Traditions of Jewish Montreal`,
        place: `Montreal`,
        rating:`4.97`,
        number_of_reviews: `537`
    });

    this.fakeDB.push({ // 0
        id:3,
        image: `./images/exp3.jpg`,
        name: `2Day Alongquin Group Camping adventure`,
        place: `Toronto`,
        rating:`5.0`,
        number_of_reviews: `250`        

    });
    this.fakeDB.push({ // 0
        id:4,
        image: `./images/exp4.jpg`,
        name: `Explore Niagra Region and falls`,
        place: `Toronto`,
        rating:`5.0`,
        number_of_reviews: `880`
    });
    
},
getAllExps()
{
return this.fakeDB;
}

}
exps.init();
module.exports=exps;