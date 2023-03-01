//Write a JavaScript function to remove a character at the specified position of a given string and return the new string. 
//Test data: removeChar(“ITFactory”, 1) 
//Expected Output : IFactory 

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
 console.log(remove_character("ITFactory",1));


//Write a JavaScript program to check whether a string starts with 'Java' and return true or false, accordingly. 
//Test data: checkString(“JavaScript”) 
//Expected Output : true 

function start_spec_str(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}
console.log(start_spec_str("JavaScript"));


//Write a JavaScript function to convert a string into the camel case. 
//Test data: camelCaseStr(“first name”) 
//Expected Output: firstName 

function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, chr)
   {
        return chr.toUpperCase();
    });
}
console.log(camelize("first name"));



//Write a JavaScript function to convert a string into the snake case. 
//Test data: snakeCaseStr(“first name”) 
//Expected Output: first_name

function snakeCaseStr(str) {
  // Replace spaces with underscores and convert to lowercase
  return str.replace(/\s+/g, '_').toLowerCase();
}

console.log(snakeCaseStr("first name")); 




//Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings 
//will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 
//Test data: truncateString(“We are learning JS”, 10) 
//Expected Output: We are lea… 
//We are lea…

function truncateString(str, maxLength, ellipsis = '…') {
  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + ellipsis;
}

console.log(truncateString('We are learning JS”, 10'));