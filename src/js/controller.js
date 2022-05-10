import * as modal from "./modal";
// import view from "./view";
import searchView from "./searchView";
import View from "./view";

const onStartController = async function () {
  try {
    View.renderSpinner();

    await modal.loadIpAddress();
    View._clear();
    View.render(modal.state.ipAddressObject);
    modal.loadMap(modal.state);
  } catch (err) {
    console.log(err);
  }
};

const searchResultController = async function () {
  try {
    const query = searchView._getQuery();
    // debugger;
    console.log(query);

    if (!query) return;
    View.renderSpinner();

    await modal.loadIpAddress(query);
    View._clear();

    View.render(modal.state.ipAddressObject);
    modal.loadMap(modal.state);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  View.startIpRendrer(onStartController);
  searchView.searchHandlerRender(searchResultController);
};
init();

// if (module.hot) {
//   module.hot.accept();
// }
