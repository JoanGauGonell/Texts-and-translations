# Texts and translations management on new UI

## i18next
i18next is a highly used internationalization library for JavaScript in web applications to facilitate the translation of texts into different languages. It provides a complete solution to manage localization in JavaScript projects including Node.js and the browser. It allows developers to separate texts and translation strings from the source code by organizing them into specific language files, which makes managing multiple languages in a project easier. i18next is compatible with several frontend frameworks such as React, Angular, and Vue through specific plugins or modules, which facilitates its integration into various application architectures.


### i18next Configuration File

<img width="1046" alt="image" src="https://github.com/JoanGauGonell/Texts-and-translations/assets/100577733/b0b130bc-d390-4d67-b2bd-d710a2c930c7">

1.- import i18n from 'i18next': Here, the main module of i18next is being imported, which is used to instantiate the internationalization service.

2.- import LanguageDetector from 'i18next-browser-languagedetector': This imports the language detector that allows i18next to detect the user's language through the browser, for example, by looking in the browser's language settings or in a cookie.

3.- import translationsEN from './locales/en/translations.json': Here, the translations for English are imported from a specific JSON file containing the translated texts.

4.- import HttpBackend from 'i18next-http-backend': This imports a backend for i18next that allows loading translations from a remote server. This is useful if you want to load translations dynamically rather than including them as static files in your project. It can load translation resources from a server endpoint each time a language or namespace that has not yet been loaded is needed.

5.-const resources: This is an object that defines the available translation resources, structured by language and then by namespace (translations in this case). Each language has its own object that refers to the imports of the corresponding JSON files.

6.-i18n.use(initReactI18next): This indicates that i18next should use the initReactI18next plugin, which initializes i18next to be compatible with React.

7.-i18n.init(): This method starts the i18next object with the provided configuration. Here, various parameters are configured, such as resources (the languages and available translations), the fallback language, and the language detection behavior.

8.-detection: Within the init method, this object configures the language detection options. It defines the order in which i18next will search for the user's language, such as in the query string, cookies, local storage, HTML tags, and whether to detect the subdomain as a language.

9.-order: ['queryString', 'cookie', ...]: This is part of the language detection configuration and specifies the order of the language detection methods that i18next will try to use. For example, it will first look for a query in the URL (queryString), then in cookies, etc.

### JSON File Structure: 

Make sure the JSON file is well-formed and follows the key-value structure that i18next expects. Each key represents a translation identifier, and each value is the corresponding translation.
json.

{
  "key": "Text to translate”
}

### Organization of the Files:
The JSON files are organized in folders representing each supported language.

/locales
 	 /en
   	  translation.json
 /es
  translation.json
 	 /de
   	  translation.json

### Importing the Translation Function in the React Component:
You should import the t function from i18next or from the useTranslation hook if you are using React.

import { withTranslation } from 'react-i18next';

Use the t function to obtain the text string translated corresponding to the specified key.

<img width="655" alt="image" src="https://github.com/JoanGauGonell/Texts-and-translations/assets/100577733/b0b3fe00-572c-4af4-a074-e692b993882b">



## Localization Management Platform
### Crowdin:

CrowdIn is a cloud-based localization platform that allows developers and content creators to manage the multilingual translation of their projects. It is widely used for software projects, games, mobile applications, websites, and related content.

The platform allows online collaboration of translators, enabling multiple contributors to work simultaneously on the translation and localization of content. CrowdIn integrates quality control tools, glossaries, and translation memories to ensure the consistency and quality of translations. It also offers integrations with version control systems such as Git, which facilitates the synchronization of localization files with the project's source code.

With CrowdIn, users can upload files with text strings (such as .json, .xml, .strings files, etc.), and then these files can be translated on the platform by human translators or with the help of automatic translation. The platform also provides automation and workflow features to optimize the localization process and make the translation lifecycle more efficient.

#### Integration of Crowdin with Github:

<img width="916" alt="image" src="https://github.com/JoanGauGonell/Texts-and-translations/assets/100577733/5dfce0d7-72ab-49c9-a4b1-38f22efe99b2">


Source: Defines the path and source file that contains the strings to be translated. For example, /src/locales/en/translations.json is the path to the English translation file that will be used as a base for other languages.

Translation: This line specifies the path and name of the file that will be generated for each language after translation. The parts {%lng} and {%ns} are variables; {%lng} will be replaced by the language code (like 'es' for Spanish, 'de' for German, etc.) and {%ns} by the namespace if namespaces are used to organize translations. So /locales/{%lng}/{%ns}.json indicates where and how the translations will be saved.

Multilingual: If set to 1, it indicates that the project is multilingual and therefore will manage several translations for different languages.
This is part of the configuration for integrating CrowdIn with a code repository, allowing the automation of the localization process. For example, each time the source file is updated, CrowdIn can detect those changes and make the new strings available for translation automatically. Similarly, completed translations can be synchronized back to the repository.
When you save this configuration, a crowdin.yml file is created or updated in the specified branch (in this case, it seems to be the master branch). This file is used by CrowdIn to understand how to manage translations for the project.

### Localise:
Localise is a platform designed to streamline the localization process for digital products like apps, games, and websites. It provides an environment where developers, translators, and project managers can collaborate to translate text content into various languages.

The platform simplifies the process by offering features like an online editor, where translations can be edited and reviewed in real-time. Localise supports automated translations, which can serve as a starting point for human translators to refine. It also integrates with version control systems to synchronize content with your codebase efficiently.
Localise's workflow management allows for setting up custom workflows, defining roles and permissions, and automating repetitive tasks with webhooks and APIs. This enables a seamless process from content creation to translation and deployment.

By uploading text strings in formats like JSON, XML, or other localization file formats, Localise organizes the content into projects. Translators can work directly within the platform, using glossaries and style guides to ensure consistency and quality across languages.

In terms of integration, Localise offers SDKs and API access for dynamic content localization, making it possible to fetch translations on-the-fly without the need to redeploy your application. This can significantly speed up the process of updating text across different languages and markets.

### Open source localization management platforms
#### Weblate: 
A web-based localization tool with a user-friendly interface that allows contributors to participate in the translation of projects. It offers version control system integration and features such as translation job management and quality checks.

#### Pootle: 
An online platform that enables translation teams to collaborate on software localization and other projects. It includes features like translation suggestions, translation memories, and contribution reviews.

