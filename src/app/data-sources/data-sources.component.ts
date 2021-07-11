import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface dataSourceModel {
  id: string;
  source: string;
  name: string;
  created_date: Date;
}

@Component({
  selector: 'app-data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css'],
})
export class DataSourcesComponent implements OnInit {
  products: dataSourceModel[] = [];
  addNewDataSourceModal = false;
  dataSourceFileAccept!: string;
  // temp
  cities = [
    {
      name: 'JSON File',
      data: 'json',
      icon: 'pi-file',
    },
    {
      name: 'Excel',
      data: 'excel',
      icon: 'pi-file-excel',
    },
    {
      name: 'Google Analytics',
      data: 'google_analytics',
      icon: 'pi-google',
    },
    {
      name: 'Facebook Analytics',
      data: 'facebook_analytics',
      icon: 'pi-facebook',
    },
    {
      name: 'Youtube Analytics',
      data: 'youtube_analytics',
      icon: 'pi-youtube',
    },
  ];
  dataSourceForm: FormGroup;
  dSUploadFiles: any;
  dataSourceFileName = 'Choose File ...'

  constructor() {
    this.dataSourceForm = new FormGroup({
      dataSourceOption: new FormControl('vcxbcvbxc'),
    });
  }

  ngOnInit(): void {
    this.products = new Array(3).fill({
      id: '1000',
      source: 'Google',
      name: 'Temp source 12',
      created_date: '09-07-2021',
    });
    // REACTIVE FORM
    this.dataSourceForm = new FormGroup({
      dataSourceOption: new FormControl('', [Validators.required]),
      uploadDSFile: new FormControl(null),
    });
  }
  showBasicDialog(): void {
    this.addNewDataSourceModal = true;
  }

  onDataSourceFormSubmit(): void {
    if (this.dataSourceForm.invalid) return;

    console.log(this.dataSourceForm);
    console.log(this.dataSourceForm.value);
    console.log(this.dSUploadFiles);
  }
  pdropdown1(e: string) {
    this.dataSourceForm.patchValue({
      dataSourceOption: e,
    });

    // this.dataSourceForm.reset({
    //   uploadDSFile: null
    // });
    this.dataSourceForm.controls['uploadDSFile'].reset()
    this.dataSourceFileName = 'Choose File ...'
    if (e === 'json') {
      this.dataSourceFileAccept = '.json'
    } else if (e === 'excel') {
      this.dataSourceFileAccept = '.xls,.csv'
    } else if (e === 'google_analytics') {
    } else if (e === 'facebook_analytics') {
    } else if (e === 'youtube_analytics') {
    }
  }

  onUpload(e: any) {
    console.log(e);
    
    return
    for(let file of e.files) {
      this.dSUploadFiles.push(file);
    }
  }

  onUploadedJSONFiles(e: any) {
    const files = e.target.files[0];
    console.log( files );
    this.dataSourceFileName = files.name;
    this.dSUploadFiles = files;
  }
}
