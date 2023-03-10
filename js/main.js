import { Router } from "./router.js";

let router = new Router()

router.add("/", "/pages/home.html")
router.add("/universo","/pages/universo.html")
router.add("/explorer","/pages/explorer.html")
router.add(404,"/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()