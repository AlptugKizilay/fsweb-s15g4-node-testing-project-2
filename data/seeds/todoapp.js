/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const defGorevler = [
  {Adi:"Sağlıklı Beslen",Aciklama:"Sağlıklı Ol"},
  {Adi:"Sigarayı Azalt",Aciklama:"Az duman"}
]
const defTasklar = [
  {Adi:"Spora Git",Aciklama:"En az 1 saat kardio yap",Tarih:new Date().toLocaleString(),GorevId:1},
  {Adi:"Sağlıklı Beslen",Aciklama:"Beslenmene dikkat et",Tarih:new Date().toLocaleString(),GorevId:1},
]
exports.seed = async function(knex) {
  await knex('Gorevler').truncate()
  await knex('Gorevler').insert(defGorevler);

  await knex("Tasklar").truncate();
  await knex("Tasklar").insert(defTasklar);
};
