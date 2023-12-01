var httpReq= new XMLHttpRequest();
var posts=[];

function getMeals(category)
{
    httpReq.open("Get", `https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpReq.send();
    
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState==4){
            posts=JSON.parse(httpReq.response).recipes;
        console.log(posts);
        printData();
        }
        
    }
}


function printData()
{
    var data="";

    for(var i=0; i<posts.length; i++)
    {
        data +=
        `  <div class="col-md-3">
              <div class="card" style="height:360px;">
                 <img src="${posts[i].image_url==null?'assets/img/meal.jpg':posts[i].image_url}" class="card-img-top img-fluid" style="height:200px" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${posts[i].title}</h5>
                   <a href="details.html?rId=${posts[i].recipe_id}" class="btn load-more position-absolute mb-3 bottom-0 text-capitalize">read more</a>
                 </div>
              </div>

         </div>` 
        
        ;
    }

    document.getElementById("postSection").innerHTML=data;
}

var all_Links = document.querySelectorAll(".nav-link");
for (var i=0; i<all_Links.length; i++)
{
    all_Links[i].addEventListener('click', function(e)
    {
        getMeals(e.target.innerHTML);
        console.log(e.target.innerHTML);
    })
}

getMeals("pizza");
// <h2>${posts[i].title}</h2>
// <img src="${posts[i].image_url}" class="img-fluid" style="height: 200px;"/>