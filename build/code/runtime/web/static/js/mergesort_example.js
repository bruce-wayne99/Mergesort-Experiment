
function reset()
{
  g = null
  g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function() { return {}; });
  ans=[]
  fin=0
  visited=[]
  mymap=new Map()
  final=[]
  split_number = 1;
  document.getElementById('svg-canvas').innerHTML = null
  ul_element.innerHTML = null
  div_element.innerHTML = null
  split_elements = []
  merge_elements = []
}
function reset1()
{
  g = null
  g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function() { return {}; });
  ans=[]
  fin=0
  visited=[]
  mymap=new Map()
  final=[]
  split_number = 1;
  document.getElementById('svg-canvas').innerHTML = null
  document.getElementById('arr').value = null
  ul_element.innerHTML = null
  div_element.innerHTML = null
  split_elements = []
  merge_elements = []
}

// pane function for hiding or displaying the pane
var pane = function()
{
  var x = document.getElementsByClassName('bond');
  // it checks if the pane is hidden , and shows it if its hidden
  if(x[0].style.display == "none")
  {
     x[0].style.display = "block";
  }
  // it hides the displayed pane on clicking the pane button
  else
  {
    x[0].style.display = "none";
  }
};

function helper()
{
	// Array to be sorted
  reset();
	element.className = "list-group";
	split_number = 1;
	div_element.innerHTML = null
	var array=document.getElementById('arr').value
	var arr=array.trim().split(" ");
	var length = arr.length;
	var div=mergeSort(arr,0);
	drawedge();
	draw();
	compute(length-1);
}

function computeLogn(n)
{
	var logval = Math.log2(n);
	var ans = n*logval;
	var string = "<li><h6>We know that mergesort takes nlog<sub>2</sub>n computations which is<br/> <b>(" + n.toString() + ' x log<sub>2</sub>' +
					n.toString() + ")</b><br/></h6></li>";
		string += "<ul><li><b>(" + n.toString() + ' x ' + logval.toString() + ")</b> = <b>( " + ans.toString() + " )</b> = <b>" + Math.ceil(ans).toString() + " </li>";
		string += "</b><br/><li><h5 style='color:red'>Hence " + Math.ceil(ans).toString() + ' computations.</h5></li></ul>';
	return string;
}
function computeMerge()
{
	var string = "<li><h6>Merge Computation</h6></li>";
	string += "<ul>";
	var count = 0;
	for(var i = 0; i < merge_elements.length; i++)
	{
		string += '<li><h6 style="font-weight:bold">Merging arrays [';
		string += merge_elements[i][0].toString() + '] and [' + merge_elements[i][1].toString() + '] gives [' + merge_elements[i][2].toString() + ']';
		string += '<br/> => ' + merge_elements[i][2].length.toString() + ' computations<br/></li>';
		count += merge_elements[i][2].length;
	}
	string += '<li><h5 style="color:red">Total ' + count.toString() + ' computations.</li></ul>';
	return string;
}
function compute(length)
{
	var string = "";
	string += "<li><h6>From the graph we can observe that there are<b> " + length.toString() + " splits</b>.</h6></li>";
	string += "<li><h6>This is same as the calculated value <b>n-1</b> for the number of splits which is <b>" + length.toString() + "</b>.</h6></li>";
	string1 = computeMerge();
	string += string1;
	string1 = computeLogn(length + 1);
	string += string1;
	ul_element.innerHTML = string;
	return;
}

var g = new dagreD3.graphlib.Graph()
.setGraph({})
.setDefaultEdgeLabel(function() { return {}; });

// Set of global variables

var ans=[]
var fin=0
var visited=[]
var mymap=new Map()

//Merge sort function

// Global graph definition

var g = new dagreD3.graphlib.Graph()
.setGraph({})
.setDefaultEdgeLabel(function() { return {}; });

// Set of global variables
var split_number;
var split_elements = [];
var merge_elements = [];
var div_element = document.getElementById('svg-holder');
var ul_element = document.getElementById('computation-holder');
var element = document.getElementsByClassName('answer-holder');
element = element[0];
var ans=[]
var fin=0
var visited=[]
var mymap=new Map()
var final=[]

