function btnclick(val){
    
        clearScreen()
        document.getElementById("screen").value+=val
        newValue=document.getElementById("screen").value
    
    
}
function clearScreen(){ 
    document.getElementById("screen").value=""
}
function equalsres(sym){
    var res
    var op,oldValue,newValue
    if(sym== '+'){
        oldValue=document.getElementById("screen").value
        clearScreen()
        document.getElementById("screen").value=sym
        op=sym
    }else if(sym== '-'){
        oldValue=document.getElementById("screen").value
        clearScreen()
        document.getElementById("screen").value=sym
    }else if(sym== '*'){
        oldValue=document.getElementById("screen").value
        clearScreen()
        document.getElementById("screen").value=sym
    }else if(sym== '/'){
        oldValue=document.getElementById("screen").value
        clearScreen()
        document.getElementById("screen").value=sym
    }
    console.log("old "+oldValue+ "new "+newValue)
    if(op== "+"){
        res=oldValue+newValue
        document.getElementById("screen").value=res
    }
    
    
}