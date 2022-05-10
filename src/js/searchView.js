import view from "./view";

class Search {
  _parentEl = document.querySelector(".search");
  _infoBox = document.querySelector(".info");

  _getQuery() {
    const query = this._parentEl.querySelector(".search__input").value;
    console.log(query);

    this._clearInput();
    return query;
  }

  _clearInput() {
    this._infoBox.innerHTML = "";
  }

  addHandlerRendrer(handler) {
    this._searchBtn.addEventListener("click", handler);
  }

  searchHandlerRender(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new Search();
