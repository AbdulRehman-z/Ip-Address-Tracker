import { ipAddress as data } from "./modal";
import icons from "../../images/icons.svg";
class View {
  _parentEl = document.getElementById("map");
  _infoBox = document.querySelector(".info");

  startIpRendrer(handler) {
    window.addEventListener("load", handler);
  }

  render(data) {
    console.log("king", data);
    const markUp = this.generateMarkup(data);
    this._infoBox.insertAdjacentHTML("beforeend", markUp);
  }

  renderSpinner() {
    const markUp = `
         <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
  `;
    this._infoBox.innerHTML = "";
    this._infoBox.insertAdjacentHTML("afterbegin", markUp);
  }

  _clear() {
    this._infoBox.innerHTML = "";
  }

  generateMarkup(data) {
    return ` 
      <div class="info__box info__box--1">
        <span class="info__identifier">IP ADDRESS</span>
        <span class="info__result">${data.ipAddress}</span>
      </div>
      <span class="info__border"></span>
      <div class="info__box">
        <span class="info__identifier">LOCATION</span>
        <span class="info__result">${data.region}, ${data.city}</span>
      </div>
      <span class="info__border"></span>
      <div class="info__box">
        <span class="info__identifier">TIMEZONE</span>
        <span class="info__result">${data.timezone}</span>
      </div>
      <span class="info__border"></span>
      <div class="info__box">
        <span class="info__identifier">ISP</span>
        <span class="info__result">${
          data.isp === "CMPak Limited" ? "Zong Pakistan" : "CMPak Limited"
        }</span>
      </div>
    `;
  }
}
export default new View();
