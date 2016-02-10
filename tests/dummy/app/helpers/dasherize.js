import Ember from 'ember';

const {
  String: { dasherize: emberDasherize },
  Helper: { helper }
} = Ember;

export function dasherize([str]) {
  str = str || '';
  return emberDasherize(str);
}

export default helper(dasherize);
