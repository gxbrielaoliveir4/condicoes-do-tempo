"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizacao");
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input)
        return;
    const localizaçao = input.value;
    if (localizaçao.length < 3) {
        alert('o local precisa ter pelo menos 3 letras. ');
        return;
    }
    const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizaçao}&appid=f03a51d816916ca067830d65866f9ecc&lang=pt_br&units=metric`);
    const dados = yield resposta.json();
    console.log(dados);
}));
