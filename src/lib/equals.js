import assertString from './util/assertString';

const deafaultOptions = {
  // set the sensitivity mode ''' base | accent | varient '''
  sensitivity: undefined,
  // set local language for ex 'en'
  locales: undefined,
};

export default function equals(str, comparison, options = deafaultOptions) {
  assertString(str);

  // If sensitivity option is not defined return basic comparison
  // else return comaprision with str.localCompare
  return (options.sensitivity === undefined) ?
    (str === comparison) :
    str.localeCompare(comparison, options.locales, { sensitivity: options.sensitivity }) === 0;
}
