import { conexionDB } from "../config/db";
import APIConsultas from "../services/consultas";

const ctrlProducto = {
  PRODUCTO_ADD: async (req, res, resolve) => {
    const sqlIns = `INSERT INTO articulo(
            idcateg,
            idsubc,
            idmarca,
            codart,
            modelo,
            slug,
            precioventa,
            preciocompra,
            moneda,
            feccarga,
            descripcion,
            descripBreve,
            visible,
            typeCatalog
          ) VALUES(
            '${req.body.idcateg}',
            '${req.body.idsubc || 1}',
            '${req.body.idmarca || 1}',
            '${req.body.codart}',
            '${req.body.modelo}',
            '${req.body.slug}',
            '${req.body.precioventa}',
            '${req.body.preciocompra}',
            '${req.body.moneda}',
            NOW(),
            '${req.body.descripcion}',
            '${req.body.descripBreve}',
            '1',
            '0'
          )`;
    try {
      const [result] = await conexionDB.query(sqlIns);
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
      return resolve();
    }
  },
  PRODUCTO_UPDATE: async (req, res, resolve) => {
    const idart = req.query.id;
    const campo = req.body.campo;
    const valor = req.body.valor;
    const slug = req.body.slug;

    const sql = `UPDATE articulo SET ${campo} = '${valor}', slug = '${slug}'  WHERE idart = ${idart}`;
    APPLY_GET(sql, res, resolve);
  },
  PRODUCTO_DELETE: async (req, res, resolve) => {
    const idart = req.body.idart;
    const sqlu = `DELETE FROM articulo WHERE idart = ${idart}`;

    try {
      await conexionDB.query(sqlu);
      const path = `${process.env.NEXT_PUBLIC_URL_IMG_GET}${idart}`;
      const re1 = await APIConsultas.color.DEL_IMAGE_PHP_TODO(path);
      if (re1.data.success) {
        res.write(JSON.stringify(true));
        return res.end();
      }

      return;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  PRODUCTO_GET_LIST: async (req, res, resolve) => {
    const P_offset = req.query.offset;
    const P_limite = req.query.limit;
    const P_idmarca = req.query.idmarca;
    const P_modelo = req.query.modelo;
    const P_anio = req.query.anio;
    const P_tipoUsado = req.query.tipoUsado;
    const P_min = req.query.min;
    const P_max = req.query.max;

    const P_visible =
      req.query.visible !== "-1" ? `(${req.query.visible})` : "(0,1)";
    let sql_idmarca = "";
    let sql_modelo = "";
    let sql_anio = "";
    let sql_tipoUsado = "";
    let sql_rango = "";
    if (P_idmarca !== "0") {
      sql_idmarca = `AND m.idmarca = ${P_idmarca}`;
    }
    if (P_modelo !== "0") {
      sql_modelo = `AND a.modelo LIKE '%${P_modelo}%'`;
    }
    if (P_anio !== "0") {
      sql_anio = `AND a.fecha = ${P_anio}`;
    }
    if (P_tipoUsado !== "0") {
      sql_tipoUsado = `AND c.nombre = '${P_tipoUsado}'`;
    }
    if (P_min !== "0" || P_max !== "0") {
      sql_rango = `AND (a.precioventa >= ${P_min} AND a.precioventa <= ${P_max})`;
    }

    const sql = `
        SELECT
        a.*,
        a.idart as id,
        1 as cantidad,
        1 as cantidadForm,
        c.nombre as 'categ',
        concat(
            'https://source.unsplash.com/random/?shoes?',
            a.idart
            ) as 'image',
            m.nombre as 'marca',
            (
                SELECT
                CONCAT(
                '[',
                GROUP_CONCAT(
                    JSON_OBJECT(
                    'idcolor',
                                co.idcolor,
                                'code',
                                co.code,
                                'nomcolor',
                                co.nomcolor,
                                'idart',
                                co.idart,
                                'visible',
                                co.visible,
                                'arrmedidas',
                                (
                                SELECT
                                CONCAT(
                                    '[',
                                    GROUP_CONCAT(
                                    JSON_OBJECT(
                                                    'idmedida',
                                                    me.idmedida,
                                                    'valor',
                                                    me.valor,
                                                    'idart',
                                                    co.idart,
                                                    'idcolor',
                                                    co.idcolor
                                                    )
                                                    ),
                                            ']'
                                        )
                                    FROM
                                    medida me
                                    JOIN medidaxcolor mc ON me.idmedida = mc.idmedida
                                    WHERE
                                    mc.idcolor = co.idcolor
                                )
                            )
                            ),
                            ']'
                    )
                FROM
                    colorxart co
                WHERE
                    co.idart = a.idart
                    ) AS arrcolor
        FROM
        articulo a 
        JOIN categoria c ON a.idcateg = c.idcateg
        LEFT JOIN subcateg sc ON a.idsubc = sc.idsubc
        LEFT JOIN marca m ON a.idmarca = m.idmarca
        WHERE a.idcateg = c.idcateg 
        AND a.visible IN ${P_visible} 
        AND a.eliminado = 0
        ${sql_idmarca} ${sql_modelo} ${sql_anio} ${sql_tipoUsado} ${sql_rango}
        LIMIT
        ${P_offset}, ${P_limite};
  `;
    APPLY_GET(sql, res, resolve);
  },
  PRODUCTO_GET_XSLUG: async (req, res, resolve) => {
    const sql = `CALL SP_articulo_get_xslug(${req.query.slug})`;
    try {
      const [result] = await conexionDB.query(sql);
      const dataprod = result[0][0];
      if (!dataprod) {
        res.write(JSON.stringify([]));
        return res.end();
      }
      if (dataprod.arrcolor) {
        dataprod.arrcolor = JSON.parse(dataprod.arrcolor);
        for (const color of dataprod.arrcolor) {
          if (color.arrmedidas) {
            color.arrmedidas = JSON.parse(color.arrmedidas);
            color.medida = color.arrmedidas.map((e) => e.valor).join(", ");
          }
        }
      } else {
        dataprod.arrcolor = [];
      }
      if (dataprod.arrmedidasIndiv) {
        dataprod.arrmedidasIndiv = JSON.parse(dataprod.arrmedidasIndiv);
      } else {
        dataprod.arrmedidasIndiv = [];
      }

      // switch (dataprod.typeCatalog) {
      //   case 0:
      //     dataprod.arrimagesIndiv = await APIConsultas.Images.SET_IMAGE(dataprod);
      //     break;
      //   case 1:
      //     dataprod = await APIConsultas.Images.SET_ARRCOLOR(dataprod);
      //     break;
      // }

      res.write(JSON.stringify(dataprod));
      return res.end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
      return resolve();
    }
  },
  PRODUCTO_GET_XID: async (req, res, resolve) => {
    const sql = `CALL SP_articulo_get_xid('${req.query.id}')`;
    try {
      const [result] = await conexionDB.query(sql);
      const dataprod = result[0][0];
      if (!dataprod) {
        res.write(JSON.stringify([]));
        return res.end();
      }
      if (dataprod.arrcolor) {
        dataprod.arrcolor = JSON.parse(dataprod.arrcolor);
        for (const color of dataprod.arrcolor) {
          if (color.arrmedidas) {
            color.arrmedidas = JSON.parse(color.arrmedidas);
            color.medida = color.arrmedidas.map((e) => e.valor).join(", ");
          }
        }
      } else {
        dataprod.arrcolor = [];
      }
      if (dataprod.arrmedidasIndiv) {
        dataprod.arrmedidasIndiv = JSON.parse(dataprod.arrmedidasIndiv);
      } else {
        dataprod.arrmedidasIndiv = [];
      }

      // switch (dataprod.typeCatalog) {
      //   case 0:
      //     dataprod.arrimagesIndiv = await APIConsultas.Images.SET_IMAGE(dataprod);
      //     break;
      //   case 1:
      //     dataprod = await APIConsultas.Images.SET_ARRCOLOR(dataprod);
      //     break;
      // }

      res.write(JSON.stringify(dataprod));
      return res.end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
      return resolve();
    }
  },
  PRODUCTO_X_MARCA: async (req, res, resolve) => {
    const P_idmarca = req.query.idmarca;
    let sql_idmarca = "";
    if (P_idmarca !== "0") {
      sql_idmarca = `WHERE a.idmarca = '${P_idmarca}'`;
    }
    const sql = `SELECT a.* from articulo a ${sql_idmarca}  `;
    APPLY_GET(sql, res, resolve);
  },
  PRODUCTO_SEARCH: async (req, res, resolve) => {
    const sql = `CALL SP_articulo_search('${req.query.value}')`;
    APPLY_GET(sql, res, resolve);
  },
  MEDIDAXPROD_ADD: async (req, res, resolve) => {
    const medidas = req.body;
    const resp = await ctrlProducto.MEDIDAXPROD_DELETE(
      medidas[0].idart,
      res,
      resolve
    );
    if (!resp) return;
    try {
      const sqlmed = `INSERT INTO medidaxart (create_time, idmedida, idart) VALUES ${medidas.map(
        (item) => `(NOW(), '${item.idmedida}', '${item.idart}')`
      )};`;
      const [result] = await conexionDB.query(sqlmed);
      res.write(JSON.stringify(result));
      res.end();
      return;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  MEDIDAXPROD_DELETE: async (idart, res, resolve) => {
    const delquery = `DELETE FROM medidaxart WHERE idart = ${idart};`;
    try {
      await conexionDB.query(delquery);
      return true;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  MEDIDAXPROD_GET: async (req, res, resolve) => {
    const sql = `CALL SP_medidaxprod_get('${req.query.id}')`;
    APPLY_GET(sql, res, resolve);
  },
  MEDIDA_GET_TODOLIST: async (_, res, resolve) => {
    const sql = `CALL SP_medida_get_todo()`;
    APPLY_GET(sql, res, resolve);
  },
  MEDIDAXCOLOR_ADD: async (req, res, resolve) => {
    const medidas = req.body;
    const resp = await ctrlProducto.MEDIDAXCOLOR_DELETE(
      medidas[0].idcolor,
      res,
      resolve
    );
    if (!resp) return;
    try {
      const sqlmed = `INSERT INTO medidaxcolor (create_time, idmedida, idcolor) VALUES ${medidas.map(
        (item) => `(NOW(), '${item.idmedida}', '${item.idcolor}')`
      )};`;
      const [result] = await conexionDB.query(sqlmed);
      res.write(JSON.stringify(result));
      res.end();
      return;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  MEDIDAXCOLOR_UPDATE: async (req, res, resolve) => {
    const { idmedxcol, visible } = req.body;
    const sql = `UPDATE medidaxcolor SET visible = '${visible}' WHERE idmedxcol = ${idmedxcol}`;
    APPLY_GET(sql, res, resolve);
  },
  MEDIDAXCOLOR_DELETE: async (idcolor, res, resolve) => {
    const delquery = `DELETE FROM medidaxcolor WHERE idcolor = ${idcolor};`;
    try {
      await conexionDB.query(delquery);
      return true;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  COLORXPROD_ADD: async (req, res, resolve) => {
    const body = req.body;
    const sql = `INSERT INTO colorxart (create_time, code, nomcolor, idart) 
    VALUES (NOW(), '${body.code}', '${body.nomcolor}', '${body.idart}')`;
    APPLY_GET(sql, res, resolve);
  },
  COLOR_UPDATE: async (req, res, resolve) => {
    const idcolor = req.query.idcolor;
    const campo = req.body.campo;
    const valor = req.body.valor;
    const sql = `UPDATE colorxart SET ${campo} = '${valor}' WHERE idcolor = ${idcolor}`;
    APPLY_GET(sql, res, resolve);
  },
  COLORXPROD_DELETE: async (req, res, resolve) => {
    const color = req.body;
    const sqlu = `DELETE FROM colorxart WHERE idcolor = ${color.idcolor}`;

    try {
      await conexionDB.query(sqlu);
      if (color.arrimages?.length > 0) {
        const path = `${process.env.NEXT_PUBLIC_URL_IMG_GET}${color.idart}/idcolor-${color.idcolor}`;
        const re1 = await APIConsultas.color.DEL_IMAGE_PHP_TODO(path);
        if (re1.data.success) {
          res.write(JSON.stringify(true));
          return res.end();
        }
        res.write(JSON.stringify(false));
        return res.end();
      }

      return;
    } catch (error) {
      res.status(500).end();
      return resolve();
    }
  },
  VALOR_MAX_MIN: async (_, res, resolve) => {
    const sql = `CALL SP_get_valorMaxMin()`;
    APPLY_GET(sql, res, resolve);
  },
};

const APPLY_GET = async (sql, res, resolve) => {
  try {
    const [result] = await conexionDB.query(sql);
    res.write(JSON.stringify(result));
    res.end();
    return;
  } catch (error) {
    console.error(error);
    res.status(500).end();
    return resolve();
  }
};
export default ctrlProducto;
