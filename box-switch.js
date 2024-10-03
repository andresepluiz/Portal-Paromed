class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        this.navLinks.forEach((link)=>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button-faturas').addEventListener('click', function() {
        document.getElementById('box-central-faturas').classList.remove('hidden');
    });

    document.getElementById('button-contratos').addEventListener('click', function() {
        document.getElementById('box-central-faturas').classList.add('hidden');
    });
   
    document.getElementById('button-cancelamento').addEventListener('click', function() {
        document.getElementById('box-central-faturas').classList.add('hidden');
    });
 //AÇÃO BOTÃO ABRE E FECHA BOX FATURA
    document.getElementById('button-contratos').addEventListener('click', function() {
        document.getElementById('box-central-contratos').classList.remove('hidden');
    });

    document.getElementById('button-faturas').addEventListener('click', function() {
        document.getElementById('box-central-contratos').classList.add('hidden');
    });

    document.getElementById('button-cancelamento').addEventListener('click', function() {
        document.getElementById('box-central-contratos').classList.add('hidden');
    });
    //AÇÃO BOTÃO ABRE E FECHA BOX CONTRATOS
    document.getElementById('button-cancelamento').addEventListener('click', function() {
        document.getElementById('box-central-cancelamento').classList.remove('hidden');
    });

    document.getElementById('button-faturas').addEventListener('click', function() {
        document.getElementById('box-central-cancelamento').classList.add('hidden');
    });

    document.getElementById('button-contratos').addEventListener('click', function() {
        document.getElementById('box-central-cancelamento').classList.add('hidden');
    });
    //AÇÃO BOTÃO ABRE E FECHA BOX CONTRATOS
});
