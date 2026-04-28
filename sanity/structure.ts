import type { StructureResolver } from "sanity/desk";

const singletonTypes = new Set(["siteSettings", "homepage", "academyPage", "competitionPage", "wojtekProfile", "contactPage", "joinPage"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Site settings").id("siteSettings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem().title("Homepage").id("homepage").child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem().title("About / Academy").id("academyPage").child(S.document().schemaType("academyPage").documentId("academyPage")),
      S.listItem().title("Competition page").id("competitionPage").child(S.document().schemaType("competitionPage").documentId("competitionPage")),
      S.listItem().title("Wojtek profile").id("wojtekProfile").child(S.document().schemaType("wojtekProfile").documentId("wojtekProfile")),
      S.listItem().title("Contact page").id("contactPage").child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.listItem().title("Join page").id("joinPage").child(S.document().schemaType("joinPage").documentId("joinPage")),
      S.listItem().title("News & Success").id("newsArticle").child(S.documentTypeList("newsArticle").title("News & Success")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() || "") && listItem.getId() !== "newsArticle"
      )
    ]);

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const singletonDocuments = singletonTypes;