function mergeSort(arr,count)
{
    var lab=arr.toString();
	var string = "";
	string = findArrayString(arr);
    //Making a node in the graph for the current array string
	g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});

	//Variable for storing maximum count of the node
	fin=Math.max(fin,count)


	visited.push(count)

	//Maping which node number contains which string array
	mymap[count]=lab;

    //Base case
    if (arr.length < 2)
    {
      return arr;
    }

 	//Merge sort
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
    var temp=merge(mergeSort(left,2*count+1),mergeSort(right,2*count+2));

    return temp;

}

//Merge function of merge sort. Standard code which has a result array and temporarily element is copied to this and finally returned
function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
function findArrayString(arr)
{
	var string = "";
	string += arr[0].toString();
	for(var i = 1; i < arr.length; i++)
	{
		string += " " + arr[i].toString();
	}
	return string;
}

function draw()
{
	g.nodes().forEach(function(v)
	{
		 var node = g.node(v);
	  	// Round the corners of the nodes
	  	node.rx = node.ry = 5;
	})

	// Create the renderer
	var render = new dagreD3.render();

	// Set up an SVG group so that we can translate the final graph.
	var svg = d3.select("svg"),
	svgGroup = svg.append("g");

	// Run the renderer. This is what draws the final graph.
	render(d3.select("svg g"), g);
	// Center the graph
	var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
	svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
	svg.attr("height", g.graph().height + 40);
	addSplitElements();
}
function addSplitElements()
{
	div_element = document.getElementById('svg-holder');
	for(var i=0;i<split_elements.length;i++)
	{
		var string = "";
		node = split_elements[i][0];
		var x = node.x + 690;
		var y = node.y + 85;
		string += '<div style="position:absolute;color:red;font-weight:bold;left:' + x.toString() + 'px;top:' + y.toString() + 'px;">SPLIT-' + split_elements[i][1].toString() + '</div>';
		div_element.innerHTML += string;
	}
	return;
}

