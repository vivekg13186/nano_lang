# OPCodes


Operator | Opcode | Description
--- | --- | --- 
'+' | add | (+ number ... number)  
'-' | sub | (- number ... number)  
'*' | mul | (* number ... number)  
'/' | div |(/ number number) 
'%' | mod | (% number number)
''>' '| gt  | (> number number)
'<' | lt  | (< number number)
'>=' | gte | (>= number number)
'<=' | lte | (<= number number)
'!=' | nte | (!= number number)
'==' | eq | (== number number)
NA | pushF | push float  
NA | pushI |  push int
NA  | JMP | jump if zero
NA | JNE | jump if not zero
NA | call | (function name args )
NA | callc | calling c function
return | ret | return statement