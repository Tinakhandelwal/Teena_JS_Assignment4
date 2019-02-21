var  temp_arr = [20,35,30,30,40];

/* Function to insert temp value */

function insert(temp)
{
    temp_arr.push(temp)
    console.log(temp_arr);
}insert(15);

/* Function to get maximum temp value*/
function get_max()
{
   var max = temp_arr[0];
    for(let i =0;i<temp_arr.length;i++)
    {
        if(temp_arr[i]>max)
        {
            max = temp_arr[i]
        }
    }
    return max;
}
/* Function to get minimum temp value*/
function get_min()
{
   var min = temp_arr[0];
    for(let i =0;i<temp_arr.length;i++)
    {
        if(temp_arr[i]<min)
        {
            min = temp_arr[i]
        }
    }
    return min;
}
/* Function to get mean of temperature*/
function get_mean()
{
    var sum =0;
    for(let i=0;i<temp_arr.length;i++)
    {
        sum+=temp_arr[i];
    }
    var mean_ans;
    mean_ans = sum/temp_arr.length;
    return mean_ans;
}
/* Function to get mode */
function get_mode(){
    
    var maxValue = 0, maxCount = 0;

   for (let i = 0; i <temp_arr.length; ++i) {

      let count1 = 0;
      
      for (let j = 0; j <temp_arr.length; ++j) {
         if (temp_arr[j] == temp_arr[i])
         ++count1;
      }
      
      if (count1 > maxCount) {
         maxCount = count1;
         maxValue = temp_arr[i];
      }
   }

   return maxValue;
}
console.log("Maximum value is...." +get_max());
console.log("Minimum value is..." +get_min());
console.log("Mean is..." +get_mean());
console.log("Mode is..." +get_mode());