function drawedge()
{
	var count=fin+1;

	var row=parseInt((fin+2)/2);


	//Connecting nodes between split nodes.
	//Connecting already present nodes with their children i.e. 2*i+1 & 2*i+2

	for(i=0;i<=fin;i++)
	{

		if(visited.indexOf(i)!=-1 && visited.indexOf(2*i+1)!=-1 && visited.indexOf(2*i+2)!=-1 )
		{

			g.setEdge(i,2*i+1,{});
			g.setEdge(i,2*i+2,{});
			// addSplitElement(g.node(i), split_number);
			split_elements.push([g.node(i),split_number]);
			split_number++;
		}
  }

var mid=parseInt((fin)/2);

      //Temp array will have nodes at last,2nd last and 3rd last levels which will be merged manually

      var temparray=[]

// This loop is for constructing the nodes of the first level of merge from the last level of split

//Mid is the starting index of the first element of the last row

for(i=mid;i<=fin;i=i+2)
{
  // If the node in present

  if(visited.indexOf(i)!=-1)
  {
    var arr1=mymap[i];
    var arr2=mymap[i+1];
    //arr1 and arr2 contains both the neighboring strings obtained using map


    tarr1=arr1.split(",");
    tarr2=arr2.split(",");

    tarr1=tarr1.map(function(x){return parseInt(x)})
    tarr2=tarr2.map(function(x){return parseInt(x)})

    //tarr1 and tarr2 contains the final two neighbouring arrays


    var temp=merge(tarr1,tarr2);

                      var str=temp.toString();

                      //Str contains the array converted to commar separated strings.

                      //syntax for making a new node with id as count and label as str

                      // Count is continued from fin i.e 2^n
    var string = "";
    string = findArrayString(temp);
    g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});
    mymap[count]=str;
    //Made the node and mapped it to its corresponding count

    //This array will be used in the subsequent loops

    temparray.push(count);

    //Made edges to this node
    g.setEdge(i,count,{label:"O(" + arr1.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
    g.setEdge(i+1,count,{label:"O(" + arr2.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
    merge_elements.push([arr1.split(','),arr2.split(','),temp]);
    //Increment the count for thr next node
    count=count+1;

  }

}

	fin=mid;
	mid=(mid-1)/2;
	var curr=0
	//var final=[]
	//This loop sees if their is any node in the 2nd last level such that they are not merged with neighbour or have one merge less

	for(i=mid;i<fin;i+=2)
	{
		// If both the neighbours have not been mapped i.e. They have no children

		if(mymap[2*i+1]==null && mymap[2*i+2]==null && mymap[2*i+3]==null && mymap[2*i+4]==null )
		{
			var arr1=mymap[i];
			var arr2=mymap[i+1];
			tarr1=arr1.split("");
			tarr2=arr2.split("");
			tarr1=tarr1.map(function(x){return parseInt(x)})
			tarr2=tarr2.map(function(x){return parseInt(x)})


			var temp=merge(tarr1,tarr2);

			var str=temp.toString();
			var string = "";
			string = findArrayString(temp);
			g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});
			mymap[count]=str;

			final.push(count)
			g.setEdge(i,count,{label:"O(" + arr1.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
			g.setEdge(i+1,count,{label:"O(" + arr2.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
			merge_elements.push([arr1.split(','),arr2.split(','),temp]);
			count=count+1;

		}
		//If the neignour has children and this node has to be merged with the result of its children.

		else if(mymap[2*i+1]==null && mymap[2*i+2]==null)
		{
			var arr1=mymap[i];
			var arr2=mymap[temparray[curr]];


			tarr1=arr1.split(",");
			tarr2=arr2.split(",");

			tarr1=tarr1.map(function(x){return parseInt(x)})
			tarr2=tarr2.map(function(x){return parseInt(x)})


			var temp=merge(tarr1,tarr2);

			var str=temp.toString();
			var string = "";
			string = findArrayString(temp);
			g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});
			mymap[count]=str;
			final.push(count)
			g.setEdge(i,count,{label:"O(" + arr1.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
			g.setEdge(temparray[curr],count,{label:"O(" + arr2.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
			merge_elements.push([arr1.split(','),arr2.split(','),temp]);
			count=count+1;
			curr=curr+1;
		}

	}

  for(i=curr;i<temparray.length;i+=2)
  {
  	var arr1=mymap[temparray[i]];
  	var arr2=mymap[temparray[i+1]];


  	tarr1=arr1.split(",");
  	tarr2=arr2.split(",");


  	tarr1=tarr1.map(function(x){return parseInt(x)})
  	tarr2=tarr2.map(function(x){return parseInt(x)})



  	var temp=merge(tarr1,tarr2);

    	       var str=temp.toString();
    	var string = "";
  	string = findArrayString(temp);
  	g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});
  	mymap[count]=str;
  	final.push(count)
  	g.setEdge(temparray[i],count,{label:"O(" + arr1.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
  	g.setEdge(temparray[i+1],count,{label:"O(" + arr2.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
  	merge_elements.push([arr1.split(','),arr2.split(','),temp]);
  	count=count+1;
  }

  while(1)
  {
    var arr1=mymap[final[0]];
    var arr2=mymap[final[1]];
    console.log(arr1, arr2);

                if(arr2 == null)break;

                tarr1=arr1.split(",");
    tarr2=arr2.split(",");

    tarr1=tarr1.map(function(x){return parseInt(x)})
    tarr2=tarr2.map(function(x){return parseInt(x)})

                var temp=merge(tarr1,tarr2);
          var str=temp.toString();
      var string = "";
      string = findArrayString(temp);
                g.setNode(count,{ label: string,class: "type-TOP",labelStyle: "font-weight:bold"});
    mymap[count]=str;
    final.push(count)
    g.setEdge(final[0],count,{label:"O(" + arr1.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
    g.setEdge(final[1],count,{label:"O(" + arr2.split(',').length.toString() + ")",labelStyle:"fill:blue;font-weight:bold"});
    merge_elements.push([arr1.split(','),arr2.split(','),temp]);
                count=count+1;
    final.splice(0,1);

    final.splice(0,1);


    if(final.length<=1)break;

  }
}
