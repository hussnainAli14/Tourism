import { En } from "./en";
import { fr } from "./fr";

export const useLangTranslation = (lang, screenType) => {
    if (lang === 'fr' && fr[screenType]) {
        return fr[screenType];
    }
    if (lang === 'en' && En[screenType]) {
        return En[screenType];
    }
    else {
        const errorMessage = lang === 'fr' ? 'Erreur : Traduction introuvable' : 'Error: Translation not found';
        console.log(`${errorMessage} for screen type "${screenType}" in language "${lang}".`);
        throw new Error(errorMessage);
    }
};

// export default useLangTranslation;
