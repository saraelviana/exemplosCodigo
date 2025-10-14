class MobileNavBar{
    /*toda clsss tem o metodo constructor */

    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu=document.querySelector(mobileMenu);
        this.navList=document.querySelector(navList)
        this.navLinks=document.querySelector(navLinks)
        this.activeClass="active";

        this.handleClick = this.handleClick.bind(this);

    }

    animatelinks(){
        this.navList.forEach(link)=>{
            /*vamos verificar,se o link possui a propriedade animation*/
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s´);
        }
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);

        /*vamos criar um novo metodo apenas para criar estes links */
        this.animatelinks();
    }


    /*adicionar o metodo de click no botao do menu*/
    addClickEvent(){
        this.mobileMenu.addEventListerner("click" );
    }
    /* vamos criar um metodo que inicia a função*/
    int(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }


}