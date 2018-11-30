export const OPTIONS_CIVIL_STATUS = [
    { value: 'solteiro', label: 'Solteiro(a)', label_m: "Solteiro", label_f: "Solteira" },
    { value: 'casado', label: 'Casado(a)', label_m: "Casado", label_f: "Casada" },
    { value: 'separado', label: 'Separado(a)', label_m: "Separado", label_f: "Separada" },
    { value: 'divorciado', label: 'Divorciado(a)', label_m: "Divorciado", label_f: "Divorciada" },
    { value: 'viuvo', label: 'Viúvo(a)', label_m: "Viúvo", label_f: "Viúva" }
];

export const OPTIONS_STATES_OF_BRAZIL = [
    {state: 'Acre', uf: 'AC'},
    {state: 'Alagoas', uf: 'AL'},
    {state: 'Amapá ', uf: 'AP'},
    {state: 'Amazonas ', uf: 'AM'},
    {state: 'Bahia', uf: 'BA'},
    {state: 'Ceará', uf: 'CE'},
    {state: 'Distrito Federal ', uf: 'DF'},
    {state: 'Espírito Santo ', uf: 'ES'},
    {state: 'Goiás', uf: 'GO'},
    {state: 'Maranhão', uf: 'MA'},
    {state: 'Mato Grosso', uf: 'MT'},
    {state: 'Mato Grosso do Sul', uf: 'MS'},
    {state: 'Minas Gerais', uf: 'MG'},
    {state: 'Pará', uf: 'PA'},
    {state: 'Paraíba', uf: 'PB'},
    {state: 'Paraná', uf: 'PR'},
    {state: 'Pernambuco', uf: 'PE'},
    {state: 'Piauí', uf: 'PI'},
    {state: 'Rio de Janeiro', uf: 'RJ'},
    {state: 'Rio Grande do Norte', uf: 'RN'},
    {state: 'Rio Grande do Sul', uf: 'RS'},
    {state: 'Rondônia', uf: 'RO'},
    {state: 'Roraima', uf: 'RR'},
    {state: 'Santa Catarina', uf: 'SC'},
    {state: 'São Paulo', uf: 'SP'},
    {state: 'Sergipe', uf: 'SE'},
    {state: 'Tocantins', uf: 'TO'},
];

export const OPTIONS_SELECT_SEMESTER_OR_YEAR = {
    semester: [
        {value: '1semestre', label: '1° Semestre'},
        {value: '2semestre', label: '2° Semestre'},
        {value: '3semestre', label: '3° Semestre'},
        {value: '4semestre', label: '4° Semestre'},
        {value: '5semestre', label: '5° Semestre'},
        {value: '6semestre', label: '6° Semestre'},
        {value: '7semestre', label: '7° Semestre'},
        {value: '8semestre', label: '8° Semestre'},
        {value: '9semestre', label: '9° Semestre'},
        {value: '10semestre', label: '10° Semestre'},
        {value: '11semestre', label: '11° Semestre'},
        {value: '12semestre', label: '12° Semestre'},
        {value: '13semestre', label: '13° Semestre'},
        {value: '14semestre', label: '14° Semestre'},
        {value: '15semestre', label: '15° Semestre'},
    ],
    year: [
        {value: '1ano', label: '1° Ano'},
        {value: '2ano', label: '2° Ano'},
        {value: '3ano', label: '3° Ano'},
        {value: '4ano', label: '4° Ano'},
        {value: '5ano', label: '5° Ano'},
        {value: '6ano', label: '6° Ano'},
        {value: '7ano', label: '7° Ano'},
        {value: '8ano', label: '8° Ano'},
    ]
};

export const OPTIONS_PERIOD = [
    {value: 'matutino', label: 'Matutino'},
    {value: 'vespertino', label: 'Vespertino'},
    {value: 'noturno', label: 'Noturno'},
    {value: 'diurno', label: 'Diurno'},
];

export const OPTIONS_STATUS = [
    {value: 'incompleto', label: 'Incompleto'},
    {value: 'cursando', label: 'Cursando'},
    {value: 'completo', label: 'Concluído'},
];

export const PICKERLANG = {
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    from: 'Início:', to: 'Fim:',
};

export const OPTIONS_SEX = [
    {value: 'F', label: 'Feminino'},
    {value: 'M', label: 'Masculino'},
    {value: 'I', label: 'Outro'},
    {value: 'NoInformed', label: 'Prefiro não informar'},
];