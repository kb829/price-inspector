import Navigation from '../components/core/Navigation.vue'
import Appbar from '../components/core/AppBar.vue'

function setupComponents(app: any){
    app.component('navigation', Navigation);
    app.component('appbar', Appbar);
}

export {
    setupComponents
}