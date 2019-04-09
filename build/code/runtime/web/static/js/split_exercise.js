
function check1()
{
		var array1_crct = ["4", "5", "1", "2"];
		var array2_crct = ["3", "8", "7", "2"];
		var array1 = document.getElementById('arr1').value;
		var array1 = array1.trim().split(" ");
		var array2 = document.getElementById('arr2').value;
		var array2 = array2.trim().split(" ");
		if(array1_crct.length != array1.length || array2_crct.length != array2.length)
		{
			mark_incorrect('correction1');
			return;
		}
		for(var i = 0; i < array1_crct.length; i++)
		{
			if(array1_crct[i] != array1[i])
			{
				mark_incorrect('correction1');
				return;
			}
		}
		for(var i = 0; i < array2_crct.length; i++)
		{
			if(array2_crct[i] != array2[i])
			{
				mark_incorrect('correction1');
				return;
			}
		}
		mark_correct('correction1');
		return;
}

function check2()
{
		var array1_crct = ["1", "4", "3"];
		var array2_crct = ["2", "7"];
		var array3_crct = ["1", "4"];
		var array4_crct = ["3", "2", "7"];
		var array1=document.getElementById('arr3').value;
		var array1=array1.trim().split(" ");
		var array2=document.getElementById('arr4').value;
		var array2=array2.trim().split(" ");
		console.log(array1,array2);
		var flag1 = 0;
		var flag2 = 0;
		if(array1_crct.length != array1.length || array2_crct.length != array2.length)
		{
			flag1 = 1;
		}
		if(flag1 != 1)
		{
			for(var i = 0; i < array1_crct.length; i++)
			{
				if(array1_crct[i] != array1[i])
				{
					flag1 = 1;
				}
			}
			for(var i = 0; i < array2_crct.length; i++)
			{
				if(array2_crct[i] != array2[i])
				{
					flag1 = 1;
				}
			}
		}
		if(array3_crct.length != array1.length || array4_crct.length != array2.length)
		{
			flag2 = 1;
		}
		if(flag2 != 1)
		{
			for(var i = 0; i < array3_crct.length; i++)
			{
				if(array3_crct[i] != array1[i])
				{
					flag2 = 1;
				}
			}
			for(var i = 0; i < array2_crct.length; i++)
			{
				if(array4_crct[i] != array2[i])
				{
					flag2 = 1;
				}
			}
		}
		if(flag1 == 1 && flag2 == 1)
		{
			mark_incorrect('correction2');
			return;
		}
		mark_correct('correction2');
		return;
}

function mark_correct(id)
{
	var div_element = document.getElementById(id);
	div_element.style.color = 'green';
	var element = "";
	element += "Correct ! &#10003;";
	div_element.innerHTML = element;
	return;
}

function mark_incorrect(id)
{
	var div_element = document.getElementById(id);
	div_element.style.color = 'red';
	var element = "";
	element += "Wrong ! &#10007;";
	div_element.innerHTML = element;
	return;
}
