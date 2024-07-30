import { Component } from '@angular/core';

@Component({
  selector: 'app-auditor-icms-saidas',
  templateUrl: './auditor-icms-saidas.component.html',
  styleUrls: ['./auditor-icms-saidas.component.scss']
})
export class AuditorIcmsSaidasComponent {

notas = [
    {
        cfop: 5101,
        vlCont: 'R$ 29.750,85',
        base: 'R$ 29.669,96',
        icms: 'R$ 5.340,59',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 80,89',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 5102,
        vlCont: 'R$ 29.995,98',
        base: 'R$ 29.051,81',
        icms: 'R$ 5.229,33',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 944,17',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 5122,
        vlCont: 'R$ 857,63',
        base: 'R$ 857,63',
        icms: 'R$ 154,37',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 27,00',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: -'R$ 27,00	',
        msg: 'Existe diferença no cálculo'
    },
    {
        cfop: 5124,
        vlCont: 'R$ 3.277,95',
        base: 'R$ 0,00',
        icms: 'R$ 0,00',
        isentos: 'R$ 0,00',
        outros: 'R$ 3.277,95',
        ipi: 'R$ 0,00',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 5902,
        vlCont: 'R$ 17.823,09',
        base: 'R$ 0,00',
        icms: 'R$ 0,00',
        isentos: 'R$ 17.823,09',
        outros: 'R$ 0,00',
        ipi: 'R$ 0,00',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 5911,
        vlCont: 'R$ 5,79',
        base: 'R$ 5,79',
        icms: 'R$ 1,04',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 0,00	',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: 'Verificar débito de ICMS'
    },
    {
        cfop: 6101,
        vlCont: 'R$ 121.686,65',
        base: 'R$ 120.450,76',
        icms: 'R$ 4.818,02',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 1.235,89	',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 6102,
        vlCont: 'R$ 63.161,82	',
        base: 'R$ 61.365,86',
        icms: 'R$ 2.732,17',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 1.795,96',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: null
    },
    {
        cfop: 6107,
        vlCont: 'R$ 2.657,37',
        base: 'R$ 2.622,82',
        icms: 'R$ 104,91',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 73,27',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: -'R$ 38,72',
        msg: 'Existe diferença no cálculo'
    },
    {
        cfop: 6911,
        vlCont: 'R$ 16,93',
        base: 'R$ 16,93',
        icms: 'R$ 1,05',
        isentos: 'R$ 0,00',
        outros: 'R$ 0,00',
        ipi: 'R$ 0,00',
        ipiInc: 'R$ 0,00',
        st: 'R$ 0,00',
        fcp: 'R$ 0,00',
        dif: 'R$ 0,00',
        msg: 'Verificar débito de ICMS'
    }
]
  
}
