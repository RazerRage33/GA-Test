import { Component, OnInit } from '@angular/core';
import { MouldParametersRecord } from 'src/app/interface/mould-parameters-record';
import { MouldParametersRecordTranslation } from 'src/app/interface/mould-parameters-record-translation';
import { HttpClient } from '@angular/common/http';
import * as BothTranslationData from 'src/assets/translations/mould-parameters-record/both.json';
import * as EnTranslationData from 'src/assets/translations/mould-parameters-record/en.json';
import * as CnTranslationData from 'src/assets/translations/mould-parameters-record/cn.json';



interface Languages {
  label:string;
  value: string;
}

@Component({
  selector: 'app-moulding-parameters-record',
  templateUrl: './moulding-parameters-record.component.html',
  styleUrls: ['./moulding-parameters-record.component.css']
})
export class MouldingParametersRecordComponent implements OnInit {

  mouldParametersRecord: MouldParametersRecord={
    customer:'John',
    date:'2019-06-29',
    partName:'Name',
    shotWeight:'50',
    partNumber:'1111',
    partWeight:'19',
    numberOfCavity:'4',
    matertialGrade:'grade',
    mcNumber:'123',
    tonnage:'1',
    mouldNumber:'1234',
    controlNumber:'P1-0000-MP/00',
  };
  both:MouldParametersRecordTranslation;
  english:MouldParametersRecordTranslation;
  chinese:MouldParametersRecordTranslation;
  
  languages:Languages[]=[
    {label:"Both",value:"both"},
    {label:"English",value:"english"},
    {label:"Chinese",value:"chinese"},
  ]

  selectedLanguage:string;
  studentData:any;
  url: string = '/assets/students.json';
  constructor() { }

  

  ngOnInit(): void {
    this.selectedLanguage="both"
    this.both=BothTranslationData;
    this.english=EnTranslationData;
    this.chinese=CnTranslationData;

  }

}
