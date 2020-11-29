window.addEventListener('load',async ()=>{
    let titles = document.getElementById('titles');
    let ol = titles.getElementsByTagName('ol')[0];
    let controlBar = document.getElementById('control-bar');
    let main = document.getElementById('main');
    let titleList = await axios.get('http://127.0.0.1:3000/content');
    
    async function getContent(id){
        let content = await axios.get(`http://127.0.0.1:3000/content/${id}`);
        console.log(content)
        main.innerHTML =`
        <div class="title">
            <p>${content.data[0].title}</p>
        </div>
        <div class="main-content">
            <p>${content.data[0].main_text}</p>
        </div>
        <div class="evaluate"></div>
        `
    }
    
    for(let i = 0; i<titleList.data.length&&i<15; i++){
        let title = titleList.data[i].title
        let li = document.createElement('li');
        li.innerHTML=`
            <div class="title">
                <p>${title}</p>
            </div>
        `
        li.onclick = ()=>{
            getContent(titleList.data[i].id);
        }
        ol.appendChild(li);
    }
    let controlList = document.createElement('ul')
    controlList.id = 'controlNumber';
    let numberLi = document.createElement('li');
    numberLi.innerHTML = `<p>${titleList.data.length/15}</p>`
    controlList.appendChild(numberLi);
    controlBar.appendChild(controlList);


});