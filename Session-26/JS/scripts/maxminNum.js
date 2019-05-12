let nums=[];
let maxNum = 10;

function addNumber()
{
    let numValue = document.getElementById("number").value;
    if( nums.length < maxNum && numValue != "" )
        nums[nums.length] = numValue;
    showNumbers();
}

function deleteNumber()
{
    if( nums.length > 0 )
        nums.length--;
    showNumbers();
}

function showNumbers()
{
    document.getElementById("numbers").innerHTML = "<b>Numbers : </b>";
    for(let i = 0; i < nums.length; i++)
    {
        document.getElementById("numbers").innerHTML += "<b> N["+i+"] = "+nums[i]+" </b>";
        if( i != nums.length - 1 )
            document.getElementById("numbers").innerHTML += " ,";
    }
}

function maxminNumber()
{
    let maxNum, minNum;
    let maxIndex, minIndex;
  
    if(nums.length > 0)
    {
        maxNum=nums[0];
        maxIndex=0;
        minNum=nums[0];
        minIndex=0;
        for(let i = 0; i < nums.length; i++)
        {
            if( parseInt(nums[i]) > parseInt(maxNum) ) 
            {   
                maxNum = nums[i];
                maxIndex = i; 
            }
            if( parseInt(nums[i]) < parseInt(minNum) ) 
            {   
                minNum = nums[i];
                minIndex = i; 
            }
        }
        document.getElementById("maxminNum").innerHTML = "<b>Max Number : N["+maxIndex+"] = "+maxNum+"<br><br>"+
                                                      "Min Number : N["+minIndex+"] = "+minNum+"</b>";
    }
    else
    {
        document.getElementById("maxminNum").innerHTML = "<b>Max Number :  </b>";
    }
}
