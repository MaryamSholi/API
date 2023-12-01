document.addEventListener("DOMContentLoaded", function() {
    const readId = new URLSearchParams(window.location.search);
    const id = readId.get('rId'); // Replace 'paramName' with the actual parameter name
    console.log(id);
    getRecipeId(id);
});

var details=[];

var httpRequest =new XMLHttpRequest();

function getRecipeId(recId)
{
    httpRequest.open("Get", `https://forkify-api.herokuapp.com/api/get?rId=${recId}`);
    httpRequest.send();
        
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState==4){
                details=JSON.parse(httpRequest.response).recipe;
            console.log(details);
            printDetails();
            }
            
        }
    
}


    function printDetails()
{
    var data="";

        data +=
            `     
                  <div class="col-md-6 p-5">
                  <img src="${details.image_url==null?'assets/img/meal.jpg':details.image_url}" class="card-img-top img-fluid"  alt="...">
                  </div>
                  <div class="col-md-6 p-5 mt-3">
                  <h2 class="mb-5 d-title">${details.title}<h2>
                  <p class="d-ingr">${details.ingredients} <p>
                  </div>
            `      
        ;
    

    document.getElementById("detailSection").innerHTML=data;
}