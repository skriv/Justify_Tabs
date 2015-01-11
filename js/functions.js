var tabWidths = [];
var tabWidthRunningSum = [];

var viewportWidth = 0;
var tabsCount = 0;

$(document).ready(function($){
	viewportWidth = $("#wrapper").innerWidth();

	//Ширина всех табов
	var totalWidth = calculateTabWidths();

	console.log(viewportWidth);

	//Определяем остаток от общей длинны контейнера
	var delta = viewportWidth - totalWidth;
	
	//Делим остаток на кол-во табов
	var marginTabs = (delta / tabWidths.length)/2;

	//Округляем до целого числа
	marginTabs = Math.floor(marginTabs)*100/100;

	// присваиваем каждому элементу отступ справа и слева
	$("#nav li").each(function(i, val) {
		$(val).css({"padding-left": + marginTabs + "px", "padding-right": + marginTabs + "px"});
	});

});


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