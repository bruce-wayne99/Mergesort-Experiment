
var div_element = document.getElementById('input-graph');
var string = "";
var py = 270;
var px = 1000;
var dx = 50;
var dy = 100;

function generateInputGraph()
{
	drawGraph();
	div_element.innerHTML = string;
	drawEdges();
}

function drawGraph()
{
	addInputTags();
	addCanvasTags();
}

function addInputTags()
{
  var x = 886.4833374023438;
  var y = 218.1999969482422;
  addElement('input1', '8 7 6 5 4 3 2 1', 200, 1130-x, 240-y, 'bool1', true);
  addElement('input2', '', 100, 1020-x, 340-y, 'bool2');
  addElement('input3', '', 100, 1330-x, 340-y, 'bool3');
  addElement('input4', '', 80, 940-x, 440-y, 'bool4');
  addElement('input5', '', 80, 1110-x, 440-y, 'bool5');
  addElement('input6', '', 80, 1260-x, 440-y, 'bool6');
  addElement('input7', '', 80, 1420-x, 440-y, 'bool7');
  addElement('input8', '', 40, 920-x, 540-y, 'bool8');
  addElement('input9', '', 40, 1000-x, 540-y, 'bool9');
  addElement('input10', '', 40, 1090-x, 540-y, 'bool10');
  addElement('input11', '', 40, 1170-x, 540-y, 'bool11');
  addElement('input12', '', 40, 1240-x, 540-y, 'bool12');
  addElement('input13', '', 40, 1320-x, 540-y, 'bool13');
  addElement('input14', '', 40, 1400-x, 540-y, 'bool14');
  addElement('input15', '', 40, 1480-x, 540-y, 'bool15');
  addElement('input16', '', 80, 940-x, 640-y, 'bool16');
  addElement('input17', '', 80, 1100-x, 640-y, 'bool17');
  addElement('input18', '', 80, 1260-x, 640-y, 'bool18');
  addElement('input19', '', 80, 1420-x, 640-y, 'bool19');
  addElement('input20', '', 100, 1020-x, 740-y, 'bool20');
  addElement('input21', '', 100, 1330-x, 740-y, 'bool21');
addElement('input22', '', 200, 1130-x, 840-y, 'bool22');
}
function addCanvasTags()
{
  var x = 886.4833374023438;
  var y = 218.1999969482422;
  addCanvas('canvas1', 1020-x, 284-y, 66, 410);
  addCanvas('canvas2', 940-x, 384-y, 66, 250);
  addCanvas('canvas3', 1260-x, 384-y, 66, 250);
  addCanvas('canvas4', 920-x, 484-y, 66, 120);
  addCanvas('canvas5', 1090-x, 484-y, 66, 120);
  addCanvas('canvas6', 1240-x, 484-y, 66, 120);
  addCanvas('canvas7', 1400-x, 484-y, 66, 120);
  addCanvas('canvas16', 920-x, 584-y, 66, 120);
  addCanvas('canvas17', 1090-x, 584-y, 66, 120);
  addCanvas('canvas18', 1240-x, 584-y, 66, 120);
  addCanvas('canvas19', 1400-x, 584-y, 66, 120);
  addCanvas('canvas20', 940-x, 684-y, 66, 250);
  addCanvas('canvas21', 1260-x, 684-y, 66, 250);
  addCanvas('canvas22', 1020-x, 784-y, 66, 410);
}

function addElement(id, val, width, px, py, div_id, disable=false)
{
	if(disable == false)
	{
		var div_width = 20;
		var pos_left = px + width;
		string += '<input id="' + id + '" style="position:absolute;text-align:center;width:'
					+ width + 'px;' + 'left:' + px.toString()
				 	+ 'px;' + 'top:' + py.toString() + 'px;" value="' + val + '">';
		string += '<div id="' + div_id + '" style="position:absolute;text-align:center;width:'
					+ div_width.toString() + 'px;' + 'left:' + pos_left.toString() + 'px;top:' + py.toString() + 'px;"></div>';
	}
	else
	{
		string += '<input id="' + id + '" style="position:absolute;text-align:center;width:'
				    + width + 'px;' + 'left:' + px.toString()
				 	+ 'px;' + 'top:' + py.toString() + 'px;" value="' + val + '" disabled>';
	}
	return;
}
function addCanvas(id, px, py, height, width)
{
	string += '<canvas id="' + id + '" width="' + width.toString() + '" height="' + height.toString()
			   +'" style="position:absolute;left:' + px.toString() + 'px;' + 'top:' + py.toString()
			   + 'px;' + '"></canvas>';
	return;
}

function checkAnswer()
{
	var iscorrect = true;
	var ans_array = [
						["8", "7", "6", "5"],
						["4", "3", "2", "1"],
						["8", "7"], ["6", "5"],
						["4", "3"], ["2", "1"],
						["8"], ["7"], ["6"],
						["5"], ["4"], ["3"],
						["2"], ["1"], ["7", "8"],
						["5", "6"], ["3", "4"],
						["1", "2"],
						["5", "6", "7", "8"],
						["1", "2", "3", "4"],
						["1", "2", "3", "4", "5",
						 "6", "7", "8"]
					];
	var input_ids = [];
	for(var i = 2; i <= 22; i++)
	{
		var id = 'input' + i.toString();
		input_ids.push(document.getElementById(id));
	}
	console.log(input_ids);
	for(var i = 0; i < 21; i++)
	{
		var array = fetchInput(input_ids[i]);
		console.log(array, i + 1);
		if(checkEqual(array, ans_array[i]))
		{
			mark_correct(i + 2);
		}
		else
		{
			iscorrect = false;
			mark_incorrect(i + 2);
		}
	}
	if(iscorrect == false)
	{
		mark_final_incorrect();
	}
	if(iscorrect == true)
	{
		mark_final_correct();
	}
	return;
}

