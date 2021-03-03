function click1(event){
    c1.classList.add('hidden');
}
function click2(event){
    c2.classList.add('hidden');
}
function click3(event){
    c3.classList.add('hidden');
}
function click4(event){
    c4.classList.add('hidden');
}
function click5(event){
    c5.classList.add('hidden');
}

const c1 = document.getElementById("c1");
c1.addEventListener('click',click1);

const c2 = document.getElementById("c2");
c2.addEventListener('click',click2);

const c3 = document.getElementById("c3");
c3.addEventListener('click',click3);

const c4 = document.getElementById("c4");
c4.addEventListener('click',click4);

const c5 = document.getElementById("c5");
c5.addEventListener('click',click5);