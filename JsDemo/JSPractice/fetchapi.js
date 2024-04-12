const fetchUserInfo = async () =>{
    try{
    const response=await fetch('https://reqres.in/api/users?page=2');
    if(!response.ok){
        throw new Error('user data not found ...');
    }

    //parse json response :
    const userdata=await response.json(); //async step
    console.log(userdata);
    }
    catch(error){
        console.log("Error :", error);
    }
}   

//call the function
fetchUserInfo();