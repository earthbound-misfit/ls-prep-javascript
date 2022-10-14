/*
This code logs '510' instead of 15 due to implicit coercion. When you try to add a string and a number together, JavaScript will coerce the number into becoming a string, and then when you add them together, JS will concatenate the two strings together (instead of treating them as numbers that you can perform mathematical operations on). 
*/