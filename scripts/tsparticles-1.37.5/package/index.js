"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.Main = exports.Rectangle = exports.Point = exports.Constants = exports.CircleWarp = exports.Circle = void 0;
const pjs_1 = require("./pjs");
const main_1 = require("./main");
Object.defineProperty(exports, "Main", { enumerable: true, get: function () { return main_1.Main; } });
const Utils_1 = require("./Utils");
Object.defineProperty(exports, "Circle", { enumerable: true, get: function () { return Utils_1.Circle; } });
Object.defineProperty(exports, "CircleWarp", { enumerable: true, get: function () { return Utils_1.CircleWarp; } });
Object.defineProperty(exports, "Constants", { enumerable: true, get: function () { return Utils_1.Constants; } });
Object.defineProperty(exports, "Point", { enumerable: true, get: function () { return Utils_1.Point; } });
Object.defineProperty(exports, "Rectangle", { enumerable: true, get: function () { return Utils_1.Rectangle; } });
const full_1 = require("./full");
const tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
const { particlesJS, pJSDom } = (0, pjs_1.initPjs)(tsParticles);
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
(0, full_1.loadFull)(tsParticles);
__exportStar(require("./Core/Particle/Vector"), exports);
__exportStar(require("./Core/Container"), exports);
__exportStar(require("./Enums"), exports);
__exportStar(require("./Plugins/Absorbers/Enums"), exports);
__exportStar(require("./Plugins/Emitters/Enums"), exports);
__exportStar(require("./Plugins/PolygonMask/Enums"), exports);
__exportStar(require("./Utils/CanvasUtils"), exports);
__exportStar(require("./Utils/ColorUtils"), exports);
__exportStar(require("./Utils/NumberUtils"), exports);
__exportStar(require("./Utils/Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Core/Interfaces"), exports);
__exportStar(require("./Core/Particle"), exports);
__exportStar(require("./Core/ExternalInteractorBase"), exports);
__exportStar(require("./Core/ParticlesInteractorBase"), exports);