function fetchInput(element)
{
	var array = element.value;
	array = array.trim().split(" ");
	return array;
}

function checkEqual(array1, array2)
{
	if(array1.length != array2.length)
	{
		return false;
	}
	for(var i = 0; i < array1.length; i++)
	{
		if(array1[i] != array2[i])
		{
			return false;
		}
	}
	return true;
}

function mark_correct(idno)
{
	var id = 'bool' + idno.toString();
	console.log(id);
	var div_element = document.getElementById(id);
	div_element.style.color = 'green';
	var element = "";
	element += "<h4>&#10003;</h4>";
	div_element.innerHTML = element;
	return;
}
function mark_incorrect(idno)
{
	var id = 'bool' + idno.toString();
	console.log(id);
	var div_element = document.getElementById(id);
	div_element.style.color = 'red';
	var element = "";
	element += "<h4>&#10007;</h4>";
	div_element.innerHTML = element;
	return;
}

function mark_final_incorrect()
{
	var div_element = document.getElementById('final_ans');
	div_element.innerHTML = '<li class="list-group-item list-group-item-warning">' +
							'Sorry your answer is gone. Please try again!'
							 + '</li><br/>';
	div_element.innerHTML += '<button type="button" class="btn btn-success btn-lg" onclick="reset_graph()" style="position:absolute;left:30%">'
                			 + 'Try again!'
              				 + '</button>';

}
function mark_final_correct()
{
	var div_element = document.getElementById('final_ans');
	div_element.innerHTML = '<li class="list-group-item list-group-item-success">' +
							'Wonderful Job! You have learned MergeSort!!!!'
							 + '</li><br/>';
	div_element.innerHTML += '<a href="/8" class="btn btn-success btn-lg" style="display:inline;position:absolute;left:33%;">'
							 + 'Next' +
							 '</a>';
}

function drawEdges()
{
	canvasarray = [];
	for(var i = 1; i <= 7; i++)
	{
		canvasarray.push(document.getElementById('canvas' + i.toString()));
	}
	console.log(canvasarray);
	drawEdge(canvasarray[0], 205, 0, 50, 66);
	drawEdge(canvasarray[0], 205, 0, 360, 66);
	drawEdge(canvasarray[1], 125, 0, 40, 66);
	drawEdge(canvasarray[1], 125, 0, 210, 66);
	drawEdge(canvasarray[2], 125, 0, 40, 66);
	drawEdge(canvasarray[2], 125, 0, 210, 66);
	drawEdge(canvasarray[3], 60, 0, 20, 66);
	drawEdge(canvasarray[3], 60, 0, 100, 66);
	drawEdge(canvasarray[4], 60, 0, 20, 66);
	drawEdge(canvasarray[4], 60, 0, 100, 66);
	drawEdge(canvasarray[5], 60, 0, 20, 66);
	drawEdge(canvasarray[5], 60, 0, 100, 66);
	drawEdge(canvasarray[6], 60, 0, 20, 66);
	drawEdge(canvasarray[6], 60, 0, 100, 66);
	canvasarray = [];
	for(var i = 16; i <= 22; i++)
	{
		canvasarray.push(document.getElementById('canvas' + i.toString()));
	}
	drawEdge(canvasarray[0], 20, 0, 60, 66);
	drawEdge(canvasarray[0], 100, 0, 60, 66);
	drawEdge(canvasarray[1], 20, 0, 60, 66);
	drawEdge(canvasarray[1], 100, 0, 60, 66);
	drawEdge(canvasarray[2], 20, 0, 60, 66);
	drawEdge(canvasarray[2], 100, 0, 60, 66);
	drawEdge(canvasarray[3], 20, 0, 60, 66);
	drawEdge(canvasarray[3], 100, 0, 60, 66);
	drawEdge(canvasarray[4], 40, 0, 125, 66);
	drawEdge(canvasarray[4], 210, 0,125, 66);
	drawEdge(canvasarray[5], 40, 0, 125, 66);
	drawEdge(canvasarray[5], 210, 0,125, 66);
	drawEdge(canvasarray[6], 50, 0, 205, 66);
	drawEdge(canvasarray[6], 360, 0,205, 66);
}
function drawEdge(canvas, x0, y0, x, y)
{
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x, y);
	ctx.stroke();
	return;
}

function reset_graph()
{
	var div_element = document.getElementById('final_ans');
	div_element.innerHTML = "";
	for(var i = 2; i <= 22; i++)
	{
		var input_element = document.getElementById('input' + i.toString());
		var div_element = document.getElementById('bool' + i.toString());
		input_element.value = "";
		div_element.innerText = "";
		div_element.innerHTML = "";
	}
	return;
}
