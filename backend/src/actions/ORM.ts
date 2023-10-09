import { QueryError, ResultSetHeader, RowDataPacket } from "mysql2";
import { v4 as uuidv4 } from "uuid";
import EventEmitter from "events";

import connection from "../config/db";

interface IActions<T> {
  spawn(model: Omit<T, "__id">): Promise<T>;
  findAll(options?: ModelActionProperties<T>): Promise<T[]>;
  find(options?: ModelActionProperties<T & { __id: string }>): Promise<T | undefined>;
  update(model: Optional<Omit<T, "__id">> & { __id: string }): Promise<number>;
  delete(UserId: number): Promise<number>;
  deleteAll(): Promise<number>;
  // static query(q: string): Promise<RowDataPacket>;
}

class Actions<T> extends EventEmitter implements IActions<T> {

  tableName: string | undefined;

  constructor(options?: { tableName: string }){
    super();

    this.tableName = options?.tableName;

  }

  spawn(model: Omit<T, "__id">): Promise<T> {

    console.log("Print this here...");

    
    return new Promise((resolve, reject) => {

      const placeholders = Array.from({length: Object.keys(model).length}).fill('?').join(' ,');

      // The first placeholder is for the __id which comes from us
      connection.query<ResultSetHeader>(
        `INSERT INTO ${this.tableName} (__id, ${Object.keys(model).join(', ')}) VALUES(?, ${placeholders})`,
        [uuidv4(), ...Object.values(model)],
        (err, res) => {
          if (err) reject(err);
          else resolve(res as T)
            // this.find({ where: {} })
            //   .then((user) => resolve(user!))
            //   .catch(reject);
        }

      );
    });
  }

  findAll(options?: ModelActionProperties<T>): Promise<T[]> {

    let sql = `SELECT * FROM ${this.tableName}`;
    sql+= options?.where ? " WHERE "+Object.keys(options?.where || {}).map(key => key+"="+"?").join(", ") : "";

    return new Promise((resolve, reject) => {
      connection.query<RowDataPacket[]>(
        sql,
        [...Object.values(options?.where || {})],
        (err: QueryError | null, res) => {
          if (err) reject(err);
          else {
            resolve(res as T[]);
          };
        }
      );
    });
  }

  find(options?: ModelActionProperties<T & {__id: string}>): Promise<T> {
    
    return new Promise((resolve, reject) => {
      connection.query<RowDataPacket[]>(
        `SELECT * FROM ${this.tableName} WHERE`+Object.keys(options?.where || {}).map(key => key+"="+"?").join(", "),
        [...Object.values(options?.where || {})],
        (err: QueryError | null, res) => {
          if (err) reject(err);
          else resolve(res?.[0] as T);
        }
      );
    });
  }

  update(model: Optional<Omit<T, "__id">> & { __id: string }): Promise<number> {
    
    const {__id, ...updateData} = model;
    const updateKeys = Object.keys(updateData).map(key => `${key}=?`).join(', ');
    const updateValues = Object.values(updateData);

    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        `UPDATE ${this.tableName} SET ${updateKeys} WHERE __id = ?`,
        [...updateValues, __id],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  delete(UserId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(
        `DELETE FROM ${this.tableName} WHERE id = ?`,
        [UserId],
        (err, res) => {
          if (err) reject(err);
          else resolve(res.affectedRows);
        }
      );
    });
  }

  deleteAll(): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<ResultSetHeader>(`DELETE FROM ${this.tableName}`, (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      });
    });
  }

  static query(q: string): Promise<RowDataPacket> {
    return new Promise((resolve, reject) => {
      connection.query<RowDataPacket[]>(
        q,
        (err, res) => {
          if (err) reject(err);
          else resolve(res[0]);
        }
      );
    });
  }
}

export default Actions;