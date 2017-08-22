# Component Hierarchy

#### Root
- Root Component

#### Auth Form Container
- AuthForm
  - Sign up
  - Login
  - Demo Login

#### Home Container
- side navbar
- top navbar (for rich text editing)
- ###### Notes Index Container
  - Note Detail Component
- ###### Edit Note Form Component
  - textbox pre-filled with the current note's details

#### Notebooks Index Container
- NotebookIndex (modal)
  - ###### Notebook Item Detail Component

#### Tags Index Container
- TagIndex (modal)
  - ###### Tag Detail Component

#### New Note Component
- Allows user to add a new note to an existing notebook

#### Search Note Component
- Allows the user to search for a note and
- (bonus)


# Frontend Routes
| Path                     | Component                 |
|-----------------------   |-----------------------    |
| /                        | AuthForm Container        |
| /login                   | AuthForm Container        |
| /signup                  | AuthForm Container        |
| /home                    | Home Container            |
| /home/note/:noteId       | Note Index Container      |
| /home/edit/noteId        | Edit Note Container       |
| /notebook/:notebookId    | Notebook Item modal       |
| /notebook/search         | Notebook Search Field     |
| /tags                    | Tag Index modal           |
| /tags/search             | Tag Search Field          |
| /new-note/:noteId        | New Note Container        |
| /search                  | Search Container          |
