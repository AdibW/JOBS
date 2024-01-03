export class OpportunityModel {
  "Disponibilité:": string
  "Expérience:": string
  "Langues:": string
  "Lieu de travail:": string
  "Mobilité:": string
  "Publiée le:": string
  "Référence:": string
  "Rémunération proposée:": string
  "Type de poste:": string
  "link": string
  "Étude:": string


  constructor(disponibilité_: string, expérience_: string, langues_: string, lieu_de_travail_: string, mobilité_: string, publiée_le_: string, référence_: string, rémunération_proposée_: string, type_de_poste_: string, link: string, étude_: string) {
    this["Disponibilité:"] = disponibilité_;
    this["Expérience:"] = expérience_;
    this["Langues:"] = langues_;
    this["Lieu de travail:"] = lieu_de_travail_;
    this["Mobilité:"] = mobilité_;
    this["Publiée le:"] = publiée_le_;
    this["Référence:"] = référence_;
    this["Rémunération proposée:"] = rémunération_proposée_;
    this["Type de poste:"] = type_de_poste_;
    this.link = link;
    this["Étude:"] = étude_;
  }
}
