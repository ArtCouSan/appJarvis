import { Injectable } from '@angular/core';

import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class AguaProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }

  public updateAgua(agua: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update saude_agua set agua = ? where id = 1';
        let data = [agua];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public updateMeta(meta: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update saude_agua set meta = ? where id = 1';
        let data = [meta];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }


  public getAll() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
 
      return db.executeSql('select * from saude_agua', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let lista: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var category = data.rows.item(i);
              lista.push(category);
            }
            return lista;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

}
