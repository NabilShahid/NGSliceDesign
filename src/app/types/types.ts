export interface FormField {
  Valid: boolean;
  InvalidText: string;
}

export interface TableCol{
    Label:string,
    GridSize:number,
    DataKey:string,
    Align:string,
    Footer?:string,
    FooterLabel?:string
}
