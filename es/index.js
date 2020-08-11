import toDate from './lib/toDate';
import toFloat from './lib/toFloat';
import toInt from './lib/toInt';
import toBoolean from './lib/toBoolean';
import equals from './lib/equals';
import contains from './lib/contains';
import matches from './lib/matches';
import isEmail from './lib/isEmail';
import isURL from './lib/isURL';
import isMACAddress from './lib/isMACAddress';
import isIP from './lib/isIP';
import isIPRange from './lib/isIPRange';
import isFQDN from './lib/isFQDN';
import isDate from './lib/isDate';
import isBoolean from './lib/isBoolean';
import isLocale from './lib/isLocale';
import isAlpha, { locales as isAlphaLocales } from './lib/isAlpha';
import isAlphanumeric, { locales as isAlphanumericLocales } from './lib/isAlphanumeric';
import isNumeric from './lib/isNumeric';
import isPassportNumber from './lib/isPassportNumber';
import isPort from './lib/isPort';
import isLowercase from './lib/isLowercase';
import isUppercase from './lib/isUppercase';
import isIMEI from './lib/isIMEI';
import isAscii from './lib/isAscii';
import isFullWidth from './lib/isFullWidth';
import isHalfWidth from './lib/isHalfWidth';
import isVariableWidth from './lib/isVariableWidth';
import isMultibyte from './lib/isMultibyte';
import isSemVer from './lib/isSemVer';
import isSurrogatePair from './lib/isSurrogatePair';
import isInt from './lib/isInt';
import isFloat, { locales as isFloatLocales } from './lib/isFloat';
import isDecimal from './lib/isDecimal';
import isHexadecimal from './lib/isHexadecimal';
import isOctal from './lib/isOctal';
import isDivisibleBy from './lib/isDivisibleBy';
import isHexColor from './lib/isHexColor';
import isRgbColor from './lib/isRgbColor';
import isHSL from './lib/isHSL';
import isISRC from './lib/isISRC';
import isIBAN from './lib/isIBAN';
import isBIC from './lib/isBIC';
import isMD5 from './lib/isMD5';
import isHash from './lib/isHash';
import isJWT from './lib/isJWT';
import isJSON from './lib/isJSON';
import isEmpty from './lib/isEmpty';
import isLength from './lib/isLength';
import isByteLength from './lib/isByteLength';
import isUUID from './lib/isUUID';
import isMongoId from './lib/isMongoId';
import isAfter from './lib/isAfter';
import isBefore from './lib/isBefore';
import isIn from './lib/isIn';
import isCreditCard from './lib/isCreditCard';
import isIdentityCard from './lib/isIdentityCard';
import isEAN from './lib/isEAN';
import isISIN from './lib/isISIN';
import isISBN from './lib/isISBN';
import isISSN from './lib/isISSN';
import isTaxID from './lib/isTaxID';
import isMobilePhone, { locales as isMobilePhoneLocales } from './lib/isMobilePhone';
import isEthereumAddress from './lib/isEthereumAddress';
import isCurrency from './lib/isCurrency';
import isBtcAddress from './lib/isBtcAddress';
import isISO8601 from './lib/isISO8601';
import isRFC3339 from './lib/isRFC3339';
import isISO31661Alpha2 from './lib/isISO31661Alpha2';
import isISO31661Alpha3 from './lib/isISO31661Alpha3';
import isBase32 from './lib/isBase32';
import isBase64 from './lib/isBase64';
import isDataURI from './lib/isDataURI';
import isMagnetURI from './lib/isMagnetURI';
import isMimeType from './lib/isMimeType';
import isLatLong from './lib/isLatLong';
import isPostalCode, { locales as isPostalCodeLocales } from './lib/isPostalCode';
import ltrim from './lib/ltrim';
import rtrim from './lib/rtrim';
import trim from './lib/trim';
import escape from './lib/escape';
import unescape from './lib/unescape';
import stripLow from './lib/stripLow';
import whitelist from './lib/whitelist';
import blacklist from './lib/blacklist';
import isWhitelisted from './lib/isWhitelisted';
import normalizeEmail from './lib/normalizeEmail';
import isSlug from './lib/isSlug';
import isRingCentralIvrPin from './lib/isRingCentralIvrPin';
import isRingCentralPassword from './lib/isRingCentralPassword';
import isLimitedExtensionPostRequest from './lib/isLimitedExtensionPostRequest';
var version = '13.1.1';
var validator = {
  version: version,
  toDate: toDate,
  toFloat: toFloat,
  toInt: toInt,
  toBoolean: toBoolean,
  equals: equals,
  contains: contains,
  matches: matches,
  isEmail: isEmail,
  isURL: isURL,
  isMACAddress: isMACAddress,
  isIP: isIP,
  isIPRange: isIPRange,
  isFQDN: isFQDN,
  isBoolean: isBoolean,
  isIBAN: isIBAN,
  isBIC: isBIC,
  isAlpha: isAlpha,
  isAlphaLocales: isAlphaLocales,
  isAlphanumeric: isAlphanumeric,
  isAlphanumericLocales: isAlphanumericLocales,
  isNumeric: isNumeric,
  isPassportNumber: isPassportNumber,
  isPort: isPort,
  isLowercase: isLowercase,
  isUppercase: isUppercase,
  isAscii: isAscii,
  isFullWidth: isFullWidth,
  isHalfWidth: isHalfWidth,
  isVariableWidth: isVariableWidth,
  isMultibyte: isMultibyte,
  isSemVer: isSemVer,
  isSurrogatePair: isSurrogatePair,
  isInt: isInt,
  isIMEI: isIMEI,
  isFloat: isFloat,
  isFloatLocales: isFloatLocales,
  isDecimal: isDecimal,
  isHexadecimal: isHexadecimal,
  isOctal: isOctal,
  isDivisibleBy: isDivisibleBy,
  isHexColor: isHexColor,
  isRgbColor: isRgbColor,
  isHSL: isHSL,
  isISRC: isISRC,
  isMD5: isMD5,
  isHash: isHash,
  isJWT: isJWT,
  isJSON: isJSON,
  isEmpty: isEmpty,
  isLength: isLength,
  isLocale: isLocale,
  isByteLength: isByteLength,
  isUUID: isUUID,
  isMongoId: isMongoId,
  isAfter: isAfter,
  isBefore: isBefore,
  isIn: isIn,
  isCreditCard: isCreditCard,
  isIdentityCard: isIdentityCard,
  isEAN: isEAN,
  isISIN: isISIN,
  isISBN: isISBN,
  isISSN: isISSN,
  isMobilePhone: isMobilePhone,
  isMobilePhoneLocales: isMobilePhoneLocales,
  isPostalCode: isPostalCode,
  isPostalCodeLocales: isPostalCodeLocales,
  isEthereumAddress: isEthereumAddress,
  isCurrency: isCurrency,
  isBtcAddress: isBtcAddress,
  isISO8601: isISO8601,
  isRFC3339: isRFC3339,
  isISO31661Alpha2: isISO31661Alpha2,
  isISO31661Alpha3: isISO31661Alpha3,
  isBase32: isBase32,
  isBase64: isBase64,
  isDataURI: isDataURI,
  isMagnetURI: isMagnetURI,
  isMimeType: isMimeType,
  isLatLong: isLatLong,
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim,
  escape: escape,
  unescape: unescape,
  stripLow: stripLow,
  whitelist: whitelist,
  blacklist: blacklist,
  isWhitelisted: isWhitelisted,
  normalizeEmail: normalizeEmail,
  toString: toString,
  isSlug: isSlug,
  isTaxID: isTaxID,
  isDate: isDate,
  isRingCentralIvrPin: isRingCentralIvrPin,
  isRingCentralPassword: isRingCentralPassword,
  isLimitedExtensionPostRequest: isLimitedExtensionPostRequest
};
export default validator;