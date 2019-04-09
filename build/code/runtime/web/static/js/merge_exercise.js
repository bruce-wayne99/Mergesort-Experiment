
function check()
{
	ans = ["1", "1", "2", "3", "4", "4", "5", "6", "7", "7"];
	var array = document.getElementById('arr').value;
	array = array.trim().split(" ");
	if(ans.length != array.length)
	{
		mark_incorrect('correction');
		return;
	}
	for(var i = 0; i < ans.length; i++)
	{
		if(ans[i] != array[i])
		{
			mark_incorrect('correction');
			return;
		}
	}
	mark_correct('correction');
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
