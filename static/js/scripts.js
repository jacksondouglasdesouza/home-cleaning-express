let accordeon = document.getElementsByClassName('accordion');
let i;

for(i = 0; i < accordeon.length; i++){
    accordeon[i].addEventListener('click', function(){
            this.classList.toggle('active');

            let panel = this.nextElementSibling;

            if(panel.style.display === 'block'){
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
            
        })
}