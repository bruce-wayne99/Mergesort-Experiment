
var count = 0;
var count1 = 0;
var count2 = 0;
var mergedarray = [];

function merge()
{
		var array1=document.getElementById('arr1').value;
		var array1=array1.trim().split(" ");
		var array2=document.getElementById('arr2').value;
		var array2=array2.trim().split(" ");
		var i = 0;
		if(count == array1.length + array2.length)
		{
				return;
		}
		if(count1 == array1.length)
		{
				mergedarray[count++] = array2[count2];
				count2++;
		}
		else if(count2 == array2.length)
		{
				mergedarray[count++] = array1[count1];
				count1++;
		}
		else if(array1[count1] <= array2[count2])
		{
				mergedarray[count++] = array1[count1];
				count1++;
		}
		else
		{
				mergedarray[count++] = array2[count2];
				count2++;
		}
		draw(array1, array2);
}

function draw(array1, array2)
{
		var table1 = document.getElementById('table1');
		var table2 = document.getElementById('table2');
		var table3 = document.getElementById('table3');
		table1.innerHTML = null;
		var temp = "<tr>";
		for(i = 0; i < array1.length; i++)
		{
			if(i != count1)
			{
				temp += "<td style='border: 2px solid black;background-color:pink;text-align:center'>" + array1[i] + "</td>";
			}
			if(i == count1)
			{
				temp += "<td style='border: 2px solid black;background-color:pink;color:red;text-align:center'>" + array1[i] + "</td>";
			}
		}
		temp += "</tr>";
		table1.innerHTML = temp;
		table2.innerHTML = null;
		temp = "<tr>";
		for(i = 0; i < array2.length; i++)
		{
			if(i != count2)
			{
				temp += "<td style='border: 2px solid black;background-color:pink;text-align:center'>" + array2[i] + "</td>";
			}
			if(i == count2)
			{
				temp += "<td style='border: 2px solid black;background-color:pink;color:red;text-align:center'>" + array2[i] + "</td>";
			}
		}
		temp += "</tr>";
		table2.innerHTML = temp;
		table3.innerHTML = null;
		temp = "<tr>";
		for(i = 0; i < mergedarray.length; i++)
		{
			temp += "<td style='border: 2px solid black;background-color:yellow;text-align:center'>" + mergedarray[i] + "</td>";
		}
		temp += "</tr>";
		table3.innerHTML = temp;
}

function reset()
{
		var table1 = document.getElementById('table1');
		var table2 = document.getElementById('table2');
		var table3 = document.getElementById('table3');
		var arr1 = document.getElementById('arr1');
		var arr2 = document.getElementById('arr2');
		arr1.value = null;
		arr2.value = null;
		table1.innerHTML = null;
		table2.innerHTML = null;
		table3.innerHTML = null;
		count = 0;
		count1 = 0;
		count2 = 0;
		mergedarray = [];
}
