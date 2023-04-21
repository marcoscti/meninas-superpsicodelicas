"use strict";
let minicart = document.querySelector('.cart');
let closeMinicart = document.querySelector('.btn-close-minicart');
let minicartContainer = document.querySelector('.minicart-container');
minicart === null || minicart === void 0 ? void 0 : minicart.addEventListener('click', (e) => {
    if ((minicartContainer === null || minicartContainer === void 0 ? void 0 : minicartContainer.classList[1]) === undefined) {
        minicartContainer === null || minicartContainer === void 0 ? void 0 : minicartContainer.classList.add('active');
    }
    else {
        minicartContainer === null || minicartContainer === void 0 ? void 0 : minicartContainer.classList.remove('active');
    }
});
closeMinicart === null || closeMinicart === void 0 ? void 0 : closeMinicart.addEventListener('click', (e) => {
    if ((minicartContainer === null || minicartContainer === void 0 ? void 0 : minicartContainer.classList[1]) === 'active') {
        minicartContainer === null || minicartContainer === void 0 ? void 0 : minicartContainer.classList.remove('active');
    }
});
