## Users  
| Name            | Data Type     | Details               |
|-----------------|---------------|-----------------------|
| id              | integer       | not null              |
| username        | string        | not null, indexed     |
| password_digest | string        | not null              |
| session_token   | string        | not null              |

## Notebook
| Name            | Data Type     | Details               |
|-----------------|---------------|-----------------------|
| id              | integer       | not null              |
| name            | string        | not null              |
| author_id       | integer       | not null. indexed     |

## Notes
| Name            | Data Type     | Details               |
|-----------------|---------------|-----------------------|
| id              | integer       | not null              |
| title           | string        | not null              |
| body            | text          | not null              |
| notebook_id     | integer       | not null              |

## Tags
| Name            | Data Type     | Details               |
|-----------------|---------------|-----------------------|
| id              | integer       | not null              |
| tag_name        | string        | not null, unique      |
| user_id         | integer       | not null              |

## Taggings
| Name            | Data Type     | Details               |
|-----------------|---------------|-----------------------|
| tag_id          | integer       | not null, unique      |
| note_id         | integer       | not null              |
