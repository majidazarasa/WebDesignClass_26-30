var modal = document.getElementById("id01");

function login()
{
    modal.style.display = "block";
}
function closeLoginPage()
{
    modal.style.display = "none";
}
window.onclick = function(event)
{
    if(event.target == modal){
        modal.style.display='none';
    }
}