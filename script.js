let stu = new Map();
function save_stu(){
    let status = document.getElementById('status')
    if(stu.has(k.value)){
        stu.set(k.value,v.value);
        status.innerHTML="Record is Updated!!";                
    }
    else{
        stu.set(k.value,v.value);
    }
    show_stu();
}

function show_stu(){
    if(stu.size!=0){
    let data="<table border='1'>";
    data+="<tr><th>Key</th><th>Value</th><th>Action</th></tr>";
    stu.forEach(function(v,k){
        data+="<tr><td>"+k+"</td><td>"+v+"</td><td><a href=javascript:del_stu('"+k+"')>Delete</a>||<a href=javascript:edit_stu('"+k+"','"+v+"')>Edit</a></td></tr>"
    })
        data+="</table>";
        document.getElementById('result').innerHTML=data;
    }
    else{
        document.getElementById('result').innerHTML='No record found';
    }
}

function del_stu(k){
    let status=document.getElementById('status');
    stu.delete(k);
    status.innerHTML='Record is deleted';
    show_stu();
}

function edit_stu(a,b){
    let status=document.getElementById('status')
    k.value=a;
    v.value=b;
    if(a.value!=""&&b.value!=""){
        if(stu.has(a.value)){
            stu.set(k.value,v.value);
            status.innerHTML='Record is update';
        }
    }
    show();
}

function delete_all(){
    let status=document.getElementById('status')
    stu.clear();
    status.innerHTML='All record is delete';
    show_stu();
}

function clear_stu(){
    let element = document.getElementById("form");
    element.reset();
}