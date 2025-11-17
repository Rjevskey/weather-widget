import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App).mount("#app");
app.derective("focus", {
    mounted: (el) => el.focus(),
});
app.mount("#app");
