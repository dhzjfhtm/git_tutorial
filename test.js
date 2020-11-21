/*window.addEventListener('load',()=>{
    let example1 = document.getElementById('example1');
    let template = example1.querySelector('#test-template');
    let tbody = example1.querySelector('tbody');
    let thead = example1.querySelector('thead');

    thead.onclick = ()=>{
        let cloneNode = document.importNode(template.content,true);
        tbody.append(cloneNode);
    };
});*/
window.addEventListener('load',()=>{
    let example1 = document.getElementById('example1');
    let template = example1.querySelector('#test-template');
    let tbody = example1.querySelector('tbody');
    let thead = example1.querySelector('thead');
    let changeButton = example1.querySelector('#change-button');
    let deleteButton = example1.querySelector('#delete-button');
    let allCheck = example1.querySelector('#all-check');
    let deleteEach = example1.querySelectorAll('.delete-each')

    /*for(let i=0;i<deleteEach.length;i++){
        deleteEach[i].onclick = (e)=>{
            e.target.parentElement.parentElement.remove();
        };
    }*/
    example1.onclick = (e)=>{
        if(e.target.nodeName==='INPUT'){
            if(e.target.className==='delete-each'){
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    changeButton.onclick = ()=>{
        let boxes = tbody.querySelectorAll('input[type=checkbox]');
        let checked =[];
        for(i=0;i<boxes.length;i++){
            if(boxes[i].checked == true){
                checked.push(boxes[i]);
                console.log('hi');
            }
        }

        if(checked.length == 2){
            let firstElement =  checked[0].parentNode.parentNode.cloneNode(true);
            checked[1].parentNode.parentNode.replaceWith(firstElement);
            checked[0].parentNode.parentNode.replaceWith(checked[1].parentNode.parentNode);
        }else{
            alert('2개만 고르세요');
        }
    }
    allCheck.onclick=()=>{
        let boxes = tbody.querySelectorAll('input[type=checkbox]');
        for(i=0;i<boxes.length;i++){
            boxes[i].checked = allCheck.checked;
        }
    };
    deleteButton.onclick=()=>{
        let boxes = tbody.querySelectorAll('input[type=checkbox]:checked');
        for(i=0;i<boxes.length;i++){
            boxes[i].parentElement.parentElement.remove();
        }
    }


    


});
