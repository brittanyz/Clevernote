```{
  entities: {
    current_user: {
      1. {
        id: 1
        username: brittanyz
        email: brittany.zellman@email.mail
        notebook_ids: [1, 2, 3]
        }
      }
    notebooks: {
      1. {
        id: 1
        title: AppAcademy
        notes_ids: [1, 2]
        }
      2. {
        id: 2
        title: Todos
        notes_ids: [1, 2]
       }
    }
    notes: {
      1. {
        id: 1
        notebook_id: 1
        title: "Debugging Tips"
        body: "Be surgical!"
        tag_ids: [1, 2, 3]
      }
      2. {
        id: 2
        notebook_id: 2
        title: "Sunday"
        body: "Catch up on sleep... ! just kidding !"
        tag_ids: [2]
      }
    }
    tags: {
      1.{
        tagname: "politics"
        note_ids: [7, 9, 14]
      }
      2.{
        tagname: "financial"
        note_ids: [2, 8, 11, 43]
      }
      3.{
        tagname: "job applications"
        note_ids: [3, 4, 5, 6, 10]
      }
    }
    errors: {
      login: ["Invalid Credentials"]
      signup: ["Username/Password can't be blank"]
      forms: ["Body can't be blank", "Title can't be blank", "Tag name can't be blank"]
    }
    ui: {
      loading: true/false
    }
  }
}```
