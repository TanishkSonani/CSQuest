// A bounded arithmetic parser, never eval or Function. Percent means /100.
export function calculate(expression){
 const source=String(expression).replace(/\s/g,'');if(!source||source.length>160)throw Error('Enter a shorter calculation.');
 let at=0,depth=0;
 const finite=value=>{if(!Number.isFinite(value))throw Error('Result is outside the supported range.');return value;};
 function primary(){
  if(++depth>24)throw Error('Too many nested brackets.');
  let value;
  if(source[at]==='+'||source[at]==='-'){const sign=source[at++];value=(sign==='-'?-1:1)*primary();}
  else if(source[at]==='('){at++;value=sum();if(source[at++]!==')')throw Error('Close the bracket.');}
  else{const match=source.slice(at).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i);if(!match)throw Error('Check the numbers and operators.');at+=match[0].length;value=Number(match[0]);}
  while(source[at]==='%'){value/=100;at++;}
  depth--;return finite(value);
 }
 function product(){let value=primary();while(source[at]==='*'||source[at]==='/'){const op=source[at++],right=primary();if(op==='/'&&right===0)throw Error('Cannot divide by zero.');value=finite(op==='*'?value*right:value/right);}return value;}
 function sum(){let value=product();while(source[at]==='+'||source[at]==='-'){const op=source[at++],right=product();value=finite(op==='+'?value+right:value-right);}return value;}
 const result=sum();if(at!==source.length)throw Error('Check the numbers and operators.');return Object.is(result,-0)?0:Number(result.toPrecision(12));
}
