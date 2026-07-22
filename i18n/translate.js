async function loadTranslations() {
  const language =
    navigator.languages?.[0]?.split("-")[0] ??
    navigator.language.split("-")[0];

  const en = await fetch("./i18n/locales/en.json").then((r) => r.json());
  const pt = await fetch("./i18n/locales/pt.json").then((r) => r.json());

  await i18next.init({
    lng: language,
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key) {
      element.textContent = i18next.t(key);
    }
  });
}

loadTranslations();