"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMulter = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const fileFillter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/webp") {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported file type. Only JPEG, PNG, and WEBP are allowed.'));
    }
};
exports.uploadMulter = (0, multer_1.default)({ storage, fileFilter: fileFillter });
