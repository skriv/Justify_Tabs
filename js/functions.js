var tabWidths = [];
var tabWidthRunningSum = [];

var viewportWidth = 0;
var tabsCount = 0;
var tabHeights = 0;

$(document).ready(function($){

	var freeplace = calculatePercent();

	console.log("freeplace " + freeplace);
	
	paddingSize(freeplace);

	tabHeights = $("#wrapper ul").innerHeight()

	 if (tabHeights > 41) {
	 	alert(tabWidths.length);
	 	$("li:last-child").css({"padding-left": + freeplace-4 + "px", "padding-right": + freeplace-4 + "px"});
	 };
});


// присваиваем каждому элементу отступ справа и слева
paddingSize = function(padding){
	$("#nav li").each(function(i, val) {
		$(val).css({"padding-left": + padding + "px", "padding-right": + padding + "px"});
	});
}

//Определяем ширину свободного места в процентах от общей ширины

calculatePercent = function(){
	//Ширины контейнера в РХ
	viewportWidth = $("#wrapper").innerWidth();


	//Ширина всех табов
	var totalWidth = calculateTabWidths();

	// Считаем остаток, дели на кол-во табов
	var delta = (viewportWidth-totalWidth) / tabWidths.length;

	//Определяем размер паддинка
	var padd = (delta / 2)/100*100;

	return padd;	
}

//Ширина всех табов
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
}