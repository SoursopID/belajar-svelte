import { mount } from 'svelte'
import './app.css'
import App from './lib/ArticleApp.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
