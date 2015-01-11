var tabWidths = [];
var tabWidthRunningSum = [];
var vieportWidth = 0;
var menuTabs = 0;

$(document).ready(function($)){
	viewportWidth = $("#wrapper").innerWidth();
	var totalWidth = calculateTabWidths();



});

calculateTabWidths = function() {
	var totalWidth = 0;
	
	$("#nav li").each(function(i, val) {
	    tabWidths[i] = $(val).innerWidth();
	    tabWidthRunningSum[i] = tabWidths[i];
	    if (i > 0) {
		    tabWidthRunningSum[i] = tabWidthRunningSum[i] + tabWidthRunningSum[i-1];
	    }
	    
	    totalWidth += tabWidths[i];
	});
	return totalWidth;

	console.log(totalWidth);
}