import { createApp } from 'vue'
import App from './App.vue'

// todo：暂时无视下面的警告  
import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'

const app = createApp(App)
app.use(VueAmazingUI)

app.mount('#app')