/**
 * Makes full-width menus happy. Finds the full width of the parent and defines the width for the children evenly, allowing room for margins. Also removes the right-hand margin from the last item. I suppose you could evenly space any horizontal items, not necessarily menus.
 * @param  string 	menuSelector   	A css selector which must be wrapped in quotes for jQuery friendliness. E.g. '#nav'
 * @param  string 	childSelectors 	A css selector which is the direct descendant of the menuSelector. E.g. 'li'
 * @param  integer 	marginWidth    	The width of the gap between the menu elements. Should not be wrapped in anything. E.g. 5. UNLESS usePercent is set to true, in which case should be the percent you're using for the margin. E.g. .2564
 * @param  boolean 	usePercent    	Uses percent rather than explicit pixels to set width.
 * @param  boolean	hideUntilLoaded Hide the menuSelector element until the script has finished.
 */
function fullWidthMenu(menuSelector, childSelectors, marginWidth, usePercent, hideUntilLoaded){
	itemCount = $(menuSelector).children($(childSelectors)).length;
	childselectors = $(childSelectors);
	menuWidth = $(menuSelector).width();
	if (hideUntilLoaded) {
		$(menuSelector).css('opacity', 0)
	};
	if (usePercent) {
		marginWidth = (marginWidth/100)*menuWidth;
	}
	childWidth = (menuWidth-(itemCount-1)*marginWidth)/itemCount;
	if (usePercent) {
		percentWidth = (childWidth/menuWidth)*100;
		$(menuSelector).children(childSelectors).css('width', percentWidth+'%');
	}
	else{
		$(menuSelector).children(childSelectors).width(childWidth);
	}
	$(menuSelector+' '+childSelectors+':last-child').css('margin-right', 0);
	if (hideUntilLoaded) {
		$(menuSelector).animate({opacity: 1}, 400);
	};
}