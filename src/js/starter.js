//this file contains any calls that are necessary upon loading the browser window


defineParams();

//reset the colors based on the input from params (in case this eventually is read in from a file
Object.keys(params.boxes).forEach(function(c, i){
	document.documentElement.style.setProperty('--'+c+'-color',params.boxes[c].color);
});

// populateBoxes2();
initBoxes();

//attach listener on window resize
window.addEventListener("resize", resizer);

//attach listeners to the controls
d3.select('#hamburger').on('mousedown',toggleControls)

//on load reposition the controls to just outside the view
d3.select('#controls').style('transform', 'translateX('+(-d3.select('#controls').node().getBoundingClientRect().width)+'px)')

//attach listeners to the on/off switches
d3.select('.switch.answers').on('change',toggleLines)
d3.select('.switch.responses').on('change',toggleLines)

//these functions will both call the line plotter
//this will load the answers
loadAnswers();

//this will load the responses
loadResponses(params.surveyFile);