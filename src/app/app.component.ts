import { Component } from '@angular/core';
import { ColumnMode, columnsByPin } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  UdeTrabajo = "";
  emp = "";
  ub = "";

  rows = [
    {
      name: 'Claudine Neal',
      ubicacion: 'activo',
      gender: 'female',
      empresa: '123123412',
      company: 'Sealoud',
      udt: '100'
    },
    {
      name: 'Beryl Rice',
      ubicacion: 'activo',
      gender: 'male',
      empresa: '987513516',
      company: 'Velity',
      udt: '103'
    },
    {
      name: 'Beryl Rice',
      ubicacion: 'activo',
      gender: 'female',
      empresa: '123123412',
      company: 'Velity',
      udt: '103'
    }
  ];

  columns = [{ name: 'Name' },{ name: 'ubicacion' }, { name: 'Gender' },{ name: 'Empresa' }, { name: 'Company' }, { name: 'udt' }];

  allColumns = [{ name: 'Name' },{ name: 'ubicacion' }, { name: 'Gender' },{ name: 'Empresa' }, { name: 'Company' }, { name: 'udt' }];

  valores = Object.values(this.columns);


  ColumnMode = ColumnMode;

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return (
      this.columns.find(c => {
        return c.name === col.name;
      }) !== undefined
    );
  }

  evento(){
    console.log(this.valores);
    
    if(this.UdeTrabajo !== ""){
      this.columns = this.columns.filter(c => {
        return c.name !== "udt";
      });
    }else{
      let col = { name: 'udt' };
      this.columns = [...this.columns, col];
      // let i = this.valores.findIndex(e => e.name == "udt");   te quedaste aqui
      // let nw;
      // nw = this.columns.map(x => {
      //   r
      // });
    }
    if(this.emp !== ""){
      this.columns = this.columns.filter(c => {
        return c.name !== "Empresa";
      });
    }else{
      let col = { name: 'Empresa' };
      this.columns = [...this.columns, col];
    }
  }


  
  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ];
  // columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
