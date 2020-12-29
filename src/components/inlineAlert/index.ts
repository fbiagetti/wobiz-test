import { App as Application } from "vue";
import InlineAlert from "./InlineAlert.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, InlineAlert);
  }
};

export default Plugin;

export { InlineAlert };