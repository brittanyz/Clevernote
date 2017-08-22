# API Endpoints

### HTML API
- GET /  (loads Root React Element)

### JSON API
- #### Users
  - POST /api/users  (new user)
- #### Session
  - POST /api/session  (new session login)
  - DELETE /api/session  (logout)
- #### Notebooks
  - GET /api/notebooks  (notebook index)
  - GET /api/notebooks/:notebookId (notebook show page)
  - GET /api/notebooks  (search by notebook title)
  - POST /api/notebooks  (create new notebook)
  - PATCH /api/notebooks/:notebookId  (edit notebook)
  - DELETE /api/notebooks/:notebookId
- #### Notes
  - GET /api/notes  (notes index)
  - GET /api/notes/:noteId  (note show page)
  - POST /api/notes  (new note)
  - PATCH /api/notes/:noteId  (edit note)
  - DELETE /api/notes/:noteId  
- #### Tags
  - GET /api/tags  (tags index page)
  - GET /api/tags/:tagId  (search for a tag by tagname)
  - POST /api/tags  (new tag)
  - DELETE /api/tags/:tagId  
- #### Search
  - GET /api/search  (search for note)
  - *bonus*
