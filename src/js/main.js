(function stickyNav (){
    const NavStick = {
        init() {
            document.documentElement.classList.add('js-enabled');
            this.nav = document.querySelector('#main');
            this.topNav = this.nav.offsetTop;
            this.addEventListeners();
        },
        addEventListeners() {
            window.addEventListener('scroll', () => {
                if (window.scrollY > this.topNav) {
                    document.body.classList.add('fixed-nav');
                } else {
                    document.body.classList.remove('fixed-nav');
                }
            });
        }
};
NavStick.init();
}());