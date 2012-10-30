# AutoFullWidthMenu
This is a simple bit of JS to automatically assign the correct width to a number of horizontal menu items.

It accepts five parameters:
- menuSelector   	A css selector which must be wrapped in quotes for jQuery friendliness. E.g. '#nav'
- childSelectors 	A css selector which is the direct descendant of the menuSelector. E.g. 'li'
- marginWidth    	The width of the gap between the menu elements. Should not be wrapped in anything. E.g. 5. UNLESS usePercent is set to true, in which case should be the percent you're using for the margin. E.g. .2564
- usePercent    	Uses percent rather than explicit pixels to set width.
- hideUntilLoaded Hide the menuSelector element until the script has finished

```
fullWidthMenu(Menu Selector (string), Menu Item Selector (string), Margin Width (integer), Use Percent (true/false), Hide Until Loaded(true/false));
```

Usage:
- Include jQuery
- Include AutoFullWidthMenu
- Run function, e.g.
    ```fullWidthMenu('.nav', 'li', .2564, true, true);
