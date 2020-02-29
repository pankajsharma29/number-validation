function myFunction(e) {
var value = document.getElementById("myAnchor").value,
decimalPlaces = document.getElementById("myAnchor").getAttribute("decimal-places"),
                maxValue = document.getElementById("myAnchor").getAttribute("max-value"),
                minValue = document.getElementById("myAnchor").getAttribute("min-value");
                
                // Allow: backspace, delete, tab, escape, enter, . and F12
            if (e.keyCode === 8 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39) ||
                // Allow : Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true)) {
                // let it happen, don't do anything
                return;
            }
            
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode !== 190) {
                console.log('prevent default if its not a number');
                e.preventDefault();
                return;
            }
            
            if (e.keyCode === 190) { //decimals not allowed
                console.log('decimal places not allowed');
                e.preventDefault();
                return;
            }
            
            
}

			function myBlur(e) {
				formatValue(e.target.value);
            }
            
            function formatValue (val) {
				if (val) {
                console.log(val);
                	val = val.toString().replace(/,/g, '');
                    result = parseFloat(val);
                	return val ? document.getElementById("demo").innerHTML = result : 0;
            	}
            	return document.getElementById("demo").innerHTML = val;	
			}