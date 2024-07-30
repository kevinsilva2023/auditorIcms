import { Component } from '@angular/core';

@Component({
  selector: 'app-auditor-icms-entradas',
  templateUrl: './auditor-icms-entradas.component.html',
  styleUrls: ['./auditor-icms-entradas.component.scss']
})
export class AuditorIcmsEntradasComponent {


  notas = [
    {
      cfop: 1101,
      contabil: 'R$ 60.811,74',
      bcIcms: 'R$ 59.739,01',
      icms: 'R$ 10.520,06',
      isentos: 'R$ 0,00',
      outros: 'R$ 256,14',
      ipi: 'R$ 816,59',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar Crédito de ICMS',
    },
    {
      cfop: 1252,
      contabil: 'R$ 5.419,21',
      bcIcms: 'R$ 0,00',
      icms: 'R$ 0,00',
      isentos: 'R$ 0,00',
      outros: 'R$ 5.419,21',
      ipi: 'R$ 0,00',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: null,
    },
    {
      cfop: 1901,
      contabil: 'R$ 17.823,09',
      bcIcms: 'R$ 0,00',
      icms: 'R$ 0,00',
      isentos: 'R$ 0,00',
      outros: 'R$ 177.823,09',
      ipi: 'R$ 0,00',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: null,
    },
    {
      cfop: 1949,
      contabil: 'R$ 2.292,21',
      bcIcms: 'R$ 0,00',
      icms: 'R$ 0,00',
      isentos: 'R$ 0,00',
      outros: 'R$ 2.292,21',
      ipi: 'R$ 0,00',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: null,
    },
    {
      cfop: 2101,
      contabil: 'R$ 46.672,62',
      bcIcms: 'R$ 41.385,60',
      icms: 'R$ 1.554,91',
      isentos: 'R$ 0,00',
      outros: 'R$ 5.287,02',
      ipi: 'R$ 0,00',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: "Verificar Crédito de Icms",
    },
    {
      cfop: 3101,
      contabil: 'R$ 84.204,50',
      bcIcms: 'R$ 84.204,50',
      icms: 'R$ 15.156,881',
      isentos: 'R$ 0,00',
      outros: 'R$ 0,00',
      ipi: 'R$ 1.966,03',
      iniInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: '-R$ 1.966,03',
      msg: "Existe diferença no cálculos",
    }
  ]

  itens = [
    {
      lancto: 2,
      nota: 622,
      emitente: 'CONTEPORANEA COMERCIO DE ESSENCIIAS',
      cfop: 2101,
      vlCont: 'R$ 5.208,51',
      bsIcms: 'R$ 5.130,00',
      icms: 'R$ 104,69',
      isentos: 'R$ 0,00',
      outros: 'R$ 78,51',
      ipi: 'R$ 0,00',
      ipiInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar crédito de Icms',
    },
    {
      lancto: 4,
      nota: 23021,
      emitente: 'NUTRI.COM MATRIZ SP',
      cfop: 1101,
      vlCont: 'R$ 3.277,95',
      bsIcms: 'R$ 3.277,95',
      icms: 'R$ 590,03',
      isentos: 'R$ 0,00',
      outros: 'R$ 0,00',
      ipi: 'R$ 0,00',
      ipiInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar crédito de Icms',
    },
    {
      lancto: 5,
      nota: 54374,
      emitente: 'COMERCIAL INTER-LINK LTDA',
      cfop: 11011,
      vlCont: 'R$ 6.143,77',
      bsIcms: 'R$ 6.143,77',
      icms: 'R$ 1.105,0',
      isentos: 'R$ 0,00',
      outros: 'R$ 0,00',
      ipi: 'R$ 0,00',
      ipiInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar crédito de Icms',
    },
    {
      lancto: 6,
      nota: 24330,
      emitente: 'UNIFIBRA EMBALAGENS LTDA',
      cfop: 1101,
      vlCont: 'R$ 1.070,06',
      bsIcms: 'R$ 9775,00',
      icms: 'R$ 15,70',
      isentos: 'R$ 0,00',
      outros: 'R$ 0,00',
      ipi: 'R$ 95,06',
      ipiInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar crédito de Icms',
    },
    {
      lancto: 8,
      nota: 5692,
      emitente: 'CHR OLESEN NUTRITION COM DE INS ALI LTDA',
      cfop: 1101,
      vlCont: 'R$ 25.742,40',
      bsIcms: 'R$ 25.742,40',
      icms: 'R$ 4.633,63',
      isentos: 'R$ 0,00',
      outros: 'R$ 0,00',
      ipi: 'R$ 0,00',
      ipiInc: 'R$ 0,00',
      st: 'R$ 0,00',
      fcp: 'R$ 0,00',
      dif: 'R$ 0,00',
      msg: 'Verificar crédito de Icms',
    }
  ]

}
