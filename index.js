const form=document.getElementById('form')

const search = document.getElementById('search')

const main = document.getElementById('main')
const js = document.querySelector('.js')
const py = document.querySelector('.py')
const fav = document.querySelector('.fav')



const data = [
    { count: 100, title: "Black jack game", language: "PY", rating: "Starred", link: "https://adrii-x.github.io/python_projects/black_jack/black_jack.ipynb" },
    { count: 101, title: "Dad jokes", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/10_Dad jokes/dummy.html" },
    { count: 102, title: "FAQ boxes", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/12_FAQ boxes/dummy.html" },
    { count: 103, title: "Random choice picker", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/13_Random choice picker/dummy.html" },
    { count: 104, title: "Nav animation", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/14_Nav animation/dummy.html" },
    { count: 105, title: "Increment counter", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/15_increment counter/dummy.html" },
    { count: 106, title: "Drink water", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/16_drink water/dummy.html" },
    { count: 107, title: "Movie app", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/17_Movie app/dummy.html" },
    { count: 108, title: "Background sliders", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/18_background sliders/dummy.html" },
    { count: 109, title: "Theme clock", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/19_theme clock/dummy.html" },
    { count: 110, title: "Expanding cards", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/1_expanding cards/dummy.html" },
    { count: 111, title: "Roman Numeral Converter", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/roman_numeral_converter" },
    { count: 112, title: "Chatroom", language: "JS", rating: "Starred", link: " https://adrii-x.github.io/Chat-room/chat_room.html" },
    { count: 113, title: "Button ripple effect", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/20_button ripple effect/dummy.html" },
    { count: 114, title: "Drag N Drop", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/21_Drag N Drop/dummy.html" },
    { count: 115, title: "Alien-invaders-game", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/Alien-invaders-game" },
    { count: 116, title: "Password checker", language: "PY", rating: "Starred", link: "https://adrii-x.github.io/python_projects/password_checker/password_checker.py" },
    { count: 117, title: "File sorter", language: "PY", rating: "Starred", link: "https://adrii-x.github.io/python_projects/file_sorter/file_sorter.py" },
    { count: 118, title: "Tic-tac-toe", language: "PY", rating: "Starred", link: "https://adrii-x.github.io/python_projects/tic-tac-toe/tic-tac-toe.ipynb" },
    { count: 119, title: "Drawing App", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/22_Drawing App/dummy.html" },
    { count: 120, title: "Excursion", language: "JS", rating: "None", link: "https://adrii-x.github.io/excursion" },
    { count: 121, title: "Css kinetic loader", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/23_Css kinetic loader/dummy.html" },
    { count: 122, title: "Content placeholder", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/24_Content placeholder/dummy.html" },
    { count: 123, title: "Sticky nav", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/25_Sticky nav/dummy.html" },
    { count: 124, title: "Vertical Sliders", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/26_Vertical Sliders/dummy.html" },
    { count: 125, title: "Toast notification", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/27_Toast notification/dummy.html" },
    { count: 126, title: "Double click heart", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/29_Double click heart/dummy.html" },
    { count: 127, title: "Brute force", language: "PY", rating: "Starred", link: "https://adrii-x.github.io/python_projects/brute_force/brute_force.py" },
    { count: 128, title: "Progress steps", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/2_progress steps/dummy.html" },
    { count: 129, title: "Auto Text Effect", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/30_Auto Text Effect/dummy.html" },
    { count: 130, title: "Password generator", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/31_password generator/dummy.html" },
    { count: 131, title: "Good cheap checkboxes", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/32_good cheap cheakboxes/dummy.html" },
    { count: 132, title: "Note app", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/33_Note app/dummy.html" },
    { count: 133, title: "Animated Countdown", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/34_Animated Countdown/dummy.html" },
    { count: 134, title: "Image Carousel", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/35_Image Carousel/dummy.html" },
    { count: 135, title: "HoverBoard", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/36_Hover Board/dummy.html" },
    { count: 136, title: "Pokedex", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/37_Pokedex/dummy.html" },
    { count: 137, title: "Mobile tab Navigation", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/38_Mobile tab Navigation/dummy.html" },
    { count: 138, title: "Password Strength", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/39_Password Strength/dummy.html" },
    { count: 139, title: "Rotating_navigation", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/3_rotating_navigation/dummy.html" },
    { count: 140, title: "3D Background boxes", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/40_3D Background boxes/dummy.html" },
    { count: 141, title: "Verify account", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/41_Verify account/dummy.html" },
    { count: 142, title: "Live user filter", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/42_live user filter/dummy.html" },    
    { count: 143, title: "Snake game", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/Snake-game-with-JS/" },
    { count: 144, title: "Feedback UI", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/43_feedback UI/dummy.html" },
    { count: 145, title: "Custom range slider", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/44_custom range slider/dummy.html"},
    { count: 146, title: "Netflix nav", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/45_Netflix nav/dummy.html"},
    { count: 147, title: "Quiz app", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/46_Quiz app/dummy.html"},
    { count: 148, title: "Testimonial box", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/47_Testimonial box/dummy.html"},
    { count: 149, title: "todo list", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/49_todo list UI/dummy.html"},
    { count: 150, title: "Catch insect game", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/50_Catch insect game/dummy.html"},
    { count: 151, title: "Sound board", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/9_Sound board/dummy.html"},
    { count: 152, title: "split landing", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/7_split landing/dummy.html"},
    { count: 153, title: "Form wave animation", language: "JS", rating: "Starred", link: "https://adrii-x.github.io/50_Projects_in_Javascript/8_Form wave animation/dummy.html"},
    { count: 154, title: "scroll animation", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/6_scroll animation/dummy.html"},
    { count: 155, title: "blurry loading", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/5_blurry loading/dummy.html"},
    { count: 156, title: "Hidden search", language: "JS", rating: "None", link: "https://adrii-x.github.io/50_Projects_in_Javascript/4_Hidden search/dummy.html"}

];

let filteredprojects =[]
let py_filteredprojects =[]
let js_filteredprojects =[]
let fav_filteredprojects =[]
let filtered_data = []
let searchTerm
let compiler = []
let finalResult = []

function split_function(title,searchTerm) {
    let splitted = title.toLowerCase().split(searchTerm)
    console.log(title);
    console.log(searchTerm);
    console.log(splitted);
    
    compiler = []
    

    


    
if (splitted.length>1 && (searchTerm !== ' ')) {
    
    for (let index = 0; index < splitted.length; index++) {
        

        
        if (splitted[index] === '' ) {
            compiler.push(searchTerm)
            console.log(compiler);
            
            console.log('h0');
            
            
        }

        else if (splitted[index]!==searchTerm && splitted.length>=2 && index>0) {

            console.log('h2');
            if (splitted[0]!== '') {
                compiler.push(searchTerm) 
                console.log(compiler); 
            }

            compiler.push(splitted[index])

            if (splitted[0]=== '') {
                compiler.push(searchTerm) 
                
            }
            console.log(compiler);

        }

        else{
            compiler.push(splitted[index])
            console.log('hi');
        }

    }  

    console.log(compiler);
    

    let splitList = compiler
        let targetString = title
        finalResult = []
        let targetPointer= 0
        for (let i = 0; i < splitList.length; i++) {

            let currentSegment = splitList[i];
            // Get the length of the current segment
            let segmentLength = currentSegment.length;
            // Extract the equivalent part from the target string with the same length
            let matchingSegment = targetString.substring(targetPointer, targetPointer + segmentLength);
            // Push the matched segment (from the target string) to the final result
            finalResult.push(matchingSegment);
            // Move the target pointer forward by the length of the current segment
            targetPointer += segmentLength;


        }

    console.log("Final Result:", finalResult);

}
    
    
    const spllit_container = document.createElement('h3')
    for (let index2 = 0; index2 < finalResult.length; index2++) {
        spann = document.createElement('span')
        
        
        if ((finalResult[index2].toLowerCase())===(searchTerm.toLowerCase())) {
            spann.classList.add('coloured')
            spann.innerHTML =`
               ${finalResult[index2]}
            `
            console.log(spann);
            spllit_container.appendChild(spann)
        }
        else{
            spann.innerHTML =`
               ${finalResult[index2]}
            `
            console.log(spann);
            spllit_container.appendChild(spann)
        }
        
    }

    console.log(spllit_container);
    
    
    return spllit_container
}

function showProjects(projects) {
    main.innerHTML = ''

    projects.forEach(project => {
        const {title,link,count,language,rating} = project


       let  splitter = split_function(title,searchTerm)

       console.log(splitter);
       
        
        const div = document.createElement('div')

        if (compiler.length>=2) {
            console.log(compiler);
            
            if (language==='PY') {
                div.innerHTML += `
                <a href="${link}" target="_blank">
                        <div class="project">
                        <img src="pictures/Screenshots (${JSON.stringify(count)}).png" alt="${title}" />
                
                        <div class="project-info">
                        <span class="${language}">
                            <img
                            src="https://img.icons8.com/ios-filled/50/FAB005/python.png"
                            alt="python"
                            />
                        </span>
                        <span class="${rating}">
                            <img
                            src="https://img.icons8.com/emoji/30/star-emoji.png"
                            alt="star-emoji"
                            />
                        </span>
                        </div>
                        </div>
                    </a>
                `
                let info = div.querySelector('.project-info')
                info.prepend(splitter)
                

            }
                
            else{
                div.innerHTML = `
            
            <a href="${link}" target="_blank">
                <div class="project">
                <img src="pictures/Screenshots (${JSON.stringify(count)}).png" alt="${title}" />
                <div class="project-info">
                    <span class="${language}">JS</span>
                    <span class="${rating}">
                    <img
                        src="https://img.icons8.com/emoji/30/star-emoji.png"
                        alt="star-emoji"
                    />
                    </span>
                </div>
                </div>
            </a>
          `
          let info = div.querySelector('.project-info')
          info.prepend(splitter)
            }
            
        }
        else{

            if (language==='PY') {
                div.innerHTML += `
                <a href="${link}" target="_blank">
                        <div class="project">
                        <img src="pictures/Screenshots (${JSON.stringify(count)}).png" alt="${title}" />
                
                        <div class="project-info">
                        
                         <h3>${title}</h3>
                        <span class="${language}">
                            <img
                            src="https://img.icons8.com/ios-filled/50/FAB005/python.png"
                            alt="python"
                            />
                        </span>
                        <span class="${rating}">
                            <img
                            src="https://img.icons8.com/emoji/30/star-emoji.png"
                            alt="star-emoji"
                            />
                        </span>
                        </div>
                        </div>
                    </a>
                `}
                
    
            else{
                div.innerHTML = `
            
            <a href="${link}" target="_blank">
                <div class="project">
                <img src="pictures/Screenshots (${JSON.stringify(count)}).png" alt="${title}" />
                <div class="project-info">
                    <h3>${title}</h3>
                    <span class="${language}">JS</span>
                    <span class="${rating}">
                    <img
                        src="https://img.icons8.com/emoji/30/star-emoji.png"
                        alt="star-emoji"
                    />
                    </span>
                </div>
                </div>
            </a>
          `
    
            }

        }

        
       


        main.appendChild(div)
        
    });
}

function getProjects(data) {
    showProjects(data)  
}



function filterProjects(text) {
    filteredprojects=[]

    for (let index = 0; index < data.length; index++) {
        if (data[index].title.toLowerCase().includes(text.toLowerCase())) {
            filteredprojects.push(data[index])   
        }  
    }


    if (js.classList.contains('active')) {
        console.log('bro');
        console.log(filteredprojects);
        console.log(js_filteredprojects);
        
        js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS')) 
        console.log(js_filteredprojects);
        return js_filteredprojects
    }
    else if (py.classList.contains('active')) {
        py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY')) 
        return py_filteredprojects
    }
    else if (fav.classList.contains('active')) {
        fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred')) 
        return fav_filteredprojects
    }
    else{
        return filteredprojects
    }

      
}

js.addEventListener('click', (e) =>{
    js.classList.toggle('active')

    if (js.classList.contains('active')){
        py.classList.remove('active')
        fav.classList.remove('active')

        if ((js_filteredprojects.length === 0) && (searchTerm && searchTerm !== '')) {
            console.log('hiiiii');
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            getProjects(js_filteredprojects)    
        }
        else if ((py_filteredprojects.length === 0)||(filteredprojects.length === 0)) {
            fav_filteredprojects = data.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = data.filter(box => box.language.includes('PY'))
            js_filteredprojects = data.filter(box => box.language.includes('JS'))
            getProjects(js_filteredprojects)  
        }
        else{
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            getProjects(js_filteredprojects)
        }
        

    }
    if (!(js.classList.contains('active'))){
        if (filteredprojects.length===0) {
            getProjects(data)
        }
        else{
            getProjects(filteredprojects)
        }
    }
})

py.addEventListener('click', (e) =>{
    py.classList.toggle('active')
    console.log('hiii');
    
    if (py.classList.contains('active')){
        js.classList.remove('active')
        fav.classList.remove('active')

        if ((py_filteredprojects.length === 0) && (searchTerm && searchTerm !== '')) {
            console.log('h');
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            getProjects(py_filteredprojects)    
        }
        else if ((py_filteredprojects.length === 0)||(filteredprojects.length === 0)) {
            console.log('i');
            fav_filteredprojects = data.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = data.filter(box => box.language.includes('PY'))
            js_filteredprojects = data.filter(box => box.language.includes('JS'))
            getProjects(py_filteredprojects)
        }
        else{
            console.log('j');
            console.log(filteredprojects);
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            console.log(py_filteredprojects);
            getProjects(py_filteredprojects)
        }
    }
    if (!(py.classList.contains('active'))){
        
        if (filteredprojects.length===0) {
            console.log('k');
            getProjects(data)
        }
        else{
            console.log('l');
            getProjects(filteredprojects)
        }
    }

})

fav.addEventListener('click', (e) =>{
    fav.classList.toggle('active')

    if (fav.classList.contains('active')){
        js.classList.remove('active')
        py.classList.remove('active')

        if ((fav_filteredprojects.length === 0) && (searchTerm && searchTerm !== '')) {
            console.log('hiiiii');
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            getProjects(fav_filteredprojects)    
        }
        else if ((py_filteredprojects.length === 0)||(filteredprojects.length === 0)) {
            console.log(data);
            fav_filteredprojects = data.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = data.filter(box => box.language.includes('PY'))
            js_filteredprojects = data.filter(box => box.language.includes('JS'))
            getProjects(fav_filteredprojects)
        }
        else{
            fav_filteredprojects = filteredprojects.filter(box => box.rating.includes('Starred'))
            py_filteredprojects = filteredprojects.filter(box => box.language.includes('PY'))
            js_filteredprojects = filteredprojects.filter(box => box.language.includes('JS'))
            getProjects(fav_filteredprojects)
        }

    }
    if (!(fav.classList.contains('active'))){
        if (filteredprojects.length===0) {
            getProjects(data)
        }
        else{
            getProjects(filteredprojects)
        }
        
    }

})


form.addEventListener('submit',(e) => {
    e.preventDefault()
    searchTerm = search.value.toLowerCase()
    console.log(searchTerm);
    

    if(searchTerm && searchTerm !== ''){
        filtered_data = filterProjects(search.value)
        fav_filteredprojects = []
        py_filteredprojects = []
        js_filteredprojects = []
       
        getProjects(filtered_data) 
        fav_filteredprojects = filtered_data.filter(box => box.rating.includes('Starred'))
        py_filteredprojects = filtered_data.filter(box => box.language.includes('PY'))
        js_filteredprojects = filtered_data.filter(box => box.language.includes('JS'))

        
    }

    else if (searchTerm !== '') { 
        getProjects(data)
    }
    else{
        window.location.reload()
    }
})


getProjects(data)
