let fruits = ["Pear", "Orange", "Guava", "Grapes"];
document.write("Original Array:" + fruits + "<br/><br/>");
 fruits.push("Peach");
document.write(" Array after appeand:" + fruits + "<br/><br/>");
fruits.unshift("Mango");
document.write("Array after prepend:" + fruits +"<br/><br/>")
fruits.splice(3,1,"Apricot");
document.write("Array after replacing a string :" + fruits)


