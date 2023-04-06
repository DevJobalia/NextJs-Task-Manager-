migrate((db) => {
  const collection = new Collection({
    "id": "7hrytey7zz0lfmo",
    "created": "2023-04-06 04:04:13.654Z",
    "updated": "2023-04-06 04:04:13.654Z",
    "name": "notes_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gddql3j3",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "y3ptoflu",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7hrytey7zz0lfmo");

  return dao.deleteCollection(collection);
})
