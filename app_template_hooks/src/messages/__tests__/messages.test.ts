import {getMessages} from "../index";

describe('messages', () => {
  it('should get all messages in english', () => {
    const messages = getMessages('en');
    Object.keys(messages).forEach(key => {
      expect(messages[key]()).toBeDefined();
    })
  });
  it('should get all messages in french', () => {
    const messages = getMessages('fr');
    Object.keys(messages).forEach(key => {
      expect(messages[key]()).toBeDefined();
    })
  });
});