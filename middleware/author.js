const isAdmin = (req,res,next)=>
{
    if(req.session.userInfo.type=="admin")
    {
        res.redirect("admin");
    }
    else
    {
        res.redirect("welcome")
    }
}
module.exports= isAdmin;