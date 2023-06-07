function dotCalculator (equation) {
	if(equation.includes('+')) {  
    equation = equation.split('+')
      return equation[0].trim().concat(equation[1].trim())
        } 
  if(equation.includes('-')) {
    equation = equation.split('-')
      return '.'.repeat(equation[0].trim().length - equation[1].trim().length);
       }
  if(equation.includes('*')) {
    equation = equation.split('*')
      return '.'.repeat(equation[0].trim().length*(equation[1].trim().length));
       }
   if(equation.includes('//')) {
    equation = equation.split('//')
    return '.'.repeat(equation[0].trim().length/(equation[1].trim().length));
      }
       }