var tabWidths = [];
var tabWidthRunningSum = [];

var viewportWidth = 0;
var tabsCount = 0;

$(document).ready(function($){

	var freeplace = calculatePercent();
	//Округляем до целого числа + 0.545
	freeplace = (Math.floor(freeplace)*100/100);
	console.log("freeplace " + freeplace);
	
	// присваиваем каждому элементу отступ справа и слева
	$("#nav li").each(function(i, val) {
		$(val).css({"padding-left": + freeplace + "%", "padding-right": + freeplace + "%"});
	});

});


//Определяем ширину свободного места в процентах от общей ширины

calculatePercent = function(){
	//Ширины контейнера в РХ
	viewportWidth = $("#wrapper").innerWidth();

	//Ширина всех табов
	var totalWidth = calculateTabWidths();

	// Считаем проценты
	var delta = 100 -((totalWidth * 100)/viewportWidth);
	var percent = (delta / tabWidths.length)/2;


	//Cчитаем проценты полосочек 
	//var border = tabWidths.length + 1;

	console.log("Ширины контейнера " + viewportWidth);
	console.log("Ширина всех табов " + totalWidth);
	console.log("Проценты " + delta);
	console.log("Padding " + percent);

	return percent;	
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