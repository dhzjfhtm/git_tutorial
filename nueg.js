window.addEventListener('load',async()=>{
    let signInButton = document.getElementById('sign-in');
    let oneSideButton = document.getElementById('one-side');
    let main = document.getElementById('main');
    let middleContent = document.getElementById('content');
    let wrapper = document.getElementById('wrapper');
    let titles = wrapper.querySelectorAll('.title-text');
    let firstSection = document.getElementById('first-section');
    /*for(let i =0; i<titles.length; i++){
        titles[i].onclick = ()=>{

            history.pushState(null, null, 'nueg.html/pushpush');
            axios.get('http://127.0.0.1:3000/content').then(data=>{
                console.log(data.data.contents);
                main.innerHTML = `<section id='first-section'>
                <div class='one-section'>
                <div class="title">
                    <p><b>></b>new community</p>
                    <p>icon</p>
                </div>
                <ol>
                    <li>
                        <div class="content">
                            <p>${data.data[1].title}</p>
                            <div class="like-comment">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="content">
                            <p>게시물 2의 제목이다.</p>
                            <div class="like-comment">
                            </div>
                        </div>
                    </li>
                    <li>게시물 3</li>
                    <li>게시물 4</li>
                    <li>게시물 5</li>
                </ol>
            </div>
            </section>`;
            });
        }
    }
    */
    async function getContent(id){
        let content = await axios.get(`http://127.0.0.1:3000/content/${id}`);
        console.log(content)
        middleContent.innerHTML =`
        <div class="title">
            <p>${content.data[0].title}</p>
        </div>
        <div class="main-content">
            <p>${content.data[0].main_text}</p>
        </div>
        <div class="evaluate"></div>
        `
    }
    signInButton.onclick = getContent/*()=>{
        console.log('hi');
        axios.get('http://127.0.0.1:3000/user')
        .then((response)=>{
            console.log(response);
            //signInButton.value = response.data;
        }).catch((error)=>{
            console.error(error)
        });
    };*/
    oneSideButton.onclick = ()=>{
        axios.get('http://127.0.0.1:3000/content')
        .then((response)=>{
            main.innerHTML = `<section id='first-section'>
            <div class='one-section'>
            <div class="title">
                <p><b>></b>new community</p>
                <p>icon</p>
            </div>
            <ol>
                <li>
                    <div class="content">
                        <p>게시물 1의 제목이다.</p>
                        <div class="like-comment">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="content">
                        <p>게시물 2의 제목이다.</p>
                        <div class="like-comment">
                        </div>
                    </div>
                </li>
                <li>게시물 3</li>
                <li>게시물 4</li>
                <li>게시물 5</li>
            </ol>
        </div>
        </section>`
            console.log(response);
            //signInButton.value = response.data;
        }).catch((error)=>{
            console.error(error)
        });
    }
    let contents = await axios.get('http://127.0.0.1:3000/content');
    console.log(contents);
    let firstTitles = firstSection.getElementsByTagName('li');
    for(let i =0; i< firstTitles.length; i++){
        if(i>=contents.data.length){
            break;
        }else{
            firstTitles[i].innerHTML=
            `<div class="content" data-id="${contents.data.id}">
            <p>${contents.data[i].title}</p>
            <div class="like-comment">
                <p>댓글 3</p>
                <p>좋아요 5</p>
            </div>
        </div>`
            firstTitles[i].onclick = ()=>{
                getContent(contents.data[i].id);
            }
        }
    }
});
window.onpopstate = function(event) {  //뒤로가기 이벤트를 캐치합니다.
    window.location.href = window.location.href;  
};