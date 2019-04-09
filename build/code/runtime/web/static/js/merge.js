
var node={};
var vert=[];
var mark=[];

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

function sort()
{
  reset2();
	var array=document.getElementById('arr').value;
	var arr=array.split(" ");
  array = array.trim();
	console.log(array);
	merge(array,1);
	mark[1]=1;
	drawGraph();
}

function merge(arr,i)
{
	if(arr.length>=1)
	{
		vert.push(arr);
		node[i]=arr;
		mark[i]=1;
		var tp1=arr.split(' ');
		console.log(tp1);
		tp1.sort();
		var tp2=tp1.join(" ");
		console.log(tp2);
		node[-i]=tp2;
		vert.push(tp2);
	}
}

function drawGraph()
{
	for (v in node)
	{
		g.setNode(v,{ label: node[v],class: "type-TOP" });
	}


	for (v in node)
	{
		if(v>0)
		{
			if(mark[v]==0) // that means no edge from i to -i instead from i to 2*i and 2*i+1
			{
				g.setEdge(v,2*v,{label:"Split"});
        g.setEdge(v,2*v+1,{label:"Split"});
			}
			else //that means edge from i to -i
			{
        g.setEdge(v,-v,{label:"MS"});
			}
		}
		else
		{
			var dest=Math.floor(v/-2);
			console.log(v,dest);
			if(dest>0)
			{
        g.setEdge(v,-dest,{label:"Merge"});
			}
		}
	}
	draw();

}

var g = new dagreD3.graphlib.Graph()
.setGraph({})
.setDefaultEdgeLabel(function() { return {}; });
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

	d3.select("svg g").selectAll("g.node")
	.on("click", function(id)
	{
		if(id>0)
		{
			if(mark[id]==1) //node is not opened
			{
				var _node = g.node(id);
				mark[id]=0;
				console.log(id,_node);
				var array=_node.label;
				console.log(array);
				var mid=Math.floor(array.length/2);
				var tp1=array.substr(0,mid);
				var tp2=array.substr(mid,array.length-mid);
				merge(tp1,2*id);
				merge(tp2,2*id+1);
			}
			else if(mark[id]==0)
			{
				if(mark[2*id]==1 && mark[2*id+1]==1)
				{
					var _node = g.node(id);
					mark[id]=1;
					console.log(node);
					delete node[2*id];
					delete node[-(2*id)];
					delete node[2*id+1];
					delete node[-(2*id+1)];
				}

			}
			reset();
			drawGraph();
		}
	});

	// Center the graph
	var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
	svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
	svg.attr("height", g.graph().height + 40);

}

function reset()
{
	g = null
	g = new dagreD3.graphlib.Graph()
	.setGraph({})
	.setDefaultEdgeLabel(function() { return {}; });

}

function reset1()
{
	g = null
	g = new dagreD3.graphlib.Graph()
	.setGraph({})
	.setDefaultEdgeLabel(function() { return {}; });
	node={};
	vert=[];
	mark=[];
	render = null
	svg = null
	document.getElementById('svg-canvas').innerHTML = null
	document.getElementById('arr').value = null

}
function reset2()
{
  g = null
  g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function() { return {}; });
  node={};
  vert=[];
  mark=[];
  render = null
  svg = null
  document.getElementById('svg-canvas').innerHTML = null
}
