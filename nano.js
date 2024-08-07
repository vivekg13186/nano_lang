const parse = require("./nano-parser").parse;

function gen(node,codeStack){
    if(node.type=='exp'){
        if(node.opCode == "+"){
            gen(node.args[0],codeStack);
            for(var i=1;i<node.args.length;i++){
                gen(node.args[i],codeStack);
                codeStack.push(['ADD'])
            }
        }
        if(node.opCode == "-"){
            node.args.reverse();
            gen(node.args[0],codeStack);
            for(var i=1;i<node.args.length;i++){
                gen(node.args[i],codeStack);
                codeStack.push(['SUB'])
            }
        }
        if(node.opCode == "*"){
            gen(node.args[0],codeStack);
            for(var i=1;i<node.args.length;i++){
                gen(node.args[i],codeStack);
                codeStack.push(['MUL'])
            }
        }
    }else if(node.type =='number'){
        codeStack.push(["PUSH_N",node.value]);
    }
}

function run(codeStack){
    var stack=[];
    for(var i=0;i<codeStack.length;i++){
        var op = codeStack[i][0];
        if(op=='PUSH_N'){
            stack.push(codeStack[i][1]);
        }else if(op=='ADD'){
            var op1 = stack.pop();
            var op2 = stack.pop();
            stack.push(op1+op2);
        }else if(op=='SUB'){
            var op1 = stack.pop();
            var op2 = stack.pop();
            stack.push(op1-op2);
        }else if(op=='MUL'){
            var op1 = stack.pop();
            var op2 = stack.pop();
            stack.push(op1*op2);
        }
    }
    return stack;
}
function eval(code){
    var result  = parse(code);
    console.log(result);
    var codeStack=[];
    for(var i=0;i<result.length;i++){
        gen(result[i],codeStack);
    }
    console.log(codeStack);
    console.log(run(codeStack));
}

eval("(+ 1 1 (* 1 2))")