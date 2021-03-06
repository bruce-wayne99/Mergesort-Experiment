
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('scene01.html')

@app.route('/1')
def introduction():
	return render_template('scene01.html')

@app.route('/2')
def split():
	return render_template('scene02.html')

@app.route('/3')
def split_exercise():
	return render_template('scene03.html')

@app.route('/4')
def merge():
	return render_template('scene04.html')

@app.route('/5')
def merge_exercise():
	return render_template('scene05.html')

@app.route('/6')
def mergesort():
	return render_template('scene06.html')

@app.route('/7')
def mergesort_exercise():
	return render_template('scene07.html')

@app.route('/8')
def complexity_equation():
	return render_template('scene08.html')

@app.route('/9')
def split_timecomplexity():
	return render_template('scene09.html')

@app.route('/10')
def merge_timecomplexity():
	return render_template('scene10.html')

@app.route('/11')
def mergesort_timecomplexity():
	return render_template('scene11.html')

@app.route('/12')
def mergesort_example():
	return render_template('scene12.html')

@app.route('/13')
def timecomplexity_plot():
	return render_template('scene13.html')

@app.route('/14')
def comparision_plot():
	return render_template('scene14.html')

if __name__ == '__main__':
    app.run(debug = True)
