import getPageLanguage from "@canadahelps/chutils/lib/js/get_page_language";

export interface LocalizedMessages {}

export interface Messages {
  en: LocalizedMessages;
  fr: LocalizedMessages;
}

export const messages: Messages = {
  en: {},
  fr: {},
};

export const getMessages = (lang = null): LocalizedMessages => {
  const currentLang = lang || getPageLanguage();
  return messages[currentLang];
};

export default messages;
