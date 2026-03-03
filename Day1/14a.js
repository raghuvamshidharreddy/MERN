const Sp=[
    {name:"Wipro",lp=200,cp:210},
    {name:"Wipro",lp=250,cp:270},
    {name:"Wipro",lp=200,cp:290},
]
function bs(comp) {
    temp=[];
    for(let i=0;i<comp.length;i++){
        temp.add([i,comp[i].cp-comp[i].lp]);
    }
    max_idx=0
    max_val=temp[0][1]
    for(let i=1;i<=temp.length;i++){
        if(temp[i][1]>max_val){
            max_val=temp[i][1];
            max_idx=temp[i][0];
        }
    }
    console.log(comp[max_idx].name);
}
bs(Sp)