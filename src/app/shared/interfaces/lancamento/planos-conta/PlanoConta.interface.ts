export interface PlanoConta {
  descricao: string;
  id: number;
  login: string;
  padrao: boolean;
  tipoMovimento: 'D'| 'R' | 'TC' | 'TU';
}
