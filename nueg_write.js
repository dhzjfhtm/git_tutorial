window.addEventListener('load',()=>{
    let submitButton = document.querySelector('#writing-submit');
    let mainContent = document.querySelector('#main-content');
    let title = document.querySelector('#title');
    submitButton.addEventListener('click',()=>{
        console.log(mainContent.value);
        console.log(title.value);

        try{
            axios.post('http://127.0.0.1:3000/content',
            {
                title:title.value,
                mainContent:mainContent.value
            }
        );
        } catch(error){
            console.error(error);
        }
    })

})