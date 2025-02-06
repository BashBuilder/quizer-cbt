// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { AES, enc } from "crypto-js";

// const $key = process.env.NEXT_PUBLIC_ENCRYPT_KEY as string;

// export const encrypt = (data: any) => {
//   if (data) {
//     return AES.encrypt(data, $key).toString();
//   }
//   return null;
// };

// export const decrypt = (data: any) => {
//   if (data) {
//     const bytes = AES.decrypt(data, $key);
//     return JSON.parse(bytes.toString(enc.Utf8));
//   }
//   return null;
// };

// export const encryptRememberme = (data: any) => {
//   if (data) {
//     const stringData = typeof data === "string" ? data : JSON.stringify(data);
//     return AES.encrypt(stringData, $key).toString();
//   }
//   return null;
// };

// export const decryptRememberme = (data: any) => {
//   if (data) {
//     try {
//       const bytes = AES.decrypt(data, $key);
//       const plainText = bytes.toString(enc.Utf8);
//       return JSON.parse(plainText);
//     } catch (error) {
//       console.error("Error decrypting or parsing data:", error);
//       return null;
//     }
//   }
//   return null;
// };
