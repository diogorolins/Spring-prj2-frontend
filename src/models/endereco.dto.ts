import { CidadeDTO } from "./cidade.dto";

export class EnderecoDTO {
  id: string;
  street: string;
  number: string;
  compl: string;
  neighborhood: string;
  zipCode: string;
  city: CidadeDTO;

}